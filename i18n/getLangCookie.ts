'use server';

import { COOKIE_SITE_LANGUAGE } from "@/constants/cookies";
import { cookies } from "next/headers";

export default async function getLangCookie() {
    const cookie = await cookies();
    return cookie.get(COOKIE_SITE_LANGUAGE)?.value;
}
