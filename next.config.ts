import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Let the dev server be reached from other devices on the LAN (e.g. previewing
  // on a phone). Next blocks cross-origin dev requests by default, so without this
  // the page renders but never hydrates, every toggle, the theme switch, and search
  // silently do nothing. Add each host you browse the dev server from. Dev-only;
  // this option is ignored by `next build` / production. Update the IP if the
  // laptop's LAN address changes (it's DHCP-assigned).
  allowedDevOrigins: ['192.168.100.203'],
};

export default nextConfig;
