'use strict';

/**
 * Server entry point.
 *
 * Port is read exclusively from the PORT environment variable (default: 3000).
 * HOST is read from the HOST environment variable (default: 0.0.0.0).
 * No application secrets or port values are hard-coded in source.
 *
 * GEN-256 – scaffold sdr-demo-app web application entry point and HTML shell.
 * GEN-260 – minimal server entry point serving HTTP 200 at / with env-only config.
 */

const { createApp } = require('./app');

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';

const app = createApp();

app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`sdr-demo-app listening on http://${HOST}:${PORT}`);
});
