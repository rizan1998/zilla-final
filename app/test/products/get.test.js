const mongoose = require('mongoose');
const request = require('supertest');
const config = require('../../config/config');
const app = require('../../app');
const productFixtures = require('../fixtures/products');
const Products = require('../../src/models/product');

describe('GET /api/v1/products', () => {
  beforeAll(async () => {
    await mongoose.disconnect();
    await mongoose.connect(config.dbUrl, { authSource: 'admin' }).then(async () => {
      await Products.insertMany(productFixtures);
    });
  });
  afterAll(async () => {
    await Products.deleteMany({});
    await mongoose.disconnect();
  });
  it('should return array', async () => {
    const response = await request(app).get('/api/v1/products');
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');
    expect(Array.isArray(response.body)).toBeTruthy();
  });
  it('should return products', async () => {
    const response = await request(app).get('/api/v1/products');
    expect(response.status).toBe(200);
    expect(response.body.length > 0).toBeTruthy();
  });
});
