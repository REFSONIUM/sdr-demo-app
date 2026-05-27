# sdr-demo-app
Smart wardrobe assistant — built by GENESIS agents

## Getting started

### Prerequisites
- Node.js ≥ 18

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm start
# App is available at http://localhost:3000
```

The port can be overridden via the `PORT` environment variable:
```bash
PORT=8080 npm start
```

### Run tests
```bash
npm test
```

## Project structure
```
src/
  app.js          # Express application factory
  server.js       # Server entry point (binds PORT from env)
  public/
    index.html    # HTML shell (title: "Hello App")
  server.test.js  # Jest + Supertest acceptance tests
```

---
*Scaffolded by FORGE — story GEN-256*
