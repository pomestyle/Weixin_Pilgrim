define("appmsg/index.js",["biz_common/tmpl.js","cps/tpl/banner_tpl.html.js","cps/tpl/card_tpl.html.js","cps/tpl/list_tpl.html.js","biz_common/utils/string/html.js","appmsg/weapp_common.js","biz_wap/utils/device.js","biz_common/dom/class.js","appmsg/log.js","biz_wap/utils/ajax.js","biz_common/dom/attr.js","appmsg/max_age.js","biz_wap/utils/mmversion.js","appmsg/test.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/moment.js","appmsg/appmsg_report.js","biz_common/utils/url/parse.js","a/mpAdAsync.js","biz_wap/utils/wapsdk.js","page/appmsg_new/combo.css","page/appmsg_new/not_in_mm.css","appmsg/finance_communicate.js","appmsg/cdn_img_lib.js","appmsg/share.js","biz_common/log/jserr.js","biz_wap/ui/lazyload_img.js","appmsg/async.js","appmsg/copyright_report.js","appmsg/outer_link.js","appmsg/review_image.js","appmsg/product.js","appmsg/iframe.js","appmsg/qqmusic.js","appmsg/voice.js","appmsg/autoread.js","appmsg/voicemsg.js","appmsg/weproduct.js","appmsg/weapp.js","appmsg/wxtopic.js","appmsg/cdn_speed_report.js","appmsg/page_pos.js","appmsg/report_and_source.js","appmsg/report.js","appmsg/fereport_without_localstorage.js","appmsg/fereport.js","biz_wap/safe/mutation_observer_report.js","sougou/index.js"],function(e,t,o,i){
"use strict";
function n(e){
for(var t=window.location.search,o=t.substring(1,t.length).split("&"),i=0;i<o.length;i++){
var n=o[i].split("=");
if(n[0].toUpperCase()===e.toUpperCase())return n[1];
}
return"";
}
function a(){
function t(e){
if(e&&0!=e.length){
for(var t={
batch_no:x.getQuery("batch_no")||"",
bizuin:window.biz||"",
biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
total:e.length
},o=0;o<e.length;o++){
var i=e[o],n=o+1;
for(var a in i)i.hasOwnProperty(a)&&(t[a+""+n]=i[a]);
}
_({
url:"/mp/productreport?",
type:"POST",
data:t,
dataType:"json",
async:!0
});
}
}
function o(){
H&&clearTimeout(H),H=setTimeout(function(){
try{
H=null;
for(var e=0;e<K.length;e++){
var o=K[e],i=g.attr(o,"data-showed");
if("no"==i){
var n=o.getElementsByClassName("js_product_loop_content");
if(n.length>0){
n=n[0];
var a=n.getBoundingClientRect(),r=a.height||a.bottom-a.top,d=window.innerHeight||document.documentElement.clientHeight;
if(r>0&&a.top<d&&a.bottom>0){
o.setAttribute("data-showed","yes");
var s=n.getAttribute("data-pid");
s&&t([{
wxa_appid:n.getAttribute("data-wxaappid"),
pid:s,
type:3,
absolute_order:e+1,
appid:n.getAttribute("data-appid")||"",
templateid:n.getAttribute("data-templateid")||"",
relative_order:1*n.getAttribute("data-order"),
packid:n.getAttribute("data-packid")||""
}]);
}
}
}
}
}catch(p){}
},100);
}
function a(e){
try{
for(var i=window.pageYOffset||document.documentElement.scrollTop,a=window.innerHeight||document.documentElement.clientHeight,m=0;m<K.length;m+=C){
var l=K[m];
if(!(l.offsetTop>i+a+100)){
var w=g.attr(l,"data-cpsstatus");
if("hide"==w){
l.setAttribute("data-cpsstatus","loading");
for(var u=""+m,f=1,h=m+1;h<K.length&&m+C>h;h++)u=u+"%2c"+h,f++;
var v=Math.ceil(1e7*Math.random());
if(""!==n("mockcps"))var A="/mp/cps_product_info?biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&cpslist="+u+"&sn="+window.sn+"&mockcps="+n("mockcps");else var A="/mp/cps_product_info?biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&cpslist="+u+"&sn="+window.sn+"&istempurl="+(window.is_temp_url||0)+"&random="+v;
!function(e,i,n){
_({
url:i,
type:"GET",
dataType:"json",
async:!0,
error:function(){
try{
window.__addIdKeyReport("64469","18",n);
}catch(e){}
},
success:function(e){
try{
window.__addIdKeyReport("64469","16",e.product_list.length),e.product_list.length<n&&window.__addIdKeyReport("64469","18",n-e.product_list.length);
for(var i=0;i<e.product_list.length;i++){
e.product_list[i].data.cps_isready=!0,e.product_list[i].data.pid_type=e.product_list[i].data.pid_type||e.product_list[i].attr.pid_type;
var a=K[e.product_list[i].index],m=e.product_list[i].template_id;
"list"==m?a.innerHTML=r.tmpl(p,e.product_list[i].data):"banner"==m?a.innerHTML=r.tmpl(d,e.product_list[i].data):"card"==m&&(a.innerHTML=r.tmpl(s,e.product_list[i].data)),
e.product_list[i].weapp_username&&(e.product_list[i].attr.weapp_username=e.product_list[i].weapp_username),
e.product_list[i].weapp_version&&(e.product_list[i].attr.weapp_version=e.product_list[i].weapp_version),
a.setAttribute("data-cpsstatus","complete");
for(var l=a.getElementsByClassName("js_product_loop_content"),w=0;w<l.length;w++)for(var _ in e.product_list[i].attr)l[w].setAttribute("data-"+_,e.product_list[i].attr[_]);
for(var u=a.getElementsByTagName("img"),w=0;w<u.length;w++)u[w].src=g.attr(u[w],"data-src");
!function(e,o){
y.on(e,"tap",".js_product_loop_content",function(e){
try{
var i=e.delegatedTarget,n=i.getAttribute("data-wxaappid"),a=i.getAttribute("data-wxapath"),r=i.getAttribute("data-pid"),d=i.getAttribute("data-appid"),s=i.getAttribute("data-cpspackage"),p=Math.floor((new Date).getTime()/1e3)+5184e3,m=i.getAttribute("data-weapp_username"),l=i.getAttribute("data-weapp_version");
c.jumpUrl({
cps_weapp_username:m,
cps_weapp_version:l,
privateExtraData:{
cookies:"cps_package="+encodeURIComponent(s)+"; expires="+p+"; busid=mmbiz_ad_cps; domain=*; spread=*"
},
sourceAppId:d,
appid:n,
path:a,
scene:1091,
sceneNote:encodeURIComponent(location.href)+":"+encodeURIComponent(r),
beforeNonWechatWarn:function(){},
beforeJumpBackupPage:function(){},
onJsapiCallback:function(e){
"openWeApp:ok"===e.err_msg&&r&&t([{
wxa_appid:n,
pid:r,
type:4,
absolute_order:o+1,
appid:i.getAttribute("data-appid")||"",
templateid:i.getAttribute("data-templateid")||"",
relative_order:1*i.getAttribute("data-order"),
packid:i.getAttribute("data-packid")||""
}]);
}
});
}catch(e){}
return!1;
});
}(a,e.product_list[i].index);
}
o();
}catch(f){
window.__addIdKeyReport("64469","18",e.product_list.length);
}
}
});
}(u,A,f);
}
}
}
}catch(e){
console.log(e);
}
}
function z(e){
try{
P&&clearTimeout(P),P=setTimeout(function(){
a(e);
},300);
}catch(e){}
}
function R(){
var e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
e>=40&&!N?(document.title=window.title,N=!0):40>e&&N&&(document.title="",N=!1);
}
function O(e,t){
var o={
lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
},i=new Image;
i.onload=function(){
var o=i.width>0&&i.height>0;
t(e,o);
},i.onerror=function(){
t(e,!1);
},i.src="data:image/webp;base64,"+o[e];
}
function S(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e.timing){
var t=e.timing;
w("[Appmsg] dns:"+(t.domainLookupEnd-t.domainLookupStart)+"^^^ ssl:"+(0==t.secureConnectionStart?0:t.connectEnd-t.secureConnectionStart)+"^^^ tcp:"+(t.connectEnd-t.connectStart)+"^^^ request:"+(t.responseStart-t.requestStart)+"^^^ getPackageTime:"+(t.responseEnd-t.responseStart)+"^^^ domCententLoaded:"+(t.domContentLoadedEventStart-t.domLoading)+"^^^ domComplete:"+(t.domComplete-t.domLoading)+"^^^ firstViewTime:"+(real_show_page_time-t.navigationStart)+"^^^ interactiveTime:"+(page_endtime-t.navigationStart))+"^^^ ua:"+window.navigator.userAgent,
setTimeout(function(){
t.loadEventEnd&&w("[Appmsg] onload:"+(t.loadEventEnd-t.loadEventStart));
},100);
}
"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){
return this.replace(/^\s+|\s+$/g,"");
}),""==document.getElementById("js_content").innerHTML.trim()&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=24729_94_1");
var o=Math.random();
.001>o&&document.getElementById("js_read_area3")&&document.getElementById("js_read_area3").innerText&&document.getElementById("js_read_area3").innerText.indexOf("Pageview")>-1&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=24729_95_1"),
window.__wxjs_is_wkwebview&&window.__addIdKeyReport("28307",67);
}
try{
var K=document.getElementsByTagName("mpcps");
window.__addIdKeyReport("64469","15",K.length);
for(var D=0;D<K.length;D++){
K[D].setAttribute("data-cpsstatus","hide"),K[D].setAttribute("data-showed","no");
var M={
cps_isready:!1,
cps_state:"",
pid_type:"",
img_url:"",
title:"",
desc:"",
source_name:"",
source_logo_url:"",
is_ad:1
},L=g.attr(K[D],"data-templateid");
"list"==L?K[D].innerHTML=r.tmpl(p,M):"banner"==L?K[D].innerHTML=r.tmpl(d,M):"card"==L&&(K[D].innerHTML=r.tmpl(s,M));
}
}catch(W){
console.log(W);
}
var P,H=null;
o(),y.on(window,"scroll",o),a(),y.on(window,"scroll",z),window.is_new_msg&&-1!=navigator.userAgent.indexOf("MicroMessenger")&&(window.title&&(window.title=window.title.replace(/&#39;/g,"'").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")),
A.invoke("currentMpInfo",{
brandName:window.title,
brandIcon:hd_head_img.replace(/\/0$/,"/132")
},function(){}),y.on(window,"load",function(){
document.title="",N=!1,R();
}),window.onscroll=R,window.addEventListener("pageshow",R));
var U=document.getElementsByTagName("body");
if(!U||!U[0])return!1;
U=U[0],h.isInMiniProgram&&(document.getElementById("js_name")&&l.addClass(document.getElementById("js_name"),"tips_global_primary"),
document.getElementsByClassName("account_nickname_inner").length&&l.addClass(document.getElementsByClassName("account_nickname_inner")[0],"tips_global_primary"),
document.getElementById("js_share_author")&&l.addClass(document.getElementById("js_share_author"),"tips_global_primary")),
function(){
var e=document.getElementById("js_hotspot_area"),t=0===window.hotspotInfoList.length,o=function i(o){
if(!t){
var n=(window.innerHeight||document.documentElement.clientHeight)+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop);
e.offsetTop<n?(t=!0,y.off(window,"scroll",i),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=59977_15_1",
j.hotspotReport({
hotspotjson:JSON.stringify({
hotspotinfolist:window.hotspotInfoList
})
})):"function"==typeof o&&o();
}
};
o(function(){
y.on(window,"scroll",o);
});
}();
var V=/^http(s)?:\/\/mp\.weixin\.qq\.com\//g;
try{
if(top!=window&&(!top||top&&location.href&&V.test(location.href))&&!window.isSg)throw new Error("in iframe");
}catch(W){
var Q="",F=new Image;
F.src=("http://mp.weixin.qq.com/mp/jsreport?key=4&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key4]"+Q+"&r="+Math.random()).substr(0,1024);
}
if(window.isInWeixinApp()&&/#rd$/.test(location.href)&&!window.isWeixinCached&&!window.__second_open__){
var G=-1!=location.href.indexOf("?")?"&":"?";
location.replace(location.href.replace(/#rd$/,G+"rd2werd=1#wechat_redirect"));
}
var J=e("biz_common/utils/url/parse.js");
e("appmsg/cdn_img_lib.js"),window.page_endtime=+new Date;
{
var Y=!h.isWp&&-1==navigator.userAgent.indexOf("MicroMessenger");
-1!=navigator.userAgent.indexOf("WindowsWechat");
}
e("appmsg/share.js");
var $=b(1e3*parseInt(window.modify_time)),X=$.format("YYYY-MM-DD"),Z=document.getElementById("js_modify_time");
if(Z&&(Z.innerHTML=X),window.isSg||"mp.weixin.qq.com"==location.host){
var et=e("biz_common/log/jserr.js");
et({
key:0,
reporturl:"http://mp.weixin.qq.com/mp/jsreport?1=1",
replaceStr:/http(s)?:(.*?)js\//g
});
}
window.logs.webplog={
lossy:0,
lossless:0,
alpha:0,
animation:0,
total:0
};
var tt=-1!=navigator.userAgent.indexOf("TBS/"),ot=function(e,t){
O(e,function(e,o){
if(window.logs.webplog[e]=o?1:0,window.logs.webplog.total++,4==window.logs.webplog.total){
var i=window.logs.webplog,n=Math.random();
tt&&1>=n&&(i.lossy=i.lossless=i.alpha=1,window.logs.webplog=i);
var a=i.lossy&i.lossless&i.alpha;
t(!!a);
}
});
},it=function(e){
for(var t=document.getElementsByTagName("img"),o=!1,i=!1,n=0,a=t.length;a>n;n++){
var r=t[n].getAttribute("data-src");
r&&r.canHevc()&&(o=!0),r&&r.isGif()&&(i=!0);
}
var d=h.gtVersion("6.5.13",!0)&&i,s=h.gtVersion("6.8.0",!0)&&o,p=!1;
try{
{
top.window.document;
}
}catch(c){
p=!0;
}
(B||navigator.userAgent.indexOf("Br_trunk")>-1)&&h.isIOS&&(d||s)&&!p?(console.info("[HEVC代理] 当前版本可以启用HEVC代理"),
A.invoke("imageProxyInit",{},function(t){
t.err_msg.indexOf(":ok")>-1?(T=t.serverUrl,window.__addIdKeyReport("28307",117)):t.err_msg.indexOf(":fail")>-1&&window.__addIdKeyReport("28307",118),
e();
})):e();
},nt=function(e){
ot("lossy",e),ot("lossless",e),ot("alpha",e),ot("animation",e);
};
window.webp=!1,it(function(){
nt(function(t){
function o(e){
e.width<40||e.height<40||-1==e.className.indexOf("img_loading")&&(e.className+=" img_loading");
}
function i(e){
if(!(e.width<40||e.height<40)){
var t=e.src;
if(e.className=e.className.replace("img_loading",""),-1==e.className.indexOf("img_loadederror")){
e.className+=" img_loadederror",e.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
window.__addIdKeyReport("28307",51);
var i=function(){
window.__addIdKeyReport("28307",66),n(e),o(e);
var i=e.__retryload;
return i=0,t=t.https2http(),e.__retryload=i,e.src=J.addParam(t,"retryload",i,!0),
!1;
};
y.on(e,"click",i);
}
}
}
function n(e){
e.className=e.className.replace("img_loading",""),e.className=e.className.replace("img_loadederror","");
}
window.webp=t,t&&window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem("webp","1"),
window.logs.img={
download:{},
read:{},
load:{}
};
var a=document.getElementById("js_cover");
if(a){
var r=a.getAttribute("data-src");
r&&(r.isCDN()&&(r=r.imgChange640(),t&&(r=J.addParam(r,"tp","webp",!0)),r=J.addParam(r,"wxfrom","5",!0),
is_https_res||q?r=r.http2https():("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(r=r.https2http())),
setTimeout(function(){
a.onload=function(){
u(a,"height","auto","important"),u(a,"visibility","visible","important");
},a.setAttribute("src",r);
},0),window.logs.img.read[r]=!0,window.logs.img.load[r]=!0,a.removeAttribute("data-src"));
}
var d=e("biz_wap/ui/lazyload_img.js"),s=1;
window.logs.outer_pic=0;
for(var p=document.getElementsByTagName("img"),c=0,m=p.length;m>c;c++){
{
var _=p[c].getAttribute("data-src");
p[c].getAttribute("src");
}
_&&_.isGif()&&p[c].className.indexOf("__bg_gif")<0&&(p[c].className+=" __bg_gif");
}
for(var g=document.getElementsByClassName("__bg_gif"),c=0,m=g.length;m>c;++c)g[c].setAttribute("data-order",c);
var f=function(e){
try{
var t=e,o=t.getAttribute("data-src");
if(!/^https?\:\/\/mmbiz\.qpic\.cn/.test(o))return;
var i=t.parentNode,n=!1;
l.hasClass(i,"js_jump_icon")&&(n=!0);
for(var a=!1;i.tagName&&"body"!=i.tagName.toLowerCase();){
if("a"==i.tagName.toLowerCase()){
var r=i.getAttribute("href")||"";
null!=r.match(/^http/)&&(a=!0);
break;
}
i=i.parentNode;
}
if(n&&!a){
var d=t.parentNode,s=d.parentNode;
if(s){
for(var p=document.createDocumentFragment();d.firstChild;)p.appendChild(d.firstChild);
s.insertBefore(p,d),s.removeChild(d);
}
}else if(!n&&a){
var c=document.createElement("span"),m=getComputedStyle(t);
"static"!=m.positon&&(c.style.position=m.positon),c.style.left=m.left,c.style.top=m.top,
c.style.right=m.right,c.style.bottom=m.bottom,c.style.margin=m.margin,l.addClass(c,"js_jump_icon"),
l.addClass(c,"h5_image_link"),t.style.position="static",t.style.margin="0px",t.parentNode.insertBefore(c,t),
c.appendChild(t),window.__addIdKeyReport("111535",0);
}
}catch(w){}
},v=function z(e){
try{
var t=e.childNodes,o=getComputedStyle(e);
(o.backgroundImage.match(/https\:\/\/mmbiz\.qpic\.cn/)||o.backgroundImage.match(/http\:\/\/mmbiz\.qpic\.cn/))&&window.__addIdKeyReport("111535",2);
for(var i=0;i<t.length;i++)"a"!=t[i].tagName.toLowerCase()&&z(t[i]);
}catch(n){}
};
try{
for(var A=document.getElementsByTagName("a"),b=0;b<A.length;b++){
var j=A.item(b),x=j.getAttribute("href")||"";
null!=x.match(/^http/)&&v(j);
}
}catch(I){}
var k=!1;
new d({
attrKey:"data-src",
imgOccupied:!0,
crossOrigin:!0,
lazyloadHeightWhenWifi:function(){
var e,t=1,o=1;
e=window.svr_time?new Date(1e3*window.svr_time):new Date;
var i=e.getHours();
return i>=20&&23>i&&(t=.5,o=0),{
bottom:t,
top:o
};
},
inImgRead:function(e){
e&&(window.logs.img.read[e]=!0);
},
changeSrc:function(e,t){
if(!t)return"";
var o=t;
if(t.isCDN()){
o=o.imgChange640();
var i,n=window.navigator.userAgent,a=/TBS\/([\d\.]+)/i,r=n.match(a);
r&&r[1]&&(i=parseInt(r[1]));
var d,s=/XWEB\/([\d\.]+)/i,p=n.match(s);
p&&p[1]&&(d=parseInt(p[1]));
{
var c=1e3,m=window.user_uin||0,l=0!==m&&Math.floor(m/100)%1e3<c,_=(i>=43305||d>=16)&&o.isGif();
d>=359&&o.canHevc()&&h.gtVersion("6.8.0",!0);
}
l&&44206!=i&&_?(o=J.addParam(o,"tp","wxpic",!0),window.__addIdKeyReport("28307",91)):window.webp&&(o=J.addParam(o,"tp","webp",!0),
window.__addIdKeyReport("28307",84)),o=J.addParam(o,"wxfrom","5",!0),is_https_res||q?(o=o.http2https(),
window.__addIdKeyReport("28307",77)):("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(o=o.https2http(),
window.__addIdKeyReport("28307",70));
}else try{
var a=new RegExp("^http(s)?://((mmbiz.qpic.cn/.*)|(m.qpic.cn/.*)|(mmsns.qpic.cn/.*)|(shp.qpic.cn/.*)|(wx.qlogo.cn/.*)|(mmbiz.qlogo.cn/.*)|((a|b)[0-9]*.photo.store.qq.com/.*)|(mp.weixin.qq.com/.*)|(res.wx.qq.com/.*))");
a.test(t)||(window.__addIdKeyReport("28307",9),window.logs.outer_pic++);
}catch(g){}
var u=/^http\:\/\/(a|b)(\d)+\.photo\.store\.qq\.com/g;
o=o.replace(u,"http://m.qpic.cn"),/^http(s)?:\/\/m\.qpic\.cn([\/?].*)*$/i.test(o)&&!window.webp&&(o=J.addParam(o,"t","",!0)),
o=J.addParam(o,"wx_lazy","1",!0);
var f=h.gtVersion("6.5.13",!0)&&o.isGif(),v=h.gtVersion("6.8.0",!0)&&o.canHevc();
return T&&(f||v)&&(window.__addIdKeyReport("28307",106),o=J.addParam(o,"tp","wxpic",!0),
o=T+"hevc?url="+encodeURIComponent(o)+"&type="+o.getOriginImgType()),"anonymous"==e.crossOrigin&&(o=J.addParam(o,"wx_co","1",!0)),
window.logs.img.load[o]=!0,w("[Appmsg] image_load_event_change_src. originsrc:"+t+"  ^^^ newsrc : "+o),
e.start_load_time=+new Date,o;
},
onerror:function(e,t){
var o=t?t.__retryload||0:0;
if(1==o&&i(t),e&&!(o>s)){
if(!e.isCDN()){
if(!T)return;
if(-1==e.indexOf(T))return;
}
var n=0==e.indexOf("https://")?7:0;
if(window.__addIdKeyReport("28307",72+n),window.__addIdKeyReport("28307",75+1*o+n),
e.isWxpic()?(window.__addIdKeyReport("28307",93),window.__addIdKeyReport("28307",96+1*o)):e.isWebp()&&(window.__addIdKeyReport("28307",86),
window.__addIdKeyReport("28307",89+1*o)),T&&e.indexOf(T)>-1&&window.__addIdKeyReport("28307",108),
s>o){
if(o++,t.__retryload=o,1==o&&e.indexOf("http://")>-1?(e=e.http2https(),window.__addIdKeyReport("28307",60),
window.__addIdKeyReport("28307",77)):1==o&&e.indexOf("https://")>-1&&(window.__addIdKeyReport("28307",61),
window.__addIdKeyReport("28307",77)),T&&e.indexOf(T)>-1){
var a=e.split("hevc?url=")[1];
a=a.split("&type")[0],a=decodeURIComponent(a),a=a.replace("tp=wxpic",""),e=a.https2http();
}
t.start_load_time=+new Date,t.src=J.addParam(e,"retryload",o,!0);
}
window.__has_imgfailed||(window.__has_imgfailed=!0,window.__addIdKeyReport("28307",65)),
w("[Appmsg] image_load_event_on_error. src:"+e),t.setAttribute("data-fail",1);
try{
if("[object Array]"==Object.prototype.toString.call(t.lazyLoadOnerror))for(var r=0,d=t.lazyLoadOnerror.length;d>r;r++)"function"==typeof t.lazyLoadOnerror[r]&&t.lazyLoadOnerror[r].call(t);
}catch(p){}
var c=10;
/tp\=webp/.test(e)&&(c=11);
var m=new Image;
m.src="http://mp.weixin.qq.com/mp/jsreport?key="+c+"&content="+(encodeURIComponent(e)+"["+uin+"]")+"&r="+Math.random();
}
},
onload:function(e,t){
if(!window.__second_open__&&!k){
var o=window.performance||window.msPerformance||window.webkitPerformance;
if(!o||!o.timing)return;
var i=window.location.protocol;
E.saveSpeeds({
uin:uin,
pid:"https:"==i?462:417,
speeds:{
sid:35,
time:Date.now()-window.performance.timing.navigationStart
}
}),E.send(),k=!0;
}
n(t),t.gray&&!t.loadGif&&((t.width||t.naturalWidth)<120||(t.height||t.naturalHeight)<120?t.autoTap&&t.autoTap():t.span&&t.span.children&&t.span.children.item(0)&&(t.span.children.item(0).style.display=""));
var a=t?t.__retryload||0:0;
if(!(a>s)){
w("[Appmsg] image_load_event_onload_image. src:"+e+"  ^^^  retryloadtimes: "+a),
t.setAttribute("data-fail",0),f(t);
try{
if("[object Array]"==Object.prototype.toString.call(t.lazyLoadOnload))for(var r=0,d=t.lazyLoadOnload.length;d>r;r++)"function"==typeof t.lazyLoadOnload[r]&&t.lazyLoadOnload[r].call(t);
}catch(p){}
var c=0==e.indexOf("https://")?7:0;
window.__addIdKeyReport("28307",71+c),window.__addIdKeyReport("28307",73+1*a+c),
e.isWxpic()?(window.__addIdKeyReport("28307",92),window.__addIdKeyReport("28307",94+1*a)):e.isWebp()&&(window.__addIdKeyReport("28307",85),
window.__addIdKeyReport("28307",87+1*a)),T&&e.indexOf(T)>-1&&window.__addIdKeyReport("28307",107),
window.__has_imgsucceed||(window.__has_imgsucceed=!0,window.__addIdKeyReport("28307",64)),
1==a&&e.indexOf("http://")>-1&&window.__addIdKeyReport("28307",50),1==a&&e.indexOf("https://")>-1&&window.__addIdKeyReport("28307",52);
var m=Math.random(),l=+new Date-t.start_load_time;
l&&0==e.indexOf("https://")&&.5>m?(window.__addIdKeyReport("27822",121,l),window.__addIdKeyReport("27822",122)):l&&5e-4>m&&(window.__addIdKeyReport("27822",124,l),
window.__addIdKeyReport("27822",125)),"none"!=getComputedStyle(t).filter&&(t.style.transform="translateZ(0)",
t.style.webkitTransform="translateZ(0)");
}
},
detect:function(e){
if(e&&e.time&&e.loadList){
var t=e.time,o=e.loadList;
window.logs.img.download[t]=o;
}
},
container:document.getElementById("page-content")
});
});
}),e("appmsg/async.js"),!window.isSg;
var at=e("appmsg/copyright_report.js");
!function(){
var e=document.getElementById("profileBt"),t=document.getElementById("copyright_info"),o=[];
if(h.isInMiniProgram&&t&&l.addClass(t,"disabled"),t&&(t.style.visibility="visible"),
e){
var i="57";
"26"==window.source&&(i="95"),"28"==window.source&&(i="96"),"29"==window.source&&(i="39"),
"15"==window.source&&(i="121"),o.push({
dom:e,
username:user_name_new||user_name,
profileReportInfo:window.profileReportInfo||"",
scene:i
});
}
t&&source_encode_biz&&o.push({
dom:t,
source_encode_biz:source_encode_biz,
scene:"110"
});
var n=document.getElementById("js_share_headimg");
n&&o.push({
dom:n,
username:source_username,
scene:0
});
var a=document.getElementById("js_share_author");
a&&o.push({
dom:a,
username:source_username,
scene:"0"
});
for(var r=0,d=o.length;d>r;r++)!function(e){
y.on(e.dom,"click",function(){
if("copyright_info"==e.dom.id&&source_encode_biz){
if(h.isInMiniProgram)return!1;
at.card_click_report({
scene:"0"
});
var t="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene="+e.scene+"#wechat_redirect";
-1!=navigator.userAgent.indexOf("WindowsWechat")?location.href=t:A.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
});
}else{
if(w("[Appmsg] profile_click_before_loadprofile: username:"+e.username+", scene:"+e.scene),
j.profileReport({
hotspotjson:JSON.stringify({
hotspotinfolist:window.hotspotInfoList
})
}),profileReportInfo){
var o=String(profileReportInfo).split("_");
3==o.length&&_({
url:"/mp/ad_biz_info?action=report&__biz="+window.biz+"&report_type=2&aid="+o[1]+"&tid="+o[2],
type:"GET",
dataType:"json",
async:!0,
success:function(){}
});
}
h.isInMiniProgram||(1==isprofileblock?A.invoke("openUrlWithExtraWebview",{
url:"https://mp.weixin.qq.com/mp/profileblock?__biz="+window.biz+"#wechat_redirect",
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href="https://mp.weixin.qq.com/mp/profileblock?__biz="+window.biz+"#wechat_redirect");
}):A.invoke("profile",{
username:e.username,
profileReportInfo:e.profileReportInfo||"",
scene:e.scene+""
},function(t){
window.__addIdKeyReport("28307","1"),w("[Appmsg] profile_click_after_loadprofile: username:"+e.username+", scene:"+e.scene+", profileReportInfo:"+e.profileReportInfo+", res.err_msg:"+t.err_msg);
}));
}
return!1;
}),h.isWp&&e.dom.setAttribute("href","weixin://profile/"+e.username);
}(o[r]);
}(),function(){
h.isIOS&&location.href.match(/fontScale=\d+/)&&A.on("menu:setfont",function(e){
e.fontScale<=0&&(e.fontScale=100),document.getElementsByTagName("html").item(0).style.webkitTextSizeAdjust=e.fontScale+"%",
l.addClass(document.getElementsByTagName("body").item(0),"appmsg_skin_fontscale_"+e.fontSize);
});
}(),function(){
function e(){
if("hidden"in document)return"hidden";
for(var e=["webkit","moz","ms","o"],t=0;t<e.length;t++)return e[t]+"Hidden"in document,
e[t]+"Hidden";
return null;
}
function t(){
var t=e();
return t?document[t]:!1;
}
function o(){
if(t())for(var e=0;e<window.parent.originalVideoAdFrames.length;e++)window.parent.originalVideoAdFrames[e].contentWindow.postMessage({
action:"pauseAd",
value:""
},"*");else window.originalVideoAdCurrentFrame&&window.originalVideoAdCurrentFrame.contentWindow.postMessage({
action:"playAd"
},"*");
}
document.webkitVisibilityState?document.addEventListener("webkitvisibilitychange",o,!1):document.msVisibilityState?document.addEventListener("msvisibilitychange",o,!1):document.visibilityState&&document.addEventListener("visibilitychange",o,!1);
}();
try{
var rt=document.getElementById("js_author_name");
if(rt){
var dt="";
y.on(rt,"click",function(){
return l.hasClass(rt,"rich_media_meta_link")?window.is_temp_url?(i("预览状态下不能操作"),
!1):rt.getAttribute("data-rewardsn")?1!=rt.getAttribute("data-canreward")?!1:(dt="https://mp.weixin.qq.com/mp/author?action=show&author_id="+author_id+"&rewardsn="+rt.getAttribute("data-rewardsn")+"&timestamp="+rt.getAttribute("data-timestamp")+"&__biz="+window.biz+"&appmsgid="+window.appmsgid+"&idx="+window.idx+"&scene=142&rscene=129#wechat_redirect",
h.isInMiniProgram?!1:(-1!=navigator.userAgent.indexOf("MicroMessenger")&&(h.isIOS||h.isAndroid||h.isWp)?(window.__addIdKeyReport("110809","1"),
A.invoke("openUrlWithExtraWebview",{
url:dt,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=dt);
})):location.href=dt,!1)):!1:!1;
});
}
}catch(W){}
var st=e("appmsg/outer_link.js");
if(new st({
container:document.getElementById("js_content"),
changeHref:function(e,t){
if(!e||0!=e.indexOf("http://mp.weixin.qq.com/")&&0!=e.indexOf("https://mp.weixin.qq.com/")){
if(18==ban_scene)return"/mp/ban?action=check&__biz="+biz+"&mid="+mid+"&idx="+idx+"&scene="+ban_scene+"#wechat_redirect";
if(0!=e.indexOf("http://mp.weixinbridge.com/mp/wapredirect"))return"http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e)+"&action=appmsg_redirect&uin="+uin+"&biz="+biz+"&mid="+mid+"&idx="+idx+"&type="+t+"&scene=0";
}else{
e=e.replace(/#rd\s*$/,""),e=e.replace(/#wechat_redirect\s*$/,""),e=e.replace(/[\?&]scene=21/,"");
var o="&";
-1==e.indexOf("?")&&(o="?"),e+=o+"scene=21#wechat_redirect";
}
return e;
}
}),!Y){
var pt=e("appmsg/review_image.js"),ct=document.getElementById("js_cover"),mt=[];
ct&&mt.push(ct),new pt({
container:document.getElementById("js_content"),
is_https_res:is_https_res,
imgs:mt
});
}
e("appmsg/product.js"),function(){
try{
var e=document.getElementById("js_content");
if(!e||!e.querySelectorAll)return;
for(var t=e.querySelectorAll("*"),o="rich_pages,blockquote_info,blockquote_biz,blockquote_other,blockquote_article,js_jump_icon,h5_image_link,js_banner_container,js_list_container,js_cover,js_tx_video_container,js_product_err_container,js_product_loop_content,js_product_container,img_loading,list-paddingleft-1,list-paddingleft-2,list-paddingleft-3,selectTdClass,noBorderTable,ue-table-interlace-color-single,ue-table-interlace-color-double,__bg_gif,weapp_text_link,weapp_image_link,js_img_loading,wx_video_context,db,wx_video_thumb_primary,wx_video_play_btn,wx_video_mask".split(","),i=[new RegExp("^cps_inner"),new RegExp("^bizsvr_"),new RegExp("^code-snippet")],n=function(e){
var t=e.getAttribute("class");
if(t){
for(var n=t.split(/\s+/),a=[],r=0,d=n.length;d>r;++r){
var s=n[r];
if(s&&-1!=o.indexOf(s))a.push(s);else for(var p=0,c=i.length;c>p;p++)if(i[p].test(s)){
a.push(s);
break;
}
}
e.setAttribute("class",a.join(" "));
}
},a=0,r=t.length;r>a;++a){
var d=t[a];
d&&d.tagName&&"iframe"!=d.tagName.toLowerCase()&&n(d);
}
}catch(s){}
}(),function(){
window.originalVideoAdFrames=[],window.originalVideoAdCurrentFrame=null,window.originalVideoAdFramesAdData=[],
window.originalVideoAdFramesUnsetList=[],window.addEventListener("message",function(e){
var t="",o=document.getElementsByTagName("iframe");
if(e.data&&"originalVideoAdNeedData"==e.data.action&&e.data.vid)if(0!=window.originalVideoAdFramesAdData.length){
window.originalVideoAdFramesAdData&&window.originalVideoAdFramesAdData[e.data.vid]&&(t=window.originalVideoAdFramesAdData[e.data.vid]);
for(var i=0;i<o.length;i++)if(o[i].dataset&&o[i].dataset.mpvid==e.data.vid){
o[i].contentWindow.postMessage({
action:"receiveOriginalVideoData",
vid:e.data.vid,
adData:t
},"*");
break;
}
}else console.log(e.data.vid," has no ad data yet"),window.originalVideoAdFramesUnsetList.push(e.data.vid);
});
}(),window.fromWeixinCached||e("appmsg/iframe.js"),I.getAdData(window.reportVid),
e("appmsg/qqmusic.js"),e("appmsg/voice.js"),window.__appmsgCgiData&&1==window.__appmsgCgiData.show_msg_voice&&e("appmsg/autoread.js"),
"1"==window.show_msg_voice&&(console.log("load voicemsg"),e("appmsg/voicemsg.js")),
!window.__appmsgCgiData||1!=window.__appmsgCgiData.wxa_product&&1!=window.__appmsgCgiData.wxa_cps||e("appmsg/weproduct.js"),
e("appmsg/weapp.js"),e("appmsg/wxtopic.js"),e("appmsg/cdn_speed_report.js");
var lt=e("appmsg/page_pos.js");
lt.init({
hasSpAd:!0
}),setTimeout(function(){
window.article_improve_combo_css;
},0),setTimeout(function(){
y.tap(document.getElementById("copyright_logo"),function(){
var e="http://kf.qq.com/touch/sappfaq/150211YfyMVj150326iquI3e.html";
window.__second_open__?A.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1==t.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e;
}),f(),v(),y.tap(document.getElementById("js_hotspot_area"),function(e){
if(l.hasClass(e.target,"js_hotspot")){
var t=e.target.dataset.id;
if(!t)return;
t="https://search.weixin.qq.com/cgi-bin/searchweb/clientjump?scene=306&tag=mp_topic&topic_id="+t+"#wechat_redirect",
-1!=navigator.userAgent.indexOf("MicroMessenger")&&(h.isIOS||h.isAndroid||h.isWp)?A.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
}):location.href=t;
}
}),e("appmsg/report_and_source.js"),function(){
if(Y){
document.title=window.title,l.addClass(U,"not_in_mm");
var e=document.getElementById("js_pc_qr_code_img");
if(e){
var t=10000004,o=document.referrer;
if(0==o.indexOf("http://weixin.sogou.com")?t=10000001:0==o.indexOf("https://wx.qq.com")&&(t=10000003),
window.isSg)e.setAttribute("src",sg_qr_code.htmlDecode());else{
e.setAttribute("src","/mp/qrcode?scene="+t+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var i=new Image;
i.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+t+"&r="+Math.random();
}
document.getElementById("js_pc_qr_code").style.display="block";
}
var n=document.getElementById("js_profile_qrcode"),a=document.getElementById("js_profile_arrow_wrp"),r=document.getElementById("profileBt");
if(n&&r&&a){
var d=function(){
var e=10000005,t=document.referrer;
0==t.indexOf("http://weixin.sogou.com")?e=10000006:0==t.indexOf("https://wx.qq.com")&&(e=10000007);
var o=document.getElementById("js_profile_qrcode_img");
if(o)if(window.isSg)o.setAttribute("src",sg_qr_code.htmlDecode());else{
o.setAttribute("src","/mp/qrcode?scene="+e+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var i=new Image;
i.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+e+"&r="+Math.random();
}
return n.style.display="block",a.style.left=r.offsetWidth/2-8+"px",!1;
};
y.on(r,"click",d),y.on(n,"click",d),y.on(document,"click",function(e){
var t=e.target||e.srcElement;
t!=r&&t!=n&&(n.style.display="none");
});
}
}else{
var s=document.getElementById("js_report_article3");
!!s&&(s.style.display="");
}
}(),function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=document.getElementById("img-content");
if(e&&t&&t.getBoundingClientRect){
var o=t.getBoundingClientRect().height;
window.scrollTo(0,o);
}
}(),e("appmsg/report.js");
for(var t=document.getElementsByTagName("map"),o=0,i=t.length;i>o;++o)t[o].parentNode.removeChild(t[o]);
if(at.card_pv_report(),Math.random()<.01)try{
var n="https://js.aq.qq.com/js/aq_common.js",a=document.createElement("script");
a.src=n;
var r=document.getElementsByTagName("head")[0];
r.appendChild(a);
}catch(d){}
var s=document.getElementById("js_close_temp");
y.on(s,"click",function(){
s.parentNode.parentNode.removeChild(s.parentNode),l.removeClass(document.getElementById("js_article"),"preview_appmsg");
});
},1e3),function(){
if(m.os.ios&&"onorientationchange"in window){
var e=[],t="onorientationchange"in window?"orientationchange":"resize",o=function(){
return 90===Math.abs(window.orientation)?1:2;
};
e.push({
ori:o(),
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
var i=(new Date).getHours();
y.on(window,t,function(){
var t=e.length-2,n=o();
if(k=+new Date,t>=0){
{
var a=e[t];
a.ori;
}
e[e.length-1].istouchmove||(i>=11&&17>=i&&window.__report(63),setTimeout(function(){
window.scrollTo(0,a.scroll);
},100));
}
e.push({
ori:n,
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
});
var n=document.getElementById("js_hotspot_area"),a=0===n.children.length;
y.on(window,"scroll",function(){
var t=e.length-1,i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,r=+new Date;
if(-1!=k){
if(console.log("[横屏滚动检测]",r-k),500>r-k)return void(k=-1);
}else k=-1;
if(e[t].ori==o()&&(e[t].scroll=i,e[t].istouchmove=!0,!a)){
var d=(window.innerHeight||document.documentElement.clientHeight)+i;
n.offsetTop<d&&(a=!0,(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=59977_15_1");
}
});
}
}(),w("[Appmsg] href:"+location.href+"^^^ ua:"+window.navigator.userAgent),window.addEventListener?window.addEventListener("load",S,!1):window.attachEvent&&window.attachEvent("onload",S),
e(window.moon&&moon.clearSample?"appmsg/fereport_without_localstorage.js":"appmsg/fereport.js"),
function(){
window.addEventListener&&document.getElementsByTagName("body")[0].addEventListener("copy",function(){
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_18_1",
h.isIOS&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_19_1"),
h.isAndroid&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_20_1");
},!1);
}(),function(){
window.__observer&&window.__observer_data&&e("biz_wap/safe/mutation_observer_report.js");
}(),function(){
var e=document.getElementById("publish_time");
e&&y.on(e,"click",function(){
e.innerText=window.publish_time;
});
}(),"undefined"!=typeof isSg&&e("sougou/index.js"),setTimeout(function(){
for(var e=function(){
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_49_1&lc=1&log0=[28307_49_appmsg_fe_filter]"+encodeURIComponent(location.href);
},t=(window.appmsg_fe_filter||"").split(","),o=function(t,o){
try{
if(!t)return;
if(t.querySelectorAll){
var i=t.querySelectorAll("*["+o+"]");
if(i&&i.length>0){
e();
for(var n=0;n<i.length;++n)i[n]&&i[n].removeAttribute&&i[n].removeAttribute(o);
}
return;
}
var a=t.childNodes;
if(t.hasAttribute&&t.hasAttribute(o)&&e(),t.removeAttribute&&t.removeAttribute(o),
a&&a.length)for(var n=0;n<a.length;++n)filterContenteditable(a[n]);
}catch(r){}
},i=document.getElementById("js_content"),n=0;n<t.length;++n)t[n]&&o(i,t[n]);
},0),setTimeout(function(){
var e=999,t=636,o="http://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0",i=(new Date).getHours();
if(!(11>i||i>16||Math.random()<.99)){
var n=new Image;
n.onload=function(){
var o=n.naturalWidth||n.width,i=n.naturalHeight||n.height;
(o!=e||i!=t)&&window.__addIdKeyReport("28307","wifi"===window.networkType?120:123),
window.__addIdKeyReport("28307","wifi"===window.networkType?121:124);
},n.src=o;
var a=new Image;
a.onload=function(){
var o=a.naturalWidth||a.width,i=a.naturalHeight||a.height;
(o!=e||i!=t)&&window.__addIdKeyReport("28307",126),window.__addIdKeyReport("28307",127);
},a.src="https://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0";
}
},3e3);
var wt=Math.random();
if(2e-4>wt)try{
for(var _t=document.getElementsByTagName("img"),gt=window.screen.height,ut=window.screen.width,ft=0,ht=window.devicePixelRatio,ft="",D=0,vt=_t.length;vt>D;D++){
var yt=_t[D].getAttribute("data-src");
if(yt){
var At=_t[D].getBoundingClientRect();
ft+=ut+"|"+gt+"|"+At.left.toFixed(2)+"|"+(ut-At.right).toFixed(2)+"|"+At.width.toFixed(2)+"|"+ht.toFixed(2)+"|"+yt+";";
}
}
_({
url:"/mp/wapreport?action=img_display_report",
data:{
key:ft
},
type:"POST",
dataType:"json",
async:!0
});
}catch(W){}
}
var r=e("biz_common/tmpl.js"),d=e("cps/tpl/banner_tpl.html.js"),s=e("cps/tpl/card_tpl.html.js"),p=e("cps/tpl/list_tpl.html.js");
e("biz_common/utils/string/html.js");
var c=e("appmsg/weapp_common.js"),m=e("biz_wap/utils/device.js"),l=e("biz_common/dom/class.js"),w=e("appmsg/log.js"),_=e("biz_wap/utils/ajax.js"),g=e("biz_common/dom/attr.js"),u=g.setProperty,f=e("appmsg/max_age.js"),h=e("biz_wap/utils/mmversion.js"),v=e("appmsg/test.js"),y=e("biz_common/dom/event.js"),A=e("biz_wap/jsapi/core.js"),b=e("biz_common/moment.js"),j=e("appmsg/appmsg_report.js"),x=e("biz_common/utils/url/parse.js"),I=e("a/mpAdAsync.js"),E=e("biz_wap/utils/wapsdk.js"),k=-1;
window.new_appmsg&&(e("page/appmsg_new/combo.css"),e("page/appmsg_new/not_in_mm.css")),
e("appmsg/finance_communicate.js");
var z=window.user_uin||0,R=Math.floor(z/100)%1e3,q=0!==z&&1001>R,B=!0,T="",C=5;
if(window.logs.pagetime.jsapi_ready_time=+new Date,window.logs.idkeys={},console.info("[图文信息] 三元组:",window.biz,window.mid,window.idx),
console.info("[用户信息] 设备信息: 是否安卓",m.os.android,"是否IOS",m.os.ios,"是否秒开场景",window.__second_open__,"系统版本",m.os.version,"用户uin",window.user_uin),
w("[Appmsg] start run index.js init"),function(){
var e=(new Date).getHours(),t=function(e,t){
t=t||"",window.isSg?(t=["uin:sougou","resp:"+t].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random()+"&from=sougou"):(t=["uin:"+window.user_uin,"resp:"+t].join("|"),
(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random());
},o=function(e,t,o){
var i=e+"_"+t;
o=o||1,window.logs.idkeys[i]||(window.logs.idkeys[i]={
val:0
}),window.logs.idkeys[i].val+=o;
},i=e>=11&&17>=e&&Math.random()<1,n=function(e,o){
i&&t(e,o);
};
window.__report=t,window.__commonVideoReport=n,window.__addIdKeyReport=o;
}(),a(),!window.__second_open__){
var O=window.performance||window.msPerformance||window.webkitPerformance;
if(!O||!O.timing)return;
var S=window.location.protocol;
E.saveSpeeds({
uin:uin,
pid:"https:"==S?462:417,
speeds:{
sid:34,
time:Date.now()-window.performance.timing.navigationStart
}
}),E.send();
}
var N=!1;
});