import {skipWaiting, clientsClaim} from 'workbox-core';
import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute, NavigationRoute} from 'workbox-routing';
import {CacheFirst, NetworkFirst} from 'workbox-strategies';

skipWaiting();
clientsClaim();

registerRoute(
    new RegExp(/\.(?:png|gif|jpg|svg|ico|webp)$/),
    new CacheFirst({
        cacheName: 'image-cache',
    }),
    'GET'
);

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', event => console.log('SW installed', event));


