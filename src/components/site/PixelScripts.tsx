import Script from "next/script";
import { REDDIT_PIXEL_ID } from "@/lib/site";

/**
 * Reddit Pixel loader. Renders nothing unless NEXT_PUBLIC_REDDIT_PIXEL_ID is
 * set, so local and preview builds stay clean. Fires PageVisit on load; the
 * waitlist form fires the Lead conversion via lib/track.
 */
export function PixelScripts() {
  if (!REDDIT_PIXEL_ID) return null;

  return (
    <Script id="reddit-pixel" strategy="afterInteractive">
      {`!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','${REDDIT_PIXEL_ID}');rdt('track','PageVisit');`}
    </Script>
  );
}
