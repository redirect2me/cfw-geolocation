import { handleJsonp } from '../src/handleJsonp';
import buildInfo from '../build.json';

export async function status(req: Request) {

    return handleJsonp(req, {
        "success": true,
        "message": "OK",
        "lastmod": buildInfo.lastmod,
        "commit": buildInfo.commit,
        "timestamp": new Date().toISOString(),
        "tech": navigator.userAgent,
    });
}
