import { PagesFunction } from '@cloudflare/workers-types';


export async function onRequest(pageContext: PagesFunction) {
  const html = `<html>
    <head>
        <meta charset="utf-8">
        <title>CloudFlare Workers Geolocation - Resolve.rs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css" />
    </head>
    <body>
        <h1>
            <img alt="Resolve.rs geolocation logo" src="favicon.svg" style="height:2.2em;vertical-align:middle;" />
            CloudFlare Workers Geolocation
        </h1>
        <p>
            Determine your real (physical) location based on your IP address, powered by CloudFlare Workers.
        </p>
        <p>
            Your IP address: ${pageContext.request.headers.get('CF-Connecting-IP') }
        </p>
        <p>
            Country: ${pageContext.request.cf.country}<br/>
            Region: ${pageContext.request.cf.region}<br/>
            City: ${pageContext.request.cf.city}<br/>
            Latitude/Longitude: ${pageContext.request.cf.latitude},
              ${pageContext.request.cf.longitude}<br/>
            Timezone: ${pageContext.request.cf.timezone}<br/>
            Airport: ${pageContext.request.cf.colo}<br/>

        </p>
        <details><summary>Raw Data</summary>
          <pre>${JSON.stringify(pageContext.request.headers)}</pre> 
          <pre>${JSON.stringify(pageContext.request.cf, null, 2)}</pre> 

        </details>
        <p>
            <a href="https://github.com/redirect2me/cfw-geolocation">How this works</a>, including API details and source code!
        </p>
        <p>
            <a href="https://resolve.rs/">Resolve.rs</a>
            has more
            <a href="https://resolve.rs/tools.html">diagnostic tools</a>.
            including a
            <a href="https://resolve.rs/ip/geolocation.html">comparison of different geolocation APIs</a>.
        </p>
    </body>
</html>`;
    return new Response(html, { headers: {
        'Cache-Control': 'public',
        'Content-Type': 'text/html',
        } });
}