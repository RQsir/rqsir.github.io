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

var precacheConfig = [["/2018/11/26/Git-常用操作总结-一/index.html","5c933a70c781343d2107e4e4a1e38bcc"],["/2019/04/08/docker-初识/index.html","c3c2ea7558a9d4de81826bbd904b0a90"],["/2019/04/09/Docker-容器操作/index.html","e647c53dcc9929a6985828e994026872"],["/2019/04/09/Docker-镜像操作/index.html","3be19019f3f026757f31fdcef0e1028f"],["/2019/04/09/docker-Error-response-from-daemon/index.html","2c915b274e57bd9d489bed116d0046d6"],["/2019/04/09/docker-安装/index.html","b8e5065b55f308e2620a9c7a94d10a86"],["/2019/04/09/docker-网络访问/index.html","0c1b684547ddbd786b7c553165a4a90a"],["/2019/04/10/Ruby-安装/index.html","9fc493b084aec39f793352312089dccf"],["/2019/04/10/linux-程序安装/index.html","d48fb9aafe423bd6ef84556fe36269b8"],["/2019/04/10/ubuntu-apt-update-error/index.html","9387d9a5aac89f7f788ef91c55511f1a"],["/2019/04/10/百度anyQ-编译错误/index.html","7b9fdd0c69460839464e1d67617c0a66"],["/2019/04/12/linux-文件编码与转换/index.html","0ddce348e377f73cef4d465c96855684"],["/2019/04/12/linux-软链接和硬链接/index.html","d6a512d93b9a83faed0fd502e3c90439"],["/2019/04/13/linux-make-install的安装与卸载/index.html","09fa6606140575aa7f7f2b732b63ba98"],["/2019/04/13/linux-编译命令总结/index.html","9ec0d6e29ed60af88e8bd15e7b8941dc"],["/2019/04/19/linux-编译JDK源码/index.html","6821ae7c80ca3816e7747ea4f77908f1"],["/2019/04/19/openjdk-8-使用Clion调试源码/index.html","ea8c1c2b8adc258eb7ef4db7b59a8d0c"],["/2019/04/22/java中数组是对象吗？/index.html","1366e5d1e8df7441bb72f0415f90c80c"],["/2019/04/22/java内存管理-栈-堆-方法区/index.html","f0658fd2103b8dd4fdca7dfaefeb90e4"],["/2019/04/22/成员变量-局部变量-构造方法-导包/index.html","5ca6e21a63fde52baa9309a1788049ef"],["/2019/04/24/java-文本文件读写/index.html","08bf5c0926132b07f71eca9ef613967f"],["/2019/04/24/java中为何任何对象都可以和String进行拼接？/index.html","6e10d7dfa2d567ebd4098c038895d7a8"],["/2019/04/25/java中的继承-abstract-final/index.html","1b93c2a4a7dfe9bfdf4cd3cdf84feb14"],["/2019/04/25/java中的静态-代码块/index.html","55b76bc18639704d526a89c024e7d905"],["/2019/04/26/java-修饰符总结/index.html","c76ec0dc011c113e1d84462c736fc2a4"],["/2019/04/26/java-多态/index.html","9fbf954aaab3b44f3043477224b041ff"],["/2019/04/26/java中的接口-匿名对象/index.html","a1876c9be8ea0dbab282e33c267a9467"],["/2019/04/29/java-API-Date-SimpleDateFormat-Calendar/index.html","e5cd1c382f3b91f30fb182a0424f6e6c"],["/2019/04/29/java-API-System类/index.html","104c3d1da735ebd85014a443c24d4775"],["/2019/04/29/java-内部类/index.html","8e25cd1391754fea966c2c2cfe33eebc"],["/2019/04/29/java中根类Object的常用方法/index.html","93aa41acb3f621d7ac0723b4c92e6d05"],["/2019/05/01/java-包装类/index.html","c7fa1c6bcdb7a27049cd7ed7e629300d"],["/2019/05/01/java-自动拆装箱-正则表达式/index.html","f25cfe5ad6e57d2b9899840cd966cbc1"],["/2019/05/01/vscode-使用技巧/index.html","98e32944b01558c794c2a52e65e8289f"],["/2019/05/02/linux中的SysRq魔术键/index.html","cc47cfd19897d0d87339ded7c4486c0c"],["/2019/05/14/java-HashMap详解/index.html","adb85d14bd6c9bff517f77ae3621d561"],["/2019/05/14/java-IO流/index.html","737a178462f0665e6c7fb92b94eb314c"],["/2019/05/14/java-增强for循环/index.html","32a337b836e0cb53fb1e4cafabbbdaa7"],["/2019/05/14/java-文件管家File类/index.html","c7bcfbc674386a803729af6bdfcac235"],["/2019/05/14/java-泛型/index.html","9b2c477516aab2c7b03e5facb101d0f7"],["/2019/05/14/java-迭代器并发修改异常/index.html","1c3a867ea50f19398b149749a077f6ef"],["/2019/05/14/java中的常用数据结构/index.html","37933d15c2651aeaa0a992fec16b1632"],["/2019/05/21/java-变量相加和常量相加的区别/index.html","58f49dffa46efa377fc4b3657873f1c3"],["/2019/05/23/VirtualBox-网络模式总结/index.html","b7723521eea521d1626bf58def56425a"],["/2019/07/06/javase-CommonIO总结/index.html","0acc8deb3707a66501e76e93fd6c8613"],["/about/index.html","bb271555b89b93549e6ee274e553b9e0"],["/archives/2018/11/index.html","38010b9dd8f719ba2b3cea7c00c289d8"],["/archives/2018/index.html","bf3825dc4908bbaa3850ebd9431d65c3"],["/archives/2019/04/index.html","d06106d418209a52b12b1ba9742170b9"],["/archives/2019/04/page/2/index.html","1cc6a41b5a2c070aa358d34a1502ce3b"],["/archives/2019/04/page/3/index.html","ea9ea0192ff4ef22fe0de54a3d8c10d9"],["/archives/2019/05/index.html","7602e5c1a9027f19f14552b7fe4d745c"],["/archives/2019/05/page/2/index.html","53bf7b0231fe499068571ab637fde79d"],["/archives/2019/07/index.html","519c1eafc35fa84df0fc22953b1b1878"],["/archives/2019/index.html","fd6d546b0c3214356752d729f7dce94b"],["/archives/2019/page/2/index.html","ed28dbd03a430e9fc11c9a844ef3ec0f"],["/archives/2019/page/3/index.html","a2e9da0d2ddcb8335371fbbe91e88397"],["/archives/2019/page/4/index.html","26ad4918495abf3a6bb3f4748e174d22"],["/archives/2019/page/5/index.html","9701ae893846537db6a93f1f7cda03cd"],["/archives/index.html","f23cca67e304ed3f7c2ec09d9d1753c1"],["/archives/page/2/index.html","979f0856f04f9e432376dfcaf5741742"],["/archives/page/3/index.html","8effcafef85fc05e1a593ada9e5e60ed"],["/archives/page/4/index.html","2dccae74f642ef038e58fc4a2b5af1bf"],["/archives/page/5/index.html","7c496d753c300db22b7df02d083013df"],["/atom.xml","3528d8ac342966eff6dcd1bb16ddea5c"],["/categories/IDE/index.html","c48151f3ff2a3cd7a4419d4c76f96bd5"],["/categories/JVM/index.html","fd2d90a75ecaeb2b0099e29ca5e4899e"],["/categories/index.html","bc7cce7e42ac24c512947517bdd7384f"],["/categories/java-se/index.html","b0040cbea8d63803c0efe925cfae1270"],["/categories/java-se/page/2/index.html","1278e1a0b008b7bd6640dd2aea6ba79d"],["/categories/java-se/page/3/index.html","358db82cd59c31ae6c32c02866d0e7cb"],["/categories/linux/index.html","6e58616b6e598e15617837007d7f1a48"],["/categories/微服务/index.html","e96ba88437c256e02f0673ee4835367b"],["/categories/智能对话系统/index.html","c1de1605baf43e10df4c90cd7ad1e898"],["/categories/版本控制/index.html","e55609d4e0e5effe133bf3ded7ed99e2"],["/categories/编程语言/index.html","db091305f6b21ffcdfa91bd706f875b1"],["/categories/虚拟机/index.html","16d5b3827085aff4bfdd3bed242efe84"],["/categories/踩坑/index.html","df2d825ccb3ac11e6647ca10ecfaf75f"],["/css/main.css","80655eda46ed6a9b2ae2edc22345cecb"],["/images/RQ.png","b7b4b5763fd625fa9ae9fe52399d6d8d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/apple-touch-icon.png","6f9580251e328f06b4e03dbe63447228"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/icons/pwa_icon_128.png","3f2d4a108c2f6df1af551bedfc64ce1d"],["/images/icons/pwa_icon_512.png","6f9580251e328f06b4e03dbe63447228"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","0d444717f9588c8695b13988331bb1c7"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/leancloud_counter_security_urls.json","86a1e9f9c0ed5453eedbee83c203107d"],["/lib/Han/README.html","0b1a162223698917d5d9d0cdcdd082a9"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/canvas-nest/README.html","51fd19fea26f3425cab121800983de94"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/bower.json","188dd1a7583ffab4da32757242993f36"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/needsharebutton/README.html","8338778865683ec823b8330d0f4196f6"],["/lib/needsharebutton/needsharebutton.css","d756f1aa69c49e78541639f81efa913a"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/pangu/README.html","64cdcb1d346c07ebf7285ce9d0fa60d8"],["/lib/pangu/dist/pangu.js","95039627348ac63c7fda4cd644b8e1e7"],["/lib/pangu/dist/pangu.min.js","a5bf049a3ae9cb5b19489fb2c61ae276"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/manifest.json","88c242706cc745b938f9daa745f3c042"],["/page/2/index.html","e0e5b5f1729b9397a3f60009fce1ddf2"],["/page/3/index.html","137488efa25e36f7504680740b1b7f55"],["/page/4/index.html","6f148a3eaac4877cd6e860260e8c2173"],["/page/5/index.html","023331d19cd46391bc6db5793206091f"],["/pwa/icons/pwa_icon_128.png","3f2d4a108c2f6df1af551bedfc64ce1d"],["/pwa/icons/pwa_icon_512.png","6f9580251e328f06b4e03dbe63447228"],["/pwa/manifest.json","b7666d4cb94bde8193ceec88159f3230"],["/search.xml","3524782bd89b92be3317c3d57ea33a32"],["/tags/Clion调试JDK/index.html","e22756520c8c05f007ce671fba0cab89"],["/tags/CommonIO/index.html","b0b2cab58b0c785f8cb9a1de53aa1a90"],["/tags/String拼接/index.html","859980b8b65b3afead1b51cf7aeb9ae6"],["/tags/SysRq魔术键/index.html","f338d1bf24a6a7fce42edef0eeb04712"],["/tags/VirtualBox-网络模式/index.html","c361a24c5890455c8b14be2b00d1d253"],["/tags/anyQ/index.html","f865adb27464e4543773ed22b32fad25"],["/tags/docker-Error-response-from-daemon/index.html","1a7de647844eb1e8a6dfab9ba0a17457"],["/tags/docker-初识/index.html","9d3b5dbd4a32540705411945b6f0cc3f"],["/tags/docker-安装/index.html","d5d1eb4cb5e5f407716714f3dd71f9a1"],["/tags/docker-容器操作/index.html","eb9b3742246f94022578dc390a42a971"],["/tags/docker-网络访问/index.html","36d961cab854b8934c008ad729cbbba7"],["/tags/docker-镜像操作/index.html","3b0297f14dcdb593e06e62f4a14c765c"],["/tags/git-常用操作总结-一/index.html","eb78e6d6684e4657a437d689e89598b6"],["/tags/index.html","a16746cb1ebde7553f9f958370a20cc0"],["/tags/java-Calendar/index.html","0f767b7b07a975fa1899020c7f8e650d"],["/tags/java-Date/index.html","80fdb69ed73bf116f21eaa116a0d9d7d"],["/tags/java-File类/index.html","31cf4fc3f718e17c794430ba1ca2786a"],["/tags/java-HashMap/index.html","8d42ecc0a36d4ad002eb41784d8ee453"],["/tags/java-IO/index.html","abcda93b31ec1203deb20a6e637b1a80"],["/tags/java-Object/index.html","cdf0eada77a4cd69a293d236d261b43a"],["/tags/java-SimpleDateFormat/index.html","fbe13b395b199b26135721e2b8fe007b"],["/tags/java-System/index.html","cd0852d5acb378e599724075ab473fc4"],["/tags/java-abstract/index.html","0769cb688ea96464f8e482ec757b76e4"],["/tags/java-fianl/index.html","da383219b88e8bd157df0a4819efee09"],["/tags/java-内部类/index.html","57b144d6e9374070d13ade3952eabbe0"],["/tags/java-包装类/index.html","669f1ca10bb076107b4fac0a2ad93c62"],["/tags/java-变量相加和常量相加的区别/index.html","03700fff07e49b97b86fe8fd1a2b100e"],["/tags/java-增强for/index.html","61cbb3f59d9e416a263d6a0f10147ba3"],["/tags/java-数据结构/index.html","06988d513e5d174028d35d6c45fec2bf"],["/tags/java-泛型/index.html","72ed2481f199a28ecfa4e51313242419"],["/tags/java-自动拆装箱/index.html","84c8b0e59edc21007df254b450718c9e"],["/tags/java-迭代器并发修改异常/index.html","7630c11af6b45333d07d439eb991781d"],["/tags/java中类无法实例化/index.html","b6aea7ba6991fe9a7aa322e0a72ae474"],["/tags/java代码块/index.html","44968c9214b77852b6a5ec42111f0362"],["/tags/java修饰符/index.html","cd45835e50d21ac3e80b07fa4484f543"],["/tags/java内存管理/index.html","546133a1defa1002ee5a65ecd82b1dce"],["/tags/java匿名对象/index.html","508276425109e547fa7bcd0f839fc492"],["/tags/java多态/index.html","287b254973fa8d6d3ccf533eefcfd756"],["/tags/java接口/index.html","3f065ee9ad102b5570211e9c999baa9b"],["/tags/java继承/index.html","dbbd07295559b550f4db499c41be69a0"],["/tags/java静态/index.html","182e3bc90dd065392409b2657c1439be"],["/tags/linux-apt-update-error/index.html","9cce26e5834c2d33da344b87fa1c3233"],["/tags/linux-make命令/index.html","717694a8383b309e8f1b2cebed88ff77"],["/tags/linux-程序安装/index.html","17faa4d3397a3f07dc366328d895058c"],["/tags/linux-编译命令/index.html","8064cac9d01d2c561fa1b5f7107f7211"],["/tags/ruby/index.html","a254d0204905ebf8bd932e0c43f7985b"],["/tags/this-super/index.html","79fce2b93ce6c52a928282e0588f41de"],["/tags/vscode/index.html","5a84bd14b6522636185608ad9d0df184"],["/tags/“成员变量”和“局部变量”/index.html","7ad979a49fb8cc230b5166b17d88bea1"],["/tags/导包/index.html","2f81737af5c28384a1a7f689bfbd021e"],["/tags/数组/index.html","69e0b234c438ed1837000062ff7f9abf"],["/tags/文件乱码/index.html","8f371cc42d4536a43d01e2213cce4abb"],["/tags/文本文件读写/index.html","c52d304bdb51a5dbcd8e478b4a09937a"],["/tags/构造方法/index.html","0a8c6522d3a0b29cbefbe660ba9db149"],["/tags/正则表达式/index.html","543300319bbadcf3a10a6046254f4aed"],["/tags/编译JDK/index.html","3d05d6f96132b2ab82e2b4731471357c"],["/tags/软链接和硬链接/index.html","559d58bbea0f2aca1cfd1050dc3cef88"]];
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




