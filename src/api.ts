import { handleJsonp } from './handleJsonp';

export async function api(req: Request) {

    const cf = req.cf;

    return handleJsonp(req, {
        "success": cf ? true : false,
        "message": "OK",
        "country": cf?.country,
        "city": cf?.city,
        "latitude": cf?.latitude,
        "longitude": cf?.longitude,
        "text": cf ? `${cf.city}, ${cf.region}, ${cf.country}` : "No cf data",
        "iata": cf?.colo,
        "TZ": cf?.timezone,
        "raw": cf,
    });
}