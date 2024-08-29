import { Router } from "express";
import { bestseller, getall } from "../controllers/bestseller.controllers.js";
import { getproductdetail } from "../controllers/productdetail.controllers.js";

const router=Router();

router.route('/getbestsellerall').get(getall)
router.route('/getbestsellerval').post(bestseller)
router.route('/productdetail/:id').get(getproductdetail)

export default router