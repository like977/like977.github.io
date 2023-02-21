/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d8f722cfab4f60e30bd08999ab82aa29"],["/Gallery/Pc/anran/index.html","35987021d1bcee14a6faa206574a6744"],["/Gallery/Pc/azl/index.html","4f842bdda968a74c7e06fb7a7bf1b11a"],["/Gallery/Pc/bing/index.html","4ae444a2c2ce3775f65088cca9753333"],["/Gallery/Pc/cartoon/index.html","9d6c50e0784c710495e30bae48b9ab67"],["/Gallery/Pc/dongman/index.html","145e6634d075d1e3a56b35853da1b181"],["/Gallery/Pc/feitu/index.html","0d2e70eed79e0522942568e946a5465d"],["/Gallery/Pc/guidao/index.html","00014595f515bd579618eb7a29ec1cbd"],["/Gallery/Pc/jiangnan/index.html","f18ec893389d18e5dd916facfc3b091e"],["/Gallery/Pc/menhera/index.html","21f4e660bf7952c9dbfef12921ec0daf"],["/Gallery/Pc/qx/index.html","b9e89919411c86c60445ba7734d06dc1"],["/Gallery/Pc/sbpk/index.html","19a60db7a4eaa84847dacc5b9babaa69"],["/Gallery/Pc/shijue/index.html","9e25a59d0e5a55761c5a4bdf55e84b66"],["/Gallery/Pc/wlof/index.html","b1b7354418e2e9db586e2689fa36e1af"],["/Gallery/Pc/yinghua/index.html","a655fe32e3fa74929ffb6a6656f27943"],["/Gallery/Pc/yuzhou/index.html","34306e5ae1328205aa29ac729347d125"],["/Gallery/Pe/art/index.html","865bb96a3e53c797d297a31e6363614a"],["/Gallery/Pe/bamboo/index.html","dcaa96dbae1b25b4968c5a754f9c9d8c"],["/Gallery/Pe/fengye/index.html","1d5491868b9875b9f185eb7decda86af"],["/Gallery/Pe/fukan/index.html","b819b791f22105256b2ffb68c6363ef0"],["/Gallery/Pe/guangyu/index.html","782ed29a5ab105d91fc48094a9d8fbbc"],["/Gallery/Pe/index.html","7c45cfd4c1a45f6e4956ae2a043d8975"],["/Gallery/Pe/jiangan/index.html","9e11c91905f811083737afeaf104c113"],["/Gallery/Pe/jingyu/index.html","ab46468bfe1879bf172f15faa1bc9981"],["/Gallery/Pe/menhera/index.html","8257e127ad60677df26d593fbe19692a"],["/Gallery/Pe/moon/index.html","22f60861964e755f4df37e3fa9e834e3"],["/Gallery/Pe/qx/index.html","4df4af5fcd05f0efc20eb060e67c6d81"],["/Gallery/Pe/sbpk/index.html","c0f27e2485e8636f9fd35c4d6481622d"],["/Gallery/Pe/yulan/index.html","2ce0932bc3f04a79959c2456039cc78c"],["/Gallery/anran/index.html","5d236486026aedfeffcce421ef94e6aa"],["/Gallery/astronaut/index.html","2bc5c65f8b09dbff85cd5c631aca8776"],["/Gallery/html/index.html","73cec1b53eff8e0a941732f3c229f87a"],["/Gallery/index.html","274184345ccc4920d40ee08e21a9d4be"],["/Gallery/pcbz/index.html","230d29723e97148fff8f2499bb793ea6"],["/Gallery/season/index.html","7dcf2aeaa795b4c4f70b5daf380234fb"],["/Gallery/shipai/index.html","b5a92bee1d13aecf754d71a7e9021cda"],["/Gallery/wallpaper/index.html","fcd5be1cbd27f46c4c51808223637e51"],["/Gallery/wolf-pc/index.html","362f7e6cb6d15af752bcaef4560b072c"],["/Gallery/wzbz/index.html","be56c83a4162e0e0c1712c210bb2243f"],["/about/index.html","6b91ee21a9ad59a068efe9e533e5c046"],["/archives/2022/04/index.html","7b95d68e19701bd7edda82a757ccc8db"],["/archives/2022/04/page/2/index.html","f681c0757c30f10d9b6acd09c897a9ca"],["/archives/2022/05/index.html","d9e87ebdf2d63edc845e218a20c3ab28"],["/archives/2022/06/index.html","1018e076698a6dcb67cb2c0a33545ae3"],["/archives/2022/index.html","1e2015c2f117066a3716d8f1d5bbb747"],["/archives/2022/page/2/index.html","9b7d13846c4471c7b0d2f17126a81774"],["/archives/2022/page/3/index.html","e71244c1ee3e10e68cbffc214849b9e9"],["/archives/index.html","e2c89567680d155694daedc5eed003a1"],["/archives/page/2/index.html","8ab4f6b8168737f848cf01d0d3c029ef"],["/archives/page/3/index.html","158b70653a2e5d06d92aa0b9e9412036"],["/artitalk/index.html","c0cc776d9aa5c8012aec6bf5894e4f1e"],["/atom.xml","f593898f37e51719bf489798aeaf8d15"],["/bb/index.html","f16a540f0247c8ae5e345ed2a33ebba2"],["/bber/index.html","582fe3a800069011043d2e666f92bb89"],["/books/index.html","5763d61d1712813bddb1a857e588b4e5"],["/categories/Python/index.html","3291c8778e94a07c995cbbff2fd59771"],["/categories/index.html","7ff1042c99146026a65ee8a8a93eea4c"],["/categories/study/index.html","670ea365747b257a5717701ec04fc86f"],["/categories/学习记录/index.html","795741eadcf3dd1ec62862a407991133"],["/categories/实用记录/index.html","64b3f233ce0dada9a7a6f411ce784d30"],["/categories/实用记录/page/2/index.html","4b8a29f13fb6c9726b7e35e96b5da726"],["/categories/小小日常/index.html","ccb38bfdf1f43aa8680e5ef16bcf430d"],["/categories/日常小记/index.html","656c97a53faba01dce8c7db9373e6e4d"],["/categories/闲散笔记/index.html","47d00a8a38e7328383f838ce226c86ec"],["/css/custom.css","261006e428d3a6098a9bdb3d998fce03"],["/css/custom/bber.css","9069126e607818eb25672c84f5ae1b34"],["/css/custom/categorybar.css","c09de2f792b81c414d57823aaf73c201"],["/css/custom/copyright.css","134c496e16ae211d0aaec94645df414e"],["/css/custom/custom.css","481ab4dc2648b5deb91fd862c0a6fbd4"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/custom/home_bb.css","4f6895c98ccbd1a5659064421bb51bc5"],["/css/custom/twikoo_beautify.css","72b3edf0f8e306082d2ce73b734b2e99"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","8fa60d1663a993ff03c547e3c992c6dd"],["/css/modify.css","571ed3d486bfedc0de5832d7613445a2"],["/css/ssn.css","ac82e7b6c08da03297ce6315e7a907b5"],["/css/var.css","0e33b7ad9782b67e4a832a040bc91e45"],["/games/index.html","4724296b80b7c7b6dcbf1c8ded43296f"],["/gitcalendar/css/gitcalendar.css","2619feaf0db86ae61e628200bdfbb8fa"],["/gitcalendar/js/gitcalendar.js","62984251e17c83839cc90968a16608bb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","8c2098a315421fdebefc18cd478f11e1"],["/img/android-chrome-144x144.png","4515a08e887cfc45010d5935978a9610"],["/img/android-chrome-192x192.png","89444f044a872c1c4814f5121e341b1f"],["/img/android-chrome-256x256.png","01fec7ec7dabee4ed741cc4c95b62610"],["/img/android-chrome-36x36.png","fef4dce2569bfff87da5e92d993d9fdd"],["/img/android-chrome-384x384.png","8e7ceae0c1a84426035d1fda0918444d"],["/img/android-chrome-48x48.png","522dc1c68d0906cfb99746e137bdefdb"],["/img/android-chrome-512x512.png","54367f030e69adb5b88015a051d3ac1b"],["/img/android-chrome-72x72.png","0d6d678a4ab294ec1971b04f143bd4f6"],["/img/android-chrome-96x96.png","7ee7e9003a0543ea8831bf247ac58043"],["/img/apple-touch-icon.png","7a18f5c734758d8d21d28526efc55a6a"],["/img/browserconfig.xml","1a0d80ad0bbef56f3c5ae4e1349b4e90"],["/img/favicon-16x16.png","0c26ae6e0b7013c9b5d9dfab543fd7dc"],["/img/favicon-32x32.png","cd47b42450bc521bede45098f5fa1feb"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","3a0231d6e1f69d552afd02684e8153f5"],["/img/safari-pinned-tab.svg","4a1b3f1cf8b54368cd9521541af56c6b"],["/index.html","14a22bd66ece26a6e62507f68b682f57"],["/js/custom/custom.js","3e65a286e6afd79f1080683b97ad41cf"],["/js/custom/fixed_comment.js","62b96b40e2063b254fe6a5264b4196ce"],["/js/custom/heobber.js","9247a61c05d6d98d79e1aabea38450bf"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/modify.js","6056dd5a74ed163df0433c2a81456edf"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/sun_moon.js","a4e43ec9df5df0f5db20e910b5a3ab1e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weather.js","ebf9ff0fe424b4749860918175d39df0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","935705e91f8594b38a6265b40084b7f5"],["/liuyan/index.html","c92d327b1fbdc47458472b55f5499181"],["/media/alipay.jpg","c956fabe67b5441a88923522e72bbb5c"],["/media/avatar.jpg","cae5a754df8d5b0e4aa5e4647a597b18"],["/media/bg.jpg","8843677c00e5a448f82e5d49b06b247b"],["/media/favicon.png","fb762187592876ced8e1d1a6fd63ef52"],["/media/page404.jpg","ca9f5e9f1572830853930ccaebbbce88"],["/media/top_img.jpg","76a9985c6b0230199858f84e139319d0"],["/media/touxiang.jpg","cae5a754df8d5b0e4aa5e4647a597b18"],["/media/wechat.jpg","d83677b68f6736e6f6ff1b15c7254472"],["/movies/index.html","b424ba88bdafe6fac2f67f285deffcc6"],["/music/index.html","f090b5d1f6160fc7d27845ee57ca92a8"],["/page/2/index.html","25734c984bdd7bc1d3bb0866486eaa8d"],["/page/3/index.html","28fa3c166f09fd28a0be9ebbd126a248"],["/posts/1.html","41dbc5d39f6385a204fed3022ba3b066"],["/posts/10231.html","296aadefe2c87fadf46ee73c0026ef7a"],["/posts/10904.html","0180a6348db34d58f5758121de74ecb7"],["/posts/12591.html","d8d3e8939adc7488bac70943e0a5046c"],["/posts/16227.html","4915b10c16f50f4c77fc73059369748e"],["/posts/18362.html","b38460d7d33df56d92b09be303636144"],["/posts/19049.html","71a87d0cb9a99134132d98379b827b49"],["/posts/23512.html","2fdbd628ba8e855527d5c25b9b74075a"],["/posts/25035.html","dcb1966e8444e79ff2a5f95152a40f55"],["/posts/2533.html","1e2811213d3af5c6a194c644c6b49ffb"],["/posts/26284.html","661a5bd2576f47a5134df46ecc4dd2bd"],["/posts/28147.html","42a31f3ff8596c537c2a2ce96d4b1ea9"],["/posts/30191.html","7b5ad19390d74bbcee1d285d84e46c3f"],["/posts/30422.html","9c00a0babad063961de4a9ed8a9c330c"],["/posts/33088.html","ecc5abcef1768397b2223138a9b72ad3"],["/posts/39418.html","dfa5c6f766d08b18b2dbd5cd70e74761"],["/posts/40518.html","0b28bc92af6d53b0ef30c460a617bce4"],["/posts/45035.html","88e2ce9c0c2398e219180cad0eb6c094"],["/posts/4758.html","fc6b794fc83d4a1dbbddcaaca7736a48"],["/posts/47855.html","6e393b482d85716d129c0ae8a777ca0e"],["/posts/49833.html","2fa46ea1a1e93c897b644f604d4f2a7b"],["/posts/54103.html","43e8768458666fd7521417946e3b6412"],["/posts/54725.html","ad7431e8a588a1e92faa051f1bcf2dd7"],["/posts/55340.html","3172d563631f2f12ad7e43fb50a975ba"],["/posts/55766.html","4c52c791402bb79e96ccd0a4bff1796d"],["/posts/56691.html","8e71d2e65a0177ea8cdf5fd65d22c270"],["/posts/57239.html","8ec7ba5afe73012f03542e4c2feacb92"],["/posts/57982.html","38e7854dc48045fe3b64853cb0b120a0"],["/posts/583.html","95b2be29f77a7d4f0acd51f98f0cf504"],["/posts/60267.html","4414a9229e17dc32ed80b5c1ddcd5683"],["/posts/63385.html","88da61273ca2cc620e12cdca57d83f38"],["/posts/63944.html","47de2bf0d259eedfe2d6e31eb7fa578e"],["/posts/6651.html","4a305cd58f3bd906a88cbb372103d059"],["/posts/832.html","cfcf25eb76ebb3eb3f5828519df7598c"],["/posts/83496.html","ed9fb8eed25d7631d394e003350f0832"],["/posts/8546.html","389b3c0bb4849b2682967b334c288d48"],["/random/index.html","3c9a4746d1bb839182f68034f4456f12"],["/search.xml","6f860fd7d6664f39bcba59e6c58bd2e3"],["/shijianxian/index.html","8fca0d120409ebb1f759b13753ea6717"],["/shuoshuo/index.html","c3eacdc62fa7f65bdaec39eb098c2eab"],["/sw-register.js","f287107e0396d5419c80afe6743fbf4a"],["/tags/CSS/index.html","90fefa454cef6a56b6fc35790fc5ac07"],["/tags/Git/index.html","509cf9325e7299d6d68699693fc3ca98"],["/tags/Github-action/index.html","39ef20c95008e796f340d53e5eafc100"],["/tags/Github/index.html","523d9893c8e65d6d19d52eb49640943c"],["/tags/Hexo/index.html","f879f378d5094b116a93e37fce7d9914"],["/tags/Html/index.html","115cc5319cd283e80a1714235792bc07"],["/tags/JavaScript/index.html","9e213a67569c823518203a4ca323db0d"],["/tags/PDF/index.html","6801bae173eef5b622d092e822eb5feb"],["/tags/Photoshop/index.html","373ff245aa8614301a341dfcb93cdbee"],["/tags/Picgo/index.html","945272a9be42a1fce1d7b37987583ad8"],["/tags/Python/index.html","3a21e2df18372dd8a7ba1893c7218bbf"],["/tags/Typora/index.html","13f47e3b47b24e65a4bbfa6c6d9c29e7"],["/tags/bat/index.html","91bf2623bd3eb8b3c3591ebb6f66b589"],["/tags/butterfly/index.html","be220ae973ff2a42937e6e8f266ec115"],["/tags/cmd/index.html","60bd25b34d767d1752b9f0fe62eacbfa"],["/tags/index.html","488a015635e140412d11688c124c6149"],["/tags/云函数/index.html","8438af45e5e6af428ecfcd5097347cdc"],["/tags/传输/index.html","1bb0c159feac54e5cf89c9b268165714"],["/tags/备案/index.html","5c5a6f1d38f867499ab31929341ff714"],["/tags/局域网/index.html","666981ca58c720185b8b109757cbf55f"],["/tags/恢复/index.html","444de1f0c4b2bd68616aaac12b7aff3d"],["/tags/步数/index.html","761f35e01791606c54219c4f29d1fe68"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn1.tianli0.top"});





/* eslint-enable */
