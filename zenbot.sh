#!/bin/sh
echo "Starte Darwin"
env node  --trace-warnings --max-old-space-size="3072" zenbot.js $@
echo "Darwin gestartet. 4096"
