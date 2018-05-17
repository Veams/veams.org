
# section (`component`)

## Description

This blueprint is based on the blueprint of Veams.

> Just place a generic quote for your type.

-----------

## Requirements
- `Veams#5.0.0` - Replace this requirement with the libs you need for this type.

-----------

## Installation

### Installation with Veams from local machine

`veams install bp absolute/filepath/to/section`

### Installation with npm or Veams

When published on npm you can install the component by executing:

1. `veams install veams-component section`

-----------

## Fields

### `c-section`

The partial is a `wrapWith` partial. This means that you can access all properties and hashes via `props`.
See [Mangony Handlebars Helper - wrapWith](https://www.npmjs.com/package/mangony-hbs-helper-wrap-with) for detailed instructions.

#### Settings
- settings.sectionClasses {`String`} - _Modifier classes for component._
- settings.sectionContextClass {`String`} [default] - _Context class of component._ 

#### Content
- content.sectionField {`String`} - _Please add a description!_

------------

## SASS

### Variables

- $section-my-custom-var {`String`} [] - _Please add a description!_

### Modifier Classes

You can add the following modifiers to `section`:
- is-modifier - _Please add a description!_
