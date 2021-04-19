const express = require('express')
const fs = require('fs')

const app = express();

// boilerplate for 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(__dirname + '/public'))
    fs.readFile('./public/input.txt', (err, data) => {
        console.time('day1')
        if (err) {
            fs.appendFile('./public/error.txt', 'error:', err)
        }
        const storedInput = data.toString('utf8')
        let startFloor = 0
        let currentFloor = startFloor
        for (pos in storedInput) {
            // check if the pos is ( or ) and adjust currentfloor
            if (storedInput[pos] === '(') {
                // console.log('+1')
                currentFloor = currentFloor + 1
            } else if (storedInput[pos] === ')'){
                // console.log('-1')
                currentFloor = currentFloor - 1
            }
            if (currentFloor === -1){
                console.log('pos', pos)
            }
        }
        console.log(currentFloor)
        // 
    console.timeEnd('day1')
    // part one score = 4ms
    }

)


app.listen(3000);