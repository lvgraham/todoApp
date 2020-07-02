const Router = require('express').Router;

const todoRouter = Router();

const todos = [
    {
        id:25,
        name: 'walk dwight'
    }
]

todoRouter.get('/', (req, res) => {
    console.log('running as expected');
    res.json(todos);
})

todoRouter.get('/:id', (req, res) =>{
    const {id } = req.params;
    const todo = todos.find(todo => todo.id === Number.parseInt(id));
    if (todo){
        return res.json(todo);
    }
    res.json({status: false, message: 'not found'});
});

todoRouter.post('/', (req, res) => {
    const newTodo = req.body;
    res.send('new todo created');
});

module.exports = todoRouter;