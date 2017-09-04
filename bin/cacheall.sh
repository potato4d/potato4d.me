#!/usr/bin/env node

/**
 * キャッシュ対象ファイル作成用スクリプト
 * node => 8.0.0
**/

const fs = require('fs')
const { promisify } = require('util')
const _exec = require('child_process').exec
const exec = promisify(_exec)

exec(`find ./dist | sed 's/\\.\\/dist\\//\\//g'`)
.then(({stdout}) => {
  const files = stdout.split('\n').filter((f)=>f)
  const output = `
const targetFiles = [
  "${files.join('",\n  "')}"
]
`
  fs.writeFileSync('./dist/files.js', output)
})
.catch((err) => {
  console.log(err)
})
