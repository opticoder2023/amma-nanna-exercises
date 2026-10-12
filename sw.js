/* Offline cache for the installed app. Version changes whenever any file changes. */
const VERSION = '46feae4235';
const CACHE = 'ann-' + VERSION;
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"];
const AUDIO = ["audio/en-breathRule.mp3", "audio/en-breatheIn.mp3", "audio/en-breatheOut.mp3", "audio/en-cue-bend.mp3", "audio/en-cue-center.mp3", "audio/en-cue-close.mp3", "audio/en-cue-down.mp3", "audio/en-cue-fwd.mp3", "audio/en-cue-headUp.mp3", "audio/en-cue-hold.mp3", "audio/en-cue-lean.mp3", "audio/en-cue-legBack.mp3", "audio/en-cue-nod.mp3", "audio/en-cue-open.mp3", "audio/en-cue-other.mp3", "audio/en-cue-out.mp3", "audio/en-cue-rest.mp3", "audio/en-cue-ret.mp3", "audio/en-cue-rise.mp3", "audio/en-cue-shrugDown.mp3", "audio/en-cue-shrugUp.mp3", "audio/en-cue-side.mp3", "audio/en-cue-sit.mp3", "audio/en-cue-sitUp.mp3", "audio/en-cue-slideBack.mp3", "audio/en-cue-stand.mp3", "audio/en-cue-straight.mp3", "audio/en-cue-tall.mp3", "audio/en-cue-toesDown.mp3", "audio/en-cue-toesUp.mp3", "audio/en-cue-up.mp3", "audio/en-cue-wristDown.mp3", "audio/en-cue-wristUp.mp3", "audio/en-done.mp3", "audio/en-eachLeg.mp3", "audio/en-eachSide.mp3", "audio/en-intro-ankle-pumps.mp3", "audio/en-intro-arm-raise.mp3", "audio/en-intro-bed-heel-slide.mp3", "audio/en-intro-elbow-bend.mp3", "audio/en-intro-fist.mp3", "audio/en-intro-heel-raise.mp3", "audio/en-intro-heel-slide-seated.mp3", "audio/en-intro-knee-curl.mp3", "audio/en-intro-knee-straighten.mp3", "audio/en-intro-leg-back.mp3", "audio/en-intro-march-stand.mp3", "audio/en-intro-mini-squat.mp3", "audio/en-intro-neck-nod.mp3", "audio/en-intro-neck-tilt.mp3", "audio/en-intro-seated-march.mp3", "audio/en-intro-short-arc.mp3", "audio/en-intro-shrug.mp3", "audio/en-intro-side-bend.mp3", "audio/en-intro-side-leg.mp3", "audio/en-intro-sit-to-stand.mp3", "audio/en-intro-straight-leg-raise.mp3", "audio/en-intro-wrist.mp3", "audio/en-keepBreathing.mp3", "audio/en-listenBody.mp3", "audio/en-n1.mp3", "audio/en-n10.mp3", "audio/en-n11.mp3", "audio/en-n12.mp3", "audio/en-n13.mp3", "audio/en-n14.mp3", "audio/en-n15.mp3", "audio/en-n16.mp3", "audio/en-n17.mp3", "audio/en-n18.mp3", "audio/en-n19.mp3", "audio/en-n2.mp3", "audio/en-n20.mp3", "audio/en-n3.mp3", "audio/en-n4.mp3", "audio/en-n5.mp3", "audio/en-n6.mp3", "audio/en-n7.mp3", "audio/en-n8.mp3", "audio/en-n9.mp3", "audio/en-nextUp.mp3", "audio/en-restNow.mp3", "audio/en-safetyRule.mp3", "audio/en-sessionDone.mp3", "audio/en-timesGo.mp3", "audio/en-why-ankle-pumps.mp3", "audio/en-why-arm-raise.mp3", "audio/en-why-bed-heel-slide.mp3", "audio/en-why-elbow-bend.mp3", "audio/en-why-fist.mp3", "audio/en-why-heel-raise.mp3", "audio/en-why-heel-slide-seated.mp3", "audio/en-why-knee-curl.mp3", "audio/en-why-knee-straighten.mp3", "audio/en-why-leg-back.mp3", "audio/en-why-march-stand.mp3", "audio/en-why-mini-squat.mp3", "audio/en-why-neck-nod.mp3", "audio/en-why-neck-tilt.mp3", "audio/en-why-seated-march.mp3", "audio/en-why-short-arc.mp3", "audio/en-why-shrug.mp3", "audio/en-why-side-bend.mp3", "audio/en-why-side-leg.mp3", "audio/en-why-sit-to-stand.mp3", "audio/en-why-straight-leg-raise.mp3", "audio/en-why-wrist.mp3", "audio/te-breathRule.mp3", "audio/te-breatheIn.mp3", "audio/te-breatheOut.mp3", "audio/te-cue-bend.mp3", "audio/te-cue-center.mp3", "audio/te-cue-close.mp3", "audio/te-cue-down.mp3", "audio/te-cue-fwd.mp3", "audio/te-cue-headUp.mp3", "audio/te-cue-hold.mp3", "audio/te-cue-lean.mp3", "audio/te-cue-legBack.mp3", "audio/te-cue-nod.mp3", "audio/te-cue-open.mp3", "audio/te-cue-other.mp3", "audio/te-cue-out.mp3", "audio/te-cue-rest.mp3", "audio/te-cue-ret.mp3", "audio/te-cue-rise.mp3", "audio/te-cue-shrugDown.mp3", "audio/te-cue-shrugUp.mp3", "audio/te-cue-side.mp3", "audio/te-cue-sit.mp3", "audio/te-cue-sitUp.mp3", "audio/te-cue-slideBack.mp3", "audio/te-cue-stand.mp3", "audio/te-cue-straight.mp3", "audio/te-cue-tall.mp3", "audio/te-cue-toesDown.mp3", "audio/te-cue-toesUp.mp3", "audio/te-cue-up.mp3", "audio/te-cue-wristDown.mp3", "audio/te-cue-wristUp.mp3", "audio/te-done.mp3", "audio/te-eachLeg.mp3", "audio/te-eachSide.mp3", "audio/te-intro-ankle-pumps.mp3", "audio/te-intro-arm-raise.mp3", "audio/te-intro-bed-heel-slide.mp3", "audio/te-intro-elbow-bend.mp3", "audio/te-intro-fist.mp3", "audio/te-intro-heel-raise.mp3", "audio/te-intro-heel-slide-seated.mp3", "audio/te-intro-knee-curl.mp3", "audio/te-intro-knee-straighten.mp3", "audio/te-intro-leg-back.mp3", "audio/te-intro-march-stand.mp3", "audio/te-intro-mini-squat.mp3", "audio/te-intro-neck-nod.mp3", "audio/te-intro-neck-tilt.mp3", "audio/te-intro-seated-march.mp3", "audio/te-intro-short-arc.mp3", "audio/te-intro-shrug.mp3", "audio/te-intro-side-bend.mp3", "audio/te-intro-side-leg.mp3", "audio/te-intro-sit-to-stand.mp3", "audio/te-intro-straight-leg-raise.mp3", "audio/te-intro-wrist.mp3", "audio/te-keepBreathing.mp3", "audio/te-listenBody.mp3", "audio/te-n1.mp3", "audio/te-n10.mp3", "audio/te-n11.mp3", "audio/te-n12.mp3", "audio/te-n13.mp3", "audio/te-n14.mp3", "audio/te-n15.mp3", "audio/te-n16.mp3", "audio/te-n17.mp3", "audio/te-n18.mp3", "audio/te-n19.mp3", "audio/te-n2.mp3", "audio/te-n20.mp3", "audio/te-n3.mp3", "audio/te-n4.mp3", "audio/te-n5.mp3", "audio/te-n6.mp3", "audio/te-n7.mp3", "audio/te-n8.mp3", "audio/te-n9.mp3", "audio/te-nextUp.mp3", "audio/te-restNow.mp3", "audio/te-safetyRule.mp3", "audio/te-sessionDone.mp3", "audio/te-timesGo.mp3", "audio/te-why-ankle-pumps.mp3", "audio/te-why-arm-raise.mp3", "audio/te-why-bed-heel-slide.mp3", "audio/te-why-elbow-bend.mp3", "audio/te-why-fist.mp3", "audio/te-why-heel-raise.mp3", "audio/te-why-heel-slide-seated.mp3", "audio/te-why-knee-curl.mp3", "audio/te-why-knee-straighten.mp3", "audio/te-why-leg-back.mp3", "audio/te-why-march-stand.mp3", "audio/te-why-mini-squat.mp3", "audio/te-why-neck-nod.mp3", "audio/te-why-neck-tilt.mp3", "audio/te-why-seated-march.mp3", "audio/te-why-short-arc.mp3", "audio/te-why-shrug.mp3", "audio/te-why-side-bend.mp3", "audio/te-why-side-leg.mp3", "audio/te-why-sit-to-stand.mp3", "audio/te-why-straight-leg-raise.mp3", "audio/te-why-wrist.mp3"];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(SHELL);
    // audio: cache in the background; a failed clip is fetched again later
    await Promise.all(AUDIO.map(u => c.add(u).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // the page itself: try the network first so updates show up, fall back to the cached copy offline
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('index.html', copy)); return r; })
      .catch(() => caches.match('index.html')));
    return;
  }
  // fonts: use the cached copy, refresh it in the background
  if (url.hostname.endsWith('fonts.googleapis.com') || url.hostname.endsWith('fonts.gstatic.com')) {
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(r => { c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  // app files and audio: cache first
  if (url.origin === location.origin) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return r;
    })));
  }
});
