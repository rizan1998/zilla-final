const mongoose = require('mongoose');
const request = require('supertest');
const config = require('../../config/config');
const app = require('../../app');
const productFixtures = require('../fixtures/products');
const Products = require('../../src/models/product');

describe('GET /api/v1/products', () => {
  beforeAll(async () => {
    await mongoose.disconnect();
    await mongoose.connect(config.dbUrl, { authSource: 'admin' });
  });
  afterAll(async () => {
    await Products.deleteMany({});
    await mongoose.disconnect();
  });
  it('should return products', async () => {
    const response = await request(app)
      .post('/api/v1/products')
      .send(productFixtures[0]);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(productFixtures[0].name);
    expect(response.body.price).toBe(productFixtures[0].price);
    expect(response.body.stock).toBe(productFixtures[0].stock);
  });
});
