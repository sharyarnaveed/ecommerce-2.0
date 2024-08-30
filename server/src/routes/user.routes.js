import { Router } from "express";
import { bestseller, getall } from "../controllers/bestseller.controllers.js";
import { bags, belts, getproductdetail, shoes } from "../controllers/productdetail.controllers.js";

const router=Router();

router.route('/getbestsellerall').get(getall)
router.route('/getbestsellerval').post(bestseller)
router.route('/bags').get(bags)
router.route('/shoes').get(shoes)
router.route('/belts').get(belts)
router.route('/productdetail/:id').get(getproductdetail)

export default router