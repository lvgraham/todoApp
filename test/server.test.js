const {server: app} = require('../server');
const supertest = require('supertest');

const todos = [
    {
        id:25,
        name: 'walk dwight'
    }
]

describe('server', () => {
    it('it should return all todos', async () => {
        const request = supertest(app);
        const response = await request.get('/api/todos').set('Accept', 'application/json')
        expect(response.status).toBe(200);
        const resObj = JSON.parse(response.text);
        expect(resObj).toEqual(todos);
    });

    it('it should return one todo', async() => {
        const request = supertest(app);
        const res = await request.get('/api/todos/25').set('accept', 'application/json');
        expect(res.status)
    });
    
    // it('it should return all todos', () => {

    // });

})