
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('students_table').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('students_table').insert([
                {
                    first: 'Maddie',
                    last: 'Kreamer',
                    lat: '41.673153',
                    long: '-93.697342',
                    favAnimal: 'https://pbs.twimg.com/media/B6CO2wGIEAAaDcc.jpg'
                },
                {
                    first:'Cory',
                    last:'Pease',
                    lat: '39.739235',
                    long: '-104.990250',
                    favAnimal: 'https://vignette.wikia.nocookie.net/best-tv-shows1923/images/3/30/Property-header-catdog-480x270.png/',
                },
                {
                    first:"Anhuelita",
                    last:"LaChica",
                    lat:"39.905271",
                    long:"-104.994178",
                    favAnimal:"https://media1.tenor.com/images/0e3f49f5355ac2f28756f0a0b65562b0/tenor.gif"
                },
                {
                    first:"Damon",
                    last:"Schultz",
                    lat:"21.278492",
                    long:"-157.832754",
                    favAnimal:"https://upload.wikimedia.org/wikipedia/commons/6/63/African_elephant_warning_raised_trunk.jpg"
                },
            ]);
        });
};
