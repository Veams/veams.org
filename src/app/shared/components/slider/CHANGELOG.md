## Namespaced Versions

### v1.0.0

- Migrate to use 

	**@veams/component**, **@veams/helpers** and **@veams/query**

------------------

## Old Versions 


### v5.1.1
- Fix imports for detectSwipe and transitionEndEvent
- Fix getMedia keys for option 'visibleItems'

### v5.1.0
- Make component compatible with veams-cli@2.0.xx

### v5.0.0
- Update folder structure to be in sync with latest generator output
- Remove import snippets from INSERTPOINTS.md

### v4.0.1
- Fix duplicate sliderContextClass issue

### v4.0.0
- Update insertpoints paths for new folder structure (used in generator-veams v9.x)
- Unify components folder structure

### v3.0.3
- Fix duplicate sliderContextClass issue

### v3.0.2
- Update readme

### v3.0.1
- Fix bug in INSERTPOINTS

### v3.0.0
- Update source code to support Veams 5 framework

### v2.2.0
- Add grouPaginationItems as new option
- Add slideByItemNumber as new option

### v2.1.1
- Bugfix for click handler

### v2.1.0
- Add data-index to slider
- Refactor data structure
- Refactor partial structure
- Add all important notes to readme
- Exclude Insertpoints into own file
- Add self-contained option

### v2.0.0
- make module compatible with VeamsQuery

### v1.3.3
- fix pagination indicator bug (while infinite: true)
- fix possible deadlock if more than one item is visible

### v1.3.2
- fix event names (mouseenter, mouseleave)

### v1.3.1
- prevent multiple event binding for swipe

### v1.3.0
- hide pagination and controls if slide count < 2
- add option 'disablePagination'

### v1.2.1
- prevent negative maxIndex

### v1.2.0
- use Helpers.detectSwipe instead of jquery-touchswipe

### v1.1.7
- add option 'triggerTouchSwipeClick'

### v1.1.6
- add option 'enableTouchSwipe'

### v1.1.5
- fix initial button states (next/prev)

### v1.1.4
- use jquery-touchswipe instead of touchswipe

### v1.1.2
- update module version number

### v1.1.1
- #1: refactor wrapWith options in partial
- update section 'Include: Page' in README.md

### v1.1.0
- improve infinite loop sliding
- add autoPlay
- add pauseOnHover
- minor refactoring

### v1.0.7
- add global module registry

### v1.0.6
- complete clean up to support error handling and better options integration

### v1.0.5
- add overflow prop

### v1.0.3
- change id to tag

### v1.0.2
- update bower.json

### v1.0.0
- initial version