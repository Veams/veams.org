<p align="right">
<a href="https://badge.fury.io/js/%40veams%2Fcomponent-rte"><img src="https://badge.fury.io/js/%40veams%2Fcomponent-rte.svg" alt="npm version" height="18"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>


# Rich Text Editor (Markdown Component)

## Description

The RTE component is a simple partial which supports the usage of markdown files just by referencing them in your file system. 

-----------

## Requirements

- [mangony-hbs-helpers](https://www.npmjs.com/package/mangony-hbs-helpers) - In this library a markdown parser is integrated.

-----------

## Installation 

### Installation with Veams

```bash
veams install component rte
```
``` bash 
veams -i c rte
```

----------- 

## Fields

### `rte.hbs`

#### Settings

| Parameter | Type | Value | Description |
|:--- | :---: |:---:| :--- |
| settings.rteContextClass | String | `default` | Context class of the component. |
| settings.rteClasses | String | | Modifier classes for the component. |
| settings.rteCWD | Boolean | | Set to true if you want use the current working directory of the page. |
| settings.rteCWDLevelUp | Number | | You can go up directories by providing a number. |

#### Content 

| Parameter | Type | Description |
|:--- | :---: | :--- |
| content.rteMd | String | Path to markdown file (starting at the root directory if you do not use `settings.rteCWD`). |
