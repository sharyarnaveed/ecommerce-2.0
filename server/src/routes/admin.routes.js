import { Router } from "express";
import { addcategory, getcategory, registeradmin } from "../controllers/admin.controller.js";
import { addproduct } from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router=Router();

router.route('/register').post(registeradmin)

router.route('/addcategory').post(addcategory)

router.route('/getcategory').get(getcategory)

router.route('/addproduct').post(
    upload.single("img1"),
    addproduct)

export default router