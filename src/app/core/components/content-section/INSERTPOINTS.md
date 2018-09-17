
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: content-section, @tag: component-partial }}
{{#with content-section.variations.default}}
	{{#wrapWith "content-section"}}
		Wrapped with markup from content-section.
	{{/wrapWith}}
{{/with}}
{{! @INSERT :: END }}
```
