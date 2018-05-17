
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: navigation, @tag: component-partial }}
{{#with navigation.variations.default}}
	{{> navigation}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-modules-@1 //
Veams.modules.add({namespace: 'navigation', module: Navigation});
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for Navigation
 */
EVENTS.navigation = {
	eventName: 'navigation:eventName'
};
// @INSERT :: END
```
