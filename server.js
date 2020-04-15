let express = require('express');
let app = express();

app.get('/', (req, res) => {
    console.log('Data Send!!')
    res.send('Client Lab9')
});

app.get('/crash', (req, res) => {
    console.log('>>>>>>> Web Crash!! <<<<<<<')
    res.send('CrasH!!')
    console.log('>>>>>>> Server down!! <<<<<<<')
    process.exit(1)

})

app.listen(80, () => console.log('Server running at PORT', 80));