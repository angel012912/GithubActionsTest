const supertest = require('supertest');
const app = require('./testIndex');

it('Hello World', async () => {
    try {
        expect(1).toBe(1);
    }catch (err){
        console.log(err);
    }
});

it('GET /', async () => {
    try {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200);
    }catch (err){
        console.log(err);
    }
});



