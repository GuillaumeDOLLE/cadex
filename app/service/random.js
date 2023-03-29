const randomService = {
    getRandomElementInList(array) {
        // on cherche un index aléatoire, un nombre entre 0 et data.names.length-1
        // Math.random() retourne un nombre décimal entre 0 et 1
        // si je veux un nombre entre 0 et 10, je dois multiplier par 10
        // Math.floor(Math.random() * 10), je vais avoir 10 uniquement si Math.random() me retourne 1

        // On va utiliser Math.round qui vient arrondir à l'entier le plus proche
        const index = Math.round(Math.random() * (array.length - 1));
        return array[index];
    }
};

module.exports = randomService;