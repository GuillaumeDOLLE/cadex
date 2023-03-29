// {
//     name,
//     verb,
//     adjective,
//     complement
// }


const joi = require('joi');

const bodySchema = joi.object({ // je précise que je souhaite avoir un objet
    name: joi.string(),
    verb: joi.string(),
    adjective: joi.string(),
    complement: joi.string()
}).required().min(1).max(4); // cet objet est requis et doit avoir au minimum 1 clef et au maximum 4

const querySchema = joi.object({ // je précise que je souhaite avoir un objet
    name: joi.string(),
    verb: joi.string(),
    adjective: joi.string(),
    complement: joi.string()
}).required().min(0).max(4); // cet objet est requis et doit avoir au minimum 1 clef et au maximum 4

module.exports = { bodySchema,querySchema } ;