
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students_table', (student)=>{
        student.increments('id')
        student.string('first')
        student.string('last')
        student.float('lat')
        student.float('long')
        student.string('favAnimal')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students_table')
};
