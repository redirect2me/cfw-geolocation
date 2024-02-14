import { PagesFunction } from '@cloudflare/workers-types';
import { handleJsonp } from '../src/handleJsonp';
import buildInfo from '../build.json';

export async function onRequest(pageContext: PagesFunction) {

    return handleJsonp(pageContext, {
        "success": true,
        "message": "OK",
        "lastmod": buildInfo.lastmod,
        "commit": buildInfo.commit,
        "timestamp": new Date().toISOString(),
        "tech": navigator.userAgent,
    });
}
