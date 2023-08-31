const applyGammaCorrection = (cv: any, image: any, factor: number) => {
  image.convertTo(image, cv.CV_64F);
  cv.pow(image, 1.0 / factor, image);
  image.convertTo(image, cv.CV_8U);
};

const applyBlackCompression = (cv: any, image: any, factor: number) => {
  const scalar = new cv.Scalar(1);
  const ones = new cv.Mat(image.rows, image.cols, cv.CV_64FC1, scalar);
  image.convertTo(image, cv.CV_64F);
  cv.multiply(image, ones, image, factor);
  image.convertTo(image, cv.CV_8U);
  ones.delete();
};

const applyWhiteCompression = (cv: any, image: any, factor: number) => {
  const org = image.clone();
  const maxScalar = new cv.Scalar(255);
  const oneScalar = new cv.Scalar(1);
  const alphaScalar = new cv.Scalar(0);
  const maxes = new cv.Mat(image.rows, image.cols, cv.CV_8UC1, maxScalar);
  const ones = new cv.Mat(image.rows, image.cols, cv.CV_64FC1, oneScalar);
  const alphas = new cv.Mat(image.rows, image.cols, cv.CV_8UC1, alphaScalar);
  cv.subtract(maxes, image, image);
  cv.add(image, alphas, image);
  image.convertTo(image, cv.CV_64F);
  cv.multiply(image, ones, image, 1 - factor);
  image.convertTo(image, cv.CV_8U);
  cv.add(org, image, image);
  maxes.delete();
  ones.delete();
  alphas.delete();
  org.delete();
};

const applyFilter2D = (
  cv: any,
  image: any,
  medianVal: number,
  kernelSize: number
) => {
  const othVal = (1 - medianVal) / (kernelSize * kernelSize - 1);
  const kernelArr = new Array(kernelSize * kernelSize).fill(othVal);
  const medianInx = (1 + kernelSize * kernelSize) / 2;
  kernelArr[medianInx] = medianVal;
  const kernel = cv.matFromArray(
    kernelSize,
    kernelSize,
    cv.CV_64FC1,
    kernelArr
  );
  const anchor = new cv.Point(-1, -1);
  cv.filter2D(image, image, cv.CV_8U, kernel, anchor, 0, cv.BORDER_DEFAULT);
  kernel.delete();
};

const applyHistEqualization = (cv: any, image: any) => {
  cv.equalizeHist(image, image);
};

const applyClahe = (
  cv: any,
  image: any,
  tileGridSize: number,
  limit: number
) => {
  const equalDst = new cv.Mat();
  cv.equalizeHist(image, equalDst);
  const clahe = new cv.CLAHE(limit, new cv.Size(tileGridSize, tileGridSize));
  clahe.apply(image, image);
  equalDst.delete();
  clahe.delete();
};

const applyGaussianBlur = (
  cv: any,
  image: any,
  kernelSize: number,
  blurWeight: number
) => {
  const blurred = new cv.Mat();
  const ksize = new cv.Size(kernelSize, kernelSize);
  cv.GaussianBlur(image, blurred, ksize, 0, 0, cv.BORDER_DEFAULT);
  cv.addWeighted(image, 1 - blurWeight, blurred, blurWeight, 0, image);
  blurred.delete();
};

const applyNoiseAdjustment = (cv: any, image: any, stdDev: number) => {
  const noise = new cv.Mat(image.rows, image.cols, cv.CV_8U);
  const means = cv.matFromArray(1, 1, cv.CV_64F, [0]);
  const stdDevs = cv.matFromArray(1, 1, cv.CV_64F, [stdDev]);
  cv.randn(noise, means, stdDevs);
  cv.add(image, noise, image);
  noise.delete();
  means.delete();
  stdDevs.delete();
};

export {
  applyGammaCorrection,
  applyBlackCompression,
  applyWhiteCompression,
  applyFilter2D,
  applyHistEqualization,
  applyClahe,
  applyGaussianBlur,
  applyNoiseAdjustment,
};
