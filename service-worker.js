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

var precacheConfig = [["/2018/11/26/Git-常用操作总结-一/index.html","a9b2cc595c4894abb823a9054d6b4931"],["/2019/04/08/docker-初识/index.html","a5ca700ee01fb95f29dd57e5c25b6616"],["/2019/04/09/Docker-容器操作/index.html","74e50d4e0929be0240f64bd61e4dc6dc"],["/2019/04/09/Docker-镜像操作/index.html","2013de6d9b7929de81b889ba352fc1dd"],["/2019/04/09/docker-Error-response-from-daemon/index.html","47a9dbf40b13fda14b7cb91b3685b375"],["/2019/04/09/docker-安装/index.html","e7119ae44ecb1d3464e822f0bd6bde2b"],["/2019/04/09/docker-网络访问/index.html","54cb1437d5e6abb9b3047d65a0ce2f16"],["/2019/04/10/Ruby-安装/index.html","661c2b1fdf108c668ef9869954132b84"],["/2019/04/10/linux-程序安装/index.html","42ca71c5e7ca21d7aeca7a633291f5e7"],["/2019/04/10/ubuntu-apt-update-error/index.html","42ef1ffeb80df9b67b9eb665f3d53025"],["/2019/04/10/百度anyQ-编译错误/index.html","3a82166d38a880754bec3f9dae0dd6fd"],["/2019/04/12/linux-文件编码与转换/index.html","3a4208cf465f9b7a1f149bd6de12ec0b"],["/2019/04/12/linux-软链接和硬链接/index.html","2d0ef9444b1182237791c11a46274326"],["/2019/04/13/linux -- make install的安装与卸载/index.html","f68e2962cd6f0a740427ba5104f39b7a"],["/2019/04/13/linux-编译命令总结/index.html","11c66fb657d4df2638aa106ed2bfc77c"],["/2019/04/19/linux-编译JDK源码/index.html","dd21d5f016cba4bc535ad323d902d3fe"],["/2019/04/19/openjdk-8-使用Clion调试源码/index.html","3be2fef76c89c26171b4ca1a82bb2273"],["/2019/04/22/java中数组是对象吗？/index.html","0029978dd7e27f37b1bc2458e4ad93e6"],["/2019/04/22/java内存管理-栈-堆-方法区/index.html","e94d170a567fbdf490efa1d95bec925d"],["/2019/04/22/成员变量-局部变量-构造方法-导包/index.html","787cd66d1a8a39da1ca30d9d2eb6d209"],["/2019/04/24/java-文本文件读写/index.html","e75756d8d5b45fed6af6e4c7f8a28d10"],["/2019/04/24/java中为何任何对象都可以和String进行拼接？/index.html","8955906bbad5309c58ada74d97be07cf"],["/2019/04/25/java中的继承-abstract-final/index.html","ff80ec3667cedd7fbcfdd4cc9689cb8a"],["/2019/04/25/java中的静态-代码块/index.html","f71559c00df5d83e4609507cb8bd9614"],["/2019/04/26/java-修饰符总结/index.html","c13816cf75273df59c2d7136c9cc7979"],["/2019/04/26/java-多态/index.html","df86b66e27d36997dee56fed0f083728"],["/2019/04/26/java中的接口-匿名对象/index.html","9ed45be53fa5eb7928bcc9a24941a9d8"],["/2019/04/29/java-API-Date-SimpleDateFormat-Calendar/index.html","be9eda7bc8e745c569c35ed4ad19b3d4"],["/2019/04/29/java-API-System类/index.html","350ae2016d3d3a8373daaa9969c9a843"],["/2019/04/29/java-内部类/index.html","4ee21b98fbdb82ad59a117cd6688e80b"],["/2019/04/29/java中根类Object的常用方法/index.html","4abe055d7119b7a90a25228ce3bcffcc"],["/2019/05/01/java-包装类/index.html","1f374d3ba8fc62047641ec83033d81fa"],["/2019/05/01/java-自动拆装箱-正则表达式/index.html","2b4d3805d7d1ae7f51b5866f09f239f9"],["/2019/05/01/vscode-使用技巧/index.html","c77a6835211ee9016db2fd34a01666af"],["/2019/05/02/linux中的SysRq魔术键/index.html","8f578a34e568f97113426380b7ea0f0c"],["/2019/05/14/java-HashMap详解/index.html","b511f53d6f695918b406867bc47307ce"],["/2019/05/14/java-IO流/index.html","66c03af2ffe53067399760b310cc5f85"],["/2019/05/14/java-增强for循环/index.html","08535fb6f0a443d6b541cec50482ab7d"],["/2019/05/14/java-文件管家File类/index.html","7a592de08ef15f084265fdfb2c042c0d"],["/2019/05/14/java-泛型/index.html","1944a6fa821962226adef752730b468d"],["/2019/05/14/java-迭代器并发修改异常/index.html","5f8aadb330e380e57d8829ea52291daa"],["/2019/05/14/java中的常用数据结构/index.html","912059a49296637488edf5bbbccffc3f"],["/2019/05/21/java-变量相加和常量相加的区别/index.html","d4166e06871451b662626ca2720bf3f2"],["/2019/05/23/VirtualBox-网络模式总结/index.html","053fb62f6eaf255cca2baeebf5db6674"],["/about/index.html","708f4d08b3140e363a33ee8be4c29f79"],["/archives/2018/11/index.html","f5eaa10a28e1a79b07b9a142d7469934"],["/archives/2018/index.html","fe657e3f3ea17d3611af63dc5a9d8ede"],["/archives/2019/04/index.html","4e0f8e0b2787d6cd022532ee0b1c27ef"],["/archives/2019/04/page/2/index.html","fb3bcf507f1a673975b5b2cdf2f8c2e3"],["/archives/2019/04/page/3/index.html","b185400d3020ac54a53bec107e104e37"],["/archives/2019/05/index.html","ae69fa6c45854db83221b1ff2b8be092"],["/archives/2019/05/page/2/index.html","3e53e49c294f64b296c73bd873552220"],["/archives/2019/index.html","2999403d06d485adc0172877a22326ab"],["/archives/2019/page/2/index.html","3d259e3c4c9ca6e8086f0cd4ffd606f3"],["/archives/2019/page/3/index.html","9e24381232a5d83433382bf4db25eba9"],["/archives/2019/page/4/index.html","df972cf185ff41151273301784277513"],["/archives/2019/page/5/index.html","85a6aa550758acbaaca94618473f95ef"],["/archives/index.html","cfe4bd30b421b77a4c6009235d2feab1"],["/archives/page/2/index.html","bdcb7487d4a7a28c009ff726e324d556"],["/archives/page/3/index.html","ddfee2cfa307b879c188c19ed7e3b77f"],["/archives/page/4/index.html","ab23345ca432826db4a4be2f486a4bf1"],["/archives/page/5/index.html","92780b6c23848d41eb7d7caa8f235e61"],["/atom.xml","2ebf8b3eff3588d36c52af2717f6ef8c"],["/categories/IDE/index.html","0f901ae4967abf82cd6fd5785cb5e538"],["/categories/JVM/index.html","3c1aad3138cb66aa6accd914063dbf5c"],["/categories/index.html","658c8c982f2d1ce16fd26533396fbb4a"],["/categories/java-se/index.html","b35287d40c19dc8bccca465e3e94896e"],["/categories/java-se/page/2/index.html","9d44592056e370dcd9bff2536b72edb5"],["/categories/java-se/page/3/index.html","3998d8e0c4101bfddcf5790e76c0c02e"],["/categories/linux/index.html","0ba8e27ee26371cfabfe394612ec6dab"],["/categories/微服务/index.html","71d8967d95f698075603195fae9bfb92"],["/categories/智能对话系统/index.html","6b5d0e249508ca2e2a18763be4546d79"],["/categories/版本控制/index.html","0ff41b625e4be5e770ad054dd5eb3d9b"],["/categories/编程语言/index.html","03f0b74168453574aded30b86b630347"],["/categories/虚拟机/index.html","a572556d76ad3af53ba9b92453088f52"],["/categories/踩坑/index.html","d1f10f03a0d1114285cd23580eb2abf1"],["/css/main.css","6df71437e81ccc6143e821e23a15d6ee"],["/images/RQ.png","b7b4b5763fd625fa9ae9fe52399d6d8d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/apple-touch-icon.png","6f9580251e328f06b4e03dbe63447228"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/bak/My_Official_Accounts.jpg","7864d3be7c97176715d5a6127e93dfe2"],["/images/bak/ReadingBoard.jpg","4dfe73bf3bb2ca82d059a33689819bac"],["/images/bak/apple-touch.png","d85fa5445f7fc5318af73dbf08f9e73e"],["/images/bak/avatar.jpg","35a7bcd33c97d091ea85e85a601a8b41"],["/images/bak/deep_clone_error.png","3e9ca4ef174adb0494c16fb11c5aba5f"],["/images/bak/facebook-mvc-flux.png","ef494b3986df9d9f624cfd6230fc632f"],["/images/bak/fanli.com.jpg","639382819206e212b222e724d8435a00"],["/images/bak/favicon-medium.png","e8db6c598d527a3b44977eeca8978fae"],["/images/bak/favicon-small.png","cc7f1573b01a1ba9e43de98c46ea2441"],["/images/bak/react-native.jpg","ccfdbc455e7eae2d422e1f77f70c3200"],["/images/bak/reading_in_react-native_showcase.jpg","2f9abc4299645bd0b24d54993a68759c"],["/images/bak/safari-pinned-tab.svg","5a7df0af6ab56a92624ec8ef5f1abdbc"],["/images/bak/startsWithIgnoreCaseEqual.png","ac391c07f7a72114c43103a35e8a7379"],["/images/bak/startsWithIgnoreCaseNotEqual.png","d6c78763984d335906bbe1d5f2f1c917"],["/images/bak/wechat.jpg","471e042b7a3b5fb63683b5bcbc2c324a"],["/images/bak/wechatpay.jpg","dcdd5cc0edd8b6019bb33bd911940feb"],["/images/bak/writeObject_error.png","df93c94705da69a0ca3731b25ba1a1a8"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/icons.bak/icon-128x128.png","4e68983d67534a92941e0b7bb6bf3c9a"],["/images/icons.bak/icon-144x144.png","abd7e4f98101c53c959792295fe9e377"],["/images/icons.bak/icon-152x152.png","e6fc58fd26a844983de2b4dc364109f3"],["/images/icons.bak/icon-192x192.png","81ef8baa152c2021b2521d3eab9835f2"],["/images/icons.bak/icon-384x384.png","d441f088e5e5665024455a22b667929f"],["/images/icons.bak/icon-512x512.png","c713104cafd5baf227a35e819349bfde"],["/images/icons.bak/icon-72x72.png","20fc7d63d76c8cacd20970e1b05146f1"],["/images/icons.bak/icon-96x96.png","3d9eb5d7fe25ca5bee76718836fdf3d0"],["/images/icons/pwa_icon_128.png","3f2d4a108c2f6df1af551bedfc64ce1d"],["/images/icons/pwa_icon_512.png","6f9580251e328f06b4e03dbe63447228"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","f54be6989a27dadc632636512b711893"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/leancloud_counter_security_urls.json","e949403de9d48c0a4c0dbf04905792db"],["/lib/Han/README.html","0b1a162223698917d5d9d0cdcdd082a9"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/canvas-nest/README.html","51fd19fea26f3425cab121800983de94"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/bower.json","188dd1a7583ffab4da32757242993f36"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/needsharebutton/README.html","8338778865683ec823b8330d0f4196f6"],["/lib/needsharebutton/needsharebutton.css","d756f1aa69c49e78541639f81efa913a"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/pangu/README.html","64cdcb1d346c07ebf7285ce9d0fa60d8"],["/lib/pangu/dist/pangu.js","95039627348ac63c7fda4cd644b8e1e7"],["/lib/pangu/dist/pangu.min.js","a5bf049a3ae9cb5b19489fb2c61ae276"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/manifest.json","88c242706cc745b938f9daa745f3c042"],["/page/2/index.html","06754be59996e4e4ee8ee697244bc71b"],["/page/3/index.html","fbfb9a627f94f2531fdf9deeaa2f1591"],["/page/4/index.html","212ff78a6024aff5f7e4b21a34e168fa"],["/page/5/index.html","574ffb885aa7fe2b39e3e5a541dc3bbc"],["/pwa/icons/pwa_icon_128.png","3f2d4a108c2f6df1af551bedfc64ce1d"],["/pwa/icons/pwa_icon_512.png","6f9580251e328f06b4e03dbe63447228"],["/pwa/manifest.json","b7666d4cb94bde8193ceec88159f3230"],["/search.xml","0fa311dcc4f4c1291fa386326e9ec35f"],["/tags/Clion调试JDK/index.html","d7ab978525a0d6b8a72465d275f2e576"],["/tags/String拼接/index.html","050cc2fe8ac0456ebc9e8290ebc5bd4e"],["/tags/SysRq魔术键/index.html","5951171beb3fb333ce15a1810aefd73f"],["/tags/VirtualBox-网络模式/index.html","63554d32a258943c2602ddba936360c5"],["/tags/anyQ/index.html","9005298b19e019cebac6bd6db80a44b4"],["/tags/docker-Error-response-from-daemon/index.html","1ad8bb953c9b32c53bd44312a6839ae9"],["/tags/docker-初识/index.html","207e55b8dc5649a99e77ebbc5bf4eb8e"],["/tags/docker-安装/index.html","24125e622f82802a68cc6a2be6da8824"],["/tags/docker-容器操作/index.html","c9e8dec928fc662fa1143da0a773f7f8"],["/tags/docker-网络访问/index.html","034094dcd9cd08e6f70a891157c8ec2f"],["/tags/docker-镜像操作/index.html","0ef11aa893f266737ce05d446dee0fdb"],["/tags/git-常用操作总结-一/index.html","1d9abe3ddd4eba236141d9e3c0d78570"],["/tags/index.html","0b4f2361ed658a1897bb8dc3effc0fb0"],["/tags/java-Calendar/index.html","cb85a40899f6c4a516b25881d245b640"],["/tags/java-Date/index.html","6ec5671a9a8d90df33710b6a88a3cfc6"],["/tags/java-File类/index.html","3391d7ac9be08ac03343cd055469fff9"],["/tags/java-HashMap/index.html","782278d59e45e71676a20b7dcc97dd1e"],["/tags/java-IO/index.html","fa1a1ad06946c6ca84ae695b78f17569"],["/tags/java-Object/index.html","cb0aa13d5a411aed9806e13ccc985e97"],["/tags/java-SimpleDateFormat/index.html","3f968cab3d4249acd9bb9d2b888d744d"],["/tags/java-System/index.html","5a2f2e9ef78a938934a63af4a3433713"],["/tags/java-abstract/index.html","0d280d37ca0c41643f63f427570aeba8"],["/tags/java-fianl/index.html","36d55ec74762a9ed21e23d5d08a606fa"],["/tags/java-内部类/index.html","05f6a8594d043bdd9111656976df879d"],["/tags/java-包装类/index.html","0dfceb7af985d3d7f1155aa03874c961"],["/tags/java-变量相加和常量相加的区别/index.html","24629161da2b20c708d6d87282e8beb5"],["/tags/java-增强for/index.html","02010fa23a3402912ce11ef573c8ebbe"],["/tags/java-数据结构/index.html","ca36d6b9092734bf17c8b72cf232892f"],["/tags/java-泛型/index.html","4515a633ffeef1d51579d24b54402cc6"],["/tags/java-自动拆装箱/index.html","417380c53ee0b088ae739c452f8e3555"],["/tags/java-迭代器并发修改异常/index.html","157ca305d8bb488eef7af5dcf4255ea1"],["/tags/java中类无法实例化/index.html","f1efdc73e4af45c53f3f840046634747"],["/tags/java代码块/index.html","34d92fd69d69885cba146366fc5c98a5"],["/tags/java修饰符/index.html","ccbbf9d10850eaa4fbbf7fcdacd2d813"],["/tags/java内存管理/index.html","97effd0b27250c8810750b839212c35c"],["/tags/java匿名对象/index.html","519edc65fbe0cb8c7640458cca520244"],["/tags/java多态/index.html","4af14918f7fca7cdda21d0050e9b2a8e"],["/tags/java接口/index.html","016863d23e9f41fee5c2fffdc7888d8b"],["/tags/java继承/index.html","b3e174a3dfbea36d1932306eaf99f241"],["/tags/java静态/index.html","4791402e748e0ca66b8ba41c54d35b07"],["/tags/linux-apt-update-error/index.html","d81398108e642d26176e38e79ed92800"],["/tags/linux-make命令/index.html","2d60d23701b36ecb59a29eb473408e86"],["/tags/linux-程序安装/index.html","8dee8668de73c0f6395c6b7bf42272b5"],["/tags/linux-编译命令/index.html","ebf03b78d2a5f063324e2d2a80617258"],["/tags/ruby/index.html","dae02568a80a30bb97b7a0f2812e0397"],["/tags/this-super/index.html","6d7a1772250b8db1a2034cf628adc4c6"],["/tags/vscode/index.html","523fd4eeee40633b8c95b636b5ff6dde"],["/tags/“成员变量”和“局部变量”/index.html","1e1c8e909850c2bff71ea532a51b3fcc"],["/tags/导包/index.html","3e363ddf95200da9e093ce2c114928e0"],["/tags/数组/index.html","8a6b6feaeae18190538429d629b0b604"],["/tags/文件乱码/index.html","ad3ae2b1888746eed610531a59ffb506"],["/tags/文本文件读写/index.html","3ad7c21e34a0118a8b6cefc42769bddc"],["/tags/构造方法/index.html","c9bb63a23f5d17211e8da96341f7eab0"],["/tags/正则表达式/index.html","33bbd8fcf21f366b081d1b2d9445ed72"],["/tags/编译JDK/index.html","c657b7d593b9da9f497e705a76b2fd14"],["/tags/软链接和硬链接/index.html","9273a8452bcb5a55a0432be18b66923b"]];
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




