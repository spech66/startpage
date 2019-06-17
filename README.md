# Startpage

Simple startpage.

## Usage

Modify the links and icons in `index.js`.
Host the site on a webserver like nginx. Set the Browser specific default page to your url.

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
