import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useOpenCv } from "opencv-react";
import { Box, Switch, Button, Slider } from "@mui/material";
import {
  applyGammaCorrection,
  applyBlackCompression,
  applyWhiteCompression,
  applyFilter2D,
  applyHistEqualization,
  applyClahe,
  applyGaussianBlur,
  applyNoiseAdjustment,
} from "../utils/image/process";
import {
  calculatePSNR,
  calculateSSIM,
  calculateAverageGradientMagnitude,
} from "../utils/image/score";

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
  const [agmScore, setAgmScore] = useState<number>(0);

  async function applyFilter() {
    if (openCvData && openCvData.loaded) {
      const { cv } = openCvData;
      const canvasInput: HTMLCanvasElement | null =
        document.querySelector("#viewer canvas");
      if (canvasInput) {
        const image = await cv.imread(canvasInputId);
        cv.cvtColor(image, image, cv.COLOR_RGBA2GRAY, 0);
        const org = image.clone();
        await applyGammaCorrection(cv, image, gammaVal);
        await applyBlackCompression(cv, image, blackVal);
        await applyWhiteCompression(cv, image, whiteVal);
        if (isHistEqualOn) {
          await applyHistEqualization(cv, image);
        }
        if (isClaheOn) {
          await applyClahe(cv, image, claheKernelSize, claheLimit);
        }
        if (isNoiseOn) {
          await applyNoiseAdjustment(cv, image, noiseStdDev);
        }
        if (isGaussianBlurOn) {
          await applyGaussianBlur(cv, image, blurKernelSize, blurWeight);
        }
        if (isConvOn) {
          await applyFilter2D(cv, image, sharpMedian, sharpKernelSize);
        }
        await cv.imshow(canvasOutputId, image);
        await setPsnrScore(calculatePSNR(cv, org, image));
        await setAgmScore(calculateAverageGradientMagnitude(cv, image));
        await setSsimScore(calculateSSIM(canvasInputId, canvasOutputId));
        org.delete();
        image.delete();
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
            <Box>- AGM: {agmScore.toFixed(5)}</Box>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
}
