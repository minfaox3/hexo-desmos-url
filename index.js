hexo.extend.tag.register('desmos_url', function(args) {
    const config = hexo.config.desmos_url || {};
    const lang = config.lang || "en";
    const background_color = config.background_color || "white";
    const border_color = config.border_color || "black";
    const card_width = config.card_width || "100%";
    const thumbnail_width = config.thumbnail_width || "100px";
    const id = args[0];
    const title = args[1];
    const desc = args[2] || "&nbsp;";
    return `
    <div class="desmos_url">
    <style>
        .desmos_url {
            position: relative;
            transform: translateX(calc((100% - ${card_width}) / 2));
            width: ${card_width};
            justify-content: center;
            display: flex;
            border: solid 2px ${border_color};
            border-radius: 5px;
            border-width: 2px 4px 4px 2px;
            background-color: ${background_color};
        }
        .desmos_url_thumbnail {
            width: ${thumbnail_width};
            min-height: ${thumbnail_width};
            background-size: cover;
            background-position: center;
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
        }
        .desmos_url_content {
            width: calc(100% - ${thumbnail_width});
            border-left: solid ${border_color};
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
        }
        .desmos_url_title {
            height: 50px;
            font: bold;
            font-size: 35px;
            width: 80%;
        }
        .desmos_url_border {
            position: relative;
            height: 2px;
        }
        .desmos_url_border:before{
            content: "";
            background-image: linear-gradient(to right, #000, #000 3px, transparent 3px, transparent 8px);
            background-size: 8px 2px;
            background-repeat: repeat-x;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
    </style>
        <a href="https://www.desmos.com/calculator/${id}?lang=${lang}" class="desmos_url_thumbnail" style="background-image:url(https://saved-work.desmos.com/calc_thumbs/production/${id}.png);"></a>
        <div class="desmos_url_content">
        <a href="https://www.desmos.com/calculator/${id}?lang=${lang}" class="desmos_url_thumbnail"><div class="desmos_url_title">${title}</div></a>
            <div class="desmos_url_border"></div>
            <div class="desmos_url_desc">${desc}</div>
        </div>
    </div>
  `;
});