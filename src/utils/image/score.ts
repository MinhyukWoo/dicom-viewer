import ssim from "ssim.js";

const calculatePSNR = (
  cv: any,
  image0: any,
  image1: any,
  maxVal: number = 255
) => {
  const img0 = new cv.Mat();
  const img1 = new cv.Mat();
  const tmp = new cv.Mat();
  image0.convertTo(img0, cv.CV_64F);
  image1.convertTo(img1, cv.CV_64F);
  cv.subtract(img0, img1, tmp);
  cv.multiply(tmp, tmp, tmp);
  const mse = Math.max(Number.EPSILON, cv.mean(tmp)[0]);
  const psnrVal = 20 * Math.log10(maxVal / Math.sqrt(mse));
  tmp.delete();
  img0.delete();
  img1.delete();
  return psnrVal;
};

const calculateSSIM = (canvasInputId: string, canvasOutputId: string) => {
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

const calculateAverageGradientMagnitude = (cv: any, image: any) => {
  const tmp = new cv.Mat();
  image.convertTo(tmp, cv.CV_64F);
  const sobelX = new cv.Mat();
  const sobelY = new cv.Mat();
  cv.Sobel(tmp, sobelX, cv.CV_64F, 1, 0);
  cv.Sobel(tmp, sobelY, cv.CV_64F, 0, 1);
  cv.multiply(sobelX, sobelX, sobelX);
  cv.multiply(sobelY, sobelY, sobelY);
  cv.add(sobelX, sobelY, tmp);
  cv.sqrt(tmp, tmp);
  const val = cv.mean(tmp)[0]
  tmp.delete();
  sobelX.delete();
  sobelY.delete();
  console.log(val)
  return val;
};

export { calculatePSNR, calculateSSIM, calculateAverageGradientMagnitude };
