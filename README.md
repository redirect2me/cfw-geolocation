# Cloudflare Workers Geolocation  [<img alt="resolve.rs logo" src="docs/favicon.svg" height="90" align="right" />](https://resolve.rs/)

Server that determines your physical location by looking at headers sent to Cloudflare Workers functions.

Try it with: [Cloudflare Workers](https://cfw-geo.redirect2.me/)

Also see a more detailed [comparison of geolocation providers](https://resolve.rs/ip/geolocation.html)

## How it works

This application is just a simple app that shows various HTTP header values.

## Running it yourself

It is a trivial go application.  `go run *.go` should work.  The real functionality is from the providers.  Here are links and tips on how to set them up.

LATER

## Contributions

Contributions are welcome!  If you know of any other similar CDNs/services, let me know & I will add them in!

## API

There is a simple JSON/JSONP API that is free for light, non-commercial use.  This is such a trivial application that you should run your own copy (or make your own  version) for anything serious.  Both AppEngine and Cloudflare have generous free plans (which is what I'm using).

Send a `callback` parameter to get JSONP instead of JSON.

- [`/api/cfw.json`](https://aws-geo.redirect2.me/api/cfw.json)

## License

[GNU Affero General Public License v3.0](LICENSE.txt)

## Credits

[![Cloudflare](https://www.vectorlogo.zone/logos/cloudflare/cloudflare-ar21.svg)](https://www.cloudflare.com/ "CDN and Geolocation")
[![Git](https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg)](https://git-scm.com/ "Version control")
[![Github](https://www.vectorlogo.zone/logos/github/github-ar21.svg)](https://github.com/ "Code hosting")
[![svgrepo](https://www.vectorlogo.zone/logos/svgrepo/svgrepo-ar21.svg)](https://www.svgrepo.com/svg/185727/map-position "favicon")
[![water.css](https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg)](https://watercss.netlify.app/ "Classless CSS")

- LATER: typescript, npm, nodeping, etc