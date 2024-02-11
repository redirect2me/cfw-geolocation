import { PagesFunction } from '@cloudflare/workers-types';

function getCallback(ctx: PagesFunction): string | null {
    const callback = new URL(ctx.request.url).searchParams.get('callback');
    if (!callback) {
        return null;
    }

    if (callback.match(/^[$A-Za-z_][0-9A-Za-z_$]*$/) != null) {
        return callback;
    }
    return null;
}

export function handleJsonp(ctx: PagesFunction, data: Object) {

    const callback = getCallback(ctx);
    if (callback) {
        return new Response(`${callback}(${JSON.stringify(data)});`, {
            headers: { 
                "content-type": "text/javascript" 
            } 
        });
    } 
    return new Response(JSON.stringify(data), { 
        headers: { 
            'content-type': 'application/json', 
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET',
            'Access-Control-Max-Age': '604800',
        }
    });
}
