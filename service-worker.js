/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2018/11/26/Git-常用操作总结-一/index.html","f29e85211daa966e9559f229a3818774"],["/2019/04/08/docker-初识/index.html","f8e1e6b8e2a4216005880a7697f42614"],["/2019/04/09/Docker-容器操作/index.html","7dd947737a1dbd6baca5ce7373b53bbb"],["/2019/04/09/Docker-镜像操作/index.html","31381ffe030f9c6956afca6397404277"],["/2019/04/09/docker-Error-response-from-daemon/index.html","6f4322ee1737c6eab82c2b430a0d74e6"],["/2019/04/09/docker-安装/index.html","9354ef17bb0bede34f7a2b592680f773"],["/2019/04/09/docker-网络访问/index.html","ecc48d2ad9616e93c8565ee3ea97d18b"],["/2019/04/10/Ruby-安装/index.html","4f82badf518351ac273bca99dec460ef"],["/2019/04/10/linux-程序安装/index.html","840bd5f43574d9bce2c83e4069371703"],["/2019/04/10/ubuntu-apt-update-error/index.html","7133cb47fe9ecd80df360c70ce825658"],["/2019/04/10/百度anyQ-编译错误/index.html","054cd2870aa056e321087e2c264f4c3b"],["/2019/04/12/linux-文件编码与转换/index.html","8e78db2662e7166196055ed2cc5fea69"],["/2019/04/12/linux-软链接和硬链接/index.html","a00d221dd57ae4c246aba4691b856d52"],["/2019/04/13/linux-make-install的安装与卸载/index.html","497c832704a6b2a4c4d55bd5a3d2f50e"],["/2019/04/13/linux-编译命令总结/index.html","a934fba33d10923b13b6277fedcad258"],["/2019/04/19/linux-编译JDK源码/index.html","cda2e6bc3f3c5e18851b8a42a4b2c1ce"],["/2019/04/19/openjdk-8-使用Clion调试源码/index.html","7c5e437f8ca693dd142940151b2bcb51"],["/2019/04/22/java中数组是对象吗？/index.html","dde910fd2b661ce9b835444ef3c0ba70"],["/2019/04/22/java内存管理-栈-堆-方法区/index.html","a57553c3d5ba26db6182e78477fbeed4"],["/2019/04/22/成员变量-局部变量-构造方法-导包/index.html","550fab61ae1e4babf6d41293874f5441"],["/2019/04/24/java-文本文件读写/index.html","b1a00f08339a61cc22fbad7caeaabd55"],["/2019/04/24/java中为何任何对象都可以和String进行拼接？/index.html","cd6c9e8898a6c94b7c085be945758446"],["/2019/04/25/java中的继承-abstract-final/index.html","fde3540b36dc080907ce0c25979f4fa9"],["/2019/04/25/java中的静态-代码块/index.html","325ba3f5ad7e1aefddf8252bb41561ff"],["/2019/04/26/java-修饰符总结/index.html","bec630c7f0cc0d0e9e9bb4bf6d6e530a"],["/2019/04/26/java-多态/index.html","7eeaff51b18628ea5ca9ad95b1ef6725"],["/2019/04/26/java中的接口-匿名对象/index.html","64f5453deccf17de11340a8fefe4a42f"],["/2019/04/29/java-API-Date-SimpleDateFormat-Calendar/index.html","f6cdea467b7d843734f24a66d42580d2"],["/2019/04/29/java-API-System类/index.html","bea7860413a75321d940c740e9bfeafe"],["/2019/04/29/java-内部类/index.html","94dbc03306c74347648155b9b1a8c69a"],["/2019/04/29/java中根类Object的常用方法/index.html","1722dd5151272bac3dae81278a529f7b"],["/2019/05/01/java-包装类/index.html","8198420e9382f4e69f9efeb9a0974a73"],["/2019/05/01/java-自动拆装箱-正则表达式/index.html","1c6f11b290eaf9b5f21bcb30f79d63c2"],["/2019/05/01/vscode-使用技巧/index.html","20cb4abc1a11293c1c2081cb2e3d4172"],["/2019/05/02/linux中的SysRq魔术键/index.html","de5f48066139017826e9faab50eb4a38"],["/2019/05/14/java-HashMap详解/index.html","3a844348c4e0ed987ef9c26dd97db992"],["/2019/05/14/java-IO流/index.html","8f51d1e393567f0dd35e1c3ac0a5605a"],["/2019/05/14/java-增强for循环/index.html","4c359085c7d8ae8f1262d15eb27a1907"],["/2019/05/14/java-文件管家File类/index.html","54da8b7601f0c4e37c615338d43c2d36"],["/2019/05/14/java-泛型/index.html","07cb0ee9432e45e4603129ee8c39996f"],["/2019/05/14/java-迭代器并发修改异常/index.html","cec418dbfed9a880eadc9160600486a3"],["/2019/05/14/java中的常用数据结构/index.html","d3bd68a539d6449b551e93de4e65a98d"],["/2019/05/21/java-变量相加和常量相加的区别/index.html","6c38e3cff6c6023b16343388aa60642e"],["/2019/05/23/VirtualBox-网络模式总结/index.html","e80e7d90e380dece9215d33d273cddf3"],["/2019/07/06/javase-CommonIO总结/index.html","0ac20e29141379c0f7549c0a4640acc5"],["/about/index.html","9624b0236963cd5332e94b8ad93b4d68"],["/archives/2018/11/index.html","29829d4cb7478730cb6cbf5512561b54"],["/archives/2018/index.html","86795e0b9e0adf1bad95496141624572"],["/archives/2019/04/index.html","c40957b2f64ebc1dce043b9f1b864f35"],["/archives/2019/04/page/2/index.html","903772326513ac4a015fbc0950034dd5"],["/archives/2019/04/page/3/index.html","ffd54711d0a0a9bb946e742f848a65c4"],["/archives/2019/05/index.html","6d3b19c9b002e827cc9d96de8d582282"],["/archives/2019/05/page/2/index.html","578a96bb7b27f2f09acaa3949ad57154"],["/archives/2019/07/index.html","2c1f173a08f636c25cffd176b8c45cff"],["/archives/2019/index.html","56445f6e45c5fd38db6af22d3fa163dc"],["/archives/2019/page/2/index.html","062d3dbcce9359b8a67ed47bb8496e3f"],["/archives/2019/page/3/index.html","80978e361a08f06fcb9ea2b2f6b5c312"],["/archives/2019/page/4/index.html","f55a7805c8e35e37aed9421b7f88986c"],["/archives/2019/page/5/index.html","402426de25f0567efeee271547d0950f"],["/archives/index.html","eb1c9a82385640c40c97a2c1fe7a7c6e"],["/archives/page/2/index.html","5526b59a908107e464bb33d150a0fae0"],["/archives/page/3/index.html","73e3a485e01a5065fadae94c981de026"],["/archives/page/4/index.html","006ddedca11a634299c5701f29ce3b89"],["/archives/page/5/index.html","fa8d91dd6b05cf81b70e5e68193bb8ad"],["/atom.xml","5f6d16945a639cbc5b1c6974a94e8a19"],["/categories/IDE/index.html","19591ce04df0f7349bd222e07917d843"],["/categories/JVM/index.html","953976de4a40816189c8138617815233"],["/categories/index.html","70242d7f0677faa37e0457a0c337ac9b"],["/categories/java-se/index.html","7e5901176469cef70986eb1e1a2aea0a"],["/categories/java-se/page/2/index.html","390a2e0d8157c9434d7960e751939297"],["/categories/java-se/page/3/index.html","8370f669d5bddb16ef2f62d383855a82"],["/categories/linux/index.html","c5736fe825ed22b8010a2eb57b0e3d0a"],["/categories/微服务/index.html","81d5e42d1e2432d2a39836f2d3bc880e"],["/categories/智能对话系统/index.html","4f651b6b232a41c85c1ec894d0efb64d"],["/categories/版本控制/index.html","726437b21efa1e209b8f67df189b2328"],["/categories/编程语言/index.html","59b7faba3e430dcc922fce6cef71b7a4"],["/categories/虚拟机/index.html","a803c20cdc2638811964378520c380b9"],["/categories/踩坑/index.html","2980ba6696ce70115ae9944662757a96"],["/css/main.css","e32a550d301bee26d493e006bf81f11a"],["/images/RQ.png","b7b4b5763fd625fa9ae9fe52399d6d8d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/apple-touch-icon.png","6f9580251e328f06b4e03dbe63447228"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/icons/pwa_icon_128.png","3f2d4a108c2f6df1af551bedfc64ce1d"],["/images/icons/pwa_icon_512.png","6f9580251e328f06b4e03dbe63447228"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","b889956c35db582769fe7482a1bb9d6c"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/leancloud_counter_security_urls.json","ca7b2b913f0b9b54b51f519e56d6a3d0"],["/lib/Han/README.html","0b1a162223698917d5d9d0cdcdd082a9"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/canvas-nest/README.html","51fd19fea26f3425cab121800983de94"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/bower.json","188dd1a7583ffab4da32757242993f36"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/needsharebutton/README.html","8338778865683ec823b8330d0f4196f6"],["/lib/needsharebutton/needsharebutton.css","d756f1aa69c49e78541639f81efa913a"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/pangu/README.html","64cdcb1d346c07ebf7285ce9d0fa60d8"],["/lib/pangu/dist/pangu.js","95039627348ac63c7fda4cd644b8e1e7"],["/lib/pangu/dist/pangu.min.js","a5bf049a3ae9cb5b19489fb2c61ae276"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/manifest.json","88c242706cc745b938f9daa745f3c042"],["/page/2/index.html","2bab72f5bd989c7e8f4a8e1cfdd387d4"],["/page/3/index.html","8075e2206d7baffb49bdd7c41fe32ba1"],["/page/4/index.html","00dfec88292790bd923413cf620958fa"],["/page/5/index.html","10c3ba09461ebd064cc6ea8dc7139f0c"],["/pwa/icons/pwa_icon_128.png","3f2d4a108c2f6df1af551bedfc64ce1d"],["/pwa/icons/pwa_icon_512.png","6f9580251e328f06b4e03dbe63447228"],["/pwa/manifest.json","b7666d4cb94bde8193ceec88159f3230"],["/search.xml","31364adf99e1d4dd81ffe7f83e7c56bb"],["/tags/Clion调试JDK/index.html","32ea1b4f5fcab45b5d531d6f2e27683d"],["/tags/CommonIO/index.html","082bb6f7bf3b39136bd8e126764bc5ff"],["/tags/String拼接/index.html","ebda3b793ad7642437dc583fb1b8fb7a"],["/tags/SysRq魔术键/index.html","e60d9b115455d55a73aa73b6d833ab14"],["/tags/VirtualBox-网络模式/index.html","0bf87d990aab33564accdaf406c1d7eb"],["/tags/anyQ/index.html","dcba4c7ca0c2ba88381053ab0710d78b"],["/tags/docker-Error-response-from-daemon/index.html","ac98c22fc9217168a12e3681a16c6948"],["/tags/docker-初识/index.html","e0d428dd6b3b2e11b086ddd7b717425a"],["/tags/docker-安装/index.html","7550defcb095456cda241ec95a15f5ec"],["/tags/docker-容器操作/index.html","d3481c5e287d01e8b8bd6f208632a856"],["/tags/docker-网络访问/index.html","8897ed49b571872df25c26b8e2bc7a34"],["/tags/docker-镜像操作/index.html","9f31e40c0b3f858ea97dc97622b32d3a"],["/tags/git-常用操作总结-一/index.html","8d7366283d86b84c3e529ed6b415b50d"],["/tags/index.html","d33f9aa7916f7d8adf5de1bb48f3b1b9"],["/tags/java-Calendar/index.html","45d0eb230e0a4a1992689f0a18dc05cc"],["/tags/java-Date/index.html","cb617f72803e56a6b967ccc17399a6a7"],["/tags/java-File类/index.html","ce9d860ad3a8596be639062fe50b27fe"],["/tags/java-HashMap/index.html","b2195a8018ff53fda12beeba6e070551"],["/tags/java-IO/index.html","72376ca974fcaf888aecc1c35ae01e9c"],["/tags/java-Object/index.html","5cc4937dbaba2eae00311c0b2536bcc4"],["/tags/java-SimpleDateFormat/index.html","8c357059c7079051da5375ad8647c1aa"],["/tags/java-System/index.html","e00b958146ec0e34147807f07df1c30c"],["/tags/java-abstract/index.html","d47691180d9d1d8445daeee84f2f8f2a"],["/tags/java-fianl/index.html","05d7c20b1e8b16778d6e0299e22651ef"],["/tags/java-内部类/index.html","42e4b6a21f829c9233a0b87c3b0ca025"],["/tags/java-包装类/index.html","16b036a0e659a5a37bc084a038098b7c"],["/tags/java-变量相加和常量相加的区别/index.html","c71b96d768b4f31b61e917169b75cb72"],["/tags/java-增强for/index.html","ab0dee2c5a0b9124ca4b01195fb52f1d"],["/tags/java-数据结构/index.html","e86795d8d3149e4e31e4cfcaa927b7ad"],["/tags/java-泛型/index.html","ecb38bd231d7c7be5016f26c8748664f"],["/tags/java-自动拆装箱/index.html","cc9b3264d13cb9cd7c1da328751a3c00"],["/tags/java-迭代器并发修改异常/index.html","a1c7b42611ea9557cfdd7e261be6e0e6"],["/tags/java中类无法实例化/index.html","a03b35ffb2d196ee4bb7104a82395634"],["/tags/java代码块/index.html","5dd39bf25dd5111e4d454298b9d9b840"],["/tags/java修饰符/index.html","1ae196bdf0e387b0e2880c53feb8ffbc"],["/tags/java内存管理/index.html","41c9fd562e8ea618f16e60a8b01f3771"],["/tags/java匿名对象/index.html","cb0073a808568dffb62c344d13ba3f97"],["/tags/java多态/index.html","635a88655df0e5703631f4502d754ece"],["/tags/java接口/index.html","34c47f9525029de1f4d53c1e0bfc6d43"],["/tags/java继承/index.html","6254b670469cdb7ee330edce43b717cd"],["/tags/java静态/index.html","0e9cb6c34a1d6ab45d19904eaee8c7d2"],["/tags/linux-apt-update-error/index.html","678672a82d4d8970afff10a49204a036"],["/tags/linux-make命令/index.html","e2b24a8c93423ccf943bcdc0cff842ab"],["/tags/linux-程序安装/index.html","75441852dddb46ddd27bd1ad92b08074"],["/tags/linux-编译命令/index.html","0a54788e55cf7bb0d83b1b5f3ee1faec"],["/tags/ruby/index.html","bfe5fb0b30bb62b01e676cb295d3c13c"],["/tags/this-super/index.html","60482e97bf9d2f5d2affdf06bc5848ca"],["/tags/vscode/index.html","fff492e69835118a5152bbf228df6a9c"],["/tags/“成员变量”和“局部变量”/index.html","5b32beb3e5d88f6df7890952666fdae3"],["/tags/导包/index.html","c945cc4060a00608d168362641707b64"],["/tags/数组/index.html","c5aff1a08482d2b0921b559dc5b8c39f"],["/tags/文件乱码/index.html","d629f9675793ea4e84588e8021c7217e"],["/tags/文本文件读写/index.html","242accdba42a5f13fec39fd0c60c8707"],["/tags/构造方法/index.html","103877467621a511216fdcddeb1603bf"],["/tags/正则表达式/index.html","ed3545237735fc64e4ab91df840f6185"],["/tags/编译JDK/index.html","f3dd0fb56c152502fcb1df90b171de83"],["/tags/软链接和硬链接/index.html","d52ec5e06d94990d4306f781dc44ab9d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
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



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});




