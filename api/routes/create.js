import { create } from "../controllers/create.js";
//create transac
import express  from 'express';
const router =express.Router();
router.post("/Createtransac", create );
export default router;