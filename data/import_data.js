const { Client } = require("pg");
const client = new Client({
    host: 'localhost',
    port: 5432,
    password: 'spedata',
    database: 'cadex'
});

async function importData() {
    await client.connect(err => {
        if (err) {
            console.error('connection error', err.stack);
        } else {
            console.log('connected');
        }
    });

    // Je récupère mes données dans le fichier.json
    const data = require("./parts.json");

    const logInformation = {
        insert:0,
        error:0
    };

    // Je parcours mes données
    for (const table in data) { // je parcours les clefs de mon objet data
        const tableName = table.slice(0, table.length - 1);

        let insertQuery = `INSERT INTO ${tableName} (label) VALUES `;
        let values = [];
        let counter = 1 ;
        // console.log("");
        // console.log("### Pour la table", tableName);
        // console.log("");
        // data[table] est la façon de récupérer la valeur d'une clef dynamiquement
        for (const value of data[table]) {
            // if(counter == 1){
            //     insertQuery+= '($'+counter+')';
            // }
            // else{
            //     insertQuery+= ',($'+counter+')';
            // }
            
            values.push('($'+counter+')');
            counter++;
            // console.log(value);

            // try{
            //     // j'insère en BDD
            //     await client.query(`INSERT INTO ${tableName} (label) VALUES ($1)`,[value]);
            //     logInformation.insert++;
            // }
            // catch(err){
            //     logInformation.error++;
            // }
        }

        
        try{
            insertQuery += values.join(',')+';';
            console.log(insertQuery);

            // j'insère en BDD
            await client.query(insertQuery,data[table]);
            logInformation.insert++;
        }
        catch(err){
            logInformation.error++;
        }
    }

    console.table(logInformation);
}

importData();