const express = require("express");

const router = express.Router();

// Import Middleware
const { auth } = require("../middlewares/auth");
const { uploadFiles } = require("../middlewares/uploadFile");

// Controllers
const { register, signIn } = require("../controllers/auth");

const { addUser, getUsers, getUser, updateUser, deleteUser, getUserProducts } = require("../controllers/user");

const { addProduct, getProducts, getProduct, updateProduct, deleteProduct } = require("../controllers/product");

const { addTransaction, getTransactions } = require("../controllers/transaction");

// Routes
// Auth
router.post("/register", register);
router.post("/login", signIn);

// User Routes
router.post("/user", addUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.get("/user-products", getUserProducts);

// Product Routes
router.post("/product", auth, uploadFiles("image"), addProduct);
router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

// Transaction Routes
router.post("/transaction", addTransaction);
router.get("/transactions", getTransactions);

// Exports Module
module.exports = router;
