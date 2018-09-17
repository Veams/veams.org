
# contentSection (`component`)

## Description

This blueprint is based on the blueprint of Veams.

> Just place a generic quote for your type.

-----------

## Requirements

-----------

## Installation

### Installation with Veams from local machine

``` cmd
veams install bp absolute/filepath/to/content-section
```

### Installation with npm or Veams

When published on npm you can install the component by executing:

``` cmd
veams install c veams-component content-section
```

-----------

## Fields

### `c-content-section`

The partial is a `wrapWith` partial. This means that you can access all properties and hashes via `props`.
See [Mangony Handlebars Helper - wrapWith](https://www.npmjs.com/package/mangony-hbs-helper-wrap-with) for detailed instructions.


| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| settings.contentSectionClasses | String | | _Modifier classes for component._ | 
| settings.contentSectionContextClass | String | `default` |  - _Context class of component._ |  

#### Content
| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| content.contentSectionField | String | |  _Please add a description!_ |

------------

## Sass Options

| Variable | Value | Description |
|:--- | :---: |:--- |
| $content-section-my-custom-var | | _Please add a description!_ |
