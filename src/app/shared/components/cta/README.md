<p align="right">
<a href="https://badge.fury.io/js/%40veams%2Fcomponent-cta"><img src="https://badge.fury.io/js/%40veams%2Fcomponent-cta.svg" alt="npm version" height="18"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Call-To-Action

## Description

The CTA component is a powerful one. It can be used as simple link or button component. 
But it can also be used as `data-js-item` in other components or as `data-js-module`.

-----------

## Usages

### Global trigger

When using this the component as `data-js-module` the component can fire global events. 
That means you can listen in other modules on this event and work with the provided data. 

Nice examples for the cta component as `data-js-module` are: 

- a simple toggler (mobile navigation, search toggler)
- overlay opener with custom data 

### Customization

But you can also use this component as `data-js-item` in other components. 
In this way you need to initialize the CTA manually, but you have the power to overwrite the `clickHandler`.

## Example usage

### `cta-usage.hbs`

A `<script>` tag is included with a global event handler to produce an alert dialog box when clicking on the button.

-----------

## Requirements
- [@veams/core](https://github.com/Veams/core) - Veams Core Framework.
- [@veams/query](https://github.com/Veams/query) or `jquery` - Veams Query or jQuery.
- [@veams/component](https://github.com/Veams/component) - Veams Component.

-----------

## Installation 

### Installation with Veams

``` bash
veams install component cta
```
``` bash 
veams -i c cta
```

----------- 

## Fields

### `cta.hbs`

#### Settings

| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| settings.ctaButton | Boolean | `a` | _Define a button or link as CTA._|
| settings.ctaContextClass | String | `default` | _Context class of the CTA._|
| settings.ctaClass | String | | _Modifier classes for the CTA._|
| settings.ctaTarget | String | | _You can define a target when using an `<a>` tag._|
| settings.ctaJsItem | String | | _You can add this component as a data-js-item._|
| settings.ctaJsModule | Boolean | | _You can add this component as a data-js-module._|
| settings.ctaJsOptions | Object | | _You can add options to the CTA. This object gets stringified in your Markup._|

#### Content 

| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| content.ctaTitle | String | | _You should define a title when using the `<a>` tag._|

### `cta__content.hbs`

#### Settings

| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| settings.ctaIcon | Boolean | | _Renders `.cta__icon` into the Markup if set to true._|
| settings.ctaContentJsItem | Boolean | | _Renders `"data-js-item="cta-content"` into the Markup if set to true._|

#### Content

| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| content.ctaContent | String | |_Content of the CTA._|

------------

## JavaScript Options

| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| activeClass | String | `is-active` | _Active class for CTA if it is clicked._|
| clickHandler | String | `click` | _Click handler like touchstart._|
| closedLabel | String | `null` | _Optional label for button while not active._|
| ctaContent | String | `'[data-js-item="cta-content"]'` | _Element selector for CTA content (used for updating the button text)._|
| globalEvent | String | `cta:click` | _Global event triggered on click._|
| openedLabel | String | `null` | _Optional label for button while active._|
