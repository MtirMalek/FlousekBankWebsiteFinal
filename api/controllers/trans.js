import Trans from "../models/trans.js";
import { CreateSuccess } from "../utils/success.js";


export const getalltransac =async(req,res,next) =>{
    try {
        const transe =await Trans.find();
        //return res.status(200).send("ALL Transaction : ",transe)        ;
        return next (CreateSuccess(200,"ALL Users",transe));
    } catch (error) {
        console.error('Error in getAllUsers:', error);
        return res.status(500).send("Server error ");

    }

}
