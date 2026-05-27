'use strict';

/**
 * Acceptance tests for GEN-256 and GEN-257.
 *
 * GEN-256 criteria verified:
 *  1. GET / returns HTTP 200.
 *  2. The response body contains <title>Hello App</title>.
 *  3. Content-Type is text/html.
 *
 * GEN-257 criteria verified:
 *  4. The page renders a text input labelled 'Name' and a 'Submit' button.
 *  5. Submitting the form navigates to / with the name value as a query parameter
 *     (GET /?name=Alice returns HTTP 200).
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

  // GEN-257 – name-input form

  it('page contains a text input with name="name" for the Name field', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    // The input must carry name="name" so the value is forwarded as a query param
    expect(res.text).toMatch(/<input[^>]+name="name"/);
  });

  it('page contains a label for the Name input', async () => {
    const res = await request(app).get('/');
    // A <label> element that either wraps or references the Name input
    expect(res.text).toMatch(/<label[^>]*>/i);
    expect(res.text).toContain('Name');
  });

  it('page contains a Submit button', async () => {
    const res = await request(app).get('/');
    expect(res.text).toMatch(/<button[^>]*type="submit"[^>]*>Submit<\/button>/i);
  });

  it('GET /?name=Alice returns HTTP 200 (form submission target works)', async () => {
    const res = await request(app).get('/?name=Alice');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/html/);
  });
});
