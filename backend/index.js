
const express = require("express")
const app = express()
app.use(express.json()); // należy pamiętać o nagłówku w fetch-u
// app.use(express.text()) // w razie problemów z danymi użyj text()
const PORT = 3000;
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded());

app.post("/", function (req, res) {
    console.log(req.body)
    res.send(req.body)
})
let users = []
let id = 0
app.post("/add", function (req, res) {
    let userdata = req.body
    let flag = false
    users.forEach(element => {
        if(element.login == userdata.login){
            flag = true
        }
    });
    if(flag == false){
        let user = {id: id, login: userdata.login, password: userdata.password, date: Date.now()}
        console.log(userdata.login, userdata.password)
        console.log("user registered")
        id = id + 1
        users.push(user)
        res.status(200)
    }
    else{
        res.status(401).json({ error: 'user already exists' })
    }
    res.end()
})

app.get("/users", function (req, res) {
    res.send(users)
    res.end()
})

app.post("/delete", function(req, res) {
    console.log(users)
    let id = req.body.id;
    let i = 0
    while(i<users.length){
        if(users[i].id == id){
            users.splice(i, 1);
            break;
       }
       i = i+1
    }
    console.log(users)
    res.end()
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

