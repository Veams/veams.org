
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: section, @tag: component-partial }}
{{#with section.variations.default}}
	{{#wrapWith "section"}}
		Wrapped with markup from section.
	{{/wrapWith}}
{{/with}}
{{! @INSERT :: END }}
```
