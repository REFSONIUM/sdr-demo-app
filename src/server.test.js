'use strict';

/**
 * Acceptance tests for GEN-256.
 *
 * Criteria verified:
 *  1. GET / returns HTTP 200.
 *  2. The response body contains <title>Hello App</title>.
 *  3. Content-Type is text/html.
 */

const request = require('supertest');
const { createApp } = require('./app');

describe('GET /', () => {
  let app;

  beforeAll(() => {
    app = createApp();
  });

  it('returns HTTP 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });

  it('returns an HTML document with <title>Hello App</title>', async () => {
    const res = await request(app).get('/');
    expect(res.headers['content-type']).toMatch(/text\/html/);
    expect(res.text).toContain('<title>Hello App</title>');
  });

  it('body contains a placeholder paragraph', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('sdr-demo-app');
  });
});
