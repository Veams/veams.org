<p align="right">
    <a href="https://badge.fury.io/js/%40veams%2Futility-grid"><img src="https://badge.fury.io/js/%40veams%2Futility-grid.svg" alt="npm version" height="18"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Grid

## Description

Bourbon Neat provides a simple grid system, which you can use in your projects. 

With `u-grid` there is implemented a mobile first class based system which is like Bootstrap or Foundation, but you are also flexible enough to just use mixins in your Sass or SCSS files. 

In general `u-grid.scss` generates a set of grid column classes using namespaces.

------------

## Requirements
- Bourbon Neat => _http://neat.bourbon.io/ => `npm i bourbon-neat --save-dev`_
- wrapWith helper => _https://www.npmjs.com/package/mangony-hbs-helper-wrap-with => `npm i mangony-hbs-helper-wrap-with --save-dev`_

### Documentation
- Bourbon Neat: _https://neat.bourbon.io/_

------------

## Installation

### Installation with Veams

`veams install u grid`

------------

## Fields

### Grid Row

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
|settings.gridPadding | Boolean | [`false`] | _Add the margin to the left._|
|settings.gridClasses | String | | _Modifier classes like `is-equal-height`._| 

### Grid Col

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
|colClasses | String | |_Column and offset classes._|

-------------

## SASS Options

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
| $grid-defaults | Object | [`(columns: 12, gutter: 52px)`] | _Default values which will be used in Neat._ |
| $grid-breakpoints-defaults | Object | [`('mobile-s': 320px, 'mobile-xl': 657px, 'tablet-p': 768px, 'tablet-l': 1024px, 'desktop': 1440px)`] | _Default values which will be used in Neat._ |
| $grid-class-col | String | [`is-col`] | _Column class namespace._ |
| $grid-offset | String | [`offset`] | _Offset class namespace._ |

### CSS Output

In combination with the Sass map for all major breakpoints, a specific mixin creates our markup classes which has the following structure: 
- `.{$grid-class-col}-[namespace]-[number]` - _for a column that covers a specific number of columns (e.g. 1-12 by default)_
- `.{$grid-class-col}-[namespace]-{$grid-offset}-[number]` - _for pushing a col a specific number of columns (e.g. 1-11 by default)_

### Modifier Classes

You can add the following modifiers to `u-grid-row|is-grid-row`:
- is-collapsed - _Delete the margin on the left (can be set via `settings.gridCollapsed`)_
- is-equal-height - _Add flex box styles to support equal heights for the columns_

### Usage Examples
- `is-col-mobile-s-12 is-col-mobile-xl-6 is-col-tablet-p-4 is-col-tablet-p-offset-4 is-col-tablet-l-3 is-col-tablet-l-offset-0`

-------------

## Example

Example for overwrite u-grid default settings in _vars.scss:

``` scss
/* ===================================================
BREAKPOINT SETTINGS
=================================================== */
// Breakpoints
$bp-mobile-s: 320px;
$bp-mobile-l: 600px;
$bp-tablet-s: 768px;
$bp-desktop: 1230px;
$bp-desktop-l: $max-width;

// Breakpoints Map
$bp: (
	'mobile-s': (
        columns: 12,
        gutter: 20px,
        media: 320px
    ),
    'mobile-l': (
        columns: 12,
        gutter: 20px,
        media: 657px
    ),
    'tablet-s': (
        columns: 12,
        gutter: 20px,
        media: 768px
    ),
    'desktop-l': (
        columns: 12,
        gutter: 20px,
        media: 1024px
    ),
    'desktop': (
        columns: 12,
        gutter: 20px,
        media: 1440px
    )
);

$grid-breakpoints-defaults: $bp;
$grid-defaults: (
	columns: 12,
	gutter: 36px
);
```
