
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: footer, @tag: component-partial }}
{{#with footer.variations.default}}
	{{> footer}}
{{/with}}
{{! @INSERT :: END }}
```
