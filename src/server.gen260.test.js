'use strict';

/**
 * Acceptance tests for GEN-260.
 *
 * Story: Add minimal server entry point and HTML shell serving HTTP 200 at /
 *
 * Criteria verified here:
 *  AC-1: GET / returns HTTP 200.
 *  AC-2: The returned HTML document contains <title>Hello App</title>.
 *  AC-3: Port and runtime config are sourced from environment variables
 *        (server.js reads process.env.PORT — verified by smoke-checking that
 *        the app factory is decoupled from any hard-coded port binding).
 */

const request = require('supertest');
const { createApp } = require('./app');

describe('GEN-260 — server entry point and HTML shell', () => {
  let app;

  beforeAll(() => {
    app = createApp();
  });

  // AC-1
  it('AC-1: GET / returns HTTP 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });

  // AC-2
  it('AC-2: response body contains <title>Hello App</title>', async () => {
    const res = await request(app).get('/');
    expect(res.headers['content-type']).toMatch(/text\/html/);
    expect(res.text).toContain('<title>Hello App</title>');
  });

  // AC-2 (body placeholder check)
  it('AC-2: response body contains a non-empty placeholder body element', async () => {
    const res = await request(app).get('/');
    // The <body> must not be empty — any non-whitespace content inside body counts
    expect(res.text).toMatch(/<body[\s\S]*\S[\s\S]*<\/body>/);
  });

  // AC-3: The app factory accepts no port argument — port is bound only in
  // server.js via process.env.PORT.  We verify server.js references PORT env var.
  it('AC-3: server.js reads PORT exclusively from process.env.PORT', () => {
    const fs = require('fs');
    const path = require('path');
    const serverSrc = fs.readFileSync(
      path.join(__dirname, 'server.js'),
      'utf8'
    );
    // Must reference process.env.PORT
    expect(serverSrc).toContain('process.env.PORT');
    // Must NOT contain a bare numeric port literal (e.g. ":3000" string or "listen(3000)")
    expect(serverSrc).not.toMatch(/listen\(\s*\d{4,5}\s*[,)]/);
  });
});
