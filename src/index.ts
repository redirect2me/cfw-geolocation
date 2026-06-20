

export async function index(req:any) {
  const html = `<html>
    <head>
        <meta charset="utf-8">
        <title>CloudFlare Workers Geolocation - Resolve.rs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
            Your IP address: ${req.headers.get("CF-Connecting-IP")}
        </p>
        <p>
            Country: ${req.cf?.country || "(not set)"}<br/>
            Region: ${req.cf?.region || "(not set)"}<br/>
            City: ${req.cf?.city || "(not set)"}<br/>
            Latitude/Longitude: ${req.cf?.latitude || "(not set)"},
              ${req.cf?.longitude || "(not set)"}<br/>
            Timezone: ${req.cf?.timezone || "(not set)"}<br/>
            Airport: ${req.cf?.colo || "(not set)"}<br/>

        </p>
        <details><summary>Raw Data</summary>
          <pre>${JSON.stringify(req.headers)}</pre> 
          <pre>${JSON.stringify(req.cf, null, 2)}</pre> 

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