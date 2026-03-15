#!/bin/bash
set -euo pipefail

# Only run in remote (Claude Code on the web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Install dependencies based on available manifests
cd "$CLAUDE_PROJECT_DIR"

if [ -f "package.json" ]; then
  npm install
fi

if [ -f "requirements.txt" ]; then
  pip install -r requirements.txt
fi

if [ -f "pyproject.toml" ]; then
  pip install -e ".[dev]" 2>/dev/null || pip install -e . 2>/dev/null || true
fi
