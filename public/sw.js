if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),d={module:{uri:t},exports:n,require:r};s[t]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"bdbdb00bb526fd1f42a9102af8f40830"},{url:"/_next/static/W4j1p0Dr9g8bd6kZ5pQtT/_buildManifest.js",revision:"50e0e2eb6fd60572d559c7355937ad7a"},{url:"/_next/static/W4j1p0Dr9g8bd6kZ5pQtT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1172-307882f87889c956.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/1172-307882f87889c956.js.map",revision:"84cbc37a03b91cb76633f07d0b54627c"},{url:"/_next/static/chunks/13b76428-d2acc36217b02113.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/13b76428-d2acc36217b02113.js.map",revision:"424759f7f868a2bedcda305f27c42f11"},{url:"/_next/static/chunks/140-59e1e85757c58b6c.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/140-59e1e85757c58b6c.js.map",revision:"d4cec1d74ffe8ae8316db08004a06799"},{url:"/_next/static/chunks/20-e12904f27731e799.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/20-e12904f27731e799.js.map",revision:"14173e316c1186c325a3b6cf5dbe59ab"},{url:"/_next/static/chunks/210-b0d908635c976ac0.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/210-b0d908635c976ac0.js.map",revision:"ea8e4e1d0527b289d3a53008814d2732"},{url:"/_next/static/chunks/2315-f0d34e13fafde6b2.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/2315-f0d34e13fafde6b2.js.map",revision:"5dddab049ceda3819350a9e6576c06aa"},{url:"/_next/static/chunks/2355-25284d3db5bf237f.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/2355-25284d3db5bf237f.js.map",revision:"294669536893193aace835980cd05661"},{url:"/_next/static/chunks/2763-252eb785ad44e22d.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/2763-252eb785ad44e22d.js.map",revision:"6403498301c85fe3abc006671ddb0176"},{url:"/_next/static/chunks/2793-a2594e8198c2e6ac.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/2793-a2594e8198c2e6ac.js.map",revision:"4b0797ab9b4f6828e54631f4e759d70c"},{url:"/_next/static/chunks/3305-3555f7a9f306214f.js.map",revision:"a19df11ba450358af8b59c68235d2ba7"},{url:"/_next/static/chunks/3aba9d11-c7f5d549a5dd3217.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/3aba9d11-c7f5d549a5dd3217.js.map",revision:"56243fab94d285d1b982e72945285c07"},{url:"/_next/static/chunks/4218-37fedda9983faeb0.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/4218-37fedda9983faeb0.js.map",revision:"de9b2703c69d27215485d5585a760b82"},{url:"/_next/static/chunks/4351-7a0bc789b8424095.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/4351-7a0bc789b8424095.js.map",revision:"c8a3c07988725949c17ef5d0f60d67c5"},{url:"/_next/static/chunks/4638-5ca7c3ac638600b8.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/4638-5ca7c3ac638600b8.js.map",revision:"c024a8696166b38c2c906c91e450131f"},{url:"/_next/static/chunks/4824-9059757e8eb694cb.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/4824-9059757e8eb694cb.js.map",revision:"dadd055d09bc7b6985f2543c63853f76"},{url:"/_next/static/chunks/52271efe-5a4d5b99719e484a.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/52271efe-5a4d5b99719e484a.js.map",revision:"13aaa643238da152922abfe2fa30d5dd"},{url:"/_next/static/chunks/6107-47b8181dce5345d9.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/62c88095-71836eac7be5e546.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/62c88095-71836eac7be5e546.js.map",revision:"5515ccc74548fe1034ed79e5f35a1654"},{url:"/_next/static/chunks/6861-dff7ea199e3f4fa1.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/6861-dff7ea199e3f4fa1.js.map",revision:"dd01efec936b8b529223f26460da4f0e"},{url:"/_next/static/chunks/7023-fc5ba924867648c3.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/7023-fc5ba924867648c3.js.map",revision:"8ebed1309f30fee13fb069f8526c12d2"},{url:"/_next/static/chunks/7177-3ed31a9d7a0c7c74.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/7177-3ed31a9d7a0c7c74.js.map",revision:"38caf0151bd72e6ddd1e25118ade30a1"},{url:"/_next/static/chunks/7497-e4a661ec213cb429.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/7497-e4a661ec213cb429.js.map",revision:"cd92ab819140f325af5f3fcfd9165add"},{url:"/_next/static/chunks/77befd7b-d9abb3ad4e1157f2.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/77befd7b-d9abb3ad4e1157f2.js.map",revision:"7e8c8fb28a06cf1d0dda02f2281a0b57"},{url:"/_next/static/chunks/8210-a35e08f0e53f18d8.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/8210-a35e08f0e53f18d8.js.map",revision:"42b1b3e16804d80d71b739fa185af513"},{url:"/_next/static/chunks/8470-c14193bc41bcbdf6.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/8470-c14193bc41bcbdf6.js.map",revision:"46be0a401cfdc59559652f84f5afbe50"},{url:"/_next/static/chunks/964-34d8ce4a69af6ac5.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/964-34d8ce4a69af6ac5.js.map",revision:"c4787d6efc985e7c28da0c1361b67f08"},{url:"/_next/static/chunks/9691.97f1876daf59d7a9.js",revision:"97f1876daf59d7a9"},{url:"/_next/static/chunks/9691.97f1876daf59d7a9.js.map",revision:"932957534cf87a2b806245f65c3d507e"},{url:"/_next/static/chunks/9706-0bf8fe0da31dbea5.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/9706-0bf8fe0da31dbea5.js.map",revision:"4ed357445acd33c3afcb7d59452cedca"},{url:"/_next/static/chunks/9950-5b36c956d35cc9a8.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/9950-5b36c956d35cc9a8.js.map",revision:"091314da952d8a13345dfba1f25de050"},{url:"/_next/static/chunks/aaea2bcf-4a717eae8f750b29.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/aaea2bcf-4a717eae8f750b29.js.map",revision:"c3012e831bdff64d991aa787071e3f41"},{url:"/_next/static/chunks/app/%5B...slugs%5D/page-b863e16ad31a6c9b.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/%5B...slugs%5D/page-b863e16ad31a6c9b.js.map",revision:"de8bca8f3dd4af4fa40e2cf20d888a78"},{url:"/_next/static/chunks/app/(staticPages)/about/page-ed6e4e7433440bb2.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/(staticPages)/about/page-ed6e4e7433440bb2.js.map",revision:"75c69e652f8558b3acddc752ae985fa6"},{url:"/_next/static/chunks/app/(staticPages)/contributors/page-d5c117566e5ef6af.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/(staticPages)/contributors/page-d5c117566e5ef6af.js.map",revision:"bd38d78cc68387ff65a149c978550c1a"},{url:"/_next/static/chunks/app/(staticPages)/faq/page-66e38624cf274dcf.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/(staticPages)/faq/page-66e38624cf274dcf.js.map",revision:"3b61b6d0244620e99524cb797cf6c903"},{url:"/_next/static/chunks/app/(staticPages)/guest-post/page-f2d59e93e6cd7dea.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/(staticPages)/privacy-policy/page-0307329591ae8d83.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/(staticPages)/terms-of-service/page-45f8915fb31198de.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/(staticPages)/whitepaper/page-c0b9ddab669ba627.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/_not-found/page-51e682651f8f7a24.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/auth/page-5f22e1ccf5ef51d2.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/auth/page-5f22e1ccf5ef51d2.js.map",revision:"3dda830fb9284274333dbf07af530b50"},{url:"/_next/static/chunks/app/chats/%5B...params%5D/page-39e26d7e19843c5e.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/chats/%5B...params%5D/page-39e26d7e19843c5e.js.map",revision:"17007b103dc84d152e45d8bc6351aab5"},{url:"/_next/static/chunks/app/chats/page-311c56b8df4b2c8c.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/chats/page-311c56b8df4b2c8c.js.map",revision:"0031558a08ff73493ea45041e936b90f"},{url:"/_next/static/chunks/app/communities/create-hs/page-8ec0df3422bef5bd.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/communities/create-hs/page-8ec0df3422bef5bd.js.map",revision:"a8f8d7b9462343ae95709aabbb5b93d9"},{url:"/_next/static/chunks/app/communities/create/page-3b31b689560356dc.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/communities/create/page-3b31b689560356dc.js.map",revision:"76e5e9b946d1b1fc3cfc5f2d08f23db4"},{url:"/_next/static/chunks/app/communities/layout-b294e5934106b292.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/communities/loading-5d26251cf8407530.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/communities/loading-5d26251cf8407530.js.map",revision:"ef70bc22439918e716740636daa47ca0"},{url:"/_next/static/chunks/app/communities/page-ec9dbd5dadb9a076.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/communities/page-ec9dbd5dadb9a076.js.map",revision:"dfff51a972f103962a8e369f5ecba0a0"},{url:"/_next/static/chunks/app/contribute/page-17a83ca234a1ee53.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/decks/page-4e84e69288e789a5.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/decks/page-4e84e69288e789a5.js.map",revision:"ebdf5418a74d38a731d3d84fe2fc0411"},{url:"/_next/static/chunks/app/discover/layout-c03a912370ff19ee.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/discover/layout-c03a912370ff19ee.js.map",revision:"4b2ca12e29f64f75e784d0ca578ccd71"},{url:"/_next/static/chunks/app/discover/loading-2f0854b3a7b785fd.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/discover/page-cbb48aff15dc1f99.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/discover/page-cbb48aff15dc1f99.js.map",revision:"84aa49269aa436fd30363b66f4958f93"},{url:"/_next/static/chunks/app/draft/%5Bid%5D/page-6dda7ced484a9c1c.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/draft/%5Bid%5D/page-6dda7ced484a9c1c.js.map",revision:"f70278021c83dbab762da6676bd1a626"},{url:"/_next/static/chunks/app/global-error-9ad7fb465f240575.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/global-error-9ad7fb465f240575.js.map",revision:"5f471d30c3bfe2c93f3bf37515d9e817"},{url:"/_next/static/chunks/app/layout-d390d82875b656a0.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/layout-d390d82875b656a0.js.map",revision:"7d69faa3f3b872f51c0932e3ed80f13a"},{url:"/_next/static/chunks/app/market/advanced/page-fbda44defba6b68d.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/market/advanced/page-fbda44defba6b68d.js.map",revision:"25510768920ce4501f197eec745d076c"},{url:"/_next/static/chunks/app/market/limit/page-1c15e34c62222673.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/market/limit/page-1c15e34c62222673.js.map",revision:"eb3f3c9befc95cb582b55ed6eec69833"},{url:"/_next/static/chunks/app/market/page-170e5f164f8fa36e.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/market/swap/page-c949d5b85d854dc8.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/market/swap/page-c949d5b85d854dc8.js.map",revision:"b5b430fe631d53f2e04b4d2876cee896"},{url:"/_next/static/chunks/app/not-found-56a26fd293e4cbbf.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/onboard-friend/%5B...slugs%5D/page-834ddb9ee81112a4.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/onboard-friend/%5B...slugs%5D/page-834ddb9ee81112a4.js.map",revision:"ef69375e64d98bdd6d6c04da627d2713"},{url:"/_next/static/chunks/app/page-b959e1150fd2791a.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/page-b959e1150fd2791a.js.map",revision:"a931edabae26651a4fcc0291a522cc9c"},{url:"/_next/static/chunks/app/perks/page-46922ec5823c34f6.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/perks/page-46922ec5823c34f6.js.map",revision:"346b6cf12b04caa533bcf779fe33f688"},{url:"/_next/static/chunks/app/proposals/%5Bid%5D/page-58868827bd075eb6.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/proposals/%5Bid%5D/page-58868827bd075eb6.js.map",revision:"793a53009815f3d542073e9a09a99062"},{url:"/_next/static/chunks/app/proposals/page-3956172bed779ad0.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/proposals/page-3956172bed779ad0.js.map",revision:"9e025f66e29cd3038cd228ad5048df10"},{url:"/_next/static/chunks/app/purchase/page-94128ced3c594477.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/purchase/page-94128ced3c594477.js.map",revision:"bf36074d86d067afc252ab718c5f8d45"},{url:"/_next/static/chunks/app/search/page-5a3deaac728087aa.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/search/page-5a3deaac728087aa.js.map",revision:"b1f2f39dcdc0e337e18f5308b055d3de"},{url:"/_next/static/chunks/app/signup/page-0e56c5423a216c2d.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/signup/page-0e56c5423a216c2d.js.map",revision:"24f3c08290ac00a9cc7b8e407cd4cf99"},{url:"/_next/static/chunks/app/submit/page-e15033215f04c0d1.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/submit/page-e15033215f04c0d1.js.map",revision:"c343f5e662a0e762506ef066d5f8a1a0"},{url:"/_next/static/chunks/app/witnesses/page-3bd90479594b1b38.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/app/witnesses/page-3bd90479594b1b38.js.map",revision:"486603a9aff50980ff271af4ff66857d"},{url:"/_next/static/chunks/c0e397d0-e22ccc2c99005a0b.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/c0e397d0-e22ccc2c99005a0b.js.map",revision:"4b961af0b7ac5942f08fe5903c7a9232"},{url:"/_next/static/chunks/eeac573e-dcbc301d499780df.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/eeac573e-dcbc301d499780df.js.map",revision:"4a7f946bf5c9184c0aae62288d6e1868"},{url:"/_next/static/chunks/fd9d1056-2e8e54d234f9f18f.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/fd9d1056-2e8e54d234f9f18f.js.map",revision:"5ea8a555c2e18ef1f7b4c00fdfff90b9"},{url:"/_next/static/chunks/framework-f504fcbdc24809ff.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/framework-f504fcbdc24809ff.js.map",revision:"078ac2b84925442ea692f4264154643d"},{url:"/_next/static/chunks/main-af68e7b04dbc4f0e.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/main-af68e7b04dbc4f0e.js.map",revision:"4711e7efc174a073ab6dd52e3f502f19"},{url:"/_next/static/chunks/main-app-72191aca4eebc7bc.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/main-app-72191aca4eebc7bc.js.map",revision:"8b58b04725cb026a37765ede1948a6fe"},{url:"/_next/static/chunks/pages/_app-1baacf817f80b683.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/pages/_app-1baacf817f80b683.js.map",revision:"fc64c45e7c1bf14874103f038ac951c6"},{url:"/_next/static/chunks/pages/_error-afda92248358346b.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/pages/_error-afda92248358346b.js.map",revision:"cc22ebfd7c4053d84f64c2e41843982e"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/public/assets/notification.7cf94838874c04af.mp3",revision:"7cf94838874c04af"},{url:"/_next/static/chunks/webpack-e299d4408a8d450c.js",revision:"W4j1p0Dr9g8bd6kZ5pQtT"},{url:"/_next/static/chunks/webpack-e299d4408a8d450c.js.map",revision:"a9d1c593265910b38cbb8fb903f9cf3d"},{url:"/_next/static/css/0367e37f6e3fd8b5.css",revision:"0367e37f6e3fd8b5"},{url:"/_next/static/css/0367e37f6e3fd8b5.css.map",revision:"685704c3118ce786c692a89639088dc4"},{url:"/_next/static/css/0f0cb42ad369f189.css",revision:"0f0cb42ad369f189"},{url:"/_next/static/css/0f0cb42ad369f189.css.map",revision:"e348cab54670937c3cff082e74d94c80"},{url:"/_next/static/css/314f3e8f4c7e1853.css",revision:"314f3e8f4c7e1853"},{url:"/_next/static/css/314f3e8f4c7e1853.css.map",revision:"f1957d70fd9d5360a64702577da2e592"},{url:"/_next/static/css/36e67111d2af8b79.css",revision:"36e67111d2af8b79"},{url:"/_next/static/css/36e67111d2af8b79.css.map",revision:"9ad055e7f4fd8fef8e379f12e56abf26"},{url:"/_next/static/css/41f6b882bf5c3924.css",revision:"41f6b882bf5c3924"},{url:"/_next/static/css/41f6b882bf5c3924.css.map",revision:"61db84570f7a5d906bb1515a1447e74d"},{url:"/_next/static/css/432e5ee1e7ae8de4.css",revision:"432e5ee1e7ae8de4"},{url:"/_next/static/css/432e5ee1e7ae8de4.css.map",revision:"df80e6a0c3981edc23c7e76fbd83f899"},{url:"/_next/static/css/4d05f548331f3701.css",revision:"4d05f548331f3701"},{url:"/_next/static/css/4d05f548331f3701.css.map",revision:"d51d2d43bbd60f6497b20f9409e42934"},{url:"/_next/static/css/58517c4333c805e1.css",revision:"58517c4333c805e1"},{url:"/_next/static/css/58517c4333c805e1.css.map",revision:"2667fcdefee5d76806b8bf7ca55fbc4c"},{url:"/_next/static/css/7323b2715eb37cb0.css",revision:"7323b2715eb37cb0"},{url:"/_next/static/css/7323b2715eb37cb0.css.map",revision:"d5d686dcdf16a9e9285e543f464580ff"},{url:"/_next/static/css/7b05caa48ae3756e.css",revision:"7b05caa48ae3756e"},{url:"/_next/static/css/7b05caa48ae3756e.css.map",revision:"0a3e94edfdb7e5f9797b6df970cd1892"},{url:"/_next/static/css/8dd1898b14cd062a.css",revision:"8dd1898b14cd062a"},{url:"/_next/static/css/8dd1898b14cd062a.css.map",revision:"57d0c3f1115a4846013f7649563da84f"},{url:"/_next/static/css/987144c8088097c9.css",revision:"987144c8088097c9"},{url:"/_next/static/css/987144c8088097c9.css.map",revision:"3b14adc2dbe95f3106a38430ee2562d5"},{url:"/_next/static/css/9a83f8aa8a53a78c.css",revision:"9a83f8aa8a53a78c"},{url:"/_next/static/css/9a83f8aa8a53a78c.css.map",revision:"9cb673161b58315f9d09b072bb2d665d"},{url:"/_next/static/css/a6acc34b57b7fdc5.css",revision:"a6acc34b57b7fdc5"},{url:"/_next/static/css/a6acc34b57b7fdc5.css.map",revision:"204d67a1db2cd99dedd7bb3c82f281cd"},{url:"/_next/static/css/af776ea049ea19f5.css",revision:"af776ea049ea19f5"},{url:"/_next/static/css/af776ea049ea19f5.css.map",revision:"54b2acd3662f2ab8dda59203dc19d640"},{url:"/_next/static/css/b2413520eb4669a5.css",revision:"b2413520eb4669a5"},{url:"/_next/static/css/b2413520eb4669a5.css.map",revision:"f8bf711535ca417ca6a41bdb82e1899d"},{url:"/_next/static/css/bad4927b0cd6fbf9.css",revision:"bad4927b0cd6fbf9"},{url:"/_next/static/css/bad4927b0cd6fbf9.css.map",revision:"2274583fb76a3907c5dc6ec75d995d99"},{url:"/_next/static/css/d422263a0a03c70c.css",revision:"d422263a0a03c70c"},{url:"/_next/static/css/d422263a0a03c70c.css.map",revision:"d96e583d479afcce9db5b8640774d91b"},{url:"/_next/static/css/de44a315f01b5b27.css",revision:"de44a315f01b5b27"},{url:"/_next/static/css/de44a315f01b5b27.css.map",revision:"f87e6c7970ebf95c06d39ce079a19616"},{url:"/_next/static/media/arrow1-about.656281e6.png",revision:"656281e6"},{url:"/_next/static/media/arrow2-about.1b039bcc.png",revision:"1b039bcc"},{url:"/_next/static/media/arrow3-about.70f825ed.png",revision:"70f825ed"},{url:"/_next/static/media/back-clouds-down.4d526728.png",revision:"4d526728"},{url:"/_next/static/media/back-clouds-up.23f147d4.png",revision:"23f147d4"},{url:"/_next/static/media/cloud1-about.2cdc493a.png",revision:"2cdc493a"},{url:"/_next/static/media/cloud2-about.32fd33bd.png",revision:"32fd33bd"},{url:"/_next/static/media/fallback.d0906556.png",revision:"8713aeba6805ef460b16fa081edd1887"},{url:"/_next/static/media/index-bg.6a2f476b.png",revision:"6a2f476b"},{url:"/_next/static/media/logo-circle.9f6f8f1c.svg",revision:"2df6f251431f9f36e1815e5b90ce1f8a"},{url:"/_next/static/media/noimage.7dc5d3ff.svg",revision:"68711d71516a091f18169b2882dc6035"},{url:"/_next/static/media/noimage.f7ce9bd0.png",revision:"f7ce9bd0"},{url:"/_next/static/media/thumbnail-play.348281a6.jpg",revision:"99d63c99267bf2e74e95d92bfb00a0ea"},{url:"/assets/arrow1-about.png",revision:"4340c5b200d5d51631f944aad1ee2b5e"},{url:"/assets/arrow2-about.png",revision:"a73b3fcfc161b35e762e52e1810612f9"},{url:"/assets/arrow3-about.png",revision:"6c58e88a02000b98b2f500275e173068"},{url:"/assets/back-clouds-down.png",revision:"12a7304745da678d47a0072132c810c1"},{url:"/assets/back-clouds-up.png",revision:"e56f90fa70a1fe82aebb5f997b823f28"},{url:"/assets/bg-download-mob-dark.png",revision:"8c9a7504cdb60835ef0d39b0f448571d"},{url:"/assets/bg-download-mob-dark.webp",revision:"6a8c212f5d2cb66f259a4a8aa3af3311"},{url:"/assets/bg-download-mob-light.png",revision:"d92057b43d7e4217175d35b944141645"},{url:"/assets/bg-download-mob-light.webp",revision:"a225c5595468ab97f62a03246753cce6"},{url:"/assets/bg-download-tiny-dark.svg",revision:"4dfcf8aaeeb8a52d21bb3525d541ed5b"},{url:"/assets/bg-download-tiny.webp",revision:"a0a4bfab2ddbad09183baf2afe07a616"},{url:"/assets/bubble-center.png",revision:"5606f7307c513e99f36699e10f23ccf9"},{url:"/assets/bubble-center.webp",revision:"ef695adcbbd8936ed59f350682e61397"},{url:"/assets/bubble-left-bottom.png",revision:"df2d82a18a6135cf028abbf11781da69"},{url:"/assets/bubble-left-bottom.webp",revision:"ed0725bf3ac081532ad28a113a25bb0e"},{url:"/assets/bubble-left-top.png",revision:"5485d77a530a6f998e1e0c95cc58d223"},{url:"/assets/bubble-left-top.webp",revision:"cf1c941f7f1bde7958ebc663e7dd2f14"},{url:"/assets/bubble-right-bottom.png",revision:"c34007e9b2e094b58d0ad9f149efe7a6"},{url:"/assets/bubble-right-bottom.webp",revision:"c2189eac8ac13d5a006194e4171148b4"},{url:"/assets/bubble-right-top.png",revision:"6401d7510d2dda133da4f77b8e5857c3"},{url:"/assets/bubble-right-top.webp",revision:"06037b88ba36932c52d5484a2db3c735"},{url:"/assets/cloud1-about.png",revision:"d66dc0e33618136110dc0a851f98f4cc"},{url:"/assets/cloud1.png",revision:"28c7c7b997fb3662e2d21549b32b2972"},{url:"/assets/cloud2-about.png",revision:"8774eb6432d37ac1ecf7deaea117e1a5"},{url:"/assets/cloud2.png",revision:"a66f13dbef7a3324ab1d105991295e00"},{url:"/assets/cloud3.png",revision:"8889d6546ce489ca120d960479fc04d1"},{url:"/assets/coming-soon.png",revision:"ef24f5a15258aaa3846af7089935bf0a"},{url:"/assets/community-img.svg",revision:"3fd1e229d9517bb74c4e4903d9109ded"},{url:"/assets/cover-fallback-day.png",revision:"595641ae8f1d3b74ee12ee0b8878a520"},{url:"/assets/cover-fallback-night.png",revision:"bb6096d6a3e471fa7a8f869562d340db"},{url:"/assets/download-algae-dark.png",revision:"8c70504a94da6e93f4ac1b27046eb939"},{url:"/assets/download-algae-dark.webp",revision:"89a79f1000ca9995a6e14cfc60fd42a9"},{url:"/assets/download-algae.png",revision:"2490f946a17ba1abe4456f0f31d850a3"},{url:"/assets/download-algae.webp",revision:"1d97c2b64cfd934481e18c49ec8e8722"},{url:"/assets/download-dark-fishes.png",revision:"537442c023e388e9e33a93c821094381"},{url:"/assets/download-dark-fishes.webp",revision:"a36ea49d16f9c4b1e2833c2f6bbc618f"},{url:"/assets/dunsky.jpeg",revision:"6af464219667bd1b7a8b05a3a3133cf4"},{url:"/assets/dunsky.webp",revision:"abb98406fd78ae7cbf1ccf61e6b0a8f2"},{url:"/assets/ecency-faq.jpg",revision:"e2d5d30d0cb4a5fc5e470c56d62ede97"},{url:"/assets/ecency-faq.webp",revision:"42faa678c7ef5854f9ed0c999f6ef7eb"},{url:"/assets/fallback.png",revision:"8713aeba6805ef460b16fa081edd1887"},{url:"/assets/fish-1.png",revision:"4386e9af02b5f60f75caa040eced9a65"},{url:"/assets/fish-1.webp",revision:"8f0eb1179c74579084353e5df5b2a74f"},{url:"/assets/fish-2.png",revision:"92ce36fc40b95aeb3475d081bba0d798"},{url:"/assets/fish-2.webp",revision:"fe0c99a9f185d8b2e94bd249e625cf27"},{url:"/assets/fish-3.png",revision:"89c59580c072f1dbf52ac03068f040f3"},{url:"/assets/fish-3.webp",revision:"b9c3a3cc1cd0329d74ddb62d3a4e4b43"},{url:"/assets/fish-4.png",revision:"b91622c6328bbba13847519e0356db62"},{url:"/assets/fish-4.webp",revision:"a404c3ef59a9581554c06188ee262419"},{url:"/assets/fish-5.png",revision:"b271e3992390713707dc08f01691fb52"},{url:"/assets/fish-5.webp",revision:"abb4e590246f17bd00a21f7b414872d3"},{url:"/assets/fish-junior.png",revision:"78924f1ba81f1f59dd9a144be923edb1"},{url:"/assets/fish-junior.webp",revision:"bcae2a76d249cad55891d24e41e73b0c"},{url:"/assets/fish-senior.png",revision:"f3327a9c9d166c9da097fcfe88f38ed3"},{url:"/assets/fish-senior.webp",revision:"c70cf25bd04d52decb151396c900dcb3"},{url:"/assets/footer-discord.svg",revision:"04238f73e8da0be200731a4cc285d00e"},{url:"/assets/footer-main-fish.png",revision:"ba3d7c5371e84bdf30f6dee4d086a156"},{url:"/assets/footer-main-fish.webp",revision:"ac45436a3109caf9f94a2cd00f681783"},{url:"/assets/footer-telegram.svg",revision:"796b996dc8082544484feb13a97aa014"},{url:"/assets/footer-twitter.svg",revision:"c44b68c3cdee7732ce516bc250f6f27c"},{url:"/assets/footer-youtube.svg",revision:"6f91ba3c2f20618d27c15bff5352aba6"},{url:"/assets/github-cover.png",revision:"5eaca17c4b526f9b352a87a5a82dbfe4"},{url:"/assets/good-karma.jpeg",revision:"a7bb11629694bd7f9bd2b16bf058bb6b"},{url:"/assets/good-karma.webp",revision:"9a449b33cf032238499916c25584f58d"},{url:"/assets/hero-algae-dark.svg",revision:"eaa27188f9a588164e731b9f4a8f8295"},{url:"/assets/hero-algae-light.svg",revision:"4efcd71e3e8f8574446eeaa7a7517e33"},{url:"/assets/hero-fishes-dark.png",revision:"f8d8e17b68e2ff1490202f8503d24770"},{url:"/assets/hero-fishes.svg",revision:"a6307454b1e0fc4bcb6d402c33a63c7f"},{url:"/assets/hive-signer.svg",revision:"579ae88263a03ea7c8c4a9ec4e8b67f7"},{url:"/assets/icon-android-white.svg",revision:"f7df8d801059a45a14d1e90864157b1f"},{url:"/assets/icon-android.png",revision:"606b1396c3fffa5dc0f1d074695fab49"},{url:"/assets/icon-android.webp",revision:"c6bd14c9917803f8f69c4557be95ad9e"},{url:"/assets/icon-apple-white.svg",revision:"e4de9f34c14e50ed4fd12847091c16d2"},{url:"/assets/icon-apple.svg",revision:"a27b1b4829e566dca6d38f7c2e6d6ba5"},{url:"/assets/icon-windows-white.svg",revision:"4553dd690e4675fc4fb2132732b1c43b"},{url:"/assets/icon-windows.svg",revision:"80669c801739c850306618a2569b423c"},{url:"/assets/illustration-decentralization.png",revision:"0ad91ae4e70f22e8be87345e73144cb3"},{url:"/assets/illustration-decentralization.webp",revision:"ed3442432df26760623ec58c715fdf43"},{url:"/assets/illustration-earn-money.png",revision:"e2a7951254764e3dabac0697d089a3c2"},{url:"/assets/illustration-earn-money.webp",revision:"58605a59b4c1f6321ef90d5ef21eac24"},{url:"/assets/illustration-hero-day.png",revision:"ca7c9fd189caa73616664823e45b737d"},{url:"/assets/illustration-hero-day.webp",revision:"66c0bb6d0864af304a4e1801c967c526"},{url:"/assets/illustration-hero.png",revision:"9e2e1a46dc78fb0635c054fcf2d27b67"},{url:"/assets/illustration-hero.webp",revision:"75c6cdf85d150e6512fd2b3d0e20e332"},{url:"/assets/illustration-open-source.png",revision:"6f20524696843277aca578db00f29e14"},{url:"/assets/illustration-open-source.webp",revision:"79bf861b3c83c7de1ac96d8a35c4827d"},{url:"/assets/illustration-true-ownership.png",revision:"005b4f456f8d341de75c8c7cb25d750c"},{url:"/assets/illustration-true-ownership.webp",revision:"a2819f44d481e3203270877dc89cf87c"},{url:"/assets/index-bg.png",revision:"0931098d955341c1458c653ef42c5bec"},{url:"/assets/keychain.png",revision:"b4a1776481ec1bce0cdcb654126ee449"},{url:"/assets/left-fishes.png",revision:"c98d0bac15e561c7e4ce226541f5ab1e"},{url:"/assets/left-fishes.webp",revision:"7e5f5cee88eafa722b9b2eadbede120d"},{url:"/assets/like.png",revision:"af5f38b521e1c06eece664d5a3f24cdd"},{url:"/assets/logo-192x192.svg",revision:"09f9b1ec26a43fedaf3c527d9992ea3b"},{url:"/assets/logo-384x384.svg",revision:"c33b1a087528562650bdc7f9bb1889b3"},{url:"/assets/logo-512x512.svg",revision:"e0eb6d6416139753e199cf627599ac40"},{url:"/assets/logo-circle-santa.svg",revision:"a08e76920a86e2749d74345d86797cc5"},{url:"/assets/logo-circle.svg",revision:"2df6f251431f9f36e1815e5b90ce1f8a"},{url:"/assets/logo-small-transparent.png",revision:"197b6e7934149c67237a38f145dfb860"},{url:"/assets/noimage.png",revision:"66290b70590324b996aa6c841a4f6bf1"},{url:"/assets/noimage.svg",revision:"68711d71516a091f18169b2882dc6035"},{url:"/assets/notification.mp3",revision:"594e6e429f66513a2bc759fce6c1abc7"},{url:"/assets/nsfw.png",revision:"2e103d3e107e2974025b441b5fde485a"},{url:"/assets/our-history.png",revision:"730ae7e9850b787ea78d6151391ca463"},{url:"/assets/our-history.webp",revision:"f781b93801170a83acde5cf23bf538f4"},{url:"/assets/our-team.png",revision:"dc4a40a5f543e793462caf5c19d89f2f"},{url:"/assets/our-team.webp",revision:"ca3d13a54a5ba9e7e7df7af748c3a23a"},{url:"/assets/our-vision.png",revision:"acb541b415884dfce4b061ad21ce1b06"},{url:"/assets/our-vision.webp",revision:"bfe56f6816dade138c59010d69a8f83f"},{url:"/assets/phone-dark-pc.png",revision:"ba94fb9341a0303a8f6068ade064b0cb"},{url:"/assets/phone-dark-pc.webp",revision:"beef47eb0f0d9e6708e172b2138c48ab"},{url:"/assets/phone-dark-tablet.png",revision:"2358c7d62d813d3422a5af8bebb2be2e"},{url:"/assets/phone-dark-tablet.webp",revision:"c42d66f8c5c1999a648e6bb6a1a81227"},{url:"/assets/phone-download-tiny.png",revision:"0247b2bb16c64d46e4d8a73f60f4d501"},{url:"/assets/phone-download-tiny.webp",revision:"7120bd905eb5e5acbc866bd42058ba4c"},{url:"/assets/phone-download.png",revision:"54650a95d8ce20a2e03b68f0d6389201"},{url:"/assets/phone-light-pc.png",revision:"7bbef75c3da1d2a8e742b484292e6379"},{url:"/assets/phone-light-pc.webp",revision:"4a5839bf3499ef6687f1a798c683d7a1"},{url:"/assets/phone-light-tablet.png",revision:"49724acf6a25fedcd914ce0125517b8a"},{url:"/assets/phone-light-tablet.webp",revision:"7f448063c46119c5a7f0880f01b1814d"},{url:"/assets/reward.png",revision:"0faea76d5486dc7f637486da769fdad8"},{url:"/assets/rewarding-and-freespeech.png",revision:"ca1fc97612079d93de24bfb3ab6e0ea9"},{url:"/assets/rewarding-and-freespeech.svg",revision:"2df6f251431f9f36e1815e5b90ce1f8a"},{url:"/assets/signup.png",revision:"1ceacafe5770ed4f53829de572c9d219"},{url:"/assets/svg.tsx",revision:"2f1d7fbc25f8166e5b49e8997a803842"},{url:"/assets/talhasch.jpeg",revision:"9abb1df5ddbfd25e7fd72b0a4e202eff"},{url:"/assets/talhasch.webp",revision:"6e7e49e9ba1da71ecf46f0bb17c986c3"},{url:"/assets/thumbnail-play.jpg",revision:"99d63c99267bf2e74e95d92bfb00a0ea"},{url:"/assets/writer-thinking.png",revision:"03deb40c2a35de193e78c0e0d3d72a0e"},{url:"/assets/writer.png",revision:"00feab482a3f5309cce64ce9ca64041a"},{url:"/firebase-messaging-sw.js",revision:"db67bd2ec72e44b813ccabeb1ebb113f"},{url:"/manifest.json",revision:"3547aead3cd7bbd2b2ab3b7e23355d84"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
