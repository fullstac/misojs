misojs
======

misojs: MIthril iSOmorphic JavaScript framework

_NOTE:_ Not for public consumption just yet!

## Install

* Download this [zip file](https://github.com/jsguy/misojs/archive/master.zip) and expand in a directory somewhere.
* `npm install`
* chmod +x bin/miso.bin.js
* bin/miso.bin.js
* http://localhost:6476/ (6476 = miso if you typed it on a keypad)

You can now click the link to get to the user edit page - click it, then re-load that url, and you'll see that it can load that URL in the browser, and render it on the backend, whilst initalizing the app on the frontend, ie: isomorphic!


## Future install

```javascript
npm install misojs -g
```

Then to create and run a project:

```javascript
miso -n myProject -s todo
cd myProject
miso run
```

This creates a new project with the 'todo' skeleton applied, and runs it on http://localhost:6476

Note: right now you can acheive the same by goin to the directory you installed miso in, and doing:

```javascript
npm install . -g
```

This will make `miso` available globally.

## How it works in general

* Convention over configuration is used when possible
* Controllers can be manually configured, but are automatically routed based on actions (see c/index.js for details)
* Views are (by default) named [controller][action].js, for example: for the "user edit" action, the view is "user.edit.js"
* Client side code is generated from our rotes/controller/view/models - maybe we could use browserify instead?



## TODO before making publically available

The main philosophy for miso is to be easy to get up and running whilst providing full support for best practice development.

We need to address the following issues before making miso.js available to the public:

### General

* Define what level of pluggability we want - some parts make sense as libraries, but miso.js itself is a framework.
* Documentation for how this all works

### Models

A proper way to enhance standard mithril models - we want to be able to handle:

* Objects with native types, and "mithril prop" style getter/setters
* Data validation capabilities
* Collections
* Relations: has one, has many, belongs to one, belongs to many, etc...

I'm considering using restify to create a JSON API, and then a "store" object similar to what you mentioned, using bookshelf.js, that looks quite neat, and would allow us to make it work both client and server side. It would also nicely separate concerns.

### Views

* Handling of composed views (this might be handy: https://github.com/philtoms/mithril.elements/)

### Refactor libraries

* Refactor sugartags/bindings/etc... to include require-style exposure by default.

### Nice to have (not required for initial release, but high on the list)

* Scaffolding solution that can create basic mvc (see bin/miso.bin.js)
* Skeleton support, to allow user to generate a particular type of app, eg: "admin app", "blog", etc... 


