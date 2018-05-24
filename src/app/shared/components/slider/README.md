<p align='right'>
    <a href="https://badge.fury.io/js/%40veams%2Fcomponent-slider"><img src="https://badge.fury.io/js/%40veams%2Fcomponent-slider.svg" alt="npm version" height="18"></a>
    <a href='https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge'><img src='https://badges.gitter.im/Sebastian-Fitzner/Veams.svg' alt='Gitter Chat' /></a>
</p>

# Slider

## Description

The component represents a simple but powerful slider. 

> The slider module is a component for cycling through elements, like a carousel or slideshow. It allows users to swipe on touch-enabled devices. 

----------

## Requirements
- [@veams/core](https://github.com/Veams/core) - Veams Core Framework.
- [@veams/query](https://github.com/Veams/query) or `jquery` - Veams Query or jQuery.
- [@veams/component](https://github.com/Veams/component) - Veams Component.
- [@veams/helpers](https://github.com/Veams/helpers) - Veams Detection Helpers.

-----------

## Installation 

### Installation with Veams

``` bash
veams install component slider
```
``` bash
veams -i c slider
```

----------- 

## Fields

### `slider.hbs`

The partial is a `{{#wrapWith}}` helper. Documentation for [wrapWith](https://github.com/Sebastian-Fitzner/mangony-hbs-helper-wrap-with) helper.

#### Settings

| Parameter | Type | Value | Description |
|:--- |:---:|:---: |:--- |
| settings.sliderContextClass | String | `default` | Context class of component. |
| settings.sliderClasses | String | | Modifier classes for component. |
| settings.sliderJsOptions | Object | | JavaScript options which gets stringified. |
| settings.sliderInnerFullWidth | Boolean | `false` | Delete the class `.is-container` from `.slider__content`. |
| settings.sliderHidePagination | Boolean | `false` | Hide the pagination when set to true. |

### `slider__controls.hbs`

#### Content

| Parameter | Type | Description |
|:--- |:---:|:--- |
| content.sliderButtons | Object | Contains the controls content. When the object is not defined, the controls will not be printed out. |
| content.sliderButtons.prev | String | Define the button text for the previous button. |
| content.sliderButtons.next | String | Define the button text for the next button. |

### `slider__list.hbs`

The partial is a `{{#wrapWith}}` helper. Documentation for [wrapWith](https://github.com/Sebastian-Fitzner/mangony-hbs-helper-wrap-with) helper.

#### Settings

| Parameter | Type | Description |
|:--- |:---:|:--- |
| settings.sliderOverflow | Boolean | Set this option to `true` if you want to add the class `.is-overflow` which gives you the possibility to show all hidden items next to the active element(s). |


### `slider__item.hbs`

The partial is a `{{#wrapWith}}` helper. Documentation for [wrapWith](https://github.com/Sebastian-Fitzner/mangony-hbs-helper-wrap-with) helper.

-------------

## JavaScript Options

The module gives you the possibility to override default options: 

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
| activeClass | String | `'is-active'` | Class for the active slide. |
| actions | String | `'[data-js-item="slider-actions"]'` | Actions wrapper element in the component. |
| autoPlay | Boolean | `false` | Enable AutoPlay option of the slider. |
| autoPlayInterval | Number | `3000` | AutoPlay speed in milliseconds. |
| cloneClass | String | `'is-cloned'` | For the infinite slider the last and first element gets cloned. The cloning class can be overriden. |
| disablePagination | Boolean | `false` | Disable pagination. |
| enableTouchSwipe | Boolean | `true` | Enable support for swipe gestures on touch devices. |
| groupPaginationItems | Boolean | `true` | Enable the grouping of pagination items. |
| hiddenClass | String | `'is-hidden'` | The hidden class used by handling the visibility of the slider. |
| infinite | Boolean | `'is-closed'` | The slider will be set in infinite mode. Can not be used with multiple active slide items. |
| items | String | `'[data-js-item="slider-item"]'` | Define the slide item element. |
| next | String | `'[data-js-item="slider-next"]'` | Define the next button element. |
| prev | String | `'[data-js-item="slider-prev"]'` | Define the prev button element. |
| pagination | String | `'[data-js-item="slider-pagination"]'` | Define the pagination element in which the pagination items are generated in. |
| paginationItemClass | String | `'slider__pagination-list-item'` | Class for the generated pagination item. |
| paginationItemJsAtom | String | `'slider-pagination-item'` | Data attribute for the generated pagination item. |
| paginationList | String | `'[data-js-item="slider-pagination-list"]'` | Define the pagination list element in which the pagination items are generated in. |
| ribbon | String | `'[data-js-item="slider-ribbon"]'` | Define the slider ribbon which is holding all slides and gets the full width. |
| pauseOnHover | Boolean | `true` | When `autoplay` is set you can enable/disable pause on hover. |
| slideByItemNumber | Number | `false` | You can use the option to override the initial slide step which is the number of current visible items. |
| startAtIndex | Number | `0` | Start index for the slider. |
| openIndex | Number | `null` | Index of panel to be opened on init (zero based). |
| visibleItems | Object | `{'desktop-l': 1, 'desktop-m': 1, 'desktop-s': 1, 'tablet-l': 1, 'tablet-s': 1, 'mobile-l': 1, 'mobile-m': 1, 'mobile-s': 1}` | Define how many slide items should be visible on different viewports. |
| wrapper | String | `'[data-js-item="slider-wrapper"]'` | Define the slider wrapper element. |

------------

## Sass Options

There are multiple global variables which you can change: 

| Variable | Value | Description |
|:--- | :---: |:--- |
| $slider-darken: | `10 !default` | Darken value for hover effects. |
| $slider-unresolved-height: | `300px !default` | Set a fix height when the slider is in unresolved state. |
| $slider-duration: | ` 600ms !default` | Slide item animation duration. |
| $slider-ease-method: | `ease !default` | Slide item animation ease method. |
| $slider-control-bg-color: | `#a5cfd1 !default` | Background color of control buttons. |
| $slider-pagination-color: | `#555 !default` | Background color of pagination items. |
| $slider-pagination-color-active: | `$slider-pagination-color !default` | Active vackground color of pagination items which gets darken by `$slider-darken`. |
| $slider-pagination-size: | `15px !default` | Pagination size (width & height). |
| $slider-pagination-border-radius: | `25% !default` | Border radius of pagination items. |
