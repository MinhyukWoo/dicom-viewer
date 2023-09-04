const applyGammaCorrection = (
  cv: any,
  image: any,
  factor: number,
  type: number
) => {
  image.convertTo(image, cv.CV_64F);
  cv.pow(image, 1.0 / factor, image);
  image.convertTo(image, type);
};

const applyBlackCompression = (
  cv: any,
  image: any,
  factor: number,
  type: number
) => {
  const scalar = new cv.Scalar(1);
  const ones = new cv.Mat(image.rows, image.cols, cv.CV_64FC1, scalar);
  image.convertTo(image, cv.CV_64F);
  cv.multiply(image, ones, image, factor);
  image.convertTo(image, type);
  ones.delete();
};

const applyWhiteCompression = (
  cv: any,
  image: any,
  factor: number,
  type: number
) => {
  const org = image.clone();
  const maxScalar = new cv.Scalar(255);
  const oneScalar = new cv.Scalar(1);
  const alphaScalar = new cv.Scalar(0);
  const maxes = new cv.Mat(image.rows, image.cols, type, maxScalar);
  const ones = new cv.Mat(image.rows, image.cols, cv.CV_64FC1, oneScalar);
  const alphas = new cv.Mat(image.rows, image.cols, type, alphaScalar);
  cv.subtract(maxes, image, image);
  cv.add(image, alphas, image);
  image.convertTo(image, cv.CV_64F);
  cv.multiply(image, ones, image, 1 - factor);
  image.convertTo(image, type);
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
  kernelSize: number,
  type: number
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
  cv.filter2D(image, image, type, kernel, anchor, 0, cv.BORDER_DEFAULT);
  kernel.delete();
};

const applyHistEqualization = (cv: any, image: any, type: number) => {
  if (type === cv.CV_8U) {
    cv.equalizeHist(image, image);
  } else {
    throw new Error("Histogram Equalization은 8bit unsigned인 DICOM 영상만 적용 가능합니다.");
  }
};

const applyClahe = (
  cv: any,
  image: any,
  tileGridSize: number,
  limit: number,
  type: number
) => {
  if (type === cv.CV_8U) {
    const equalDst = new cv.Mat();
    cv.equalizeHist(image, equalDst);
    const clahe = new cv.CLAHE(limit, new cv.Size(tileGridSize, tileGridSize));
    clahe.apply(image, image);
    equalDst.delete();
    clahe.delete();
  } else {
    throw new Error("CLAHE는 8bit unsigned인 DICOM 영상만 적용 가능합니다.");
  }
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

const applyNoiseAdjustment = (
  cv: any,
  image: any,
  stdDev: number,
  type: number
) => {
  const noise = new cv.Mat(image.rows, image.cols, type);
  const means = cv.matFromArray(1, 1, cv.CV_64F, [0]);
  const stdDevs = cv.matFromArray(1, 1, cv.CV_64F, [stdDev]);
  cv.randn(noise, means, stdDevs);
  cv.add(image, noise, image);
  noise.delete();
  means.delete();
  stdDevs.delete();
};

const applyWindowLeveling = (
  cv: any,
  image: any,
  center: number,
  width: number,
  type: number
) => {
  image.convertTo(image, cv.CV_64F);
  const scalar1 = new cv.Scalar(center - 0.5, 0, 0, 0);
  const scalar2 = new cv.Scalar(width - 1, 0, 0, 0);
  const scalar3 = new cv.Scalar(0.5, 0, 0, 0);
  const scalarMin = new cv.Scalar(0, 0, 0, 0);
  const scalarMax = new cv.Scalar(255, 0, 0, 0);
  const mat1 = new cv.Mat(image.rows, image.cols, cv.CV_64F, scalar1);
  const mat2 = new cv.Mat(image.rows, image.cols, cv.CV_64F, scalar2);
  const mat3 = new cv.Mat(image.rows, image.cols, cv.CV_64F, scalar3);
  const matMin = new cv.Mat(image.rows, image.cols, cv.CV_64F, scalarMin);
  const matMax = new cv.Mat(image.rows, image.cols, cv.CV_64F, scalarMax);
  cv.subtract(image, mat1, image);
  cv.divide(image, mat2, image);
  cv.add(image, mat3, image);
  cv.multiply(image, matMax, image);
  cv.max(image, matMin, image);
  cv.min(image, matMax, image);
  image.convertTo(image, type);
  mat1.delete();
  mat2.delete();
  mat3.delete();
  matMin.delete();
  matMax.delete();
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
  applyWindowLeveling,
};
