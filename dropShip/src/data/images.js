const images = import.meta.glob(
  "/src/assets/productImages/*.{png,jpg,jpeg,svg}",
  {
    eager: true,
  }
);

export default images;
