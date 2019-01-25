## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: cta, @tag: component-partial }}
{{#with cta.variations.simple}}
    {{! WrapWith START: CTA }}
    {{#wrapWith "cta" settings=this.settings content=this.content}}
        {{> cta__content this.content}}
    {{/wrapWith}}
    {{! WrapWith END: CTA }}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams (@veams/plugin-modules v1.x)

``` js
// @INSERT :: START @tag: js-init-modules-@1 //
// Init Call-To-Action
Veams.modules.add({ namespace: 'cta', module: Cta });
// @INSERT :: END //
```
