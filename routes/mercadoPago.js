import express from "express";
const router = express.Router();
import checkOut from "../middleware/checkOut.js";

import { payMercadoPago } from "../controladores/payMercadoPago.js";


router.post("/", payMercadoPago);

  
// router.post(checkOut, añadirFavNft);


export default router;