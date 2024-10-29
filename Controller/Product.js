const asyncHandler = require("express-async-handler");
const Product = require("../schema/Product");
const cloudinary = require("../services/Cloudinary");

const CreateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    discount_price,
    desc,
    image,
    quantity,
    variety,
    category,
    brand,
  } = req.body;
  try {
    const productExists = await Product.findOne({ name });
    if (productExists) {
      res.status(508).json({
        message: "product already Exists",
      });
    }
    // upload img to cloudinary
    const uploadedImages = await Promise.all(
      image.map(async (image) => {
        const result = await cloudinary.uploader.upload(image, {
          folder: "product",
          resource_type: "image",
          fileName: `${req.body.name}.jpg`,
        });
        return {
          url: result.secure_url,
        };
      })
    );
    const newProducts = await Product.create({
      name,
      price,
      discount_price,
      desc,
      image: uploadedImages,
      quantity,
      variety,
      category,
      brand,
    });
    res.status(200).json({
      _id: newProducts._id,
      name: newProducts.name,
      price: newProducts.price,
      discount_price: newProducts.discount_price,
      desc: newProducts.desc,
      image: newProducts.image,
      quantity: newProducts.quantity,
      variety: newProducts.variety,
      category: newProducts.category,
      brand: newProducts.brand,
      message: "Successful",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error,
    });
  }
});

module.exports = {
  CreateProduct,
};
