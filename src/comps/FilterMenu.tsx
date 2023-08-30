import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import DetailsIcon from "@mui/icons-material/Details";
import { useOpenCv } from "opencv-react";
import { Box, Switch, Button, Slider } from "@mui/material";
import ssim from "ssim.js";

const initSharpMedian = 9;
const initSharpKernelSize = 3;
const initGammaVal = 1.0;
const initBlackVal = 1.0;
const initWhiteVal = 1.0;
const initIsConvOn = false;
const initIsHistEqualOn = false;
const initClaheOn = false;
const initGaussianBlurOn = false;
const initClaheLimit = 40;
const initClaheKernelSize = 8;
const initBlurKernelSize = 3;
const initBlurWeight = 1.0;
const initIsNoiseOn = false;
const initNoiseStdDev = 20.0;
const canvasInputId = "canvas-input";
const canvasOutputId = "canvas-output";

const calculatePSNR = (
  cv: any,
  image0: any,
  image1: any,
  maxVal: number = 255
) => {
  image0.convertTo(image0, cv.CV_32F);
  image1.convertTo(image1, cv.CV_32F);
  const tmp = new cv.Mat();
  cv.subtract(image0, image1, tmp);
  cv.multiply(tmp, tmp, tmp);
  const mse = Math.max(Number.EPSILON, cv.mean(tmp)[0]);
  const psnrVal = 20 * Math.log10(maxVal / Math.sqrt(mse));
  return psnrVal;
};

const calculateSSIM = () => {
  const canvas0 = document.getElementById(canvasInputId);
  const canvas1 = document.getElementById(canvasOutputId);
  if (
    canvas0 instanceof HTMLCanvasElement &&
    canvas1 instanceof HTMLCanvasElement
  ) {
    const ctx0 = canvas0.getContext("2d");
    const ctx1 = canvas1.getContext("2d");
    const imageData0 = ctx0?.getImageData(0, 0, canvas0.width, canvas0.height);
    const imageData1 = ctx1?.getImageData(0, 0, canvas1.width, canvas1.height);
    const { mssim } =
      imageData0 && imageData1 ? ssim(imageData0, imageData1) : { mssim: NaN };
    return mssim;
  } else {
    return NaN;
  }
};

export default function FilterMenu() {
  const openCvData = useOpenCv();
  const [sharpMedian, setSharpMedian] = useState<number>(initSharpMedian);
  const [sharpKernelSize, setSharpKernelSize] =
    useState<number>(initSharpKernelSize);
  const [gammaVal, setGammaVal] = useState<number>(initGammaVal);
  const [blackVal, setBlackVal] = useState<number>(initBlackVal);
  const [whiteVal, setWhiteVal] = useState<number>(initWhiteVal);
  const [isConvOn, setIsConvOn] = useState<boolean>(initIsConvOn);
  const [isHistEqualOn, setIsHistEqualOn] =
    useState<boolean>(initIsHistEqualOn);
  const [isClaheOn, setIsClaheOn] = useState<boolean>(initClaheOn);
  const [isGaussianBlurOn, setIsGaussianBlurOn] =
    useState<boolean>(initGaussianBlurOn);
  const [claheLimit, setCalheLimit] = useState<number>(initClaheLimit);
  const [claheKernelSize, setClaheKernelSize] =
    useState<number>(initClaheKernelSize);
  const [blurKernelSize, setBlurKernelSize] =
    useState<number>(initBlurKernelSize);
  const [blurWeight, setBlurWeight] = useState<number>(initBlurWeight);
  const [isNoiseOn, setIsNoiseOn] = useState<boolean>(initIsNoiseOn);
  const [noiseStdDev, setNoiseStdDev] = useState<number>(initNoiseStdDev);
  const [psnrScore, setPsnrScore] = useState<number>(0);
  const [ssimScore, setSsimScore] = useState<number>(0);

  const applyGammaCorrection = (cv: any, image: any, factor: number) => {
    const dst = image.clone();
    image.convertTo(dst, cv.CV_32F);
    cv.pow(dst, 1.0 / factor, dst);
    dst.convertTo(dst, cv.CV_8U);
    return dst;
  };

  const applyBlackCompression = (cv: any, image: any, factor: number) => {
    const dst = image.clone();
    const scalar = new cv.Scalar(1);
    const ones = new cv.Mat(dst.rows, dst.cols, cv.CV_32FC1, scalar);
    image.convertTo(dst, cv.CV_32F);
    cv.multiply(dst, ones, dst, factor);
    dst.convertTo(dst, cv.CV_8U);
    ones.delete();
    return dst;
  };

  const applyWhiteCompression = (cv: any, image: any, factor: number) => {
    const dst = image.clone();
    const maxScalar = new cv.Scalar(255);
    const oneScalar = new cv.Scalar(1);
    const alphaScalar = new cv.Scalar(0);
    const maxes = new cv.Mat(dst.rows, dst.cols, cv.CV_8UC1, maxScalar);
    const ones = new cv.Mat(dst.rows, dst.cols, cv.CV_32FC1, oneScalar);
    const alphas = new cv.Mat(dst.rows, dst.cols, cv.CV_8UC1, alphaScalar);
    const dst2 = image.clone();
    cv.subtract(maxes, dst2, dst2);
    cv.add(dst2, alphas, dst2);
    dst2.convertTo(dst2, cv.CV_32F);
    cv.multiply(dst2, ones, dst2, 1 - factor);
    dst2.convertTo(dst2, cv.CV_8U);
    cv.add(dst, dst2, dst);
    maxes.delete();
    ones.delete();
    alphas.delete();
    dst2.delete();
    return dst;
  };

  const applyFilter2D = (
    cv: any,
    image: any,
    medianVal: number = initSharpMedian,
    kernelSize: number = initSharpKernelSize
  ) => {
    if (kernelSize % 2 === 1) {
      const dst = new cv.Mat();
      const othVal = (1 - medianVal) / (kernelSize * kernelSize - 1);
      const kernelArr = new Array(kernelSize * kernelSize).fill(othVal);
      const medianInx = (1 + kernelSize * kernelSize) / 2;
      kernelArr[medianInx] = medianVal;
      const kernel = cv.matFromArray(
        kernelSize,
        kernelSize,
        cv.CV_32FC1,
        kernelArr
      );
      const anchor = new cv.Point(-1, -1);
      cv.filter2D(image, dst, cv.CV_8U, kernel, anchor, 0, cv.BORDER_DEFAULT);
      return dst;
    } else {
      return image;
    }
  };

  const applyHistEqualization = (cv: any, image: any) => {
    const dst = image.clone();
    cv.equalizeHist(dst, dst);
    return dst;
  };

  const applyClahe = (
    cv: any,
    image: any,
    tileGridSize: number = initClaheKernelSize,
    limit: number = initClaheLimit
  ) => {
    const equalDst = new cv.Mat();
    const dst = new cv.Mat();
    cv.equalizeHist(image, equalDst);
    const clahe = new cv.CLAHE(limit, new cv.Size(tileGridSize, tileGridSize));
    clahe.apply(image, dst);
    equalDst.delete();
    clahe.delete();
    return dst;
  };

  const applyGaussianBlur = (
    cv: any,
    image: any,
    kernelSize: number = initBlurKernelSize,
    blurWeight: number = initBlurWeight
  ) => {
    const dst = new cv.Mat();
    const ksize = new cv.Size(kernelSize, kernelSize);
    cv.GaussianBlur(image, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
    cv.addWeighted(image, 1 - blurWeight, dst, blurWeight, 0, dst);
    return dst;
  };

  const applyNoiseAdjustment = (
    cv: any,
    image: any,
    stdDev: number = initNoiseStdDev
  ) => {
    const noise = new cv.Mat(image.rows, image.cols, cv.CV_8U);
    const means = cv.matFromArray(1, 1, cv.CV_32F, [0]);
    const stdDevs = cv.matFromArray(1, 1, cv.CV_32F, [stdDev]);
    cv.randn(noise, means, stdDevs);
    const dst = new cv.Mat();
    cv.add(image, noise, dst);
    return dst;
  };

  async function applyFilter() {
    if (openCvData && openCvData.loaded) {
      const { cv } = openCvData;
      const canvasInput: HTMLCanvasElement | null =
        document.querySelector("#viewer canvas");
      if (canvasInput) {
        const image = await cv.imread("canvas-input", cv.IMREAD_GRAYSCALE);
        cv.cvtColor(image, image, cv.COLOR_RGBA2GRAY, 0);
        const gammaCorrected = await applyGammaCorrection(cv, image, gammaVal);
        const blackCompressed = await applyBlackCompression(
          cv,
          gammaCorrected,
          blackVal
        );
        const whiteCompressed = await applyWhiteCompression(
          cv,
          blackCompressed,
          whiteVal
        );
        const histEqulized = isHistEqualOn
          ? await applyHistEqualization(cv, whiteCompressed)
          : whiteCompressed;
        const noiseAdjusted = isNoiseOn
          ? await applyNoiseAdjustment(cv, histEqulized, noiseStdDev)
          : histEqulized;
        const clahe = isClaheOn
          ? await applyClahe(cv, noiseAdjusted, claheKernelSize, claheLimit)
          : noiseAdjusted;
        const gaussianBlurred = isGaussianBlurOn
          ? await applyGaussianBlur(cv, clahe, blurKernelSize, blurWeight)
          : clahe;
        const postSharpened = isConvOn
          ? await applyFilter2D(
              cv,
              gaussianBlurred,
              sharpMedian,
              sharpKernelSize
            )
          : gaussianBlurred;
        await cv.imshow("canvas-output", postSharpened);
        setPsnrScore(calculatePSNR(cv, image, postSharpened));
        setSsimScore(calculateSSIM());
      }
    }
  }

  useEffect(() => {
    applyFilter();
  }, [
    sharpMedian,
    sharpKernelSize,
    gammaVal,
    blackVal,
    whiteVal,
    isConvOn,
    isHistEqualOn,
    isClaheOn,
    isGaussianBlurOn,
    claheLimit,
    claheKernelSize,
    blurKernelSize,
    blurWeight,
    isNoiseOn,
    noiseStdDev,
  ]);

  function resetFilterOptions() {
    setIsConvOn(initIsConvOn);
    setIsHistEqualOn(initIsHistEqualOn);
    setIsClaheOn(initClaheOn);
    setSharpMedian(initSharpMedian);
    setSharpKernelSize(initSharpKernelSize);
    setGammaVal(initGammaVal);
    setBlackVal(initBlackVal);
    setWhiteVal(initWhiteVal);
    setIsGaussianBlurOn(initGaussianBlurOn);
    setClaheKernelSize(initClaheKernelSize);
    setCalheLimit(initClaheLimit);
    setBlurKernelSize(initBlurKernelSize);
    setBlurWeight(initBlurWeight);
    setIsNoiseOn(initIsNoiseOn);
    setNoiseStdDev(initNoiseStdDev);
  }
  return (
    <Grid container>
      <Grid item md={2}></Grid>
      <Grid item xs={12} md>
        <Stack>
          <Box>
            Gamma Corrected
            <Slider
              valueLabelDisplay="auto"
              step={0.01}
              min={0.5}
              max={1.5}
              value={typeof gammaVal === "number" ? gammaVal : 1.0}
              onChange={(event: Event, newValue: number | number[]) => {
                setGammaVal(newValue as number);
              }}
            ></Slider>
          </Box>
          <Box>
            Black Compression
            <Slider
              valueLabelDisplay="auto"
              step={0.01}
              min={0.5}
              max={1.5}
              value={typeof blackVal === "number" ? blackVal : 1.0}
              onChange={(event: Event, newValue: number | number[]) => {
                setBlackVal(newValue as number);
              }}
            ></Slider>
          </Box>
          <Box>
            White Compression
            <Slider
              valueLabelDisplay="auto"
              step={0.01}
              min={0.0}
              max={1.0}
              value={typeof whiteVal === "number" ? whiteVal : 1.0}
              onChange={(event: Event, newValue: number | number[]) => {
                setWhiteVal(newValue as number);
              }}
            ></Slider>
          </Box>
          <Box>
            Histogram Equalization
            <Switch
              checked={isHistEqualOn}
              onChange={(event) => {
                setIsHistEqualOn(event.target.checked);
              }}
            ></Switch>
          </Box>
          <Box>
            CLAHE
            <Switch
              checked={isClaheOn}
              onChange={(event) => {
                setIsClaheOn(event.target.checked);
              }}
            ></Switch>
            {isClaheOn && (
              <Stack>
                <Grid container>
                  <Grid item xs>
                    - Tile Grid Size
                  </Grid>
                  <Grid item xs>
                    <Slider
                      valueLabelDisplay="auto"
                      step={1}
                      min={1}
                      max={16}
                      value={
                        typeof claheKernelSize === "number"
                          ? claheKernelSize
                          : initClaheKernelSize
                      }
                      onChange={(event: Event, newValue: number | number[]) => {
                        setClaheKernelSize(newValue as number);
                      }}
                    ></Slider>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    - Clip Limit
                  </Grid>
                  <Grid item xs>
                    <Slider
                      valueLabelDisplay="auto"
                      step={1}
                      min={1}
                      max={255}
                      value={
                        typeof claheLimit === "number"
                          ? claheLimit
                          : initClaheLimit
                      }
                      onChange={(event: Event, newValue: number | number[]) => {
                        setCalheLimit(newValue as number);
                      }}
                    ></Slider>
                  </Grid>
                </Grid>
              </Stack>
            )}
          </Box>
          <Box>
            Noise Adjustment
            <Switch
              checked={isNoiseOn}
              onChange={(event) => {
                setIsNoiseOn(event.target.checked);
              }}
            ></Switch>
            {isNoiseOn && (
              <Stack>
                <Grid container>
                  <Grid item xs>
                    - Scale
                  </Grid>
                  <Grid item xs>
                    <Slider
                      valueLabelDisplay="auto"
                      step={1}
                      min={0}
                      max={100}
                      value={
                        typeof noiseStdDev === "number"
                          ? noiseStdDev
                          : initNoiseStdDev
                      }
                      onChange={(event: Event, newValue: number | number[]) => {
                        setNoiseStdDev(newValue as number);
                      }}
                    ></Slider>
                  </Grid>
                </Grid>
              </Stack>
            )}
          </Box>
          <Box>
            Definition Enhancement
            {/* Gaussian Blurring & Weight sum */}
            <Switch
              checked={isGaussianBlurOn}
              onChange={(event) => {
                setIsGaussianBlurOn(event.target.checked);
              }}
            ></Switch>
            {isGaussianBlurOn && (
              <Stack>
                <Grid container>
                  <Grid item xs>
                    - Kernel Size
                  </Grid>
                  <Grid item xs>
                    <Slider
                      valueLabelDisplay="auto"
                      step={2}
                      min={3}
                      max={15}
                      value={
                        typeof blurKernelSize === "number"
                          ? blurKernelSize
                          : initBlurKernelSize
                      }
                      onChange={(event: Event, newValue: number | number[]) => {
                        setBlurKernelSize(newValue as number);
                      }}
                    ></Slider>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    - Blur Weight
                  </Grid>
                  <Grid item xs>
                    <Slider
                      valueLabelDisplay="auto"
                      step={0.1}
                      min={-1}
                      max={1}
                      value={
                        typeof blurWeight === "number"
                          ? blurWeight
                          : initBlurWeight
                      }
                      onChange={(event: Event, newValue: number | number[]) => {
                        setBlurWeight(newValue as number);
                      }}
                    ></Slider>
                  </Grid>
                </Grid>
              </Stack>
            )}
          </Box>
          <Box>
            Sharpen Filter
            {/* Simple Convolution */}
            <Switch
              checked={isConvOn}
              onChange={(event) => {
                setIsConvOn(event.target.checked);
              }}
            ></Switch>
            {isConvOn && (
              <Stack>
                <Grid container>
                  <Grid item xs>
                    - Median Value
                  </Grid>
                  <Grid item xs>
                    <Slider
                      valueLabelDisplay="auto"
                      step={1}
                      min={1}
                      max={20}
                      value={
                        typeof sharpMedian === "number"
                          ? sharpMedian
                          : initSharpMedian
                      }
                      onChange={(event: Event, newValue: number | number[]) => {
                        setSharpMedian(newValue as number);
                      }}
                    ></Slider>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    - Kerenl Size
                  </Grid>
                  <Grid item xs>
                    <Slider
                      valueLabelDisplay="auto"
                      step={2}
                      min={3}
                      max={15}
                      value={
                        typeof sharpKernelSize === "number"
                          ? sharpKernelSize
                          : initSharpKernelSize
                      }
                      onChange={(event: Event, newValue: number | number[]) => {
                        setSharpKernelSize(newValue as number);
                      }}
                    ></Slider>
                  </Grid>
                </Grid>
              </Stack>
            )}
          </Box>
          <Grid container>
            <Grid item xs>
              <Button
                variant="outlined"
                color="error"
                onClick={resetFilterOptions}
              >
                Reset
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={applyFilter}>
                Apply
              </Button>
            </Grid>
          </Grid>
          <Stack>
            <Box>Score</Box>
            <Box>- PSNR: {psnrScore.toFixed(5)}</Box>
            <Box>- SSIM: {ssimScore.toFixed(5)}</Box>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
}
