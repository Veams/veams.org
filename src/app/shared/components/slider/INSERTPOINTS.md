## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: slider, @tag: component-partial }}
{{#with slider.variations.simple}}
    {{! wrapWith START: Slider }}
    {{#wrapWith "slider" settings=this.settings content=this.content}}
        {{! WrapWith START: Slider List }}
        {{#wrapWith "slider__list"}}
            {{#times 8}}
                {{#wrapWith "slider__item"}}
                    <img src="https://placehold.it/1920x800" alt="test">
                {{/wrapWith}}
            {{/times}}
        {{/wrapWith}}
        {{! WrapWith END: Slider List }}
    {{/wrapWith}}
    {{! wrapWith END: Slider}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing with `@veams/modules`

``` js
// @INSERT :: START @tag: js-init-modules-@1 //
// Init Slider
Veams.modules.add({ namespace: 'slider', module: Slider });
// @INSERT :: END //
```

#### Custom Events

``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for Slider
 */
EVENTS.slider = {
	slideStart: 'slide:start'
};
// @INSERT :: END //
```
