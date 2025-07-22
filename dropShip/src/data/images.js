const images = import.meta.glob(
  "/src/assets/productImages/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
  }
);

export default images;
