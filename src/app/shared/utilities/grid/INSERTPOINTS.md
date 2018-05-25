## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: grid, @tag: utility-partial }}
{{! WrapWith START: Grid Row }}
{{#wrapWith "grid-row" settings=grid.settings}}
    {{! WrapWith START: Col }}
    {{#wrapWith "grid-col" colClasses="is-col-mobile-s-6 is-col-mobile-l-3" }}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur corporis cum, deleniti dignissimos ducimus ea eligendi, fugiat fugit illum molestias natus necessitatibus perferendis quasi quidem reiciendis similique ullam voluptatum!
    {{/wrapWith}}
    {{! WrapWith END: Col }}
    {{! WrapWith START: Col }}
    {{#wrapWith "grid-col" colClasses="is-col-mobile-s-6 is-col-mobile-l-3" }}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur corporis cum, deleniti dignissimos ducimus ea eligendi, fugiat fugit illum molestias natus necessitatibus perferendis quasi quidem reiciendis similique ullam voluptatum!
    {{/wrapWith}}
    {{! WrapWith END: Col }}
    {{! WrapWith START: Col }}
    {{#wrapWith "grid-col" colClasses="is-col-mobile-s-6 is-col-mobile-l-3" }}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur corporis cum, deleniti dignissimos ducimus ea eligendi, fugiat fugit illum molestias natus necessitatibus perferendis quasi quidem reiciendis similique ullam voluptatum!
    {{/wrapWith}}
    {{! WrapWith END: Col }}
    {{! WrapWith START: Col }}
    {{#wrapWith "grid-col" colClasses="is-col-mobile-s-6 is-col-mobile-l-3" }}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur corporis cum, deleniti dignissimos ducimus ea eligendi, fugiat fugit illum molestias natus necessitatibus perferendis quasi quidem reiciendis similique ullam voluptatum!
    {{/wrapWith}}
	{{! WrapWith END: Col }}
{{/wrapWith}}
{{! WrapWith END: Grid Row }}
{{! @INSERT :: END }}
```
