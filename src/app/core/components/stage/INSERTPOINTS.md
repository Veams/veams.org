
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: stage, @tag: component-partial }}
{{#with stage.variations.default}}
	{{> stage}}
{{/with}}
{{! @INSERT :: END }}
```
