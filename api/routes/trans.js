

import { getalltransac } from "../controllers/trans.js"
import express  from 'express';
const router =express.Router();


//get all
router.get('/',getalltransac);
export default router;