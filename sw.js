// Service worker minimal : il permet d'installer Askesia sur Android (Chrome).
// Il ne garde rien en cache : chaque ouverture charge la dernière version en ligne.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
