import mongoose, {Schema} from "mongoose";


const TransSchema =mongoose.Schema(
    {
        date:{
            type : String,
            required: true
        },  
        carta: {
            type : String,
            required: true
        },
        montant: {
            type: String,
            required: true,
            
        },
        etat: {
            type: String,
            required: true,
            
        },cin: {
            type: String,
            required: true,
            unique :true
        }
    },
    {
        timestamps: true
    }
);
export default mongoose.model("Trans",TransSchema);