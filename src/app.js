'use strict';

/**
 * Express application factory.
 * Separated from server.js so tests can import the app without binding a port.
 *
 * GEN-256 – scaffold sdr-demo-app web application entry point and HTML shell.
 * GEN-260 – serves index.html (containing <title>Hello App</title>) at GET /.
 */

const express = require('express');
const path = require('path');

function createApp() {
  const app = express();

  // Serve static files from src/public (index.html etc.)
  app.use(express.static(path.join(__dirname, 'public')));

  // Explicit root handler so the acceptance test can assert HTTP 200 clearly
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  return app;
}

module.exports = { createApp };
