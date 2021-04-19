const express = require('express')
const bcrypt = require('bcrypt-nodejs')

const app = express();

// boilerplate code for json
app.use(express.urlencoded({extended: false}));
app.use(express.json())

// creates this to demonstrate database concept
const database = {
    users: [
        {
            id: '123',
            name: "tippi",
            email: 'tippi@boober.org',
            password: '5stars*****',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: "danjo",
            email: 'danjo@boober.com',
            password: 'imaderpderp',
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: ''
        }
    ]
}

app.get('/', (req, res)=>{
    // check that the register works
    res.send( database.users)
    
})

// doing signin
app.post('/signin', (req, res)=> {
    if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
        res.json('success')
    } else {
        res.status(400).json('error logging in')
    }
    res.json('signin') 
})

// register
app.post('/register', (req, res)=> {
    const { email, name, password } = req.body
    bcrypt.hash(password, null, null, function(err, hash) {
        console.log(hash)
    });
    database.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length-1])
})

app.get('/profile/:id', (req, res)=> {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user);
        } 
    })
    if (!found) {
        res.status(400).json('not found')
    }
})



// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

// image submit increases thier 'entries' 
app.put('/image', (req, res) => {
    // we need to check the id -this is copied from above so lets make a func later
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++
            return res.json(user.entries);
        } 
    })
    if (!found) {
        res.status(400).json('not found')
    }
})

app.listen(3000, ()=> {
    console.log('app is running on port 3000')
})