/*export default {
    async fetch(req): Promise<Response> {
        const data =
            req.cf !== undefined
                ? req.cf
                : {
                      error: "The `cf` object is not available inside the preview.",
                  };

        return new Response(JSON.stringify(data, null, 2), {
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
        });
    },
} satisfies ExportedHandler;
*/
import { ExportedHandler } from "@cloudflare/workers-types";
import { handleJsonp } from "./handleJsonp";
import { api } from "./api";
import { status } from "./status";
import { index } from "./index";

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

export default {
    async fetch(
        request,
     ): Promise<Response> {
        const url = new URL(request.url);

        if (url.pathname == "/api/cfw.json") {
            return api(request);
        } else if (url.pathname == "/status.json") {
            return status(request);
        } else if (url.pathname == "/" || url.pathname == "/index.html") {
            return index(request);
        }


        return handleJsonp(request, { 
            success: false,
            message: "404: Not Found",
            url: request.url,
            reqcf: request.cf,
        });


    },
} satisfies ExportedHandler;
