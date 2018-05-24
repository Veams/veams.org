<p align="right">
    <a href="https://badge.fury.io/js/%40veams%2Fcomponent-video"><img src="https://badge.fury.io/js/%40veams%2Fcomponent-video.svg" alt="npm version" height="18"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Video

## Description

A video component supporting WebM, MP4 and Subtitles.

-----------

## Installation

### Installation with Veams

```bash
veams install component video
```
``` bash 
veams -i c video
```

-----------

## Fields

### `video.hbs`

#### Settings

| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| settings.videoContextClass | String | `default` | Context class of component. |
| settings.videoClasses | String | | Modifier classes for component. |
| settings.videoOptions | String | | Apply multiple options as string. |

#### Content

| Parameter | Type | Description |
|:--- | :---: | :--- |
| content.videoPoster | String |  Url to a poster image. |
| content.videoMp4 | String |  Url to mp4 video file. |
| content.videoWebm | String |  Url to webm video file. |
| content.videoTrack | Object |  Object which contains tracking data. |
| content.videoTrack.trackSrc | String |  Url to track file. |
| content.videoTrack.trackSubtitle | String |  Subtitle. |
| content.videoTrack.trackLang | String |  Language. |
| content.videoTrack.trackLabel | String |  Label. |






