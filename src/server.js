'use strict';

/**
 * Server entry point.
 * Port is read from the PORT environment variable; defaults to 3000.
 * No application secrets are hard-coded here.
 *
 * GEN-256 – scaffold sdr-demo-app web application entry point and HTML shell.
 */

const { createApp } = require('./app');

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';

const app = createApp();

app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`sdr-demo-app listening on http://${HOST}:${PORT}`);
});
