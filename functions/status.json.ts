import { PagesFunction } from '@cloudflare/workers-types';
import { handleJsonp } from '../src/handleJsonp';

export async function onRequest(pageContext: PagesFunction) {

    return handleJsonp(pageContext, {
        "success": true,
        "message": "OK",
        "lastmod": "", //LATER
        "commit": "", //LATER
        "tech": "CF Pages",
    });
}
