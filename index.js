const express = require('express');
const blogs = require('.models/blogsModel')
const app = express();

const port = process.env.port || 3005;

const bookRouter = express.Router();
bookRouter.route('/.blogGetPop')
.get((req, res) => {
    const response = { hello: 'This is my API'};
    res.json(response);
    // res.send would send back text instead of json
});

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my TEST API');
});

app.listen(port, () =>{
    console.log('Running on port ' + port);
});



   