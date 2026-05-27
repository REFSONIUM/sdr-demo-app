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

### Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT`   | `3000`  | TCP port the HTTP server listens on |
| `HOST`   | `0.0.0.0` | Interface the HTTP server binds to |

Port and host are read **exclusively** from environment variables — no values are hard-coded in source files.

Override the port:
```bash
PORT=8080 npm start
# curl http://localhost:8080/  → HTTP 200, <title>Hello App</title>
```

### Run tests
```bash
npm test
```

## Project structure
```
src/
  app.js                  # Express application factory
  server.js               # Server entry point — binds PORT/HOST from env (GEN-260)
  public/
    index.html            # HTML shell: <title>Hello App</title> + placeholder body
  server.test.js          # Jest + Supertest acceptance tests (GEN-256, GEN-257)
  server.gen260.test.js   # Acceptance tests for GEN-260
```

---
*Scaffolded by FORGE — stories GEN-256, GEN-260*
