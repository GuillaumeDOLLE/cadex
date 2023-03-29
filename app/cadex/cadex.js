// Fichier de gestion des cadex

//const data = require("../../data/parts.json");
//const { getRandomElementInList } = require("../service/random");
const dataMapper = require("./dataMapper");
/**
 * Un cadavre exquis (cadex) est composé de quatre parties : name,adjective,verb,complement
 * @typedef {Object} Cadex
 * @property {string} name - la première partie de mon cadex
 * @property {string} adjective - la deuxième partie de mon cadex
 * @property {string} verb - la troisième partie de mon cadex
 * @property {string} complement - la quatrième partie de mon cadex
 */

const cadexModule = {
    /**
    * Méthode pour générer un cadex
    * @returns {Cadex}
    */
    async generate() {
        return {
            // name:getRandomElementInList(data.names),
            // verb:getRandomElementInList(data.verbs),
            // adjective:getRandomElementInList(data.adjectives),
            // complement:getRandomElementInList(data.complements),
            name: await dataMapper.getRandom("noun"),
            verb: await dataMapper.getRandom("verb"),
            adjective: await dataMapper.getRandom("adjective"),
            complement: await dataMapper.getRandom("complement"),
            // Je viens surcharger la méthode toString pour retourner plutôt la phrase issue du cadex
            toString() {
                return this.name + " " + this.adjective + " " + this.verb + " " + this.complement;
            }
        };
    },
    /**
     * Ajoute des mots à notre dictionnaire
     * @param {Cadex} words - cadex représentatif des mots à ajouter
     */
    async add(words) {
        // j'ajoute mes mots à data
        // for(const category in data){
        //     const value = words[category.slice(0, category.length-1)];
        //     if(value){
        //         data[category].push(value);
        //     }
        // }
        for (const key in words) {
            let tableName;
            switch (key) {
                case "name":
                    tableName = 'noun';
                    break;
                default:
                    tableName = key;
                    break;
            }
            await dataMapper.insert(tableName, words[key]);
        }
    }
};

module.exports = cadexModule;