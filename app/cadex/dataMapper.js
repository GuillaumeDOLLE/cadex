const client = require("../service/pgClient");

// Fichier de communication avec la BDD
const dataMapper = {
    async test() {
        try {
            const result = await client.query("SELECT * FROM noun");
            console.log(result);
        }
        catch (err) {
            console.error(err);
        }
    },
    async getRandom(tableName){
        const randomQuery = `SELECT label
        FROM ${tableName}
        ORDER BY RANDOM()
        LIMIT 1;`

        try{
            return (await client.query(randomQuery)).rows[0].label;
        }
        catch(err){
            //console.error(err);
        }
    },
    async insert(tableName,value){
        try{
            await client.query(`INSERT INTO ${tableName} (label) VALUES ($1)`,[value]);
        }
        catch(err){

        }
    }
};

module.exports = dataMapper;