const database = require('./dbConnect')

module.exports = {
    getStudents : ()=> {
        return database('students_table').orderBy('id')
            .then(students => students)
    },
    getId : (id)=> {
        return database('students_table')
            .where('id', id)
            .then(student => student[0])
    },
    addStudent : (data)=> {
        return database('students_table')
            .insert(data, '*')
            .then(student => student[0])
    },
    updateStudent : (id, data)=> {
        return database('students_table')
            .where('id', id)
            .update(data, '*')
            .then(student => student[0])
    },
    deleteStudent : (id)=> {
        return database('students_table')
            .where('id', id)
            .del()
    }
}
