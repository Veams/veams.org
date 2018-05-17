# veams.org

The project is build with `veams-cli`. You can add or modify settings in the provided `veams-cli.json`.

`Veams-cli` is responsible for the initial setup as well as for the scaffolding process of blueprints.
Every task and configuration files are exposed in the `configs` folder.

For more information take a look at the Veams documentation.
- Veams Overview: https://github.com/Sebastian-Fitzner/Veams
- Veams Website: http://veams.org/

------------------

## Folder Structure

------------------

### Basic Files and Folders

The app contains multiple sections which have its own responsibility. In general the structure looks like that:

``` bash
├── app.js
├── app.events.js
├── app.veams.js
├── app.scss
├── assets
│   ├── fonts
│   ├── icons
│   ├── img
│   └── media
├── core
│   ├── components
│   ├── layouts
│   ├── store
│   └── styles
│       ├── base.scss
│       ├── get-media.scss
│       ├── modifiers.scss
│       └── print.scss
├── features(*)
├── pages
└── shared
    ├── components
    ├── styles
        ├── _shared.scss
        ├── _vars.scss
        ├── helpers
        │   ├── _helpers.scss
        │   └── functions
        └── icons
└── utilities
```

### App Files

``` bash
├── app.js
├── app.veams.js
├── app.events.js
└── app.scss
```

These files are the main entry point of our application.

### Assets

As the folder says, it contains all the assets like images, fonts, svg icons and more which we can use project wide.

### Core

``` bash
├── core
    ├── components
    ├── layouts
    ├── store (*)
    └── styles
        ├── base.scss
        ├── get-media.scss
        ├── modifiers.scss
        └── print.scss
```

The core is responsible for the project specific setup. It contains components and states which define the base of the application.

Core Components are global components which are app specific, means you cannot share these components project wide.

__Examples__

- Header
- Navigation
- Footer

#### Layouts

The layout contains the general structure of the application. It is responsible for the general rendering of the application.

#### Styles

The styles folder contains all important global styles like:

- reset
- base
- modifiers

------------------

## Tasks

------------------

### Icons (`configs/tasks/icons/`)

Icons have to be saved in your assets folder. The default location for your icons is `assets/icons`.

Every icon task has its own command line interface. You can pass options by calling the task and adding them like so:

``` bash
npm run ${icon}:generate -- --option1 --option2 --option3
```

`${icon}` needs to be replaced with the icon workflow you have chosen.

#### Icons Webfont (`configs/tasks/icons/webfont.js`)

To build the webfont from your icons you only need to execute:

``` bash
npm run wefont:generate
```

This creates a new `webfont.scss` in your `shared/styles/icons` folder. The new file gets imported automatically.
Next to that it creates the font called `iconfont` in `assets/fonts`.

#### Icons Sprite (`configs/tasks/icons/sprite.js`)

To build a sprite from your icons which will be used as background image in your CSS you only need to execute:

``` bash
npm run sprite:generate
```

This creates a new `sprite.scss` in your `shared/styles/icons` folder. The new file gets imported automatically.
Next to that it creates the sprite files called `sprite.svg` in `assets/img/`.

------------------

### Images (`configs/tasks/images/`)

Images have to be saved in your assets folder. The default location for your icons is `assets/img`.

#### Image Generation (`configs/tasks/images/images-resizer.js`)

To generate images you can use the following commands which are defined in `package.json`:

``` bash
`npm run images:generate ${files}`
```

__Examples__

1. `npm run images:generate "**/*.jpg"` => Simple globbing support.
1. `npm run images:generate "test/*.jpg"` => Globbing in a specific folder.
1. `npm run images:generate "test.jpg"` => Generate only one image.
1. `npm run images:generate "test.jpg" preset=default` => Generate one image with another preset.

**Customization**

__Paths__

All commands have a reference to the images in your `assets/img/` folder. The `assets` folder can be change in `veams-cli.json`.

__Presets__

Custom presets can easily be added by you. Take a look at the `preset` folder in the configuration path.

__Options__

You can change the `suffix` definition in the provided `config.js` file.
Furthermore you can easily add options for your presets, just take a look at https://github.com/felixrieseberg/responsive-images-generator#configuration.


#### Image Data Export (`configs/tasks/images/images-export.js`)

To export further images information to a JSON file you can use the following commands which are defined in `package.json`:

1. `npm run images:export` => Export meta data information to `images.json` in `assets` folder.

------------------

### Server

The provided express server instance exposes an API which you can use to work with your file system.

The API Server is a mock server which can be used in a really simple way.

Just add your JSON mocks to `src/server/mocks/${endpoint}` and
make sure that you already have an endpoint available in `src/server/api/${endpoint}`.

After that you can reach that endpoint at the following location:

- `/api/${endpoint}` => You will get all mocks in an array.
- `/api/${endpoint}/${filename}` => You will get a specific mock by using the filename as Id.

#### Add endpoint to API ([`veams-bp-mock-api-endpoint`](https://github.com/Veams/veams-bp-mock-api-endpoint))

You can easily add a new endpoint by using `veams-cli`.

Just execute the following command `veams add api [name]`.

This will create a new folder in `server/routes/`.
The only thing you have to do is referencing the file in `server/routes/index.js` by adding the snippets from `USAGE.md`.

