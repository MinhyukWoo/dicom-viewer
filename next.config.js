/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://minhyukwoo.github.io/dicom-viewer"
      : "",
};

module.exports = nextConfig;
