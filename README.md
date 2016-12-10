A shell implemented in node.  It is meant for running scripts, not for being an interactive shell.

It's currently a work-in-progress but already makes it easier to write and run NPM scripts cross-platform.

The eventual goal is to allow jumping back and forth between shell-like scripting and JavaScript logic by using ES template strings.

    // For example
    run `
        rm -rf ${ cleanDirectories.map(d => path.resolve(d)) }
        pug ${ glob('**.pug') }
    `;

# Motivation

I often need to write build scripts for my node projects.  Using npm scripts for all but the most trivial tasks, **in a cross-platform manner**, is annoying.
I just want to list commands in a file and execute them one after the other, without worrying about `bash` or `cmd.exe`.

# Basic usage:

For use in your project, for example to run your npm scripts:

    npm install --save-dev nsh

...or if you want it in your PATH:

    npm install --global nsh

Invoke it like this:

    nsh [options] <script file>

There aren't any options at the moment.

<!--
# Flags:

-j Interpret script file as JS.  Transpile with ts-node.
-n NPM scripts mode.  Read the `npm_lifecycle_scripts` environment variable and run the script specified.

NPM scripts mode
{
    "nshScripts": {
        "compile": [

        ]
    },
    "nshOptions": {
        "dir": "npm-scripts"
    }
}
-->