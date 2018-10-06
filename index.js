var express = require('express');
const port = process.env.PORT || 3005
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', (req, res) => {
    res.send('App is running correctly!')
});

app.get('/hello/world', (req, res) => {
    res.status(400).json({'status':'error','message':'you have done a bad request'});
})

/* CORS */
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type')
    // Pass to next layer of middleware
    next()
});
/* Serve API */
app.listen(port, () => {
    console.log('Slack Bot listening on port 3005!')
})