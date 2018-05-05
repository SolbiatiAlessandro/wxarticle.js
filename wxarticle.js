
// THIS IS A SCRIPT TO BYPASS CROSS-SOURCE BLOCK TO ACCESS INFORMATION ABOUT WECHAT ARTICLES, using a virtual proxy server written in javascript + jsonp + parsing





// ALESSANDRO SOLBIATI @ ANYHELPER 
// 06.05.2018


// (requires JQUERY)







/*! URI.js v1.19.1 http://medialize.github.io/URI.js/ */
/* build contains: IPv6.js, punycode.js, SecondLevelDomains.js, URI.js, URITemplate.js, jquery.URI.js */
/*
 URI.js - Mutating URLs
 IPv6 Support

 Version: 1.19.1

 Author: Rodney Rehm
 Web: http://medialize.github.io/URI.js/

 Licensed under
   MIT License http://www.opensource.org/licenses/mit-license

 https://mths.be/punycode v1.4.0 by @mathias  URI.js - Mutating URLs
 Second Level Domain (SLD) Support

 Version: 1.19.1

 Author: Rodney Rehm
 Web: http://medialize.github.io/URI.js/

 Licensed under
   MIT License http://www.opensource.org/licenses/mit-license

 URI.js - Mutating URLs

 Version: 1.19.1

 Author: Rodney Rehm
 Web: http://medialize.github.io/URI.js/

 Licensed under
   MIT License http://www.opensource.org/licenses/mit-license

 URI.js - Mutating URLs
 URI Template Support - http://tools.ietf.org/html/rfc6570

 Version: 1.19.1

 Author: Rodney Rehm
 Web: http://medialize.github.io/URI.js/

 Licensed under
   MIT License http://www.opensource.org/licenses/mit-license

 URI.js - Mutating URLs
 jQuery Plugin

 Version: 1.19.1

 Author: Rodney Rehm
 Web: http://medialize.github.io/URI.js/jquery-uri-plugin.html

 Licensed under
   MIT License http://www.opensource.org/licenses/mit-license

*/
(function(d,k){"object"===typeof module&&module.exports?module.exports=k():"function"===typeof define&&define.amd?define(k):d.IPv6=k(d)})(this,function(d){var k=d&&d.IPv6;return{best:function(g){g=g.toLowerCase().split(":");var d=g.length,b=8;""===g[0]&&""===g[1]&&""===g[2]?(g.shift(),g.shift()):""===g[0]&&""===g[1]?g.shift():""===g[d-1]&&""===g[d-2]&&g.pop();d=g.length;-1!==g[d-1].indexOf(".")&&(b=7);var p;for(p=0;p<d&&""!==g[p];p++);if(p<b)for(g.splice(p,1,"0000");g.length<b;)g.splice(p,0,"0000");
for(p=0;p<b;p++){d=g[p].split("");for(var k=0;3>k;k++)if("0"===d[0]&&1<d.length)d.splice(0,1);else break;g[p]=d.join("")}d=-1;var t=k=0,n=-1,q=!1;for(p=0;p<b;p++)q?"0"===g[p]?t+=1:(q=!1,t>k&&(d=n,k=t)):"0"===g[p]&&(q=!0,n=p,t=1);t>k&&(d=n,k=t);1<k&&g.splice(d,k,"");d=g.length;b="";""===g[0]&&(b=":");for(p=0;p<d;p++){b+=g[p];if(p===d-1)break;b+=":"}""===g[d-1]&&(b+=":");return b},noConflict:function(){d.IPv6===this&&(d.IPv6=k);return this}}});
(function(d){function k(b){throw new RangeError(A[b]);}function g(b,f){for(var h=b.length,d=[];h--;)d[h]=f(b[h]);return d}function u(b,f){var h=b.split("@"),d="";1<h.length&&(d=h[0]+"@",b=h[1]);b=b.replace(E,".");h=b.split(".");h=g(h,f).join(".");return d+h}function b(b){for(var f=[],h=0,d=b.length,g,a;h<d;)g=b.charCodeAt(h++),55296<=g&&56319>=g&&h<d?(a=b.charCodeAt(h++),56320==(a&64512)?f.push(((g&1023)<<10)+(a&1023)+65536):(f.push(g),h--)):f.push(g);return f}function p(b){return g(b,function(b){var f=
"";65535<b&&(b-=65536,f+=y(b>>>10&1023|55296),b=56320|b&1023);return f+=y(b)}).join("")}function B(b,f){return b+22+75*(26>b)-((0!=f)<<5)}function t(b,h,d){var g=0;b=d?f(b/700):b>>1;for(b+=f(b/h);455<b;g+=36)b=f(b/35);return f(g+36*b/(b+38))}function n(b){var h=[],d=b.length,g=0,n=128,a=72,c,e;var l=b.lastIndexOf("-");0>l&&(l=0);for(c=0;c<l;++c)128<=b.charCodeAt(c)&&k("not-basic"),h.push(b.charCodeAt(c));for(l=0<l?l+1:0;l<d;){c=g;var m=1;for(e=36;;e+=36){l>=d&&k("invalid-input");var x=b.charCodeAt(l++);
x=10>x-48?x-22:26>x-65?x-65:26>x-97?x-97:36;(36<=x||x>f((2147483647-g)/m))&&k("overflow");g+=x*m;var r=e<=a?1:e>=a+26?26:e-a;if(x<r)break;x=36-r;m>f(2147483647/x)&&k("overflow");m*=x}m=h.length+1;a=t(g-c,m,0==c);f(g/m)>2147483647-n&&k("overflow");n+=f(g/m);g%=m;h.splice(g++,0,n)}return p(h)}function q(h){var d,g,n,r=[];h=b(h);var a=h.length;var c=128;var e=0;var l=72;for(n=0;n<a;++n){var m=h[n];128>m&&r.push(y(m))}for((d=g=r.length)&&r.push("-");d<a;){var x=2147483647;for(n=0;n<a;++n)m=h[n],m>=c&&
m<x&&(x=m);var q=d+1;x-c>f((2147483647-e)/q)&&k("overflow");e+=(x-c)*q;c=x;for(n=0;n<a;++n)if(m=h[n],m<c&&2147483647<++e&&k("overflow"),m==c){var v=e;for(x=36;;x+=36){m=x<=l?1:x>=l+26?26:x-l;if(v<m)break;var p=v-m;v=36-m;r.push(y(B(m+p%v,0)));v=f(p/v)}r.push(y(B(v,0)));l=t(e,q,d==g);e=0;++d}++e;++c}return r.join("")}var w="object"==typeof exports&&exports&&!exports.nodeType&&exports,h="object"==typeof module&&module&&!module.nodeType&&module,r="object"==typeof global&&global;if(r.global===r||r.window===
r||r.self===r)d=r;var v=/^xn--/,D=/[^\x20-\x7E]/,E=/[\x2E\u3002\uFF0E\uFF61]/g,A={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},f=Math.floor,y=String.fromCharCode,C;var z={version:"1.3.2",ucs2:{decode:b,encode:p},decode:n,encode:q,toASCII:function(b){return u(b,function(b){return D.test(b)?"xn--"+q(b):b})},toUnicode:function(b){return u(b,function(b){return v.test(b)?n(b.slice(4).toLowerCase()):
b})}};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return z});else if(w&&h)if(module.exports==w)h.exports=z;else for(C in z)z.hasOwnProperty(C)&&(w[C]=z[C]);else d.punycode=z})(this);
(function(d,k){"object"===typeof module&&module.exports?module.exports=k():"function"===typeof define&&define.amd?define(k):d.SecondLevelDomains=k(d)})(this,function(d){var k=d&&d.SecondLevelDomains,g={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",
bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",
ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ","do":" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",
es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",
id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ","in":" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",
kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",
mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",
ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",
ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",
tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",
rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",
tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",
us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch ",com:"ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",net:"gb jp se uk ",
org:"ae",de:"com "},has:function(d){var b=d.lastIndexOf(".");if(0>=b||b>=d.length-1)return!1;var k=d.lastIndexOf(".",b-1);if(0>=k||k>=b-1)return!1;var u=g.list[d.slice(b+1)];return u?0<=u.indexOf(" "+d.slice(k+1,b)+" "):!1},is:function(d){var b=d.lastIndexOf(".");if(0>=b||b>=d.length-1||0<=d.lastIndexOf(".",b-1))return!1;var k=g.list[d.slice(b+1)];return k?0<=k.indexOf(" "+d.slice(0,b)+" "):!1},get:function(d){var b=d.lastIndexOf(".");if(0>=b||b>=d.length-1)return null;var k=d.lastIndexOf(".",b-1);
if(0>=k||k>=b-1)return null;var u=g.list[d.slice(b+1)];return!u||0>u.indexOf(" "+d.slice(k+1,b)+" ")?null:d.slice(k+1)},noConflict:function(){d.SecondLevelDomains===this&&(d.SecondLevelDomains=k);return this}};return g});
(function(d,k){"object"===typeof module&&module.exports?module.exports=k(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],k):d.URI=k(d.punycode,d.IPv6,d.SecondLevelDomains,d)})(this,function(d,k,g,u){function b(a,c){var e=1<=arguments.length,l=2<=arguments.length;if(!(this instanceof b))return e?l?new b(a,c):new b(a):new b;if(void 0===a){if(e)throw new TypeError("undefined is not a valid argument for URI");
a="undefined"!==typeof location?location.href+"":""}if(null===a&&e)throw new TypeError("null is not a valid argument for URI");this.href(a);return void 0!==c?this.absoluteTo(c):this}function p(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function B(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function t(a){return"Array"===B(a)}function n(a,c){var e={},b;if("RegExp"===B(c))e=null;else if(t(c)){var m=0;for(b=c.length;m<b;m++)e[c[m]]=!0}else e[c]=
!0;m=0;for(b=a.length;m<b;m++)if(e&&void 0!==e[a[m]]||!e&&c.test(a[m]))a.splice(m,1),b--,m--;return a}function q(a,c){var e;if(t(c)){var b=0;for(e=c.length;b<e;b++)if(!q(a,c[b]))return!1;return!0}var m=B(c);b=0;for(e=a.length;b<e;b++)if("RegExp"===m){if("string"===typeof a[b]&&a[b].match(c))return!0}else if(a[b]===c)return!0;return!1}function w(a,c){if(!t(a)||!t(c)||a.length!==c.length)return!1;a.sort();c.sort();for(var e=0,b=a.length;e<b;e++)if(a[e]!==c[e])return!1;return!0}function h(a){return a.replace(/^\/+|\/+$/g,
"")}function r(a){return escape(a)}function v(a){return encodeURIComponent(a).replace(/[!'()*]/g,r).replace(/\*/g,"%2A")}function D(a){return function(c,e){if(void 0===c)return this._parts[a]||"";this._parts[a]=c||null;this.build(!e);return this}}function E(a,c){return function(e,b){if(void 0===e)return this._parts[a]||"";null!==e&&(e+="",e.charAt(0)===c&&(e=e.substring(1)));this._parts[a]=e;this.build(!b);return this}}var A=u&&u.URI;b.version="1.19.1";var f=b.prototype,y=Object.prototype.hasOwnProperty;
b._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,preventInvalidHostname:b.preventInvalidHostname,duplicateQueryParameters:b.duplicateQueryParameters,escapeQuerySpace:b.escapeQuerySpace}};b.preventInvalidHostname=!1;b.duplicateQueryParameters=!1;b.escapeQuerySpace=!0;b.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;b.idn_expression=/[^a-z0-9\._-]/i;b.punycode_expression=/(xn--)/i;b.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
b.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
b.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;b.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g};b.defaultPorts={http:"80",https:"443",ftp:"21",
gopher:"70",ws:"80",wss:"443"};b.hostProtocols=["http","https"];b.invalid_hostname_characters=/[^a-zA-Z0-9\.\-:_]/;b.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};b.getDomAttribute=function(a){if(a&&a.nodeName){var c=a.nodeName.toLowerCase();if("input"!==c||"image"===a.type)return b.domAttributes[c]}};b.encode=v;b.decode=decodeURIComponent;b.iso8859=
function(){b.encode=escape;b.decode=unescape};b.unicode=function(){b.encode=v;b.decode=decodeURIComponent};b.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@",
"%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};b.encodeQuery=function(a,c){var e=b.encode(a+"");void 0===c&&(c=b.escapeQuerySpace);return c?e.replace(/%20/g,"+"):e};b.decodeQuery=
function(a,c){a+="";void 0===c&&(c=b.escapeQuerySpace);try{return b.decode(c?a.replace(/\+/g,"%20"):a)}catch(e){return a}};var C={encode:"encode",decode:"decode"},z,F=function(a,c){return function(e){try{return b[c](e+"").replace(b.characters[a][c].expression,function(e){return b.characters[a][c].map[e]})}catch(l){return e}}};for(z in C)b[z+"PathSegment"]=F("pathname",C[z]),b[z+"UrnPathSegment"]=F("urnpath",C[z]);C=function(a,c,e){return function(l){var m=e?function(a){return b[c](b[e](a))}:b[c];
l=(l+"").split(a);for(var d=0,f=l.length;d<f;d++)l[d]=m(l[d]);return l.join(a)}};b.decodePath=C("/","decodePathSegment");b.decodeUrnPath=C(":","decodeUrnPathSegment");b.recodePath=C("/","encodePathSegment","decode");b.recodeUrnPath=C(":","encodeUrnPathSegment","decode");b.encodeReserved=F("reserved","encode");b.parse=function(a,c){c||(c={preventInvalidHostname:b.preventInvalidHostname});var e=a.indexOf("#");-1<e&&(c.fragment=a.substring(e+1)||null,a=a.substring(0,e));e=a.indexOf("?");-1<e&&(c.query=
a.substring(e+1)||null,a=a.substring(0,e));"//"===a.substring(0,2)?(c.protocol=null,a=a.substring(2),a=b.parseAuthority(a,c)):(e=a.indexOf(":"),-1<e&&(c.protocol=a.substring(0,e)||null,c.protocol&&!c.protocol.match(b.protocol_expression)?c.protocol=void 0:"//"===a.substring(e+1,e+3)?(a=a.substring(e+3),a=b.parseAuthority(a,c)):(a=a.substring(e+1),c.urn=!0)));c.path=a;return c};b.parseHost=function(a,c){a||(a="");a=a.replace(/\\/g,"/");var e=a.indexOf("/");-1===e&&(e=a.length);if("["===a.charAt(0)){var l=
a.indexOf("]");c.hostname=a.substring(1,l)||null;c.port=a.substring(l+2,e)||null;"/"===c.port&&(c.port=null)}else{var m=a.indexOf(":");l=a.indexOf("/");m=a.indexOf(":",m+1);-1!==m&&(-1===l||m<l)?(c.hostname=a.substring(0,e)||null,c.port=null):(l=a.substring(0,e).split(":"),c.hostname=l[0]||null,c.port=l[1]||null)}c.hostname&&"/"!==a.substring(e).charAt(0)&&(e++,a="/"+a);c.preventInvalidHostname&&b.ensureValidHostname(c.hostname,c.protocol);c.port&&b.ensureValidPort(c.port);return a.substring(e)||
"/"};b.parseAuthority=function(a,c){a=b.parseUserinfo(a,c);return b.parseHost(a,c)};b.parseUserinfo=function(a,c){var e=a.indexOf("/"),l=a.lastIndexOf("@",-1<e?e:a.length-1);-1<l&&(-1===e||l<e)?(e=a.substring(0,l).split(":"),c.username=e[0]?b.decode(e[0]):null,e.shift(),c.password=e[0]?b.decode(e.join(":")):null,a=a.substring(l+1)):(c.username=null,c.password=null);return a};b.parseQuery=function(a,c){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var e={},l=a.split("&"),
m=l.length,d,f,h=0;h<m;h++)if(d=l[h].split("="),f=b.decodeQuery(d.shift(),c),d=d.length?b.decodeQuery(d.join("="),c):null,y.call(e,f)){if("string"===typeof e[f]||null===e[f])e[f]=[e[f]];e[f].push(d)}else e[f]=d;return e};b.build=function(a){var c="";a.protocol&&(c+=a.protocol+":");a.urn||!c&&!a.hostname||(c+="//");c+=b.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(c+="/"),c+=a.path);"string"===typeof a.query&&a.query&&(c+="?"+a.query);"string"===
typeof a.fragment&&a.fragment&&(c+="#"+a.fragment);return c};b.buildHost=function(a){var c="";if(a.hostname)c=b.ip6_expression.test(a.hostname)?c+("["+a.hostname+"]"):c+a.hostname;else return"";a.port&&(c+=":"+a.port);return c};b.buildAuthority=function(a){return b.buildUserinfo(a)+b.buildHost(a)};b.buildUserinfo=function(a){var c="";a.username&&(c+=b.encode(a.username));a.password&&(c+=":"+b.encode(a.password));c&&(c+="@");return c};b.buildQuery=function(a,c,e){var l="",m,d;for(m in a)if(y.call(a,
m)&&m)if(t(a[m])){var f={};var h=0;for(d=a[m].length;h<d;h++)void 0!==a[m][h]&&void 0===f[a[m][h]+""]&&(l+="&"+b.buildQueryParameter(m,a[m][h],e),!0!==c&&(f[a[m][h]+""]=!0))}else void 0!==a[m]&&(l+="&"+b.buildQueryParameter(m,a[m],e));return l.substring(1)};b.buildQueryParameter=function(a,c,e){return b.encodeQuery(a,e)+(null!==c?"="+b.encodeQuery(c,e):"")};b.addQuery=function(a,c,e){if("object"===typeof c)for(var l in c)y.call(c,l)&&b.addQuery(a,l,c[l]);else if("string"===typeof c)void 0===a[c]?
a[c]=e:("string"===typeof a[c]&&(a[c]=[a[c]]),t(e)||(e=[e]),a[c]=(a[c]||[]).concat(e));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};b.setQuery=function(a,c,e){if("object"===typeof c)for(var l in c)y.call(c,l)&&b.setQuery(a,l,c[l]);else if("string"===typeof c)a[c]=void 0===e?null:e;else throw new TypeError("URI.setQuery() accepts an object, string as the name parameter");};b.removeQuery=function(a,c,e){var l;if(t(c))for(e=0,l=c.length;e<l;e++)a[c[e]]=
void 0;else if("RegExp"===B(c))for(l in a)c.test(l)&&(a[l]=void 0);else if("object"===typeof c)for(l in c)y.call(c,l)&&b.removeQuery(a,l,c[l]);else if("string"===typeof c)void 0!==e?"RegExp"===B(e)?!t(a[c])&&e.test(a[c])?a[c]=void 0:a[c]=n(a[c],e):a[c]!==String(e)||t(e)&&1!==e.length?t(a[c])&&(a[c]=n(a[c],e)):a[c]=void 0:a[c]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");};b.hasQuery=function(a,c,e,l){switch(B(c)){case "String":break;
case "RegExp":for(var m in a)if(y.call(a,m)&&c.test(m)&&(void 0===e||b.hasQuery(a,m,e)))return!0;return!1;case "Object":for(var d in c)if(y.call(c,d)&&!b.hasQuery(a,d,c[d]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter");}switch(B(e)){case "Undefined":return c in a;case "Boolean":return a=!(t(a[c])?!a[c].length:!a[c]),e===a;case "Function":return!!e(a[c],c,a);case "Array":return t(a[c])?(l?q:w)(a[c],e):!1;case "RegExp":return t(a[c])?
l?q(a[c],e):!1:!(!a[c]||!a[c].match(e));case "Number":e=String(e);case "String":return t(a[c])?l?q(a[c],e):!1:a[c]===e;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};b.joinPaths=function(){for(var a=[],c=[],e=0,l=0;l<arguments.length;l++){var m=new b(arguments[l]);a.push(m);m=m.segment();for(var d=0;d<m.length;d++)"string"===typeof m[d]&&c.push(m[d]),m[d]&&e++}if(!c.length||!e)return new b("");c=(new b("")).segment(c);
""!==a[0].path()&&"/"!==a[0].path().slice(0,1)||c.path("/"+c.path());return c.normalize()};b.commonPath=function(a,c){var e=Math.min(a.length,c.length),b;for(b=0;b<e;b++)if(a.charAt(b)!==c.charAt(b)){b--;break}if(1>b)return a.charAt(0)===c.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(b)||"/"!==c.charAt(b))b=a.substring(0,b).lastIndexOf("/");return a.substring(0,b+1)};b.withinString=function(a,c,e){e||(e={});var l=e.start||b.findUri.start,d=e.end||b.findUri.end,f=e.trim||b.findUri.trim,h=
e.parens||b.findUri.parens,g=/[a-z0-9-]=["']?$/i;for(l.lastIndex=0;;){var n=l.exec(a);if(!n)break;var r=n.index;if(e.ignoreHtml){var k=a.slice(Math.max(r-3,0),r);if(k&&g.test(k))continue}var v=r+a.slice(r).search(d);k=a.slice(r,v);for(v=-1;;){var q=h.exec(k);if(!q)break;v=Math.max(v,q.index+q[0].length)}k=-1<v?k.slice(0,v)+k.slice(v).replace(f,""):k.replace(f,"");k.length<=n[0].length||e.ignore&&e.ignore.test(k)||(v=r+k.length,n=c(k,r,v,a),void 0===n?l.lastIndex=v:(n=String(n),a=a.slice(0,r)+n+a.slice(v),
l.lastIndex=r+n.length))}l.lastIndex=0;return a};b.ensureValidHostname=function(a,c){var e=!!a,l=!1;c&&(l=q(b.hostProtocols,c));if(l&&!e)throw new TypeError("Hostname cannot be empty, if protocol is "+c);if(a&&a.match(b.invalid_hostname_characters)){if(!d)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');if(d.toASCII(a).match(b.invalid_hostname_characters))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-:_]');
}};b.ensureValidPort=function(a){if(a){var c=Number(a);if(!(/^[0-9]+$/.test(c)&&0<c&&65536>c))throw new TypeError('Port "'+a+'" is not a valid port');}};b.noConflict=function(a){if(a)return a={URI:this.noConflict()},u.URITemplate&&"function"===typeof u.URITemplate.noConflict&&(a.URITemplate=u.URITemplate.noConflict()),u.IPv6&&"function"===typeof u.IPv6.noConflict&&(a.IPv6=u.IPv6.noConflict()),u.SecondLevelDomains&&"function"===typeof u.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=u.SecondLevelDomains.noConflict()),
a;u.URI===this&&(u.URI=A);return this};f.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=b.build(this._parts),this._deferred_build=!1;return this};f.clone=function(){return new b(this)};f.valueOf=f.toString=function(){return this.build(!1)._string};f.protocol=D("protocol");f.username=D("username");f.password=D("password");f.hostname=D("hostname");f.port=D("port");f.query=E("query","?");f.fragment=E("fragment","#");f.search=function(a,c){var b=
this.query(a,c);return"string"===typeof b&&b.length?"?"+b:b};f.hash=function(a,c){var b=this.fragment(a,c);return"string"===typeof b&&b.length?"#"+b:b};f.pathname=function(a,c){if(void 0===a||!0===a){var e=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?b.decodeUrnPath:b.decodePath)(e):e}this._parts.path=this._parts.urn?a?b.recodeUrnPath(a):"":a?b.recodePath(a):"/";this.build(!c);return this};f.path=f.pathname;f.href=function(a,c){var e;if(void 0===a)return this.toString();
this._string="";this._parts=b._parts();var l=a instanceof b,d="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(d=b.getDomAttribute(a),a=a[d]||"",d=!1);!l&&d&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=b.parse(String(a),this._parts);else if(l||d){l=l?a._parts:a;for(e in l)"query"!==e&&y.call(this._parts,e)&&(this._parts[e]=l[e]);l.query&&this.query(l.query,!1)}else throw new TypeError("invalid input");this.build(!c);return this};
f.is=function(a){var c=!1,e=!1,d=!1,m=!1,f=!1,h=!1,n=!1,r=!this._parts.urn;this._parts.hostname&&(r=!1,e=b.ip4_expression.test(this._parts.hostname),d=b.ip6_expression.test(this._parts.hostname),c=e||d,f=(m=!c)&&g&&g.has(this._parts.hostname),h=m&&b.idn_expression.test(this._parts.hostname),n=m&&b.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return r;case "absolute":return!r;case "domain":case "name":return m;case "sld":return f;case "ip":return c;case "ip4":case "ipv4":case "inet4":return e;
case "ip6":case "ipv6":case "inet6":return d;case "idn":return h;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return n}return null};var G=f.protocol,H=f.port,I=f.hostname;f.protocol=function(a,c){if(a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(b.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return G.call(this,a,c)};f.scheme=f.protocol;f.port=function(a,c){if(this._parts.urn)return void 0===
a?"":this;void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),b.ensureValidPort(a)));return H.call(this,a,c)};f.hostname=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var e={preventInvalidHostname:this._parts.preventInvalidHostname};if("/"!==b.parseHost(a,e))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');a=e.hostname;this._parts.preventInvalidHostname&&b.ensureValidHostname(a,this._parts.protocol)}return I.call(this,
a,c)};f.origin=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var e=this.protocol();return this.authority()?(e?e+"://":"")+this.authority():""}e=b(a);this.protocol(e.protocol()).authority(e.authority()).build(!c);return this};f.host=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?b.buildHost(this._parts):"";if("/"!==b.parseHost(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');
this.build(!c);return this};f.authority=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?b.buildAuthority(this._parts):"";if("/"!==b.parseAuthority(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!c);return this};f.userinfo=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var e=b.buildUserinfo(this._parts);return e?e.substring(0,e.length-1):e}"@"!==a[a.length-1]&&
(a+="@");b.parseUserinfo(a,this._parts);this.build(!c);return this};f.resource=function(a,c){if(void 0===a)return this.path()+this.search()+this.hash();var e=b.parse(a);this._parts.path=e.path;this._parts.query=e.query;this._parts.fragment=e.fragment;this.build(!c);return this};f.subdomain=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var e=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,
e)||""}e=this._parts.hostname.length-this.domain().length;e=this._parts.hostname.substring(0,e);e=new RegExp("^"+p(e));a&&"."!==a.charAt(a.length-1)&&(a+=".");if(-1!==a.indexOf(":"))throw new TypeError("Domains cannot contain colons");a&&b.ensureValidHostname(a,this._parts.protocol);this._parts.hostname=this._parts.hostname.replace(e,a);this.build(!c);return this};f.domain=function(a,c){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(c=a,a=void 0);if(void 0===a){if(!this._parts.hostname||
this.is("IP"))return"";var e=this._parts.hostname.match(/\./g);if(e&&2>e.length)return this._parts.hostname;e=this._parts.hostname.length-this.tld(c).length-1;e=this._parts.hostname.lastIndexOf(".",e-1)+1;return this._parts.hostname.substring(e)||""}if(!a)throw new TypeError("cannot set domain empty");if(-1!==a.indexOf(":"))throw new TypeError("Domains cannot contain colons");b.ensureValidHostname(a,this._parts.protocol);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(e=new RegExp(p(this.domain())+
"$"),this._parts.hostname=this._parts.hostname.replace(e,a));this.build(!c);return this};f.tld=function(a,c){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(c=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var b=this._parts.hostname.lastIndexOf(".");b=this._parts.hostname.substring(b+1);return!0!==c&&g&&g.list[b.toLowerCase()]?g.get(this._parts.hostname)||b:b}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(g&&g.is(a))b=new RegExp(p(this.tld())+"$"),this._parts.hostname=
this._parts.hostname.replace(b,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");b=new RegExp(p(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(b,a)}else throw new TypeError("cannot set TLD empty");this.build(!c);return this};f.directory=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&
!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var e=this._parts.path.length-this.filename().length-1;e=this._parts.path.substring(0,e)||(this._parts.hostname?"/":"");return a?b.decodePath(e):e}e=this._parts.path.length-this.filename().length;e=this._parts.path.substring(0,e);e=new RegExp("^"+p(e));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=b.recodePath(a);this._parts.path=this._parts.path.replace(e,a);this.build(!c);
return this};f.filename=function(a,c){if(this._parts.urn)return void 0===a?"":this;if("string"!==typeof a){if(!this._parts.path||"/"===this._parts.path)return"";var e=this._parts.path.lastIndexOf("/");e=this._parts.path.substring(e+1);return a?b.decodePathSegment(e):e}e=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(e=!0);var d=new RegExp(p(this.filename())+"$");a=b.recodePath(a);this._parts.path=this._parts.path.replace(d,a);e?this.normalizePath(c):this.build(!c);return this};f.suffix=
function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var e=this.filename(),d=e.lastIndexOf(".");if(-1===d)return"";e=e.substring(d+1);e=/^[a-z0-9%]+$/i.test(e)?e:"";return a?b.decodePathSegment(e):e}"."===a.charAt(0)&&(a=a.substring(1));if(e=this.suffix())d=a?new RegExp(p(e)+"$"):new RegExp(p("."+e)+"$");else{if(!a)return this;this._parts.path+="."+b.recodePath(a)}d&&(a=b.recodePath(a),this._parts.path=this._parts.path.replace(d,
a));this.build(!c);return this};f.segment=function(a,c,b){var e=this._parts.urn?":":"/",d=this.path(),f="/"===d.substring(0,1);d=d.split(e);void 0!==a&&"number"!==typeof a&&(b=c,c=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');f&&d.shift();0>a&&(a=Math.max(d.length+a,0));if(void 0===c)return void 0===a?d:d[a];if(null===a||void 0===d[a])if(t(c)){d=[];a=0;for(var n=c.length;a<n;a++)if(c[a].length||d.length&&d[d.length-1].length)d.length&&!d[d.length-
1].length&&d.pop(),d.push(h(c[a]))}else{if(c||"string"===typeof c)c=h(c),""===d[d.length-1]?d[d.length-1]=c:d.push(c)}else c?d[a]=h(c):d.splice(a,1);f&&d.unshift("");return this.path(d.join(e),b)};f.segmentCoded=function(a,c,e){var d;"number"!==typeof a&&(e=c,c=a,a=void 0);if(void 0===c){a=this.segment(a,c,e);if(t(a)){var f=0;for(d=a.length;f<d;f++)a[f]=b.decode(a[f])}else a=void 0!==a?b.decode(a):void 0;return a}if(t(c))for(f=0,d=c.length;f<d;f++)c[f]=b.encode(c[f]);else c="string"===typeof c||c instanceof
String?b.encode(c):c;return this.segment(a,c,e)};var J=f.query;f.query=function(a,c){if(!0===a)return b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace),d=a.call(this,e);this._parts.query=b.buildQuery(d||e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!c);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=b.buildQuery(a,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace),this.build(!c),this):J.call(this,a,c)};f.setQuery=function(a,c,e){var d=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)d[a]=void 0!==c?c:null;else if("object"===typeof a)for(var f in a)y.call(a,f)&&(d[f]=a[f]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=b.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&
(e=c);this.build(!e);return this};f.addQuery=function(a,c,e){var d=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);b.addQuery(d,a,void 0===c?null:c);this._parts.query=b.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(e=c);this.build(!e);return this};f.removeQuery=function(a,c,e){var d=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);b.removeQuery(d,a,c);this._parts.query=b.buildQuery(d,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace);"string"!==typeof a&&(e=c);this.build(!e);return this};f.hasQuery=function(a,c,e){var d=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return b.hasQuery(d,a,c,e)};f.setSearch=f.setQuery;f.addSearch=f.addQuery;f.removeSearch=f.removeQuery;f.hasSearch=f.hasQuery;f.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};
f.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};f.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&d?this._parts.hostname=d.toASCII(this._parts.hostname):this.is("IPv6")&&k&&(this._parts.hostname=k.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};f.normalizePort=function(a){"string"===typeof this._parts.protocol&&
this._parts.port===b.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};f.normalizePath=function(a){var c=this._parts.path;if(!c)return this;if(this._parts.urn)return this._parts.path=b.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;c=b.recodePath(c);var e="";if("/"!==c.charAt(0)){var d=!0;c="/"+c}if("/.."===c.slice(-3)||"/."===c.slice(-2))c+="/";c=c.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");d&&(e=c.substring(1).match(/^(\.\.\/)+/)||
"")&&(e=e[0]);for(;;){var f=c.search(/\/\.\.(\/|$)/);if(-1===f)break;else if(0===f){c=c.substring(3);continue}var h=c.substring(0,f).lastIndexOf("/");-1===h&&(h=f);c=c.substring(0,h)+c.substring(f+3)}d&&this.is("relative")&&(c=e+c.substring(1));this._parts.path=c;this.build(!a);return this};f.normalizePathname=f.normalizePath;f.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(b.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=
null,this.build(!a));return this};f.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};f.normalizeSearch=f.normalizeQuery;f.normalizeHash=f.normalizeFragment;f.iso8859=function(){var a=b.encode,c=b.decode;b.encode=escape;b.decode=decodeURIComponent;try{this.normalize()}finally{b.encode=a,b.decode=c}return this};f.unicode=function(){var a=b.encode,c=b.decode;b.encode=v;b.decode=unescape;try{this.normalize()}finally{b.encode=a,b.decode=c}return this};
f.readable=function(){var a=this.clone();a.username("").password("").normalize();var c="";a._parts.protocol&&(c+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&d?(c+=d.toUnicode(a._parts.hostname),a._parts.port&&(c+=":"+a._parts.port)):c+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(c+="/");c+=a.path(!0);if(a._parts.query){for(var e="",f=0,h=a._parts.query.split("&"),n=h.length;f<n;f++){var g=(h[f]||"").split("=");e+="&"+b.decodeQuery(g[0],this._parts.escapeQuerySpace).replace(/&/g,
"%26");void 0!==g[1]&&(e+="="+b.decodeQuery(g[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}c+="?"+e.substring(1)}return c+=b.decodeQuery(a.hash(),!0)};f.absoluteTo=function(a){var c=this.clone(),e=["protocol","username","password","hostname","port"],d,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof b||(a=new b(a));if(c._parts.protocol)return c;c._parts.protocol=a._parts.protocol;if(this._parts.hostname)return c;for(d=0;f=e[d];d++)c._parts[f]=
a._parts[f];c._parts.path?(".."===c._parts.path.substring(-2)&&(c._parts.path+="/"),"/"!==c.path().charAt(0)&&(e=(e=a.directory())?e:0===a.path().indexOf("/")?"/":"",c._parts.path=(e?e+"/":"")+c._parts.path,c.normalizePath())):(c._parts.path=a._parts.path,c._parts.query||(c._parts.query=a._parts.query));c.build();return c};f.relativeTo=function(a){var c=this.clone().normalize();if(c._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new b(a)).normalize();var e=
c._parts;var d=a._parts;var f=c.path();a=a.path();if("/"!==f.charAt(0))throw Error("URI is already relative");if("/"!==a.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");e.protocol===d.protocol&&(e.protocol=null);if(e.username===d.username&&e.password===d.password&&null===e.protocol&&null===e.username&&null===e.password&&e.hostname===d.hostname&&e.port===d.port)e.hostname=null,e.port=null;else return c.build();if(f===a)return e.path="",c.build();f=b.commonPath(f,a);
if(!f)return c.build();d=d.path.substring(f.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");e.path=d+e.path.substring(f.length)||"./";return c.build()};f.equals=function(a){var c=this.clone(),e=new b(a);a={};var d;c.normalize();e.normalize();if(c.toString()===e.toString())return!0;var f=c.query();var h=e.query();c.query("");e.query("");if(c.toString()!==e.toString()||f.length!==h.length)return!1;c=b.parseQuery(f,this._parts.escapeQuerySpace);h=b.parseQuery(h,this._parts.escapeQuerySpace);for(d in c)if(y.call(c,
d)){if(!t(c[d])){if(c[d]!==h[d])return!1}else if(!w(c[d],h[d]))return!1;a[d]=!0}for(d in h)if(y.call(h,d)&&!a[d])return!1;return!0};f.preventInvalidHostname=function(a){this._parts.preventInvalidHostname=!!a;return this};f.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};f.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return b});
(function(d,k){"object"===typeof module&&module.exports?module.exports=k(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],k):d.URITemplate=k(d.URI,d)})(this,function(d,k){function g(b){if(g._cache[b])return g._cache[b];if(!(this instanceof g))return new g(b);this.expression=b;g._cache[b]=this;return this}function u(b){this.data=b;this.cache={}}var b=k&&k.URITemplate,p=Object.prototype.hasOwnProperty,B=g.prototype,t={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,
encode:"encode"},"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},
"&":{prefix:"&",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};g._cache={};g.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;g.VARIABLE_PATTERN=/^([^*:.](?:\.?[^*:.])*)((\*)|:(\d+))?$/;g.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_.]/;g.LITERAL_PATTERN=/[<>{}"`^| \\]/;g.expand=function(b,d,k){var h=t[b.operator],n=h.named?"Named":"Unnamed";b=b.variables;var v=[],q,p;for(p=0;q=b[p];p++){var w=d.get(q.name);if(0===w.type&&k&&k.strict)throw Error('Missing expansion value for variable "'+
q.name+'"');if(w.val.length){if(1<w.type&&q.maxlength)throw Error('Invalid expression: Prefix modifier not applicable to variable "'+q.name+'"');v.push(g["expand"+n](w,h,q.explode,q.explode&&h.separator||",",q.maxlength,q.name))}else w.type&&v.push("")}return v.length?h.prefix+v.join(h.separator):""};g.expandNamed=function(b,g,k,h,r,v){var n="",q=g.encode;g=g.empty_name_separator;var p=!b[q].length,f=2===b.type?"":d[q](v),t;var w=0;for(t=b.val.length;w<t;w++){if(r){var u=d[q](b.val[w][1].substring(0,
r));2===b.type&&(f=d[q](b.val[w][0].substring(0,r)))}else p?(u=d[q](b.val[w][1]),2===b.type?(f=d[q](b.val[w][0]),b[q].push([f,u])):b[q].push([void 0,u])):(u=b[q][w][1],2===b.type&&(f=b[q][w][0]));n&&(n+=h);k?n+=f+(g||u?"=":"")+u:(w||(n+=d[q](v)+(g||u?"=":"")),2===b.type&&(n+=f+","),n+=u)}return n};g.expandUnnamed=function(b,g,k,h,r){var n="",q=g.encode;g=g.empty_name_separator;var p=!b[q].length,w;var f=0;for(w=b.val.length;f<w;f++){if(r)var t=d[q](b.val[f][1].substring(0,r));else p?(t=d[q](b.val[f][1]),
b[q].push([2===b.type?d[q](b.val[f][0]):void 0,t])):t=b[q][f][1];n&&(n+=h);if(2===b.type){var u=r?d[q](b.val[f][0].substring(0,r)):b[q][f][0];n+=u;n=k?n+(g||t?"=":""):n+","}n+=t}return n};g.noConflict=function(){k.URITemplate===g&&(k.URITemplate=b);return g};B.expand=function(b,d){var k="";this.parts&&this.parts.length||this.parse();b instanceof u||(b=new u(b));for(var h=0,r=this.parts.length;h<r;h++)k+="string"===typeof this.parts[h]?this.parts[h]:g.expand(this.parts[h],b,d);return k};B.parse=function(){var b=
this.expression,d=g.EXPRESSION_PATTERN,k=g.VARIABLE_PATTERN,h=g.VARIABLE_NAME_PATTERN,r=g.LITERAL_PATTERN,v=[],p=0,u=function(b){if(b.match(r))throw Error('Invalid Literal "'+b+'"');return b};for(d.lastIndex=0;;){var A=d.exec(b);if(null===A){v.push(u(b.substring(p)));break}else v.push(u(b.substring(p,A.index))),p=A.index+A[0].length;if(!t[A[1]])throw Error('Unknown Operator "'+A[1]+'" in "'+A[0]+'"');if(!A[3])throw Error('Unclosed Expression "'+A[0]+'"');var f=A[2].split(",");for(var y=0,B=f.length;y<
B;y++){var z=f[y].match(k);if(null===z)throw Error('Invalid Variable "'+f[y]+'" in "'+A[0]+'"');if(z[1].match(h))throw Error('Invalid Variable Name "'+z[1]+'" in "'+A[0]+'"');f[y]={name:z[1],explode:!!z[3],maxlength:z[4]&&parseInt(z[4],10)}}if(!f.length)throw Error('Expression Missing Variable(s) "'+A[0]+'"');v.push({expression:A[0],operator:A[1],variables:f})}v.length||v.push(u(b));this.parts=v;return this};u.prototype.get=function(b){var d=this.data,g={type:0,val:[],encode:[],encodeReserved:[]};
if(void 0!==this.cache[b])return this.cache[b];this.cache[b]=g;d="[object Function]"===String(Object.prototype.toString.call(d))?d(b):"[object Function]"===String(Object.prototype.toString.call(d[b]))?d[b](b):d[b];if(void 0!==d&&null!==d)if("[object Array]"===String(Object.prototype.toString.call(d))){var h=0;for(b=d.length;h<b;h++)void 0!==d[h]&&null!==d[h]&&g.val.push([void 0,String(d[h])]);g.val.length&&(g.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(d))){for(h in d)p.call(d,
h)&&void 0!==d[h]&&null!==d[h]&&g.val.push([h,String(d[h])]);g.val.length&&(g.type=2)}else g.type=1,g.val.push([void 0,String(d)]);return g};d.expand=function(b,k){var n=(new g(b)).expand(k);return new d(n)};return g});
(function(d,k){"object"===typeof module&&module.exports?module.exports=k(require("jquery"),require("./URI")):"function"===typeof define&&define.amd?define(["jquery","./URI"],k):k(d.jQuery,d.URI)})(this,function(d,k){function g(b){return b.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function u(b){var d=b.nodeName.toLowerCase();if("input"!==d||"image"===b.type)return k.domAttributes[d]}function b(b){return{get:function(h){return d(h).uri()[b]()},set:function(h,g){d(h).uri()[b](g);return g}}}function p(b,
g){if(!u(b)||!g)return!1;var h=g.match(q);if(!h||!h[5]&&":"!==h[2]&&!t[h[2]])return!1;var k=d(b).uri();if(h[5])return k.is(h[5]);if(":"===h[2]){var r=h[1].toLowerCase()+":";return t[r]?t[r](k,h[4]):!1}r=h[1].toLowerCase();return B[r]?t[h[2]](k[r](),h[4],r):!1}var B={},t={"=":function(b,d){return b===d},"^=":function(b,d){return!!(b+"").match(new RegExp("^"+g(d),"i"))},"$=":function(b,d){return!!(b+"").match(new RegExp(g(d)+"$","i"))},"*=":function(b,d,k){"directory"===k&&(b+="/");return!!(b+"").match(new RegExp(g(d),
"i"))},"equals:":function(b,d){return b.equals(d)},"is:":function(b,d){return b.is(d)}};d.each("origin authority directory domain filename fragment hash host hostname href password path pathname port protocol query resource scheme search subdomain suffix tld username".split(" "),function(h,g){B[g]=!0;d.attrHooks["uri:"+g]=b(g)});var n=function(b,g){return d(b).uri().href(g).toString()};d.each(["src","href","action","uri","cite"],function(b,g){d.attrHooks[g]={set:n}});d.attrHooks.uri.get=function(b){return d(b).uri()};
d.fn.uri=function(b){var d=this.first(),g=d.get(0),h=u(g);if(!h)throw Error('Element "'+g.nodeName+'" does not have either property: href, src, action, cite');if(void 0!==b){var n=d.data("uri");if(n)return n.href(b);b instanceof k||(b=k(b||""))}else{if(b=d.data("uri"))return b;b=k(d.attr(h)||"")}b._dom_element=g;b._dom_attribute=h;b.normalize();d.data("uri",b);return b};k.prototype.build=function(b){if(this._dom_element)this._string=k.build(this._parts),this._deferred_build=!1,this._dom_element.setAttribute(this._dom_attribute,
this._string),this._dom_element[this._dom_attribute]=this._string;else if(!0===b)this._deferred_build=!0;else if(void 0===b||this._deferred_build)this._string=k.build(this._parts),this._deferred_build=!1;return this};var q=/^([a-zA-Z]+)\s*([\^\$*]?=|:)\s*(['"]?)(.+)\3|^\s*([a-zA-Z0-9]+)\s*$/;var w=d.expr.createPseudo?d.expr.createPseudo(function(b){return function(d){return p(d,b)}}):function(b,d,g){return p(b,g[3])};d.expr[":"].uri=w;return d});

/*
JSONProxy jQuery Plugin, v0.3.1
https://jsonp.afeld.me

by Aidan Feldman
MIT license
*/
/*jshint browser:true */
/*global define, jQuery, URI */
(function(factory){
  // https://github.com/umdjs/umd/blob/ce6c20e318e58cd301ee929135cf651b02392c08/jqueryPlugin.js
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      'jquery',
      // https://github.com/medialize/URI.js#requirejs
      'URIjs/URI'
    ], factory);
  } else {
    // Browser globals
    factory(jQuery, URI);
  }
}(function($, URI) {
  // Accepts all jQuery.ajax() options, plus:
  //   corsSupport {Boolean} Set to true if the URL is known to support CORS for this domain.
  //   jsonpSupport {Boolean} Set to true if the URL is known to support JSONP.
  $.jsonp = function(opts){
    var windowUrl = $.jsonp.getLocation(),
      apiUri = $.jsonp.getApiUri(opts),
      defaultDataType;

    if ($.jsonp.isCrossDomain(URI(windowUrl), apiUri)){
      var doProxy;

      // favor CORS because it can provide error messages from server to callbacks
      if ($.support.cors){
        // use the proxy if the endpoint doesn't support CORS, or if it would be an insecure request from a secure page
        if (!opts.corsSupport || $.jsonp.isInsecureRequest(apiUri)){
          // proxy CORS
          doProxy = true;
        } // else direct CORS
        defaultDataType = 'json';
      } else {
        if (!opts.jsonpSupport){
          // proxy JSONP
          doProxy = true;
        } // else direct JSONP

        defaultDataType = 'jsonp';
        opts.timeout = opts.timeout || 10000; // ensures error callbacks are fired
      }

      if (doProxy){
        opts.data = {
          url: apiUri.toString()
        };

        if (opts.dataType === 'text'){
          // 'raw' request

          // jQuery(?) doesn't accept JSONP responses with strings passed, so raw responses are wrapped with {data: "..."}.
          // Mask this to the library user by simply returning the underlying string.
          opts.dataFilter = function(json){
            return json.data;
          };
          opts.data.raw = true;
        }

        opts.url = $.jsonp.PROXY;
        opts.dataType = defaultDataType;
      }
    } else {
      defaultDataType = 'json';
    }

    opts.dataType = opts.dataType || defaultDataType;

    return $.ajax(opts);
  };

  $.extend($.jsonp, {
    PROXY: 'https://jsonp.afeld.me/',

    // make this available for easier testing
    getLocation: function(){
      return window.location;
    },

    getApiUri: function(ajaxOpts){
      var windowUrl = $.jsonp.getLocation(),
        uri = URI(ajaxOpts.url).absoluteTo(windowUrl.href),
        params;

      if (typeof ajaxOpts.data === 'string'){
        params = URI.parseQuery(ajaxOpts.data);
      } else {
        params = ajaxOpts.data || {};
      }
      uri.addSearch(params);

      return uri;
    },

    // http://stackoverflow.com/a/1084027/358804
    isCrossDomain: function(uri1, uri2){
      return (
        uri1.protocol() !== uri2.protocol() ||
        uri1.host() !== uri2.host() ||
        uri1.port() !== uri2.port()
      );
    },

    isInsecureRequest: function(uri){
      var windowUrl = this.getLocation();
      return windowUrl.protocol === 'https:' && uri.protocol() !== windowUrl.protocol;
    }
  });
}));

var wxparsing = function(res){
	var a1 = res.search("msg_title")
	var a2 = res.search("msg_desc")
	var a3 = res.search("msg_cdn_url")
	var a4 = res.search("msg_link")
	return {"title" : res.substring(a1+13,a2-12), "description" : res.substring(a2+12,a3-12), "img" : res.substring(a3+15,a4-12)}
}

var wxarticle = function(link){
/*requires

URI.js at http://medialize.github.io/URI.js/build.html
JSONP.js at https://raw.githubusercontent.com/afeld/jsonp/v0.3.1/jsonp.js

*/
$.jsonp({
    url: link, 

    success: function(data){
      console.log(wxparsing(data.responseText))
    },
    error: function(data){
      console.log(wxparsing(data.responseText))
    }
});
	
}