const fs = require('node:fs');
const path = require('node:path');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
// The joke is defending a pile of unread browser tabs as if on trial.
fs.writeFileSync(path.join(outDir, 'entry.txt'), 'Confession: I have 47 tabs open, I read none of them, and I would defend each one in court.\n', 'utf8');
