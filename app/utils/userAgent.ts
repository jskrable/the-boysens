'use server';

import { headers } from 'next/headers';
import uaParser from 'ua-parser-js';

async function userAgent() {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server');
  }

  const { get } = headers();
  const rawUserAgent = get('user-agent') ?? '';
  const parsed = new uaParser(rawUserAgent);

  const isMobile = () => parsed.getDevice().type === 'mobile';

  return { isMobile };
}

export { userAgent };
