'use server';

import { COOKIE_SITE_LANGUAGE } from '@/constants/cookies';
import { cookies } from 'next/headers';

export default async function setLangCookie(value: string) {
  const cookie = await cookies();
  cookie.set(COOKIE_SITE_LANGUAGE, value);
}