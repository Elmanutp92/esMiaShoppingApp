'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c5a450c45cf93131c9d2d3960c2f37e0",
"index.html": "1ffce66a436dfbb1d13fd7faddbcbdd7",
"/": "1ffce66a436dfbb1d13fd7faddbcbdd7",
"main.dart.js": "1e9294b6cf9a421c6dfcaff34c346c1e",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cd754b2cdb870514f1d28834cc10af23",
".git/config": "acb671bfd7eaec78d9204d1ae019ca3a",
".git/objects/61/0a61b0d4a9b09a20432b5b23e8c303036ddb5b": "60496f022ad30920ddb9652cbfbcb6d9",
".git/objects/95/753a807f4d301b57f1bf309f106140888283c7": "15240666fee9e60846da5244a5359fd3",
".git/objects/59/b8f86906fce71f76ce26c0bad6992c3e209b7d": "563f3574cc2020bd08c1caff916dd769",
".git/objects/50/a1bbd757886718197f5c52653f3747bafaa3db": "bfd1c5c30af157d06cb0782b6308c708",
".git/objects/04/aa66afdfec84a9356ea590e52c845989f47336": "f4224f6736c549bdc797e232a8c63677",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/32/907330f11073e3ae8ba5166008ddcbedd0313c": "6d426e9ab9481a316942d46d5eee0549",
".git/objects/35/5b79f9ac376b34b3441291d7fc6e3ba2f5822e": "a863f1d526a98d80a94fa6bd7c1ef225",
".git/objects/3c/0279bc41f9d5052f1d15a52397e2497c81db66": "253f53b4aaef6a6e9be4f8818202ae20",
".git/objects/3d/88e9dc944db00b0ae222eb7c1c4e6cc8a39f2e": "ba8265e62818a3287e3889366ca9d09c",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/93c0aab74919ad341da10133584a1e280146ce": "a77fc17f1d4c43b9a2ba9e87af19ce28",
".git/objects/0e/0135eb01d791d1ced6fccdf54dd25eabbb2454": "a09b855a5b7d113662eb7c1beceb93ef",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/9d/1aff55b3f8ac639c24452dc5c8febfca2b75e0": "52c87ebdcba3cca58736d510c2a6d0b8",
".git/objects/b2/ed0fd27995fc28701ecb1895906fb73803a5fb": "a756b5d0f2d52c823b2644bd1c05b1e8",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/dc4f2c683a1c833f0a3da11816b5698de90717": "0a4b01f7299efc42d92227be875a0ecb",
".git/objects/b3/bda76cddb76069f4f7efa0582a180844958dd9": "1043821525debd054547628851b9e783",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/dd5eab898fd5caa32709a53a33b2613cf1a3ee": "ec78a5d6e3160c95afb3afe49fd90ec1",
".git/objects/a5/24a96433951f775777dfdfe3a4108a4a5209fb": "bf6159c9ac74e76ec5b76e45fc0e2de0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/fe7e4ce053ee059f397b7e01593ae26d536eb5": "a781e7956e611cb51533b9a2c36bfe92",
".git/objects/ee/3389314181be87088cde2930b8279097fe551b": "423b7168030f16b6b0c8c4191f9a3a97",
".git/objects/f5/1797d8363431bd3adce4c24ed8cdcf0ec535a9": "59b862b61a748cdcc9577cb5b4bcd455",
".git/objects/e3/263b67ee1480d6910af0d71f677a9e925917fa": "1a6e2e491771d16d21f73b92bbdeb6ac",
".git/objects/fe/dc3feddd184e6401a16ef6e1cf476418c28bff": "719ae54e18df99bbc999b7382448fde7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/89/842c370cf1897e110535258ab17f64f1d424d1": "92745fbd98df1c5671c5d6226cae17f3",
".git/objects/89/5ae423d23291e1feff8dd6fc1172a0fdac836c": "2b625fc5ffdac1cbb5e4ed88d30176cc",
".git/objects/8a/7ae22e2ec897b1c0b13f1ef33dacfb635714e8": "d3e259cef60c59619a01d6f8b75add68",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/10/d946098099068dd5fa6dfb0b9190ac3700a14a": "112d877e5409c653856acd3f39a7725b",
".git/objects/21/c6412f1d0b7bc1268146d9d14a1955fb072d4f": "d11196d6c26ead47ab599b5e00fc58e4",
".git/objects/2f/cfa2beef4f3e2ebcd17c144600b06d8705af64": "592950360fd768ea5ec81e7cbe842718",
".git/objects/43/99256d2022cf572b81635d2487c4c8d5543cbd": "2e1eaeb760dda148a1dbe72041a487e8",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/74c4acd3d3b8a608abb550c5a9f1a434c5f888": "ea75adfcbe7c47629bda39e4f8861eae",
".git/objects/6e/c50363d41f174643126b9154b69d78fb0e5fa1": "c98c6d6f9084eb90e78a66c69ff130cf",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/96/f514b5938afcd3a5d7a633bab6ef67b43f221c": "7b785afdecfcfcbdda3f0062d9d2451e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/a51195829cc7a55ee1405608bbaa638c52bcef": "215f6e5defacefb5468aba8c20665e30",
".git/objects/37/3ae2c6331aa69df9448cb060271c5c7c22353c": "167deb59dda2de0e8ef0dcbb34e40a8b",
".git/objects/6d/e3f10aa894e0c2542062df68fb6e757b51afd1": "5e1030fc73dcc830e0e2fbd0cd1bdc29",
".git/objects/06/e641434025d98d6f7b843165a92d0cdbdda6e6": "86e979f9c11969991f96f219e7397f52",
".git/objects/99/da87fd67a1d10434429b0514393c1424f64a22": "c979e3149bd4416aa488807dd92425a0",
".git/objects/55/3eb9acdbd4190914b52efb9d38dde203051927": "371a0e9c6959ad814bae17f6e323b030",
".git/objects/63/2b2336050edaad10bd218f2499b6a5b9930130": "7372d90328f0933bfe604605f53011e1",
".git/objects/63/1eccc7e3f6f0dad356a8718d19338db644582d": "d2e8f01b3a5ad7714814694b2e12eed1",
".git/objects/d3/a1fb4c29efe9247f4ff792f0afbd89aa008e73": "2d5afd8c3186fcc950e5435c7a02569d",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a0/008d38ee08ce560e2ced57b9dca855fe0fb088": "12a763dfb867233403a51eb221b35e62",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/64d032f659fb968a2d65ca9f7e22e80668e95e": "f2dbc725b30908f018a6f8bdb692d2b1",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/ff/3f55f3e248329d9e36d6fe6d74bb099b1979a1": "540f7e7a58baf049c1f7b51d3e40a3d4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/361dc4702c7e8bde2401acc81cf721151e1631": "362e8e6c7fdfab3fd26d99832ea76d7c",
".git/objects/2d/62396f40c851ef6dd960fe617d5640985a3a93": "2b90202db7da044814db65b8ce59b726",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/24/e6d412d36542634b7343d5b0d41c7b7ad50a8c": "dfa8b62d7407c1e10772707382df8239",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/1d1332c2cba6f7d7e265ce0bf92543b3a7aec7": "b6f31fb257feff1aa0a8b34f21043dfa",
".git/objects/82/f42edc1e7b99040095e48cbb8c4afa950b8748": "05aabd6451f1c8aaf9b49db880007d7c",
".git/objects/2e/612b64a8db9779bf84fe959ded726bb3d30244": "d69e027db824503092b13fd76d1c6779",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/47/3257fad1ac084d53975e1c544a1b7955f9b865": "de7b17018caeb5da021f7df5e4533993",
".git/objects/14/81b6ac851db82817b8e2841b0f192c30bfe149": "4383495b9727b5565ded0b4755115e1e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6cd9ccd99b4af846cbc56435343b2ece",
".git/logs/refs/heads/main": "bb7e9a36f11bf62fda05a4f2b4a2b601",
".git/logs/refs/remotes/origin/main": "b4e9d2de9ce9567cfe910dfd3079742a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "01444e4f7ef49acdd4caa7dff2f964ff",
".git/refs/remotes/origin/main": "01444e4f7ef49acdd4caa7dff2f964ff",
".git/index": "42942dbc63a96c14c8284975afa0c944",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "fd09609d0fbec0145a1553e43d8449d8",
"assets/NOTICES": "a58b3713e534b63939afa67b045beb38",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e4d1560f3553fc386c07168dec30655b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "3f05579eb32a283c3b81040b4361c843",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/products/zapato.png": "efe8eb5ba4821b8b15fa7a1262d98144",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
