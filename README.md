# hexo-desmos-url
## About
Display your [Desmos](https://www.desmos.com/calculator) project as a card on [Hexo](http://hexo.io/) with mini thumbnail.

## Installation
`npm install --save hexo-desmos-url`

## Usage
Add the tag block to a post with the ID of the project you want to link.  
[ID] is written in here.  
`https://www.desmos.com/calculator/[ID]`  

```
・Minimum Style
{% desmos_url [ID] [TITLE] %}

・With description
{% desmos_url [ID] [TITLE] [DESCRIPTION] %}
```

### Example
`{% desmos_url af9db8ycji Fan "This graph is graphic art like a fan." %}`

![example](https://github.com/minfaox3/hexo-desmos-url/example.png)

## Configuration
You can configure the card and thumbnail width, language of project page, border color and background color of card.  
Default values are used even if no confiurations are written.  
Width and color values can be specified in the format used in CSS.  
The languages that can be specified depend on the languages supported by Desmos.  

### Example
```
desmos_url:
  lang: ja # default is en
  card_width: 80% # default is 100%
  thumbnail_width: 150px # default is 100px
  background_color: "#00FF00" # default is white
  border_color: orange # default is black
```

## LICENSE
[MIT](https://github.com/minfaox3/hexo-desmos-url/LICENSE)