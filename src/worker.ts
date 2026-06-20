
import { ExecutionContext, ExportedHandler } from "@cloudflare/workers-types";
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

        // Example API route you can build out later:
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
        });


    },
} satisfies ExportedHandler;
