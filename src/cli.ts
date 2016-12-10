#!/usr/bin/env node
import * as crossSpawn from 'cross-spawn';
import * as fs from 'fs';

const scriptSource = fs.readFileSync(process.argv[2], 'utf8');
const commands = scriptSource.split(/\r\n|\n|\r/);
commands.forEach(commandString => {
    const args = commandString.split(/[ \t]+/).filter(v => v);
    if(args.length < 1) return;
    const {status, stdout, error} = crossSpawn.sync(args[0], args.slice(1), {
        stdio: 'inherit'
    });
    if(error) throw new Error(`Unable to execute command: ${error}`);
    if(status) throw new Error(`Command returned non-zero exit code: ${status}`);
});