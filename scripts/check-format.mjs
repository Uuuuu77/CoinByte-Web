import { readFileSync } from 'node:fs'
import { globSync } from 'node:fs'

// Lightweight formatting guard for this dependency-constrained environment.
// It catches tabs/trailing whitespace without rewriting established UI code.
const files = globSync('{src,tests,scripts}/**/*.{js,jsx,mjs}', { exclude: ['node_modules/**', 'dist/**'] })
let failed = false

for (const file of files) {
  const lines = readFileSync(file, 'utf8').split('\n')
  lines.forEach((line, index) => {
    if (/\s$/.test(line) && line !== '') {
      console.error(`${file}:${index + 1} has trailing whitespace`)
      failed = true
    }
    if (/^\t+/.test(line)) {
      console.error(`${file}:${index + 1} starts with a tab`)
      failed = true
    }
  })
}

if (failed) process.exit(1)
