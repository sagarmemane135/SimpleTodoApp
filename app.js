const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Setup session middleware
app.use(session({
    secret: 'mySecretKey', // Change this to a more secure secret in production
    resave: false,
    saveUninitialized: true
}));

// Middleware to add session todos if not present
app.use((req, res, next) => {
    if (!req.session.todos) {
        req.session.todos = []; // Initialize an empty array if todos don't exist in session
    }
    next();
});

app.get('/', (req, res) => {
    res.render('index', { todos: req.session.todos });
});

app.post('/add-todo', (req, res) => {
    const { task } = req.body;
    req.session.todos.push({ task, completed: false });
    res.redirect('/');
});

app.post('/complete-todo/:index', (req, res) => {
    const { index } = req.params;
    if (index < req.session.todos.length) {
        req.session.todos[index].completed = true;
    }
    res.redirect('/');
});

app.post('/delete-todo/:index', (req, res) => {
    const { index } = req.params;
    if (index < req.session.todos.length) {
        req.session.todos.splice(index, 1);
    }
    res.redirect('/');
});

app.listen(3000, () => console.log('Server started on port 3000'));
