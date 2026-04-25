const request = require('supertest');
const app = require('../app');

test('Debe responder Hola Mundo DevOps', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hola Mundo DevOps 🚀');
});