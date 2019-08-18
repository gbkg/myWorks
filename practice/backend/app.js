const express = require('express');
const bodyParser = require('body-parser');

const Post = require('./models/post');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
    'Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader('Access-Control-Allow-Methodes', 'GET, POST, DELETE, OPTIONS');
    next();
});

app.post('/api/posts', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
});
//@pirozok100
app.use('/api/posts', (req, res, next) => {
    const posts = [
        {id: 'dcsdc', 
        title: 'First server-side post', 
        content: 'This is coming from the server'
    },
    {id: 'dfhfgjd', 
    title: 'Second server-side post', 
    content: 'This is coming from the server!'
}

    ];
    res.status(200).json({
        massage: 'posts fatched successfully',
        posts: posts
    });
});

module.exports = app; //export app