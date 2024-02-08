import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "KAKA@feltrim1511",
    database:  "clients",
    dateStrings: 'date'
})


app.get('/', (req, res) => {
    const sql = "SELECT * FROM new_clients;";
    db.query(sql, (err, data) => {
        if(err) {
            return res.json({Error: JSON.stringify(err)})
        }
        return res.json(data)
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO new_clients (id, name, email, phone, date) VALUES (?)";
    const values = [
        req.body.id,
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.date
    ]
    db.query(sql,[values], (err, data) => {
        if(err) {
            return res.json({Error: JSON.stringify(err)})
        }
        return res.json(data)
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE new_clients SET name = ?, email = ?, phone = ?, date = ? where id = ?";

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.date
    ]

    const id = req.params.id;
    db.query(sql,[...values, id], (err, data) => {
        if(err) {
            return res.json({Error: JSON.stringify(err)})
        }
        return res.json(data)
    })
})

app.get('/getrecord/:id', (req,res) => { 
    const id = req.params.id;
    const sql = "SELECT * FROM new_clients where id = ?"
    db.query(sql,[id], (err, data) => {
        if(err) {
            return res.json({Error: JSON.stringify(err)})
        }
        return res.json(data)
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM new_clients where id = ?";
    const id = req.params.id;
    db.query(sql,[id], (err, data) => {
        if(err) {
            return res.json({Error: JSON.stringify(err)})
        }
        return res.json(data)
    })
})

// <--------------------------------------------------------------------------------------CRUD Serviços--------------------------------------------------------------------------------->

app.get('/service/:id', (req, res) => {
    const client_id = req.params.id;
    const sql = "SELECT * FROM service where client_id = ?";
    db.query(sql,[client_id], (err, data) => {
        if(err) {
            return res.json({Error: JSON.stringify(err)})
        }
        return res.json(data)
    })
})

app.post('/service/:id', (req, res) => {
    const client_id = req.params.id;
    const sql = "INSERT INTO service (client_id, service_id, serv_name, serv_money, cost, finish_date) VALUES (?)";
    const values = [
        client_id,
        req.body.service_id,
        req.body.serv_name,
        req.body.serv_money,
        req.body.cost,
        req.body.finish_date
    ]
    db.query(sql,[values], (err, data) => {
        if(err) {
            return res.json({Error: JSON.stringify(err)})
        }
        return res.json(data)
    })
})

app.put('/service/:id', (req, res) => {
    const sql = "UPDATE service SET serv_name = ?, serv_money = ?, cost = ?, finish_date = ? where service_id = ?";

    const values = [
        
        req.body.serv_name,
        req.body.serv_money,
        req.body.cost,
        req.body.finish_date
    ]
    const id = req.params.id;
    db.query(sql,[...values, id], (err, data) => {
        if(err) {
            return res.json({Error: JSON.stringify(err)})
        }
        return res.json(data)
    })
})

app.get('/getrecordserv/:id', (req,res) => { 
    const sql = "SELECT * FROM service where service_id = ?"
    const id = req.params.id;
    db.query(sql,[id], (err, data) => {
        if(err) {
            return res.json({Error: JSON.stringify(err)})
        }
        return res.json(data)
    })
})


app.delete('/deleteservice/:id', (req, res) => {
    const sql = "DELETE FROM service where service_id = ?";
    const id = req.params.id;
    db.query(sql,[id], (err, data) => {
        if(err) {
            return res.json({Error: JSON.stringify(err)})
        }
        return res.json(data)
    })
})

app.listen(3030, ()=> {
    console.log('running')
})