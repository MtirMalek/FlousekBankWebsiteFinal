
import  Trans  from '../models/trans.js'

export const create = async (req,res, next)=>{
    try {
        const newTrans= new Trans({
            
        carta: req.body.carta,
        date: req.body.date,
        montant:req.body.montant,
        etat: req.body.etat,
        cin:req.body.cin
        });
        console.log(newTrans);

    await newTrans.save();
    //return next(CreateSuccess(200,"User registered successfully!"));
    return res.status(200).json("Transaction created successfully!");  

         
    } 
    catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong !");  
    }
}