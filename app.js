const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const listener = ()=> { console.log(`Class Party on Port: ${port}`) }

app.use(bodyParser.json())
app.use(morgan('common'))
app.listen(port, listener)

app.get('/', (req, res, next)=> {
    queries.getStudents()
        .then(students => res.json({students}))
})

app.get('/:id', (req, res, next)=> {
    if (isNaN(req.params.id)){
        next({status: 500, message:"Please enter student ID Number"})
        return
    }
    queries.getId(req.params.id)
        .then(student => res.json({student}))
})

app.post('/', (req, res, next)=>{
    if (!req.body){
        next({status: 500, message:"Please enter required student data: id, first, last, lat, long, favAnimal"})
    }
    queries.addStudent(req.body)
        .then(student => res.json({student}))
        // .catch(next({status: 500,  message: 'Please Try Again'}))
})

app.put('/:id', (req, res, next)=> {
    queries.updateStudent(req.params.id, req.body)
        .then(result => res.json(result))
})

app.delete('/:id', (req, res, next)=> {
    queries.deleteStudent(req.params.id)
        .then(result => res.status(200).json({'message':'Success!'}))
})

app.use((err, req, res, next)=>{
    res.status(err.status).json({'message': err.message})
})
app.use((req, res, next)=> {
    res.status(404).json({'error': 'Not Found'})
})

