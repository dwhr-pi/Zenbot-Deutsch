#!/bin/sh
echo "Starte Zenbot mit 3072 MB Arbeitsspeicher"
env node  --trace-warnings --max-old-space-size="3072" zenbot.js $@
echo "Zenbot gestartet. 3072 MB"
