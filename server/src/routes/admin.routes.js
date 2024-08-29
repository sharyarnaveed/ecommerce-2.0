import { Router } from "express";
import { addcategory, getcategory, loginadmin, logout } from "../controllers/admin.controller.js";
import { addproduct, deleteproduct, getproduct } from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyjwt } from "../middlewares/auth.middleware.js";
const router=Router();

router.route('/login').post(loginadmin)

router.route('/addcategory').post(verifyjwt,addcategory)

router.route('/getcategory').get(verifyjwt,getcategory)

router.route('/addproduct').post(
    verifyjwt,
    upload.array('images',5), //multer as a middleware
    addproduct)

router.route('/getproduct').get(verifyjwt,getproduct)

router.route('/deleteproduct').post(verifyjwt,deleteproduct)

router.route('/logout').post(verifyjwt,logout)
export default router