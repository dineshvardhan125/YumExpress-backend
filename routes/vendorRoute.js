const express = require("express");
const vendorcontrollor = require("../controllers/vendorcontrollor");
const router = express.Router();


router.post("/register", vendorcontrollor.VendorRegister);
router.post("/login", vendorcontrollor.vendorLogin);
module.exports = router;
