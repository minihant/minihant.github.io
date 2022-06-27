'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "602e0d9942f71ef42cfc3da9cb49cb47",
".git/config": "512a267346d21f991eab127051804d4a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "2d99c9894eb1b88ee666a3b521c0a0e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5aae931a39cc829433e81eb45d283b4e",
".git/logs/refs/heads/master": "5aae931a39cc829433e81eb45d283b4e",
".git/logs/refs/remotes/github.io/master": "6ddd45f7d2497eebdd18d0482cd48d3f",
".git/objects/01/ff6e1c7a179ff0deaf3ae80d8104fb058426d2": "df8cbb7e4bd857c1108f97fdd4e1f16f",
".git/objects/08/4e81a8ee4e2212611013f4677e539ccc3fb4e2": "dc2fe3c8bddba1bf55e8c64e911a2f7a",
".git/objects/0b/0726243a4837320185b43a11910ccc39e9150a": "3149c18fc642e85d85803670bd169dd0",
".git/objects/0b/0d61690c2a4715ef0315398e03733331ab1b6c": "d37835ee5f3f2b64a1c25863def23739",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1b/6ab2802b39002b4e780e577de62526b51d05f0": "521c3f60d49e94fbc14402fb27303f7b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2b/395e234663f7ef81fbb340c6f3e08e1d31535c": "207a4b599f5977b90165b979f6ef264c",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/38/a41f49457f9f92638b4170085add15a2686ed7": "c6ef877294efaade33dd45a4f02fca92",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/222e39631075d1e707f788b62a4565d43dbf12": "0d084e6d1b64f9965ddd78434f67560f",
".git/objects/42/513fdc9947cc7d0fb99ead5bd66b3b6eaeed7f": "7a9a581855a7338e44c54d76b509fe79",
".git/objects/4a/fc8c574940438777a140b8fb01859b747da3f3": "e09a3c5dec88fd4135a9e21bf1de838d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/41ffc2a30813b316141f14dea7ed65c0c2c1d2": "aec38665efafffc5de3d684618886f72",
".git/objects/54/396aaee22e4c8ebcf308484b9916b8da5715a9": "285faf50b8fe6e9347940de057cbe040",
".git/objects/57/aa2c1750cc26b396994b3ddd7b22da212bb08f": "866d6691ba46db1bc47cbea5760dc6b8",
".git/objects/59/e1fbd13363387035d5fb45311f7e2fad7b87a2": "e5f41bd2ecd3fba6bd2a241002d018c9",
".git/objects/5e/1ff663fe75740c1fe34638ac3570c914dd41b8": "a9c4e55986cb8cfe3f5f049089ed4aa4",
".git/objects/6c/e0b086131ceadb7bae7d0bc20cc77a39f6f92e": "943325debf9c63cda2c289b620014eb9",
".git/objects/72/94a695a3819f35ec11ef49c786670c3aa1017a": "26b4f2092c9d1f7da37dab684379e894",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/fba0ccac01004c87325946b6cf06e133e3b3bc": "5795350879aecfcf1976dfe56db9e912",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/2297c50c08a212402cd6e24b3687766afc84c6": "cbdef7b6bc33e4b0bebba98cdf3c1976",
".git/objects/80/74039ac1b4846af88d60a1be7fda1ed3aa7955": "e05a44b792826baed119c571ca70beda",
".git/objects/87/a16299cd8f5748d3c66d27d666fa92dddf5eac": "0ef44b507c51dad1e12405545c3abd6e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/961749b44609e1008849c64f0937e0195972e3": "209c7d350dde5bda9bdd048c9ed5405d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/7bc771da5b9b7097e278662633e8c1b5cfa66c": "4179eea8506d9f11b4e08782796bbe62",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/12e65c4d6e6539282a08da7a9713d4ff3c9a1c": "e856fbbca30430353de54f2bd7336380",
".git/objects/c8/ce3fe943f1401cf46f57737cf7d9bf5b42dd3d": "4d88a62f73acf3ea45b8ec2d38ba5e98",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d3/dfce105deafeb0f05390bf0a46d029e92a95da": "dcaa39b18c70eeadc3db32af680685cd",
".git/objects/d4/1e480ec07fe5fcd049f452e551d82789297419": "e89310f44ac0c0b7fa20f660c4b00208",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/09cca5c61e89187dc9d9a6c9aff0de0fa5a009": "db6a73cc69ca024ba073e5d7b3635fbc",
".git/objects/f7/dcf3068c85ac03b2456eca50373b4d8ef6fb20": "d9c7a44f31a0aa6102b97651b8344c8a",
".git/objects/f8/4c82e8bc0ea8c84306bd10f4e4c542320b7e09": "87ce8ae3a92e8e73a4fc535c7453249a",
".git/objects/ff/8002e7d763bfdeafa2910db41f0e85d89b1575": "712c7a62523e6d1e4e306090f32b1afa",
".git/refs/heads/master": "dbba7e2b002b0ea6f4a5a3086a60f9a0",
".git/refs/remotes/github.io/master": "dbba7e2b002b0ea6f4a5a3086a60f9a0",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "cfac75b081975edfa17e0ad5268e4e82",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "721cda972be6c7583d40aa350312bb7d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d7fb2c94efab40d00c841f89942a2ea4",
"/": "d7fb2c94efab40d00c841f89942a2ea4",
"main.dart.js": "61622497f067a6034e2c42c96b591a90",
"manifest.json": "a1b2c2f2be8389b4638a4ca01f62c758",
"version.json": "979f10383a3724b85cd60c928712efb7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
