import { Grid, Stack } from "@mui/material";
import { useState } from "react";
import DetailsIcon from "@mui/icons-material/Details";
import { useOpenCv } from "opencv-react";
import { Box, Switch, Button, Slider } from "@mui/material";

const initConvVal = 9;
const initGammaVal = 1.0;
const initBlackVal = 1.0;
const initWhiteVal = 1.0;
const initIsConvOn = false;
const initIsHistEqualOn = false;
const initClaheOn = false;
const initGaussianBlurOn = false;
const initClaheLimit = 40;
const initClaheKernelSize = 8;

export default function FilterMenu() {
  const openCvData = useOpenCv();
  const [convVal, setConvVal] = useState<number>(initConvVal);
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
  const [claheKernelSize, setClaheKernelSize] = useState<number>();

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

  const applyFilter2D = (cv: any, image: any, factor: number) => {
    let dst = new cv.Mat();
    const kerenlArr = [-1, -1, -1, -1, factor as number, -1, -1, -1, -1];
    let kernel = cv.matFromArray(3, 3, cv.CV_32FC1, kerenlArr);
    let anchor = new cv.Point(-1, -1);
    cv.filter2D(image, dst, cv.CV_8U, kernel, anchor, 0, cv.BORDER_DEFAULT);
    return dst;
  };

  const applyHistEqualization = (cv: any, image: any) => {
    const dst = image.clone();
    cv.equalizeHist(dst, dst);
    return dst;
  };

  const applyClahe = (
    cv: any,
    image: any,
    kernelSize: number = initClaheKernelSize,
    limit: number = initClaheLimit
  ) => {
    const equalDst = new cv.Mat();
    const dst = new cv.Mat();
    cv.equalizeHist(image, equalDst);
    const tileGridSize = new cv.Size(kernelSize, kernelSize);
    const clahe = new cv.CLAHE(limit, tileGridSize);
    clahe.apply(image, dst);
    equalDst.delete();
    clahe.delete();
    return dst;
  };

  const applyGaussianBlur = (cv: any, image: any, kernelSize: number = 3) => {
    const dst = new cv.Mat();
    const ksize = new cv.Size(kernelSize, kernelSize);
    cv.GaussianBlur(image, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
    cv.addWeighted(image, 0.5, dst, 0.5, 0, dst);
    return dst;
  };

  const applyNoise = (cv: any, image: any, factor: number) => {
    const zeroScalar = new cv.Scalar(0);
    const maxScalar = new cv.Scalar(255);
    const noise = new cv.Mat(image.rows, image.cols, cv.CV_8UC1);
    const minArray = new cv.Mat(image.rows, image.cols, cv.CV_8UC1, zeroScalar);
    const maxArray = new cv.Mat(image.rows, image.cols, cv.CV_8UC1, maxScalar);
    console.log(minArray);
    cv.randu(noise, minArray, maxArray);
    console.log(noise);
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
        const clahe = isClaheOn
          ? await applyClahe(cv, histEqulized, claheKernelSize, claheLimit)
          : histEqulized;
        const gaussianBlurred = isGaussianBlurOn
          ? await applyGaussianBlur(cv, image)
          : clahe;
        const postSharpened = isConvOn
          ? await applyFilter2D(cv, gaussianBlurred, convVal)
          : gaussianBlurred;
        await cv.imshow("canvas-output", postSharpened);
        // image.delete();
        // gammaCorrected.delete();
        // blackCompressed.delete();
      }
    }
  }

  function resetFilterOptions() {
    setIsConvOn(initIsConvOn);
    setIsHistEqualOn(initIsHistEqualOn);
    setIsClaheOn(initClaheOn);
    setConvVal(initConvVal);
    setGammaVal(initGammaVal);
    setBlackVal(initBlackVal);
    setWhiteVal(initWhiteVal);
    setIsGaussianBlurOn(initGaussianBlurOn);
    setClaheKernelSize(initClaheKernelSize);
    setCalheLimit(initClaheLimit);
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
            Equalize Histogram
            <Switch
              checked={isHistEqualOn}
              onChange={(event) => {
                setIsHistEqualOn(event.target.checked);
              }}
            ></Switch>
          </Box>
          <Box>
            CLAHE(Constrast Limited Adaptive Equalize Histogram)
            <Switch
              checked={isClaheOn}
              onChange={(event) => {
                setIsClaheOn(event.target.checked);
              }}
            ></Switch>
            {isClaheOn && (
              <Stack>
                <Grid container>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={2}>
                    Tile Grid Size
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
                  <Grid item xs={1}></Grid>
                  <Grid item xs={2}>
                    Limit
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
            Definition Enhancement(Gaussian Blurring & Weight sum)
            <Switch
              checked={isGaussianBlurOn}
              onChange={(event) => {
                setIsGaussianBlurOn(event.target.checked);
              }}
            ></Switch>
          </Box>
          <Box>
            Sharpen Filter (Simple Convolution)
            <Switch
              checked={isConvOn}
              onChange={(event) => {
                setIsConvOn(event.target.checked);
              }}
            ></Switch>
            {isConvOn && (
              <Slider
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={10}
                value={typeof convVal === "number" ? convVal : 9}
                onChange={(event: Event, newValue: number | number[]) => {
                  setConvVal(newValue as number);
                }}
              ></Slider>
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
        </Stack>
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
}
