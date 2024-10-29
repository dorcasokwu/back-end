const express = require("express");
{/* // const { getALLContents, postContent, getSingleContent, updateContent, delectContent } = //require("../Controller/Product");
// const route = express.Router();
// route.get("/", getALLContents);
// route.get("/:id", getSingleContent);
// route.post("/post", postContent);
// route.put("/dor/:id", updateContent);
// route.delete("/:id", delectContent); */}
const { CreateProduct } = require("../Controller/Product");
const router = express.Router();
router.post("/", CreateProduct);

module.exports = router;
