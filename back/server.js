const express = require("express");
const cors  = require('cors');
const mysql = require("mysql");


const app  = express();

const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://localhost:8081',
    ],
    optionsSuccessStatus: 200,
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    headers: 'Content-Type,Authorization',
    credentials: true,
};

app.use(express.json()); // for parsing application/json

app.use(cors(corsOptions));

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudnode"
}); 

app.get("/",  (req, res) => {
    const  sql = `SELECT * FROM student`;
    database.query(sql , (err,data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    
})});

app.post('/create', (req, res) => {
    const sql = "INSERT INTO student (name, email) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    database.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})


app.put('/update/:id', (req, res) => {
    const sql = "update student set name =?, email =? where id =?";
    const values = [ 
        req.body.name, 
        req.body.email
    ]
    const id = req.params.id;
    database.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.delete(`/student/:id`, (req, res) => {
    const sql = "DELETE FROM student WHERE id =?";
    const id = req.params.id;

    database.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log('Server is running on port http://localhost:8081');
});
