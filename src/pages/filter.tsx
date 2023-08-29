import { OpenCvProvider, useOpenCv } from "opencv-react";
import { useEffect } from "react";
import DicomViewer from "@/comps/DicomViewer";

export default function Filter() {
  const onLoaded = (cv: any) => {
    console.log("opencv loaded", cv);
  };
  return (
    <OpenCvProvider onLoad={onLoaded} openCvPath="opencv.js">
      <DicomViewer></DicomViewer>
    </OpenCvProvider>
  );
}
