const express = require('express');  
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    const dog = {
        name: 'Putu',
        Age: '10',
        Breed: 'GoldenRetriever'
    };
    res.json(dog);
});

app.listen(PORT, () => {
    console.log("Server is running man");
    console.log(`✅ Server running at http://localhost:${PORT}`);
});



const name = 'kitten';
var course = 'AIML';

function som() {
    var age = 20;
    var bruh = 30;
    var sum = age + bruh;
    console.log(sum);
}

function push() {
    let pokis = ["Charizard", "Bulbasaur"];
    pokis.push("BigManBlastoise");
    console.log(pokis);
}

push();
