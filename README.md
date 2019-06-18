# Startpage

![Startpage](https://raw.githubusercontent.com/spech66/startpage/master/docs/screenshot.png "Startpage")
![Startpage group mode](https://raw.githubusercontent.com/spech66/startpage/master/docs/screenshot2.png "Startpage group mode")

Simple startpage.

## Usage

1. Modify the links and icons in `index.js`.
2. Host the site on a webserver.
3. Set the Browser specific "new tab page" setting to your url.
   * Chrome requires an extension for this. e.g. [New Tab Redirect](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna)

## Test local changes

To test changes locally the build in development servers of many languages can be used.

### Python

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

### PHP

```bash
php -S 127.0.0.1:8000
```

### Ruby

```bash
ruby -run -ehttpd . -p8000
```

## Sources

* Background image by [Mikael Gustafsson](https://www.artstation.com/artwork/Y2Wew)

Inspired by:

* [Reddit - r/startpages](https://www.reddit.com/r/startpages/)
* [Github - 0-Tikaro - Minimum Viable Startpage](https://github.com/0-Tikaro/minimum-viable-startpage), Searchbox code
* [Github - ViktorKare - startpage](https://github.com/ViktorKare/startpage)
