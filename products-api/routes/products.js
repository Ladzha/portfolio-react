import express from "express";
import {
  _getAllProducts,
  _getProduct,
  _searchProduct,
  _insertProduct,
  _updateProduct,
  _deleteProduct,
  _getAllProductsEjs,
} from "../controllers/products.js";

import { verifyToken } from "../middlewares/VerifyToken.js";

const prouter = express.Router();

prouter.post('/formdata', (req, res) => {
  console.log('formdata=>',req.body);
  res.json({msg:OK})
})
prouter.get("/ejs/shop", _getAllProductsEjs);
prouter.get("/search", _searchProduct);

// verify the token
prouter.get("/", verifyToken, _getAllProducts);

prouter.get("/:id", _getProduct);
prouter.post("/", _insertProduct);
prouter.put("/:id", _updateProduct);
prouter.delete("/:id", _deleteProduct);

export default prouter;
