## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: video, @tag: component-partial }}
{{#with video.variations.default}}
    {{> video settings=this.settings content=this.content}}
{{/with}}
{{! @INSERT :: END }}
```