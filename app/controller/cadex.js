const cadexModule = require("../cadex/cadex");

const cadexController = {
    async getCadex(req, res) {
        const cadex = await cadexModule.generate();
        console.log(cadex);
        // if(req.query.name){ // je teste pour voir si name existe dans req.query
        //     cadex.name = req.query.name;
        // }

        // if(req.query.verb){ 
        //     cadex.verb = req.query.verb;
        // }

        // cadex["name"] = req.query["name"];
        // cadex["verb"] = req.query["verb"];

        // for(const key in req.query){
        //     cadex[key] = req.query[key];
        // }

        // ici on utilise le spread operator (...) pour venir faire de la décomposition
        // le premier objet est écrasé par le second
        const result = { ...cadex, ...req.query };

        res.json(result.toString());
    },
    add(req, res) {

        console.log(req.body);

        // j'ajoute au dictionnaire, les mots entrés dans le formulaire
        cadexModule.add(req.body);

        // je génère un nouveau cadex
        const cadex = cadexModule.generate();

        // j'intègre les nouveaux mots à mon cadex
        const result = { ...cadex, ...req.body };

        res.json(result.toString());
    }
};

module.exports = cadexController;