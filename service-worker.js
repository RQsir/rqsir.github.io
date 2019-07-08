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

var precacheConfig = [["/2018/11/26/Git-常用操作总结-一/index.html","342b50ec86a49353b96dee0271de1304"],["/2019/04/08/docker-初识/index.html","40503b4903d28884345cb7498c7e5918"],["/2019/04/09/Docker-容器操作/index.html","452e0c3c582ed9f2d1b8dfc68bfe641b"],["/2019/04/09/Docker-镜像操作/index.html","2ce84268848c7dbeaa416ed593a57e2b"],["/2019/04/09/docker-Error-response-from-daemon/index.html","d59e07b322e5f3f57a90ef92273bd53a"],["/2019/04/09/docker-安装/index.html","4aafed623b011105a17b65dad7441538"],["/2019/04/09/docker-网络访问/index.html","b412e7663de859b828feca5a2ce11ecd"],["/2019/04/10/Ruby-安装/index.html","d1d7967f65a175a4c928063ea892e048"],["/2019/04/10/linux-程序安装/index.html","2393dafc63816481cd1f6f6136214c22"],["/2019/04/10/ubuntu-apt-update-error/index.html","38b148b7ce2659b8b320b7c5766fde85"],["/2019/04/10/百度anyQ-编译错误/index.html","776570fb7cb2aef1d489cfebb14ce742"],["/2019/04/12/linux-文件编码与转换/index.html","a138d867c511bcf42fecac83a4007829"],["/2019/04/12/linux-软链接和硬链接/index.html","14021dbd0f36ccedde2e98df98e2f58e"],["/2019/04/13/linux-make-install的安装与卸载/index.html","6002f13e7420766585b6fef74fe555ec"],["/2019/04/13/linux-编译命令总结/index.html","f5cc499e61dfb1b91dd03bce1ba96d16"],["/2019/04/19/linux-编译JDK源码/index.html","fa3bd5adcde79488ae535350f419c1d5"],["/2019/04/19/openjdk-8-使用Clion调试源码/index.html","01b7b2aef434275acccb62fe80a083b1"],["/2019/04/22/java中数组是对象吗？/index.html","12da3130aaa33d62a6469492a0fcc71b"],["/2019/04/22/java内存管理-栈-堆-方法区/index.html","44aae01e464bf08afee8397cc7ed6494"],["/2019/04/22/成员变量-局部变量-构造方法-导包/index.html","77dfa4fe72da3e25a08b88180908af4d"],["/2019/04/24/java-文本文件读写/index.html","50f031184bebcb7751edb2ff034ce8da"],["/2019/04/24/java中为何任何对象都可以和String进行拼接？/index.html","0da506e4f45111df2a94f5c62ea43b6b"],["/2019/04/25/java中的继承-abstract-final/index.html","363c37568e4f6514f516e5e4d10e808a"],["/2019/04/25/java中的静态-代码块/index.html","b3bd3d3174bf20bfdb15e96428d032ca"],["/2019/04/26/java-修饰符总结/index.html","caa24e428fc892a11c4cb4a93a328867"],["/2019/04/26/java-多态/index.html","c295583e1d4282b25aa8095f12f6d519"],["/2019/04/26/java中的接口-匿名对象/index.html","c49609c249be0b9a02999849745766be"],["/2019/04/29/java-API-Date-SimpleDateFormat-Calendar/index.html","a6ab282106436f0ed6a92acb7466af65"],["/2019/04/29/java-API-System类/index.html","1faadda7efca7bf9c6710b34b1995890"],["/2019/04/29/java-内部类/index.html","673d7a0ccd6ff6a10097aa217f4d758f"],["/2019/04/29/java中根类Object的常用方法/index.html","b2a687e26870b19338ac6b08706fbb21"],["/2019/05/01/java-包装类/index.html","892e6296896941e882c04558ebefdddf"],["/2019/05/01/java-自动拆装箱-正则表达式/index.html","801eb68423bebdb8dcbbb79c595c587e"],["/2019/05/01/vscode-使用技巧/index.html","2fa2398884ff3d76742acf0f130c4dfe"],["/2019/05/02/linux中的SysRq魔术键/index.html","ba3daa10df4b3b755b2238bdf012f56b"],["/2019/05/14/java-HashMap详解/index.html","5b8e949fd28c7536c9ac9959a6c43207"],["/2019/05/14/java-IO流/index.html","43a7e5cdcb118ff82a7b81f2764c5796"],["/2019/05/14/java-增强for循环/index.html","bf1eae83e87fbe308919afd0449f52e4"],["/2019/05/14/java-文件管家File类/index.html","0c84bdd600b30ea7e1313b3c4b6a8251"],["/2019/05/14/java-泛型/index.html","9da96ce29d408a197e30e029fddf51b8"],["/2019/05/14/java-迭代器并发修改异常/index.html","cca7d96efb74edcb3f583b27b29e3cec"],["/2019/05/14/java中的常用数据结构/index.html","0aad87d182632570e56079fb3ef50c86"],["/2019/05/21/java-变量相加和常量相加的区别/index.html","4a74891af51b673b91e4e836dd0f0284"],["/2019/05/23/VirtualBox-网络模式总结/index.html","898b961d878f421ad2a20d97529b0943"],["/2019/07/06/javase-CommonIO总结/index.html","9549f1834779529c3e95898431ea38a2"],["/about/index.html","ece40fc8e44e56eaf6e3958902e87d09"],["/archives/2018/11/index.html","560d14163a9bc20b03a367749772b035"],["/archives/2018/index.html","dabfdbadd4d73501ae1ce54fbc77cda3"],["/archives/2019/04/index.html","084d569549145617684034edc85b4915"],["/archives/2019/04/page/2/index.html","e6f115dfb18113b7bd55f8ff21dde70d"],["/archives/2019/04/page/3/index.html","596621e3a6f9df0f7a72b2a8da7a091a"],["/archives/2019/05/index.html","50f87a704b3d3ee254f06246dc7e74d1"],["/archives/2019/05/page/2/index.html","f3cbabf13e4017a14b44f78e7b438e75"],["/archives/2019/07/index.html","a60e34178659ce4bf008f45e2b184e2f"],["/archives/2019/index.html","a921973e8c2ca1d317269ffbe43764f8"],["/archives/2019/page/2/index.html","f7f900d903cfa4c40e6191b9aec7650f"],["/archives/2019/page/3/index.html","eab642889f964d98b3c1395bb9a276ee"],["/archives/2019/page/4/index.html","f3e2247d01b1c2fd66b6334e8b5ab2f8"],["/archives/2019/page/5/index.html","19f2530d5da1750719100b8b5501cdd2"],["/archives/index.html","eb5ede9f7103a1778dd0c4c508e4b1c2"],["/archives/page/2/index.html","13cf73af6a74525abd4087e585d33fcd"],["/archives/page/3/index.html","b636e9ed1e154c3df872407b0f4b5bc1"],["/archives/page/4/index.html","4d164ec05b8f9b2e2de19ef9465f6786"],["/archives/page/5/index.html","17e2876f77d9ba79769eca98942d4e5c"],["/atom.xml","dc1461f93c2b4fc94d973e7ab7129d66"],["/categories/IDE/index.html","e672f6507ebcabbf3713c8e9970497c6"],["/categories/JVM/index.html","5082ddf32c78357c834520cdd86d577a"],["/categories/index.html","eea487d57fbf51022ef94fad3c2fa05c"],["/categories/java-se/index.html","650555c1ab396cf96a29c6d9a85cafdb"],["/categories/java-se/page/2/index.html","738edc716aca1278d160aa260224d1ef"],["/categories/java-se/page/3/index.html","43289a9ee48c1d99b7a62647104a7365"],["/categories/linux/index.html","606ca54dcc87672a64d00dd30f70c9dd"],["/categories/微服务/index.html","71c76e540f784be338298ac6aa9b0857"],["/categories/智能对话系统/index.html","fe7d941138127a7a6bddd61386c2eaa5"],["/categories/版本控制/index.html","f328c1c2177f0295f5165454625d746f"],["/categories/编程语言/index.html","73fbf4376a6faa5263c50144000454ca"],["/categories/虚拟机/index.html","87eb03b05b930e55661ef61d535268a4"],["/categories/踩坑/index.html","81cdb1b4f7d81909dfcd27a87167c4b3"],["/css/main.css","d0f5799bee79f49cb519d4ea73ee9420"],["/images/RQ.png","b7b4b5763fd625fa9ae9fe52399d6d8d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/apple-touch-icon.png","6f9580251e328f06b4e03dbe63447228"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/bak/My_Official_Accounts.jpg","7864d3be7c97176715d5a6127e93dfe2"],["/images/bak/ReadingBoard.jpg","4dfe73bf3bb2ca82d059a33689819bac"],["/images/bak/apple-touch.png","d85fa5445f7fc5318af73dbf08f9e73e"],["/images/bak/avatar.jpg","35a7bcd33c97d091ea85e85a601a8b41"],["/images/bak/deep_clone_error.png","3e9ca4ef174adb0494c16fb11c5aba5f"],["/images/bak/facebook-mvc-flux.png","ef494b3986df9d9f624cfd6230fc632f"],["/images/bak/fanli.com.jpg","639382819206e212b222e724d8435a00"],["/images/bak/favicon-medium.png","e8db6c598d527a3b44977eeca8978fae"],["/images/bak/favicon-small.png","cc7f1573b01a1ba9e43de98c46ea2441"],["/images/bak/react-native.jpg","ccfdbc455e7eae2d422e1f77f70c3200"],["/images/bak/reading_in_react-native_showcase.jpg","2f9abc4299645bd0b24d54993a68759c"],["/images/bak/safari-pinned-tab.svg","5a7df0af6ab56a92624ec8ef5f1abdbc"],["/images/bak/startsWithIgnoreCaseEqual.png","ac391c07f7a72114c43103a35e8a7379"],["/images/bak/startsWithIgnoreCaseNotEqual.png","d6c78763984d335906bbe1d5f2f1c917"],["/images/bak/wechat.jpg","471e042b7a3b5fb63683b5bcbc2c324a"],["/images/bak/wechatpay.jpg","dcdd5cc0edd8b6019bb33bd911940feb"],["/images/bak/writeObject_error.png","df93c94705da69a0ca3731b25ba1a1a8"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/icons.bak/icon-128x128.png","4e68983d67534a92941e0b7bb6bf3c9a"],["/images/icons.bak/icon-144x144.png","abd7e4f98101c53c959792295fe9e377"],["/images/icons.bak/icon-152x152.png","e6fc58fd26a844983de2b4dc364109f3"],["/images/icons.bak/icon-192x192.png","81ef8baa152c2021b2521d3eab9835f2"],["/images/icons.bak/icon-384x384.png","d441f088e5e5665024455a22b667929f"],["/images/icons.bak/icon-512x512.png","c713104cafd5baf227a35e819349bfde"],["/images/icons.bak/icon-72x72.png","20fc7d63d76c8cacd20970e1b05146f1"],["/images/icons.bak/icon-96x96.png","3d9eb5d7fe25ca5bee76718836fdf3d0"],["/images/icons/pwa_icon_128.png","3f2d4a108c2f6df1af551bedfc64ce1d"],["/images/icons/pwa_icon_512.png","6f9580251e328f06b4e03dbe63447228"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","cb962cb51c3660fb041f75915e95a440"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/leancloud_counter_security_urls.json","c80f6e2591b38839eefa77417c0ff21f"],["/lib/Han/README.html","0b1a162223698917d5d9d0cdcdd082a9"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/canvas-nest/README.html","51fd19fea26f3425cab121800983de94"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/bower.json","188dd1a7583ffab4da32757242993f36"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/needsharebutton/README.html","8338778865683ec823b8330d0f4196f6"],["/lib/needsharebutton/needsharebutton.css","d756f1aa69c49e78541639f81efa913a"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/pangu/README.html","64cdcb1d346c07ebf7285ce9d0fa60d8"],["/lib/pangu/dist/pangu.js","95039627348ac63c7fda4cd644b8e1e7"],["/lib/pangu/dist/pangu.min.js","a5bf049a3ae9cb5b19489fb2c61ae276"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/manifest.json","88c242706cc745b938f9daa745f3c042"],["/page/2/index.html","4271820ba9cd57905ee52ff2c0758d86"],["/page/3/index.html","cc732d14f94df0b0964471c0b0c6e0ff"],["/page/4/index.html","8c042cc7b6d073ce0dbf8ab742cd8dde"],["/page/5/index.html","ed56fac1b5b8d797413b5ba8929386f6"],["/pwa/icons/pwa_icon_128.png","3f2d4a108c2f6df1af551bedfc64ce1d"],["/pwa/icons/pwa_icon_512.png","6f9580251e328f06b4e03dbe63447228"],["/pwa/manifest.json","b7666d4cb94bde8193ceec88159f3230"],["/search.xml","c0fd35b354dd74c664d31e203bb0012f"],["/tags/Clion调试JDK/index.html","bbc64bf7c3e5419533a9ee79f89b5b5e"],["/tags/CommonIO/index.html","5b093d03b82b713c29de0b3d8b8cc3b0"],["/tags/String拼接/index.html","671008669587c6d54afb277fbf4e0e93"],["/tags/SysRq魔术键/index.html","f54f9ae28b7c8b1ea6ca156ae7f942ee"],["/tags/VirtualBox-网络模式/index.html","5a6cf1232211238929f3510674fc060c"],["/tags/anyQ/index.html","b62381614d0de65a49c6ebbcdf43d086"],["/tags/docker-Error-response-from-daemon/index.html","a0e8669813e800043a0828777cad48ea"],["/tags/docker-初识/index.html","fe600562367a5076c2123859319e2cd4"],["/tags/docker-安装/index.html","310098ac69af66e04b8d5c6d308ade93"],["/tags/docker-容器操作/index.html","f2b0a4e82335d841dc1d07024acbeb8e"],["/tags/docker-网络访问/index.html","e37b0a24b71dd0c4de9eb51e467a6087"],["/tags/docker-镜像操作/index.html","d7043b4b9004f2197b226af82070bc3d"],["/tags/git-常用操作总结-一/index.html","acea33359b23c1460ee211c76e82a2a1"],["/tags/index.html","d3798053df0ba93f3e4b68308710d5f8"],["/tags/java-Calendar/index.html","514e08ce0ff0ee386bea19ea7e5bd3ff"],["/tags/java-Date/index.html","0ee6259479ab6ffc8de97345212b21f2"],["/tags/java-File类/index.html","939523b314501f0e127bf000b9b22daf"],["/tags/java-HashMap/index.html","fe1b42852de5edfeaad2a3588f26af7f"],["/tags/java-IO/index.html","95b1f124aaf690fd6f1f8ab9eec37e14"],["/tags/java-Object/index.html","f8464bb87232fa3b1100e8ab3fe5ddc3"],["/tags/java-SimpleDateFormat/index.html","47540e7c1dbe1dfb65e6d9e7249f20fb"],["/tags/java-System/index.html","929a9f5ad11c118cee83d209528bc364"],["/tags/java-abstract/index.html","85b6408bb52bf03cd0baa8cb35f41363"],["/tags/java-fianl/index.html","ef560d1d46daaf4c710aae0c862aff7c"],["/tags/java-内部类/index.html","28b66d655970d994e52caf46a7990741"],["/tags/java-包装类/index.html","26ac2918d295790fe5ca570b2df32e33"],["/tags/java-变量相加和常量相加的区别/index.html","a38e0e8aeb9a8b8afd86422df81ddc2d"],["/tags/java-增强for/index.html","0a01b7e3042b2b1431f28749c0e9308d"],["/tags/java-数据结构/index.html","fc875676bdfda03323f182244f358296"],["/tags/java-泛型/index.html","9e2d711b91b45b238df1cbefe60b2b52"],["/tags/java-自动拆装箱/index.html","f5e1e0b8311bf150087034887109c4d4"],["/tags/java-迭代器并发修改异常/index.html","7894d43c67f9b17ad9bb2318fa57f263"],["/tags/java中类无法实例化/index.html","56de6bac317cb2528bd0267c99232ac2"],["/tags/java代码块/index.html","0e63da409e84ffdc09b097d0c9bf2f10"],["/tags/java修饰符/index.html","217650de619a4abf4c8b9262327fec92"],["/tags/java内存管理/index.html","038dbc20358f8d3cfe0122aa0d191214"],["/tags/java匿名对象/index.html","88c41738706b318cdd461b4f7cf3ebd0"],["/tags/java多态/index.html","e56f761e57f57929060a783458f79e07"],["/tags/java接口/index.html","6a34a78c141af72f78a2152cae7b4eed"],["/tags/java继承/index.html","2e96ad13c9c6a5e62fe1f82dcfffe442"],["/tags/java静态/index.html","0a0c86b8693de6251bc9c10fbf7b5f4a"],["/tags/linux-apt-update-error/index.html","4e0c258ac15cebcb78afc7aa1efed854"],["/tags/linux-make命令/index.html","66e2c05b24c2313519371590b445f26a"],["/tags/linux-程序安装/index.html","34af077fa2883895c4b20feac0b9c036"],["/tags/linux-编译命令/index.html","51ccea80f3fdc6d98c1eedb36eab5825"],["/tags/ruby/index.html","a2eb88a0efb56058acc778b44c285f08"],["/tags/this-super/index.html","185b7aae3e7072957faa9bd3304d22e8"],["/tags/vscode/index.html","521235f1784a88c32e33d6376f9de7dd"],["/tags/“成员变量”和“局部变量”/index.html","a167ecdc49d4aff2243848242f247c83"],["/tags/导包/index.html","7144e399118dd94832df6f7131bbad44"],["/tags/数组/index.html","2eb2cd421a93986ef095e48a509bf753"],["/tags/文件乱码/index.html","7972eff78e1390d18f1900757937c965"],["/tags/文本文件读写/index.html","d882824bcbd91fe1e16fd0bb611f360d"],["/tags/构造方法/index.html","bcf8e4d075f2a69d0f58609aafc74f1f"],["/tags/正则表达式/index.html","5b8a7ea6227e26ae73fe21e649c240e6"],["/tags/编译JDK/index.html","859d45f41fae3afc3a655fd99dd02633"],["/tags/软链接和硬链接/index.html","8a8f4d98c2acc2aa21591131636bd295"]];
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




