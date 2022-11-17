const supertest = require('supertest');
const app = require('./testIndex');

it('GET /', async () => {
    
    const response = await supertest(app).get('/');
    console.log(response.status);
    expect(response.status).toBe(202);
});



