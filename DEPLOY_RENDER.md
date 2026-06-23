Deploying to Render
------------------

Quick steps to deploy this Create React App to Render as a static site:

1. Go to https://dashboard.render.com and sign in (create an account if needed).
2. Click "New" → "Static Site".
3. Connect your GitHub account and select the repository: `mohamedaathil382/workshop-app`.
4. Set the branch to `main` (or the branch you want to deploy).
5. Build Command: `npm run build`
6. Publish Directory: `build`
7. Environment: Node (Render will detect) — no special env vars required for a basic static build.
8. Click "Create Static Site" — Render will build and publish. The site URL will be shown in the dashboard.

Notes and tips
- If you need a specific Node version, add an `engines` field to `package.json`, e.g.:

  "engines": {
    "node": ">=18"
  }

- If you want automatic deploy previews for PRs, enable the "Auto-Deploy Pull Requests" option in Render.
- To use a custom domain, add it in the Render dashboard and follow the DNS instructions.

Optional: `render.yaml` example (for advanced auto-configuration via Render's spec):

```yaml
services:
  - type: static
    name: workshop-app
    env: node
    repo: https://github.com/mohamedaathil382/workshop-app.git
    branch: main
    buildCommand: npm run build
    publishPath: build
```

If you'd like, I can add the `render.yaml` to the repo and create the deploy, or I can open the Render dashboard and guide you through connecting the repo.
