import { PagesFunction } from '@cloudflare/workers-types';
import { handleJsonp } from '../../src/handleJsonp';

export async function onRequest(pageContext: PagesFunction) {

    const cf = pageContext.request.cf;

    return handleJsonp(pageContext, {
        "success": true,
        "message": "OK",
        "country": cf.country,
        "city": cf.city,
        "latitude": cf.latitude,
        "longitude": cf.longitude,
        "text": `${cf.city}, ${cf.region}, ${cf.country}`,
        "iata": cf.colo,
        "TZ": cf.timezone,
    });
}