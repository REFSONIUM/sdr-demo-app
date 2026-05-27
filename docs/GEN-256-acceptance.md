# GEN-256 — Scaffold sdr-demo-app web application entry point and HTML shell

## Story summary
Create the minimal project structure for the sdr-demo-app: a runnable web server entry
point that serves a bare HTML page with a page title and a placeholder body. The app must
be reachable at a local URL and return HTTP 200.

## Acceptance criteria traceability

| # | Criterion | Implemented in | Test |
|---|-----------|---------------|------|
| AC-1 | `GET /` returns HTTP 200 | `src/app.js` – `app.get('/')` | `server.test.js` – *"returns HTTP 200"* |
| AC-2 | `<title>Hello App</title>` present | `src/public/index.html` | `server.test.js` – *"returns an HTML document with \<title\>Hello App\</title\>"* |
| AC-3 | Port/host read from `process.env`, no hard-coded secrets | `src/server.js` – `process.env.PORT` / `process.env.HOST` | Manual verification + `.gitignore` excludes `.env` |

## Architecture conformance

- **DES-001** — No new HTTP endpoints are _registered_ in an API registry because this is
  a front-end HTML shell (no REST/JSON contract). If a JSON API is added in a later story
  an OpenAPI spec MUST be committed to `atlas-master/api-registry/sdr-demo-app/` first.
- **DES-002** — No persistence layer is introduced in this story; StateStore is not
  applicable at this stage.
- **INV-001/INV-002** — No state-changing operations; ConstitutionEngine routing applies
  to agent actions, not to this demo app's user-facing server.
- **INV-003** — No Spring/CDI beans; Node.js factory pattern (`createApp()`) used
  throughout, which is idiomatic constructor injection for this stack.
- **INV-004** — All commits reference JIRA story GEN-256.

## Running locally

```bash
npm install
npm start          # http://localhost:3000
PORT=8080 npm start  # custom port
npm test           # Jest + Supertest suite (7 tests)
```
