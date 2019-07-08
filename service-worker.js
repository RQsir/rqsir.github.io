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

var precacheConfig = [["/2018/11/26/Git-常用操作总结-一/index.html","420aeafe9e735a83a9b2c833dec855d8"],["/2019/04/08/docker-初识/index.html","11e716e4f130c77fae42c89e5adb34d2"],["/2019/04/09/Docker-容器操作/index.html","69cd9f5197bb0347bc672929cb9d062d"],["/2019/04/09/Docker-镜像操作/index.html","14559a0cd16a3170e4b758cc6b3fd4ff"],["/2019/04/09/docker-Error-response-from-daemon/index.html","de487096bad3aa0d49c56a9286e26a18"],["/2019/04/09/docker-安装/index.html","84323108f4bd898c3f78a8147cfff1c7"],["/2019/04/09/docker-网络访问/index.html","5c179bec390ea2c9f373ef3ff130370b"],["/2019/04/10/Ruby-安装/index.html","da49c2dd077f92147db0234e8611a739"],["/2019/04/10/linux-程序安装/index.html","971f36caa005ea4e8585afca221a16de"],["/2019/04/10/ubuntu-apt-update-error/index.html","086bfb7fbf099106bfa54a699cd23018"],["/2019/04/10/百度anyQ-编译错误/index.html","ab733e47eaf684af10029922e3cdd3f6"],["/2019/04/12/linux-文件编码与转换/index.html","73623bd00bc5e67acf20f2faaf5f2d9a"],["/2019/04/12/linux-软链接和硬链接/index.html","c771842092eb7ed72bdb66376662df47"],["/2019/04/13/linux-make-install的安装与卸载/index.html","2eb1393853f2543528546bc0a08159dc"],["/2019/04/13/linux-编译命令总结/index.html","9e8bdfcfb1c29687d23552c9a8941b2f"],["/2019/04/19/linux-编译JDK源码/index.html","aab83ae29f7274e73d9fb8e0b5903e01"],["/2019/04/19/openjdk-8-使用Clion调试源码/index.html","cfeb7ec5970984dc72f8a2fb27440f38"],["/2019/04/22/java中数组是对象吗？/index.html","2b50b8f7abfcb87c4fd1121339f7545a"],["/2019/04/22/java内存管理-栈-堆-方法区/index.html","14278d7b692a5054e4ae21bf72acbaab"],["/2019/04/22/成员变量-局部变量-构造方法-导包/index.html","f1559409a14fa677b294da764c627c3d"],["/2019/04/24/java-文本文件读写/index.html","75483d6dea0d4c72841b054e4367cdbb"],["/2019/04/24/java中为何任何对象都可以和String进行拼接？/index.html","f3a0b79fade02e61f402c0302a9c4878"],["/2019/04/25/java中的继承-abstract-final/index.html","7d9f8d781dfd3bc1af59d8d13ffdeb88"],["/2019/04/25/java中的静态-代码块/index.html","f1e7ff990a22f1e302219550874eb9a3"],["/2019/04/26/java-修饰符总结/index.html","365671c56f049b4d46b3b618c0d66271"],["/2019/04/26/java-多态/index.html","be1bdf4772fc2de04476b712340fdf9a"],["/2019/04/26/java中的接口-匿名对象/index.html","14391dd04732901f510073042fe2fdb5"],["/2019/04/29/java-API-Date-SimpleDateFormat-Calendar/index.html","91e49e539bef03ace327a718d3230d6f"],["/2019/04/29/java-API-System类/index.html","2720718e95119b5e8fc81e8d59869202"],["/2019/04/29/java-内部类/index.html","d0553e1354a021f2b0793033cb516906"],["/2019/04/29/java中根类Object的常用方法/index.html","f9726313dd70c7d1002be06abcdd37fc"],["/2019/05/01/java-包装类/index.html","4b5c48b92db591372eb656df53ca8db1"],["/2019/05/01/java-自动拆装箱-正则表达式/index.html","052d0405b28b5bbc7ce3eff64c1ebd49"],["/2019/05/01/vscode-使用技巧/index.html","554f437a1433c13dbe16805ae37c95e2"],["/2019/05/02/linux中的SysRq魔术键/index.html","d4a9b396d6a7d0359a1c8bc12e0f613b"],["/2019/05/14/java-HashMap详解/index.html","efa425dedf793fa94ae80e5fa56b5c9c"],["/2019/05/14/java-IO流/index.html","005130a01c53e122aa723922200f878e"],["/2019/05/14/java-增强for循环/index.html","24106b73965fcba8b44f9ba51d511504"],["/2019/05/14/java-文件管家File类/index.html","1a68c0e4f2bfaff9a736d9b9d6826754"],["/2019/05/14/java-泛型/index.html","cf3a648baec32f533533f1b68e4c2ed5"],["/2019/05/14/java-迭代器并发修改异常/index.html","596d722ffbebb67ebd7febb0c110b49e"],["/2019/05/14/java中的常用数据结构/index.html","bc8ca81481c73b15d1969389c4f89852"],["/2019/05/21/java-变量相加和常量相加的区别/index.html","fc447d61631797389bdbd2c8994f2079"],["/2019/05/23/VirtualBox-网络模式总结/index.html","3ffd880430bf0f3b117ef7d41045f2d3"],["/2019/07/06/javase-CommonIO总结/index.html","19cc48b1bc4a47d21dd6b722bacdbee0"],["/about/index.html","4ee6dd8723d1f6af2318917290141966"],["/archives/2018/11/index.html","ac8e5e38ac119479f6e20d95221ddf32"],["/archives/2018/index.html","c5a9b6265281bacacb730277368f1ca9"],["/archives/2019/04/index.html","2c09e9012187ee19a20d8542c6f43e30"],["/archives/2019/04/page/2/index.html","89340d4c23f5897ebc3ac6b4adc9d0b8"],["/archives/2019/04/page/3/index.html","a42a6872d0dbcdfa25c2e6a7f292792e"],["/archives/2019/05/index.html","4248e57a2fd1c3f1295d71e580cbed23"],["/archives/2019/05/page/2/index.html","f5a4f26ee38092d2755328ec7189f7c4"],["/archives/2019/07/index.html","e5a482ac9f1d08701ba945a4fcc2ca25"],["/archives/2019/index.html","03ead9f3d85f8d2a653b454b2d542058"],["/archives/2019/page/2/index.html","8e0a214a138c38e80fcf858dd237da20"],["/archives/2019/page/3/index.html","83d587249a967a81b13cc63959e69955"],["/archives/2019/page/4/index.html","90bcde70c1321186ad7b652d4720f5ca"],["/archives/2019/page/5/index.html","b45038cfe8edb13de162d1e9ad2390e8"],["/archives/index.html","f69e0ebe7f999200d20db439e4305232"],["/archives/page/2/index.html","31a32f1111b0cddea341c02c135ad03b"],["/archives/page/3/index.html","35af319b238d1c61a55de60e49cb9ac8"],["/archives/page/4/index.html","eb1d72552027e253436d398f3a28f494"],["/archives/page/5/index.html","25c6aae17fa580c8a7fb774d438dd0cb"],["/atom.xml","1107f9149e533bdf3659b695f3a04ff5"],["/categories/IDE/index.html","de47ecbc867f732cb266b1ada1d5c92e"],["/categories/JVM/index.html","5325c9f4e3559860bb2fc85340c220a5"],["/categories/index.html","983c40233289683f796f2b425a2162f3"],["/categories/java-se/index.html","c083ca9d15218d8562cf140323ec26da"],["/categories/java-se/page/2/index.html","546dc8f358aac63c3b2fce278ee7615c"],["/categories/java-se/page/3/index.html","7a08ccce729c2164db10384b7ea57aa3"],["/categories/linux/index.html","351bfc8a4327d16abd30b9a45ae55d4a"],["/categories/微服务/index.html","e16f02fd6ff5f49b37aad31efbbaf675"],["/categories/智能对话系统/index.html","129453c4aa2712f97cf774259c89a099"],["/categories/版本控制/index.html","7069bc8a6df7a05fcb51184b61208ab9"],["/categories/编程语言/index.html","b224d8009afd3c960274359c40a7c0a5"],["/categories/虚拟机/index.html","04c53cab857e7d9230df189848020f9c"],["/categories/踩坑/index.html","8d62894a600709fa42fc5968bb31331f"],["/css/main.css","b2a1b86fc54930b2d92a7c928b9ce617"],["/images/RQ.png","b7b4b5763fd625fa9ae9fe52399d6d8d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/apple-touch-icon.png","6f9580251e328f06b4e03dbe63447228"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/bak/My_Official_Accounts.jpg","7864d3be7c97176715d5a6127e93dfe2"],["/images/bak/ReadingBoard.jpg","4dfe73bf3bb2ca82d059a33689819bac"],["/images/bak/apple-touch.png","d85fa5445f7fc5318af73dbf08f9e73e"],["/images/bak/avatar.jpg","35a7bcd33c97d091ea85e85a601a8b41"],["/images/bak/deep_clone_error.png","3e9ca4ef174adb0494c16fb11c5aba5f"],["/images/bak/facebook-mvc-flux.png","ef494b3986df9d9f624cfd6230fc632f"],["/images/bak/fanli.com.jpg","639382819206e212b222e724d8435a00"],["/images/bak/favicon-medium.png","e8db6c598d527a3b44977eeca8978fae"],["/images/bak/favicon-small.png","cc7f1573b01a1ba9e43de98c46ea2441"],["/images/bak/react-native.jpg","ccfdbc455e7eae2d422e1f77f70c3200"],["/images/bak/reading_in_react-native_showcase.jpg","2f9abc4299645bd0b24d54993a68759c"],["/images/bak/safari-pinned-tab.svg","5a7df0af6ab56a92624ec8ef5f1abdbc"],["/images/bak/startsWithIgnoreCaseEqual.png","ac391c07f7a72114c43103a35e8a7379"],["/images/bak/startsWithIgnoreCaseNotEqual.png","d6c78763984d335906bbe1d5f2f1c917"],["/images/bak/wechat.jpg","471e042b7a3b5fb63683b5bcbc2c324a"],["/images/bak/wechatpay.jpg","dcdd5cc0edd8b6019bb33bd911940feb"],["/images/bak/writeObject_error.png","df93c94705da69a0ca3731b25ba1a1a8"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/icons.bak/icon-128x128.png","4e68983d67534a92941e0b7bb6bf3c9a"],["/images/icons.bak/icon-144x144.png","abd7e4f98101c53c959792295fe9e377"],["/images/icons.bak/icon-152x152.png","e6fc58fd26a844983de2b4dc364109f3"],["/images/icons.bak/icon-192x192.png","81ef8baa152c2021b2521d3eab9835f2"],["/images/icons.bak/icon-384x384.png","d441f088e5e5665024455a22b667929f"],["/images/icons.bak/icon-512x512.png","c713104cafd5baf227a35e819349bfde"],["/images/icons.bak/icon-72x72.png","20fc7d63d76c8cacd20970e1b05146f1"],["/images/icons.bak/icon-96x96.png","3d9eb5d7fe25ca5bee76718836fdf3d0"],["/images/icons/pwa_icon_128.png","3f2d4a108c2f6df1af551bedfc64ce1d"],["/images/icons/pwa_icon_512.png","6f9580251e328f06b4e03dbe63447228"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","e4d1858f186d9b2ec2590f24f73d01f4"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/leancloud_counter_security_urls.json","b9d487d79e020f656a907c12598ccea7"],["/lib/Han/README.html","0b1a162223698917d5d9d0cdcdd082a9"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/canvas-nest/README.html","51fd19fea26f3425cab121800983de94"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/bower.json","188dd1a7583ffab4da32757242993f36"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/needsharebutton/README.html","8338778865683ec823b8330d0f4196f6"],["/lib/needsharebutton/needsharebutton.css","d756f1aa69c49e78541639f81efa913a"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/pangu/README.html","64cdcb1d346c07ebf7285ce9d0fa60d8"],["/lib/pangu/dist/pangu.js","95039627348ac63c7fda4cd644b8e1e7"],["/lib/pangu/dist/pangu.min.js","a5bf049a3ae9cb5b19489fb2c61ae276"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/manifest.json","88c242706cc745b938f9daa745f3c042"],["/page/2/index.html","cd33fc1d144a23a2cb0833295f07d2e1"],["/page/3/index.html","4f455acd3955131a3e05c21876a08f6a"],["/page/4/index.html","ceb4ed688028d98ac9f5ba90704ac4ed"],["/page/5/index.html","53088b3f34db406bb048820172d7889b"],["/pwa/icons/pwa_icon_128.png","3f2d4a108c2f6df1af551bedfc64ce1d"],["/pwa/icons/pwa_icon_512.png","6f9580251e328f06b4e03dbe63447228"],["/pwa/manifest.json","b7666d4cb94bde8193ceec88159f3230"],["/search.xml","ebef34eda77f14e828af44e01658e534"],["/tags/Clion调试JDK/index.html","012900bf5df1a4341dde89ebb1f67e64"],["/tags/CommonIO/index.html","dc48c7861d2ad759d69b8fa84fbb3dbc"],["/tags/String拼接/index.html","dfd91180302490a7ce5e5669b5035181"],["/tags/SysRq魔术键/index.html","6d43a690a8b46b1dd8fd3ee1e86f5c49"],["/tags/VirtualBox-网络模式/index.html","8e538b1fc80b64fd0dda7c41f9006c41"],["/tags/anyQ/index.html","a956d3d65af5f9844a21a627ab0d60d8"],["/tags/docker-Error-response-from-daemon/index.html","57ed47020f3310030a0f5396c333f337"],["/tags/docker-初识/index.html","a56029f07f33e0717fe9ae9a42a79f6f"],["/tags/docker-安装/index.html","1064eb9e63806d6470ff18b07cd8f961"],["/tags/docker-容器操作/index.html","5b720180e533ed1a576dc678a21fcca3"],["/tags/docker-网络访问/index.html","6bb3788ceac08e0b108564fa73d21475"],["/tags/docker-镜像操作/index.html","e80879817144fbb1bf45df2c9b0e430e"],["/tags/git-常用操作总结-一/index.html","21a04d3e17fb2582a1ad16258c69f88e"],["/tags/index.html","f1fb48a1ced73ef6af41c5a63406e615"],["/tags/java-Calendar/index.html","a2d2e2244bc5fe27a6646f4ad89161dc"],["/tags/java-Date/index.html","cfc3d2346cdef5cff3a6a3d607b63f4e"],["/tags/java-File类/index.html","5c99e5393aac9ec872c3852e188e93b1"],["/tags/java-HashMap/index.html","25ea28c02c9d63a7bdf6c535bd2d747e"],["/tags/java-IO/index.html","0318da1319ca4916e5e491d4a81720ed"],["/tags/java-Object/index.html","3324d2552c1890c4db742ece2d4fe719"],["/tags/java-SimpleDateFormat/index.html","c8450d7874a81fec0b1f4e80fdb7f434"],["/tags/java-System/index.html","19e156d4782bc7bc06ee27000a96d0f3"],["/tags/java-abstract/index.html","1b6fef468b2127c8febc3626f00d6cf7"],["/tags/java-fianl/index.html","110963d1a56706a07a491448567efacc"],["/tags/java-内部类/index.html","1cbfd252a328879c6f5f7187a7cf2e3f"],["/tags/java-包装类/index.html","b7cf0b4d1a73a5ddf906dc86553f7cc2"],["/tags/java-变量相加和常量相加的区别/index.html","14ba2b136f1f3d8e27e5c3dd0e1dec23"],["/tags/java-增强for/index.html","ea5f3a893d44aa3fdb4139425d095437"],["/tags/java-数据结构/index.html","ba5487ea974f338e671ef38beee483c3"],["/tags/java-泛型/index.html","3220cf3ae9052a029f51da69c62704ef"],["/tags/java-自动拆装箱/index.html","b8a37ed2d5233a9a991396c4cdbbe477"],["/tags/java-迭代器并发修改异常/index.html","d3f80e33193fd0dcae9f451787f675c9"],["/tags/java中类无法实例化/index.html","84e3be4bd31939dc71f262b251f37255"],["/tags/java代码块/index.html","1f240dc6d6cad318ac35c6d430a18bec"],["/tags/java修饰符/index.html","4b536cea4f64a079f72b87bdab26ad86"],["/tags/java内存管理/index.html","58f8d4b7295bbc71a230e965a8f39e29"],["/tags/java匿名对象/index.html","54e0b53cd0889f2c4ef6b09ac7822af1"],["/tags/java多态/index.html","58237ca938d3556fe5d9bc59f1161b19"],["/tags/java接口/index.html","6144281eb991d78a4c8672142da7a657"],["/tags/java继承/index.html","8ddf90b0d7b5ee13ac5d68c43044228a"],["/tags/java静态/index.html","ac553b5822777bfdcf961b29151d0700"],["/tags/linux-apt-update-error/index.html","01c3d245e640a536c2468e53fdf9b49b"],["/tags/linux-make命令/index.html","ae8d5171ff59e75784b2277b97830cd8"],["/tags/linux-程序安装/index.html","ba78c9fef4107d2368e22477ba41fca7"],["/tags/linux-编译命令/index.html","3b487d9929efb07f624dcedbd1975c27"],["/tags/ruby/index.html","dd074174546439b20ae9a28d4baaea96"],["/tags/this-super/index.html","6b51c32c2471195ad2c43545ba298af6"],["/tags/vscode/index.html","057734706201e306287e8f5f207abd65"],["/tags/“成员变量”和“局部变量”/index.html","7e06a3a32073909d446a106466ba11a4"],["/tags/导包/index.html","3465919abb7709b8d37152e7f80d3335"],["/tags/数组/index.html","8cbf3ce1348e8b38fef62c37987840a4"],["/tags/文件乱码/index.html","a606426390a3f363ccea3e2cdbe1a8b8"],["/tags/文本文件读写/index.html","8f77b7ab691b966734d564bb9c212c41"],["/tags/构造方法/index.html","ac06f41a436cbce955144aa6e8056566"],["/tags/正则表达式/index.html","ab03353e96bbd6381752c9cc1c99410a"],["/tags/编译JDK/index.html","df8c9ea2173f14f3ccd48d3e306188ed"],["/tags/软链接和硬链接/index.html","dbe246e4b0f05a93c054b1c12e80ce44"]];
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




