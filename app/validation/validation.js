//const joi = require('joi');


const validationModule = {
    validateBody(schema){
        return (req,res,next)=>{
            const { error } = schema.validate(req.body);
            if(error){
                // il y a une erreur, que faire ???
                res.status(500).json({message:"Internal error, your computer will burn"});
            }
            else{
                next();
            }
        }
    },
    validateQuery(schema){
        return (req,res,next)=>{
            const { error } = schema.validate(req.query);
            if(error){
                // il y a une erreur, que faire ???
                res.status(500).json({message:"Internal error"});
            }
            else{
                next();
            }
        }
    }
};

module.exports = validationModule;