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
  const medianInx = (1 + kernelSize * kernelSize) / 2 - 1;
  kernelArr[medianInx] = medianVal;
  const kernel = cv.matFromArray(
    kernelSize,
    kernelSize,
    cv.CV_64FC1,
    kernelArr
  );
  const anchor = new cv.Point(-1, -1);
  cv.filter2D(image, image, cv.CV_64F, kernel, anchor, 0, cv.BORDER_DEFAULT);
  image.convertTo(image, type);
  kernel.delete();
};

const applyFred5x5Filter2D = (cv: any, image: any, type: number) => {
  const kernelArr = [
    -4, -1, 0, -1, -4, -1, 2, 3, 2, -1, 0, 3, 4, 3, 0, -1, 2, 3, 2, -1, -4, -1,
    0, -1, -4,
  ];
  kernelArr[12] += 1;
  const kernel = cv.matFromArray(5, 5, cv.CV_64FC1, kernelArr);
  const anchor = new cv.Point(-1, -1);
  cv.filter2D(image, image, cv.CV_64F, kernel, anchor, 0, cv.BORDER_DEFAULT);
  image.convertTo(image, type);
  kernel.delete();
};

const applyFred7x7Filter2D = (cv: any, image: any, type: number) => {
  const kernelArr = [
    -10, -5, -2, -1, -2, -5, -10, -5, 0, 3, 4, 3, 0, -5, -2, 3, 6, 7, 6, 3, -2,
    -1, 4, 7, 8, 7, 4, -1, -2, 3, 6, 7, 6, 3, -2, -5, 0, 3, 4, 3, 0, -5, -10,
    -5, -2, -1, -2, -5, -10,
  ];
  // kernelArr[24] += 1;
  const kernel = cv.matFromArray(7, 7, cv.CV_64FC1, kernelArr);
  const anchor = new cv.Point(-1, -1);
  cv.filter2D(image, image, cv.CV_64F, kernel, anchor, 0, cv.BORDER_DEFAULT);
  image.convertTo(image, type);
  kernel.delete();
};

const applyNegativeLog5x5 = (cv: any, image: any, type: number) => {
  const kernelArr = [
    0, 0, -1, 0, 0, 0, -1, -2, -1, 0, -1, -2, 16, -2, -1, 0, -1, -2, -1, 0, 0,
    0, -1, 0, 0,
  ];
  kernelArr[12] += 1;
  const kernel = cv.matFromArray(5, 5, cv.CV_64FC1, kernelArr);
  const anchor = new cv.Point(-1, -1);
  cv.filter2D(image, image, cv.CV_64F, kernel, anchor, 0, cv.BORDER_DEFAULT);
  image.convertTo(image, type);
  kernel.delete();
};

const applyHistEqualization = (cv: any, image: any, type: number) => {
  if (type === cv.CV_8U) {
    cv.equalizeHist(image, image);
  } else {
    throw new Error(
      "Histogram Equalization은 8bit unsigned인 DICOM 영상만 적용 가능합니다."
    );
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
  blurWeight: number,
  sigma: number
) => {
  const blurred = new cv.Mat();
  const ksize = new cv.Size(kernelSize, kernelSize);
  cv.GaussianBlur(image, image, ksize, sigma, sigma, cv.BORDER_DEFAULT);
  // cv.addWeighted(image, 1 - blurWeight, blurred, blurWeight, 0, image);
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

export const applyLaplacian = (
  cv: any,
  image: any,
  ksize: number,
  scale: number,
  imageType: number
) => {
  const edge = new cv.Mat();
  cv.Laplacian(image, edge, -1, ksize, scale);
  const scalar = new cv.Scalar(-1, 0, 0, 0);
  const mat = new cv.Mat(image.rows, image.cols, cv.CV_32S, scalar);

  edge.convertTo(edge, cv.CV_32S);
  cv.multiply(edge, mat, edge);
  image.convertTo(image, cv.CV_32S);
  cv.add(image, edge, image);
  image.convertTo(image, imageType);

  edge.delete();
  mat.delete();
};

export const applySobel = (
  cv: any,
  image: any,
  ksize: number,
  imageType: number
) => {
  const edge = new cv.Mat();
  const edge1 = new cv.Mat();
  const edge2 = new cv.Mat();
  cv.Sobel(image, edge1, -1, 1, 0, ksize);
  cv.Sobel(image, edge2, -1, 0, 1, ksize);
  cv.add(edge1, edge2, edge);
  edge.convertTo(edge, cv.CV_64F);
  image.convertTo(image, cv.CV_64F);
  cv.add(image, edge, image);
  image.convertTo(image, imageType);
  edge.delete();
  edge1.delete();
  edge2.delete();
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
  applyFred5x5Filter2D,
  applyFred7x7Filter2D,
  applyNegativeLog5x5,
};
