// Service worker mínimo para que el navegador ofrezca "Instalar".
// No guarda datos: todo se pide siempre en directo (las vacaciones tienen que estar al día).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
