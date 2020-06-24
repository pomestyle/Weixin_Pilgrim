define("appmsg/appmsgext.js",["appmsg/log.js","biz_wap/utils/ajax.js","rt/appmsg/getappmsgext.rt.js"],function(e){
"use strict";
function t(e){
function t(e){
for(var t=window.location.href,s=t.indexOf("?"),i=t.substr(s+1),n=i.split("&"),a=0;a<n.length;a++){
var _=n[a].split("=");
if(_[0].toUpperCase()==e.toUpperCase())return _[1];
}
return"";
}
var a={
biz:"",
appmsg_type:"",
mid:"",
sn:"",
idx:"",
scene:"",
title:"",
ct:"",
abtest_cookie:"",
devicetype:"",
version:"",
is_need_ticket:0,
is_need_ad:0,
comment_id:"",
is_need_reward:0,
both_ad:0,
reward_uin_count:0,
send_time:"",
msg_daily_idx:"",
is_original:0,
is_only_read:0,
req_id:"",
pass_ticket:"",
is_temp_url:0,
more_read_type:0,
rtId:"",
rtKey:"",
appmsg_like_type:1,
onSuccess:function(){},
onError:function(){}
};
for(var _ in e)e.hasOwnProperty(_)&&(a[_]=e[_]);
console.info("[(评论、点赞、赞赏) 发送请求]: ",new Date),i({
url:"/mp/getappmsgext?f=json&mock="+t("mock"),
data:{
r:Math.random(),
__biz:a.biz,
appmsg_type:a.appmsg_type,
mid:a.mid,
sn:a.sn,
idx:a.idx,
scene:a.scene,
title:encodeURIComponent(a.title.htmlDecode()),
ct:a.ct,
abtest_cookie:a.abtest_cookie,
devicetype:a.devicetype.htmlDecode(),
version:a.version.htmlDecode(),
is_need_ticket:a.is_need_ticket,
is_need_ad:a.is_need_ad,
comment_id:a.comment_id,
is_need_reward:a.is_need_reward,
both_ad:a.both_ad,
reward_uin_count:a.is_need_reward?a.reward_uin_count:0,
send_time:a.send_time,
msg_daily_idx:a.msg_daily_idx,
is_original:a.is_original,
is_only_read:a.is_only_read,
req_id:a.req_id,
pass_ticket:a.pass_ticket,
is_temp_url:a.is_temp_url,
item_show_type:a.item_show_type,
tmp_version:1,
more_read_type:a.more_read_type,
appmsg_like_type:a.appmsg_like_type
},
type:"POST",
dataType:"json",
rtId:a.rtId,
rtKey:a.rtKey,
rtDesc:n,
async:!0,
success:function(e){
if(console.info("[(评论、点赞、赞赏) 响应请求]: ",new Date,e),s("[Appmsg] success get async data"),
"function"==typeof a.onSuccess&&a.onSuccess(e),e)try{
s("[Appmsg] success get async data, async data is: "+JSON.stringify(e));
}catch(t){}else s("[Appmsg] success get async data, async data is empty");
},
error:function(){
s("[Appmsg] error get async data, biz="+a.biz+", mid="+a.mid),"function"==typeof a.onError&&a.onError();
}
});
}
var s=e("appmsg/log.js"),i=e("biz_wap/utils/ajax.js"),n=e("rt/appmsg/getappmsgext.rt.js");
return{
getData:t
};
});define("appmsg/img_copyright_tpl.html.js",[],function(){
return'<span class="original_img_wrp">            \n    <span class="tips_global">来自: <#=source_nickname#></span>\n</span>    ';
});define("pages/video_ctrl.js",[],function(){
"use strict";
function n(n){
n=n||window;
var i=n.cgiData;
return i&&2==i.ori_status&&1==i.is_mp_video&&(i.nick_name||i.hit_username)?!0:!1;
}
function i(n){
return n=n||window,!1;
}
function e(){
return-1!=r.indexOf("&vl=1")?!1:"54"==parent.window.appmsg_type?!1:!0;
}
function t(){
return-1!=r.indexOf("&dd=1")?!1:"54"==parent.window.appmsg_type?!1:!0;
}
function o(){
var n;
if(parent==window)n=window;else try{
{
parent.window.__videoDefaultRatio;
}
n=parent.window;
}catch(i){
n=window;
}
var e=n.__videoDefaultRatio||16/9;
return"54"==n.appmsg_type?e:e;
}
var r=window.location.href;
return{
showPauseTips:t,
showVideoLike:e,
showVideoDetail:i,
showReprint:n,
getRatio:o
};
});define("pages/create_txv.js",["biz_common/utils/monitor.js","biz_wap/utils/ajax_load_js.js","pages/loadscript.js"],function(e){
"use strict";
function n(){
"function"!=typeof window.__createTxVideo&&(window.__createTxVideo=function(e){
o(e);
});
}
function o(e){
var n=function(){},o=function(){};
"function"==typeof e.onSuccess&&(o=e.onSuccess),"function"==typeof e.onError&&(n=e.onError),
r.Load({
url:c.jsUrl,
version:c.jsVersion,
useCache:!0,
win:e.win,
onSuccess:function(s){
2!=s.code&&3!=s.code||0!=s.queueIndex||(i.setSum("64728","111",1),i.setSum("64728","112",1));
var u=e.win||window,a=!0;
if(u.Txp&&"function"==typeof u.Txp.Player?(a=!0,0==s.queueIndex&&(2==s.code?i.setSum("64728","116",1):3==s.code&&i.setSum("64728","117",1),
i.send())):(a=!1,0==s.queueIndex&&(2==s.code?i.setSum("64728","114",1):3==s.code&&i.setSum("64728","115",1),
i.send())),a){
var d=t({
win:u,
options:e
});
o({
player:d
});
}else r.ClearCache({
win:u,
version:c.jsVersion,
url:c.jsUrl
}),n();
},
onError:function(n){
0==n.queueIndex&&(i.setSum("64728","111",1),i.setSum("64728","118",1),51==n.code?i.setSum("64728","119",1):52==n.code?i.setSum("64728","120",1):53==n.code&&i.setSum("64728","121",1),
i.send()),s(e);
}
});
}
function t(e){
var n=e.win||window,o=e.options,t=new n.Txp.Player({
containerId:o.containerId,
vid:o.vid,
width:o.width,
height:o.height,
autoplay:o.autoplay===!0?!0:!1,
allowFullScreen:o.allowFullScreen===!0?!0:!1
});
return t;
}
function s(e){
var n=function(){},o=function(){};
"function"==typeof e.onSuccess&&(o=e.onSuccess),"function"==typeof e.onError&&(n=e.onError);
var s=c.jsUrl;
s+=-1==s.indexOf("?")?"?"+c.customerParam+"="+c.jsVersion:"&"+c.customerParam+"="+c.jsVersion,
u({
win:e.win,
url:s,
timeout:1e4,
type:"JS",
callback:function(){
i.setSum("64728","122",1);
var s=e.win||window;
if(s.Txp&&"function"==typeof s.Txp.Player){
i.setSum("64728","124",1),i.send();
var r=t({
win:e.win,
options:e
});
o({
player:r
});
}else i.setSum("64728","123",1),i.send(),n();
},
onerror:function(e){
switch(i.setSum("64728","122",1),1*e){
case 400:
c.jsLoadState=4,i.setSum("64728","125",1);
break;

case 500:
c.jsLoadState=5,i.setSum("64728","126",1);
break;

default:
c.jsLoadState=6,i.setSum("64728","127",1);
}
i.send(),n();
}
});
}
var i=e("biz_common/utils/monitor.js"),r=e("biz_wap/utils/ajax_load_js.js"),u=e("pages/loadscript.js"),c={
customerParam:"wxv",
jsUrl:"//vm.gtimg.cn/tencentvideo/txp/js/iframe/api.js?",
jsVersion:"v1"
};
return{
createTxVideo:o,
createGlobalFunc:n
};
});define("appmsg/comment_utils.js",["appmsg/comment.js"],function(n){
"use strict";
function m(m){
1==m.comment_enabled&&(window.can_fans_comment_only=m.only_fans_can_comment,window.comment_count=m.comment_count,
window._is_fans=m.is_fans,window._logo_url=m.logo_url,window._nick_name=m.nick_name,
window.friend_comment_enabled=m.friend_comment_enabled,n("appmsg/comment.js"));
}
return{
initCommentByExtData:m
};
});define("biz_common/ui/imgonepx.js",[],function(){
"use strict";
return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC";
});define("appmsg/malicious_wording.js",[],function(){
"use strict";
var i={
0:{
90041:"此标题包含夸大误导信息",
20012:"此标题包含低俗恶俗内容"
},
1:{
90041:"",
20012:""
},
2:{
90041:"此文章包含夸大误导信息",
20012:"此文章包含低俗恶俗内容"
}
},s={
0:{
90041:"标题使用夸大、煽动、低俗等词语造成误导或引人不适",
20012:"标题使用低俗或恶俗词语造成不正当影响或引人不适"
},
1:{
90041:"摘要包含误导、煽动的信息引人不适或造成微信用户混淆",
20012:"摘要包含低俗或恶俗内容造成不正当影响或引人不适"
},
2:{
90041:"文章包含误导、煽动的信息引人不适或造成微信用户混淆",
20012:"文章包含低俗或恶俗内容造成不正当影响或引人不适"
}
};
return{
maliciousTitleMap:i,
maliciousDescMap:s
};
});define("biz_common/utils/wxgspeedsdk.js",[],function(){
"use strict";
function e(e){
if(!e.pid||!e.speeds)return-1;
if(!e.speeds.length>0){
var n=e.speeds;
e.speeds=[],e.speeds.push(n);
}
e.user_define&&(p=e.user_define);
for(var t=d(e),o=0;o<e.speeds.length;o++){
var r=e.speeds[o];
r.time=parseInt(r.time),r.sid>20&&r.time>=0&&i(t,r.sid,r.time);
}
}
function n(){
s(function(){
setTimeout(function(){
for(var e in u)r({
pid_uin_rid:e,
speeds:u[e],
user_define:p
},c);
u={};
},100);
});
}
function t(e){
s(function(){
if(!e.pid||!e.time)return-1;
var n=d(e);
i(n,9,e.time);
});
}
function o(e){
s(function(){
var n=d(e);
u[n]||(u[n]=[]);
var t=window.performance||window.msPerformance||window.webkitPerformance||{};
if(t&&t.timing){
var o=t.timing||{};
i(n,1,o.domainLookupEnd-o.domainLookupStart),i(n,2,"https:"==location.protocol&&0!=o.secureConnectionStart?o.connectEnd-o.secureConnectionStart:0),
i(n,3,o.connectEnd-o.connectStart),i(n,4,o.responseStart-o.requestStart),i(n,5,o.responseEnd-o.responseStart),
i(n,6,o.domContentLoadedEventStart-o.domLoading),i(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),
i(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart),function(){
setTimeout(function(){
o.loadEventEnd&&(i(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),i(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart));
},0);
}(u),u[n][9]||i(n,9,o.domContentLoadedEventStart-o.navigationStart),i(n,10,o.redirectEnd-o.redirectStart),
i(n,11,o.domainLookupStart-o.fetchStart),i(n,12,o.domLoading-o.responseStart);
}
});
}
function i(e,n,t){
u[e]=u[e]||[],u[e][n]=u[e][n]||[],0>t||(21>n?u[e][n][0]=t:u[e][n].push(t));
}
function d(e){
return e&&e.pid?e.pid+"_"+(e.uin||0)+"_"+(e.rid||0):void(console&&console.error("Must provide a pid"));
}
function r(e,n){
var t=e.pid_uin_rid.split("_");
if(3!=t.length)return void(console&&console.error("pid,uin,rid, invalid args"));
var o="pid="+t[0]+"&uin="+t[1]+"&rid="+t[2];
e.user_define&&(o+="&user_define="+e.user_define);
for(var i=n+o+"&speeds=",d="",r=[],s=1;s<e.speeds.length;s++)if(e.speeds[s]){
for(var a=0;a<e.speeds[s].length;a++){
var p=s+"_"+e.speeds[s][a];
i.length+d.length+p.length<1024?d=d+p+";":(d.length&&r.push(i+d.substring(0,d.length-1)),
d=p+";");
}
s==e.speeds.length-1&&r.push(i+d.substring(0,d.length-1));
}
for(var s=0;s<r.length;s++)(new Image).src=r[s];
}
function s(e){
"complete"==document.readyState?e():f.push(e);
}
function a(){
for(var e=0;e<f.length;e++)f[e]();
f=[];
}
var p,u={},c="https://badjs.weixinbridge.com/frontend/reportspeed?",f=[];
return window.addEventListener?window.addEventListener("load",a,!1):window.attachEvent&&window.attachEvent("onload",a),
{
saveSpeeds:e,
send:n,
setFirstViewTime:t,
setBasicTime:o
};
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("a/a_utils.js",["biz_wap/jsapi/core.js","biz_wap/utils/ajax.js","biz_wap/utils/mmversion.js","biz_common/utils/report.js","biz_common/dom/class.js","biz_common/utils/url/parse.js","biz_wap/utils/openUrl.js"],function(e){
"use strict";
function t(e,t){
c("/mp/ad_report?action=follow&type="+e+t);
}
function n(e){
if(!e)return"";
var t=document.createElement("a");
return t.href=e,t.hostname;
}
function i(e){
for(var t=[],n=0;n<e.length;++n){
var o=e[n],a="undefined"==typeof o?"undefined":_typeof(o);
o="string"===a?o.htmlDecode():o,"object"===a&&(o="[object Array]"===Object.prototype.toString.call(o)?i(o):r(o)),
t.push(o);
}
return t;
}
function r(e){
var t={};
for(var n in e)if(e.hasOwnProperty(n)){
var o=e[n],a="undefined"==typeof o?"undefined":_typeof(o);
o="string"===a?o.htmlDecode():o,"object"===a&&(o="[object Array]"===Object.prototype.toString.call(o)?i(o):r(o)),
t[n]=o;
}
return t;
}
function o(e,t){
var n=0;
p.isIOS?n=1:p.isAndroid&&(n=2);
var i={
creative_load_fail:[{
ts:parseInt(+new Date/1e3,10),
aid:parseInt(e.info.aid,10),
img_url:t,
network_type:window.networkType,
errmsg:"",
os_type:n,
client_version:parseInt(window.clientversion,10),
traceid:e.info.traceid
}]
};
i=JSON.stringify(i),s({
url:"/mp/advertisement_report?action=extra_report&extra_data="+i+"&__biz="+window.biz,
timeout:2e3
});
}
function a(e,t){
var n={
ad_sign_data:t.adSignData,
ad_sign_k1:t.adSignK1,
ad_sign_k2:t.adSignK2,
ad_sign_md5:t.signMd5
};
return u.join(e,n,!0);
}
var d=e("biz_wap/jsapi/core.js"),s=e("biz_wap/utils/ajax.js"),p=e("biz_wap/utils/mmversion.js"),c=e("biz_common/utils/report.js"),m=e("biz_common/dom/class.js"),u=e("biz_common/utils/url/parse.js"),_=e("biz_wap/utils/openUrl.js").openUrlWithExtraWebview,l="pos_",f=[" ","-","(",":",'"',"'","：","（","—","－","“","‘"],w=["wximg.qq.com","wximg.gtimg.com","pgdt.gtimg.cn","mmsns.qpic.cn","mmbiz.qpic.cn","vweixinthumb.tc.qq.com","pp.myapp.com","wx.qlog.cn","mp.weixin.qq.com"],g={
report:t,
saveCopy:r,
joinSignParam:a,
checkShowCpc:function(e,t,n,i){
if(t)return!0;
if(e){
var r,o=document.documentElement.clientHeight||window.innerHeight,a=o/2,d=e.offsetTop,p=n.offsetHeight;
if(a>d?r=1:o>d&&(r=2),r&&i){
var c=JSON.stringify({
biz_middle_not_exp:[{
scene:r,
traceid:i.traceid,
aid:+i.aid,
appmsg_id:+window.appmsgid,
item_idx:+window.idx
}]
});
s({
url:"/mp/advertisement_report?action=extra_report&extra_data="+c+"&__biz="+window.biz,
timeout:2e3
});
}
return a>d||a>p-d?!1:!0;
}
},
insertAfter:function(e,t){
var n=t.parentNode;
n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling);
},
openWebAppStore:function(e,t){
var n=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
return n&&n[1]&&parseInt(n[1].split("_")[0],10)>=12?void d.invoke("launchApplication",{
schemeUrl:e
},function(){}):void d.invoke("downloadAppInternal",{
appUrl:e
},function(n){
n.err_msg&&-1!==n.err_msg.indexOf("ok")||_("/mp/ad_redirect?url="+encodeURIComponent(e)+"&ticket="+t);
});
},
adOptReport:function(e,t,n,i){
var r=u.join("/mp/ad_complaint",{
action:"report",
type:e,
pos_type:t,
trace_id:n,
aid:i,
__biz:window.biz,
r:Math.random()
},!0);
c(r);
},
checkAdImg:function(e){
if(e){
var t=e.image_url||"",i=n(t);
i&&-1===w.indexOf(i)&&window.__addIdKeyReport(28307,58);
}
},
formName:function(e){
for(var t=-1,n=0,i=f.length;i>n;++n){
var r=f[n],o=e.indexOf(r);
-1!==o&&(-1===t||t>o)&&(t=o);
}
return-1!==t&&(e=e.substring(0,t)),e;
},
formSize:function(e){
return"number"!=typeof e?e:(e>=1024?(e/=1024,e=e>=1024?(e/1024).toFixed(2)+"MB":e.toFixed(2)+"KB"):e=e.toFixed(2)+"B",
e);
},
debounce:function(e,t,n){
var i;
return function(){
var r=this,o=arguments,a=function(){
i=null,n||e.apply(r,o);
},d=n&&!i;
i||(i=setTimeout(a,t),d&&e.apply(r,o));
};
},
isItunesLink:function(e){
return/^https?:\/\/itunes\.apple\.com\//.test(e);
},
extend:function(e,t){
for(var n in t)e[n]=t[n];
return e;
},
getPosKeyDesc:function(e,t){
var n=t?e+"_"+t:e;
return l+n;
},
openCanvasAd:function(e){
d.invoke("openADCanvas",{
canvasId:e.canvasId,
preLoad:0,
noStore:0,
extraData:JSON.stringify({
pos_type:e.pos_type
}),
adInfoXml:e.adInfoXml
},function(n){
0!=n.ret?(_(e.url),t(135,e.report_param)):t(134,e.report_param);
});
},
setBackgroundClass:function(){
window._has_comment||0!==window.adDatas.num||window._share_redirect_url||window.is_temp_url?m.removeClass(document.body,"rich_media_empty_extra"):m.addClass(document.body,"rich_media_empty_extra");
},
lazyLoadAdImg:function(e){
for(var t=document.getElementsByClassName("js_alazy_img"),n=0;n<t.length;n++){
var i=t[n];
i.onload=function(){
window.__addIdKeyReport(28307,54),i.src.indexOf("retry")>-1&&window.__addIdKeyReport(28307,69);
},i.onerror=function(){
if(-1===i.src.indexOf("retry"))i.src=u.addParam(i.src,"retry",1);else{
window.__addIdKeyReport(28307,98);
var t="other";
p.isIOS?t="iphone":p.isAndroid&&(t="android"),setTimeout(function(){
var n=window.networkType||"unknow",r=u.join("/tp/datacenter/report",{
cmd:"report",
id:900023,
uin:777,
os:t,
aid:e.aid,
image_url:encodeURIComponent(i.src),
type:e.type,
network:n
},!0);
s({
url:r,
async:!0
});
},500),o(e,i.src);
}
window.__addIdKeyReport(28307,57);
},i.src=i.dataset.src;
}
},
reportUrlLength:function(e,t,n,i,r,o,d){
var p=a(d,{
adSignData:e,
adSignK1:t,
adSignK2:n,
signMd5:i,
viewidKeyObj:r
});
if(p.length>=4e3){
var c=JSON.stringify({
biz_log_report:[{
pos_type:+o.pos_type,
traceid:o.tid,
aid:+o.aid,
log_type:1,
ext_info:"[url length:"+p.length+"]"+d.substring(0,2e3)
}]
});
s({
url:"/mp/advertisement_report?action=extra_report",
timeout:2e3,
data:{
extra_data:c,
__biz:window.biz
},
type:"post"
});
}
}
};
return g;
});define("a/a.js",["biz_wap/utils/mmversion.js","biz_wap/utils/device.js","a/a_sign.js","biz_wap/utils/openUrl.js","biz_common/utils/get_para_list.js","biz_wap/utils/show_time.js","biz_common/utils/url/parse.js","biz_common/dom/event.js","a/a_report.js","biz_wap/utils/ajax.js","biz_wap/utils/position.js","a/card.js","a/wxopen_card.js","a/mpshop.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","a/a_tpl.html.js","a/sponsor_a_tpl.html.js","a/cpc_a_tpl.html.js","biz_common/dom/class.js","biz_wap/utils/storage.js","appmsg/log.js","a/tpl/crt_tpl_manager.js","a/a_config.js","a/video.js","a/a_utils.js","biz_common/dom/offset.js","a/appdialog_confirm.js","appmsg/cdn_img_lib.js","a/tpl/cpc_tpl.html.js","a/sponsor.js","a/app_card.js","a/profile.js","a/android.js","a/ios.js"],function(require,exports,module,alert){
"use strict";
function processAdEleByPos(e){
var a;
e===AD_POS.POS_MID&&(a=document.getElementsByTagName("mpcpc")),adElCountMapByPos[e]=a.length;
for(var t=0;t<a.length;t++)el_gdt_areas[utils.getPosKeyDesc(e,t)]=a[t],ping_cpm_apurl[utils.getPosKeyDesc(e,t)]={};
}
function initAdData(){
processAdEleByPos(AD_POS.POS_MID);
}
function checkNeedAds(){
var is_need_ad=1,_adInfo=null,screen_num=0;
if(!globalAdDebug){
var inwindowwx=-1!=navigator.userAgent.indexOf("WindowsWechat");
if(!document.getElementsByClassName||-1==navigator.userAgent.indexOf("MicroMessenger")||inwindowwx||mmversion.isInMiniProgram){
if(is_need_ad=0,js_sponsor_ad_area.style.display="none",js_bottom_ad_area.style.display="none",
adElCountMapByPos[AD_POS.POS_MID])for(var i=0;i<adElCountMapByPos[AD_POS.POS_MID];i++)el_gdt_areas[utils.getPosKeyDesc(AD_POS.POS_MID,i)].style.display="none";
}else{
var adLS=new LS("ad");
if(window.localStorage&&-1===location.href.indexOf("mock"))try{
var key=[biz,sn,mid,idx].join("_"),_ad=adLS.get(key);
_adInfo=_ad.info;
try{
_adInfo=eval("("+_adInfo+")");
}catch(e){
_adInfo=null;
}
var _adInfoSaveTime=_ad.time,_now=+new Date;
_adInfo&&_now-1*_adInfoSaveTime<AD_CONFIG.AD_CACHE_TIME&&1*_adInfo.advertisement_num>0?is_need_ad=0:adLS.remove(key),
log("[Ad] is_need_ad: "+is_need_ad+" , adData:"+JSON.stringify(_ad));
}catch(e){
is_need_ad=1,_adInfo=null;
}
}
}
return{
is_need_ad:is_need_ad,
both_ad:0,
_adInfo:_adInfo
};
}
function insertAutoAdElement(e){
if(e.pos_type===AD_POS.POS_MID&&!adElCountMapByPos[AD_POS.POS_MID]){
var a=getParaList(contentWrp),t=void 0!==e.position_index&&e.position_index>=0&&e.position_index<a.length,i=t?e.position_index:Math.ceil(a.length/2)-1,_=document.createElement("mpcpc");
el_gdt_areas[utils.getPosKeyDesc(AD_POS.POS_MID)]=_,utils.insertAfter(_,a[i]);
}
}
function isUseNewFrame(e){
if(!e||!e.flow_exp_info)return!1;
var a=e.flow_exp_info||"";
try{
a=JSON.parse(a.replace(/&quot;/g,'"'));
}catch(t){}
if(!a.length)return!1;
for(var i=0;i<a.length;i++)if(a[i].exp_para&&a[i].exp_para.length)for(var _=0;_<a[i].exp_para.length;_++)if("widget_gray_biz_intext_iframe"===a[i].exp_para[_].name&&"1"===a[i].exp_para[_].value&&e.pos_type===AD_POS.POS_MID)return!0;
}
function separateAdData(e){
e=e||[];
var a=[],t=[];
for(var i in e){
var _=e[i];
isUseNewFrame(_)?t.push(_):a.push(_);
}
return{
oldAdInfos:a,
newAdInfos:t
};
}
function createAdFrame(e,a){
var t=document.createElement("iframe");
return t.src=AD_CONFIG.AD_FRAME_DOMAIN+"/tmpl/base_tmpl.html#aid="+a.aid,t.className="iframe_ad_container",
e.appendChild(t),window.__report(125),t;
}
function initMidAd(e,a,t){
insertAutoAdElement(e);
var i=document.getElementsByTagName("mpcpc")[a];
if(i){
var _=createAdFrame(i,e);
t[e.aid].iframeEle=_;
}
}
function postMessage(e,a,t){
try{
e.postMessage(JSON.stringify({
action:a,
value:t
}),AD_CONFIG.AD_FRAME_DOMAIN);
}catch(i){}
}
function onFrameReady(e,a,t){
var i=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,_="",n=t[a];
if(n){
var p=n.iframeEle.parentNode;
n.aInfo.pos_type===AD_POS.POS_MID&&(_=p&&p.dataset&&p.dataset.category_id_list),
postMessage(e,"setPageDataV2",{
biz:window.biz,
uin:window.uin,
scene:window.scene,
source:window.source,
idx:window.idx,
mid:window.mid,
isSg:window.isSg,
userUin:window.user_uin,
passTicket:decodeURIComponent(window.pass_ticket),
globalAdDebug:globalAdDebug,
bodyScrollTop:i,
contentOffsetHeight:contentWrp.offsetHeight,
adOffsetTop:offset.getOffsetTop(n.iframeEle),
screenHeight:document.documentElement.clientHeight||window.innerHeight,
midCategoryIdList:_
}),postMessage(e,"setAdDataV2",n.aInfo);
}
}
function bindScrollEvent(e){
var a=utils.debounce(function(){
var a=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
for(var t in e){
var i=e[t].iframeEle;
e.hasOwnProperty(t)&&i&&postMessage(i.contentWindow,"pageScrollV2",{
bodyScrollTop:a,
adOffsetTop:offset.getOffsetTop(i)
});
}
},50);
DomEvent.on(window,"scroll",a);
}
function invalidMsg(e,a){
return e+" | "+a;
}
function checkApiInvokeValid(e,a){
if(!a[e.aid])return"Invalid aid";
var t=e.proxyData||{},i=a[e.aid].aInfo,_=t.methodName;
return-1===AD_CONFIG.AD_JSAPI_WHITE_LIST.indexOf(_)?invalidMsg(AD_CONFIG.INVALID_METHOD_NAME_MSG_PREFIX,_):"addContact"!==_&&"profile"!==_||i&&i.biz_info&&t.args.username===i.biz_info.user_name?!0:invalidMsg(AD_CONFIG.INVALID_ARGS_MSG_PREFIX,"Invalid biz username");
}
function proxyCallback(e,a,t){
postMessage(e,"proxyCallbackV2",{
proxyId:a.proxyId,
aid:a.aid,
proxyData:t
});
}
function changeFrameStyle(e,a){
if(a[e.aid]){
var t=a[e.aid].iframeEle;
e.display===!1?classList.addClass(t,AD_CONFIG.AD_IFRAME_HIDE_CLASS):e.display===!0&&classList.removeClass(t,AD_CONFIG.AD_IFRAME_HIDE_CLASS),
e.height&&(t.style.height=e.height);
}
}
function commonRequest(e,a){
var t=a.proxyData||{},i=t.args||{};
return-1===AD_CONFIG.AD_REQ_PATH_WHITE_LIST.indexOf(i.path)?void proxyCallback(e,a,{
err_msg:invalidMsg(AD_CONFIG.INVALID_REQ_PATH_MSG_PREFIX,i.path)
}):void ajax({
type:i.requestType,
url:i.path+"?"+(i.requestQuery||""),
data:i.requestBody||{},
mayAbort:!0,
success:function(t){
proxyCallback(e,a,{
err_msg:"request:success",
response:t
});
},
error:function(t,i){
proxyCallback(e,a,{
err_msg:"request:error",
xhr:t,
err_info:i
});
}
});
}
function onJsapiProxy(e,a,t){
var i=a.proxyData||{},_=checkApiInvokeValid(a,t);
if("string"==typeof _)return void proxyCallback(e,a,{
err_msg:_
});
try{
JSAPI[i.methodType](i.methodName,i.args,function(t){
proxyCallback(e,a,t),"openUrlWithExtraWebview"===i.methodName&&-1===t.err_msg.indexOf("ok")&&(location.href=i.args.url);
});
}catch(n){
console.error(n),proxyCallback(e,a,{
err_msg:invalidMsg(AD_CONFIG.INVALID_METHOD_TYPE_MSG_PREFIX,i.methodType)
});
}
}
function androidAppDialogConfirm(e,a){
var t=a.proxyData||{};
appDialogConfirm({
app_name:t.args.app_name,
app_img_url:t.args.icon_url,
onOk:function(){
proxyCallback(e,a,{
err_msg:"appDialogConfirm:yes"
});
},
onCancel:function(){
proxyCallback(e,a,{
err_msg:"appDialogConfirm:cancel"
});
}
});
}
function onProxy(e,a){
if("jsapi"===a.proxyType)return void onJsapiProxy.apply(null,arguments);
var t=a.proxyData||{};
if("bizapi"===a.proxyType){
if("appDialogConfirm"===t.methodName)return void androidAppDialogConfirm.apply(null,arguments);
if("request"===t.methodName)return void commonRequest.apply(null,arguments);
if("addIdKeyReport"===t.methodName)return void window.__addIdKeyReport(t.args.id,t.args.key,t.args.val);
}
}
function bindAdEvent(e){
window.addEventListener("message",function(a){
var t;
if(a.origin===AD_CONFIG.AD_FRAME_DOMAIN){
try{
t=JSON.parse(a.data);
}catch(i){
return;
}
switch(t.action){
case"onFrameReadyV2":
onFrameReady(a.source,t.value.aid,e);
break;

case"onProxyV2":
onProxy(a.source,t.value,e);
break;

case"changeFrameStyle":
changeFrameStyle(t.value,e);
}
}
}),bindScrollEvent(e);
}
function handleAdWithFrame(e){
if(e.length){
var a={},t=0;
e.forEach(function(e){
a[e.aid]={
aInfo:e
},console.log("广告 "+e.aid+"使用了新的iframe组件渲染模式"),e.pos_type===AD_POS.POS_MID&&(initMidAd(e,t,a),
t++);
}),bindAdEvent(a);
}
}
function processAdAvatar(e){
var a=e.product_type;
return(a===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||a===AD_TYPE.IOS_APP_PRODUCT_TYPE)&&e.app_info&&e.app_info.icon_url?(e.avatar=e.app_info.icon_url,
void(e.avatarTitle=e.app_info.appname)):a===AD_TYPE.MINI_GAME_PRODUCT_TYPE&&e.game_info&&e.game_info.head_img?(e.avatar=e.game_info.head_img,
void(e.avatarTitle=e.game_info.nick_name)):void((e.pos_type===AD_POS.POS_MID&&(a===AD_TYPE.ADD_CONTACT_PRODUCT_TYPE||a===AD_TYPE.BRAND_GDT_PRODUCT_TYPE||a===AD_TYPE.BRAND_WECHAT_PRODUCT_TYPE)||e.pos_type!==AD_POS.POS_MID)&&e.biz_info&&e.biz_info.head_img&&(e.avatar=e.biz_info.head_img,
e.avatarTitle=e.biz_info.nick_name));
}
function afterGetAdData(e,a){
function t(e){
var a=e;
if(a.dest_type==AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE&&(a.is_wx_app=!0),
e.product_type===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||e.product_type===AD_TYPE.IOS_APP_PRODUCT_TYPE){
var t=a.app_info.app_size||0,i=a.app_info.app_name||a.app_info.appname||"",_=a.app_info.apk_url||a.app_info.pkgurl||"",n=a.app_info.file_md5||a.app_info.pkgmd5||a.app_info.app_md5||"",p=a.app_info.apk_name||a.app_info.pkg_name||"";
t=utils.formSize(t),i=utils.formName(i),a.app_info.app_size=t,a.app_info.app_name=i,
a.app_info.apk_name=p,a.app_info.appname=a.app_info.app_name,a.app_info.app_rating=a.app_info.app_rating||0,
a.app_info.app_id=a.app_info.app_id,a.app_info.icon_url=a.app_info.icon_url,a.app_info.channel_id=a.app_info.channel_id,
a.app_info.md5sum=a.app_info.app_md5,a.app_info.rl=a.rl,a.app_info.pkgname=p,a.app_info.url_scheme=a.app_info.url_scheme,
a.app_info.androiddownurl=_,a.app_info.versioncode=a.app_info.version_code,a.app_info.appinfo_url=a.app_info.appinfo_url,
a.app_info.traceid=a.traceid,a.app_info.pt=a.pt,a.app_info.url=a.url,a.app_info.ticket=a.ticket,
a.app_info.type=a.type,a.app_info.adid=a.aid,a.app_info.file_md5=n;
var o=utils.extend({
appname:a.app_info.app_name,
app_rating:a.app_info.app_rating||0,
app_id:a.app_info.app_id,
icon_url:a.app_info.icon_url,
channel_id:a.app_info.channel_id,
md5sum:a.app_info.app_md5,
rl:a.rl,
pkgname:p,
url_scheme:a.app_info.url_scheme,
androiddownurl:_,
versioncode:a.app_info.version_code,
appinfo_url:a.app_info.appinfo_url,
traceid:a.traceid,
pt:a.pt,
url:a.url,
ticket:a.ticket,
type:a.type,
adid:a.aid,
source:source||"",
is_appmsg:!0,
file_md5:n
},a);
return o;
}
if(e.product_type==AD_TYPE.ADD_CONTACT_PRODUCT_TYPE){
for(var r=a.exp_info.exp_value||[],d=!1,s=0,l=0;l<r.length;++l){
var c=r[l]||{};
if(1==c.exp_type&&(s=c.comm_attention_num,d=s>0),2==c.exp_type){
d=!1,s=0;
break;
}
}
a.biz_info.show_comm_attention_num=d,a.biz_info.comm_attention_num=s;
var o=utils.extend({
usename:a.biz_info.user_name,
pt:a.pt,
url:a.url,
traceid:a.traceid,
adid:a.aid,
ticket:a.ticket,
is_appmsg:!0
},a);
return o;
}
return e;
}
function i(e){
var a,t=e;
if(e.product_type===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||e.product_type===AD_TYPE.IOS_APP_PRODUCT_TYPE){
var i=t.app_info.app_size||0,_=t.app_info.app_name||t.app_info.appname||"",n=t.app_info.apk_url||t.app_info.pkgurl||"",p=t.app_info.file_md5||t.app_info.pkgmd5||t.app_info.app_md5||"",o=t.app_info.apk_name||t.app_info.pkg_name||"",r=t.app_info.category,d=["万","百万","亿"],s=t.app_info.down_count||0;
if(s>=1e4){
s/=1e4;
for(var l=0;s>=10&&2>l;)s/=100,l++;
s=s.toFixed(1)+d[l]+"次";
}else s=s.toFixed(1)+"次";
return r=r?r[0]||"其他":"其他",i=utils.formSize(i),_=utils.formName(_),t.app_info._down_count=s,
t.app_info._category=r,t.app_info.app_size=i,t.app_info.app_name=_,t.app_info.apk_name=o,
t.app_info.appname=t.app_info.app_name,t.app_info.app_rating=t.app_info.app_rating||0,
t.app_info.app_id=t.app_info.app_id,t.app_info.icon_url=t.app_info.icon_url,t.app_info.channel_id=t.app_info.channel_id,
t.app_info.md5sum=t.app_info.app_md5,t.app_info.rl=t.rl,t.app_info.pkgname=o,t.app_info.url_scheme=t.app_info.url_scheme,
t.app_info.androiddownurl=n,t.app_info.versioncode=t.app_info.version_code,t.app_info.appinfo_url=t.app_info.appinfo_url,
t.app_info.traceid=t.traceid,t.app_info.pt=t.pt,t.app_info.url=t.url,t.app_info.ticket=t.ticket,
t.app_info.type=t.type,t.app_info.adid=t.aid,t.app_info.file_md5=p,a=utils.extend({
appname:t.app_info.app_name,
app_rating:t.app_info.app_rating||0,
app_id:t.app_info.app_id,
icon_url:t.app_info.icon_url,
channel_id:t.app_info.channel_id,
md5sum:t.app_info.app_md5,
rl:t.rl,
pkgname:o,
url_scheme:t.app_info.url_scheme,
androiddownurl:n,
versioncode:t.app_info.version_code,
appinfo_url:t.app_info.appinfo_url,
traceid:t.traceid,
pt:t.pt,
url:t.url,
ticket:t.ticket,
type:t.type,
adid:t.aid,
source:source||"",
is_appmsg:!0,
file_md5:p
},t);
}
if(e.product_type==AD_TYPE.ADD_CONTACT_PRODUCT_TYPE){
for(var c=t.exp_info.exp_value||[],m=!1,u=0,f=0;f<c.length;++f){
var g=c[f]||{};
if(1==g.exp_type&&(u=g.comm_attention_num,m=u>0),2==g.exp_type){
m=!1,u=0;
break;
}
}
return t.biz_info.show_comm_attention_num=m,t.biz_info.comm_attention_num=u,a=utils.extend({
usename:t.biz_info.user_name,
pt:t.pt,
url:t.url,
traceid:t.traceid,
adid:t.aid,
ticket:t.ticket,
is_appmsg:!0
},t);
}
if(e.product_type==AD_TYPE.CARD_PRODUCT_TYPE||e.product_type==AD_TYPE.COUPON_PRODUCT_TYPE){
var D=t.card_info.card_id||"",P=t.card_info.card_ext||"";
P=P.htmlDecode();
try{
P=JSON.parse(P),P.outer_str=t.card_info.card_outer_id||"",P=JSON.stringify(P);
}catch(v){
P="{}";
}
return a=utils.extend({
card_id:D,
card_ext:P,
pt:y,
ticket:t.ticket||"",
url:t.url,
rl:t.rl,
tid:t.traceid,
traceid:t.traceid,
type:t.type,
adid:t.aid,
is_appmsg:!0
},t);
}
if(e.product_type==AD_TYPE.SHOP_PRODUCT_TYPE){
if(t.mp_shop_info){
var A=t.mp_shop_info.pid||"",T=t.mp_shop_info.outer_id||"";
a=utils.extend({
pid:A,
outer_id:T,
pt:y,
url:t.url,
rl:t.rl,
tid:t.traceid,
traceid:t.traceid,
type:t.type,
adid:t.aid,
is_appmsg:!0
},t);
}else a=t;
return a;
}
return e;
}
var _={},n={},p=e.is_need_ad,o=e._adInfo;
if(0==p)n=o,n||(n={
advertisement_num:0
});else{
if(a.advertisement_num>0&&a.advertisement_info){
var r=a.advertisement_info;
n.advertisement_info=utils.saveCopy(r);
}
n.advertisement_num=a.advertisement_num;
}
1==p&&(window._adRenderData=n),n=n||{
advertisement_num:0
};
var d=!1;
if(!n.flag&&n.advertisement_num>0){
var s=n.advertisement_num,l=n.advertisement_info,c=separateAdData(l);
l=c.oldAdInfos,s=l.length,handleAdWithFrame(c.newAdInfos),window.adDatas.num=s;
for(var m=0;s>m;++m){
var u,f=null,g=l[m];
g.exp_info=g.exp_info||{},g.is_cpm=g.is_cpm||0,g.biz_info=g.biz_info||{},g.app_info=g.app_info||{},
g.pos_type=g.pos_type||0,g.logo=g.logo||"",g.use_new_protocol=g.use_new_protocol||0;
var y=g.pt,D=g.pos_type,P=g.product_type;
if(2==g.use_new_protocol&&g.pos_type==AD_POS.POS_BOTTOM){
var v=JSON.stringify({
biz_log_report:[{
pos_type:+g.pos_type,
traceid:g.traceid,
aid:+g.aid,
log_type:1,
ext_info:g.crt_size
}]
});
CrtManager.CRT_CONF[g.crt_size]||(g.use_new_protocol=g.product_type!=AD_TYPE.IOS_APP_PRODUCT_TYPE&&g.product_type!=AD_TYPE.ANDROID_APP_PRODUCT_TYPE||2!=g.material_type&&9!=g.material_type||g.dest_type!=AD_CONFIG.AD_DEST_TYPE.APPDETAIL_DEST_TYPE&&g.dest_type!=AD_CONFIG.AD_DEST_TYPE.APPINFO_PAGE_DEST_TYPE&&!AD_CONFIG.AD_DEST_TYPE.CANVAS_AD_DEST_TYPE?0:1,
console.info("[底部广告旧协议兼容] crt_size:",g.crt_size," 最终协议类型：",g.use_new_protocol),ajax({
url:"/mp/advertisement_report?action=extra_report&extra_data="+v+"&__biz="+biz,
timeout:2e3
}));
}
if(urlParser.getQuery("oldAd")&&(g.use_new_protocol=0),u=g.use_new_protocol,_[D]||(_[D]=0),
_[D]++,u)1==u?D===AD_POS.POS_MID?(d=!0,g=t(g),f=g):0===D?(g=i(g),(P===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||P===AD_TYPE.IOS_APP_PRODUCT_TYPE)&&(f=g)):3===D&&(f=g):2==u&&(D===AD_POS.POS_MID?(d=!0,
g=t(g)):0==D&&(g=i(g)),f=g);else if(100===y||115===y){
for(var A=g.exp_info.exp_value||[],T=!1,E=0,b=0;b<A.length;++b){
var h=A[b]||{};
if(1==h.exp_type&&(E=h.comm_attention_num,T=E>0),2==h.exp_type){
T=!1,E=0;
break;
}
}
g.biz_info.show_comm_attention_num=T,g.biz_info.comm_attention_num=E,f={
usename:g.biz_info.user_name,
pt:y,
url:g.url,
traceid:g.traceid,
adid:g.aid,
ticket:g.ticket,
is_appmsg:!0
};
}else if(102===y)f={
appname:g.app_info.app_name,
versioncode:g.app_info.version_code,
pkgname:g.app_info.apk_name,
androiddownurl:g.app_info.apk_url,
md5sum:g.app_info.app_md5,
signature:g.app_info.version_code,
rl:g.rl,
traceid:g.traceid,
pt:y,
ticket:g.ticket,
type:g.type,
adid:g.aid,
is_appmsg:!0
};else if(101===y)f={
appname:g.app_info.app_name,
app_id:g.app_info.app_id,
icon_url:g.app_info.icon_url,
appinfo_url:g.app_info.appinfo_url,
rl:g.rl,
traceid:g.traceid,
pt:y,
ticket:g.ticket,
type:g.type,
adid:g.aid,
is_appmsg:!0
};else if(103===y||104===y||2===y&&g.app_info){
var w=g.app_info.down_count||0,x=g.app_info.app_size||0,O=g.app_info.app_name||"",I=g.app_info.category,C=["万","百万","亿"];
if(w>=1e4){
w/=1e4;
for(var S=0;w>=10&&2>S;)w/=100,S++;
w=w.toFixed(1)+C[S]+"次";
}else w=w.toFixed(1)+"次";
x=utils.formSize(x),I=I?I[0]||"其他":"其他",O=utils.formName(O),g.app_info._down_count=w,
g.app_info._app_size=x,g.app_info._category=I,g.app_info.app_name=O,f={
appname:g.app_info.app_name,
app_rating:g.app_info.app_rating||0,
icon_url:g.app_info.icon_url,
app_id:g.app_info.app_id,
channel_id:g.app_info.channel_id,
md5sum:g.app_info.app_md5,
rl:g.rl,
pkgname:g.app_info.apk_name,
url_scheme:g.app_info.url_scheme,
androiddownurl:g.app_info.apk_url,
versioncode:g.app_info.version_code,
appinfo_url:g.app_info.appinfo_url,
traceid:g.traceid,
pt:y,
url:g.url,
ticket:g.ticket,
type:g.type,
adid:g.aid,
is_appmsg:!0,
app_info:g.app_info
};
}else if(105===y){
var j=g.card_info.card_id||"",k=g.card_info.card_ext||"";
k=k.htmlDecode();
try{
k=JSON.parse(k),k.outer_str=g.card_info.card_outer_id||"",k=JSON.stringify(k);
}catch(Y){
k="{}";
}
f={
card_id:j,
card_ext:k,
pt:y,
ticket:g.ticket||"",
url:g.url,
rl:g.rl,
tid:g.traceid,
traceid:g.traceid,
type:g.type,
adid:g.aid,
is_appmsg:!0
};
}else if(106===y){
var N=g.mp_shop_info.pid||"",z=g.mp_shop_info.outer_id||"";
f={
pid:N,
outer_id:z,
pt:y,
url:g.url,
rl:g.rl,
tid:g.traceid,
traceid:g.traceid,
type:g.type,
adid:g.aid,
is_appmsg:!0
};
}else if(108===y||109===y||110===y||116===y||117===y)f={
pt:y,
ticket:g.ticket||"",
url:g.url,
traceid:g.traceid,
adid:g.aid,
is_appmsg:!0
},g.video_info&&(f.displayWidth=g.video_info.displayWidth,f.displayHeight=g.video_info.displayHeight,
f.thumbUrl=g.video_info.thumbUrl,f.videoUrl=g.video_info.videoUrl,f.rl=g.rl),g.dest_type==AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE&&Wxopen_card.startConnect(g);else if(111===y||113===y||114===y||112===y||121===y||122===y){
var x=g.app_info.app_size||0,O=g.app_info.app_name||"";
x=utils.formSize(x),O=utils.formName(O),g.app_info.app_size=x,g.app_info.app_name=O,
f={
appname:g.app_info.app_name,
app_rating:g.app_info.app_rating||0,
app_id:g.app_info.app_id,
icon_url:g.app_info.icon_url,
channel_id:g.app_info.channel_id,
md5sum:g.app_info.app_md5,
rl:g.rl,
pkgname:g.app_info.apk_name,
url_scheme:g.app_info.url_scheme,
androiddownurl:g.app_info.apk_url,
versioncode:g.app_info.version_code,
appinfo_url:g.app_info.appinfo_url,
traceid:g.traceid,
pt:y,
url:g.url,
ticket:g.ticket,
type:g.type,
adid:g.aid,
source:source||"",
is_appmsg:!0,
app_info:g.app_info
};
}else if(118===y)f=g,d=!0,Wxopen_card.startConnect(g);else if(119===y||120===y)f=g,
Wxopen_card.startConnect(g);else if(125===y)f=g,g.dest_type==AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE&&Wxopen_card.startConnect(g);else if(140===y){
f=g;
try{
f.shopImage=f.shop_image[0],f.shopImage.mp_tags=f.shopImage.mp_tags||[];
}catch(M){
f.shopImage={};
}
}
var R=g.image_url;
require("appmsg/cdn_img_lib.js"),R&&R.isCDN()&&(R=R.replace(/\/0$/,"/640"),R=R.replace(/\/0\?/,"/640?"),
g.image_url=urlParser.addParam(R,"wxfrom","50",!0)),adDatas.ads[utils.getPosKeyDesc(D,_[D]-1)]={
a_info:g,
adData:f
},localStorage&&localStorage.setItem&&g.app_info&&g.app_info.url_scheme&&localStorage.setItem("__WXLS__a_url_schema_"+g.traceid,g.app_info.url_scheme),
g.has_installed=!1,g.app_info&&!function(e){
JSAPI.invoke("getInstallState",{
packageName:e.app_info.apk_name
},function(a){
var t=a.err_msg;
t.indexOf("get_install_state:yes")>-1&&(e.has_installed=!0);
});
}(g),0===D&&9===g.material_type&&(P===AD_TYPE.MINI_GAME_PRODUCT_TYPE&&g.dest_type===AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE&&g.game_info&&(g.biz_info.head_img=g.game_info.head_img,
g.biz_info.nick_name=g.game_info.nick_name),P!==AD_TYPE.IOS_APP_PRODUCT_TYPE&&P!==AD_TYPE.ANDROID_APP_PRODUCT_TYPE||!g.app_info||(g.biz_info.head_img=g.app_info.icon_url,
g.biz_info.nick_name=g.app_info.app_name));
}
var U=function ia(){
var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.clientHeight||window.innerHeight;
if(js_sponsor_ad_area.offsetTop<e+a){
var t=document.getElementById("js_ad_area");
t&&Class.addClass(t,"show"),DomEvent.off(window,"scroll",ia);
}
},q=adDatas.ads;
for(var B in q)if(0===B.indexOf("pos_")){
var f=q[B],g=!!f&&f.a_info,P=g.product_type;
if(f&&g){
if(insertAutoAdElement(g),2!==g.use_new_protocol){
if(0==g.pos_type){
if(g.new_appmsg=window.new_appmsg,g.longAppBtnText=P===AD_TYPE.IOS_APP_PRODUCT_TYPE?"查看应用":"下载应用",
g.shortAppBtnText=P===AD_TYPE.IOS_APP_PRODUCT_TYPE?"查看":"下载",js_bottom_ad_area.innerHTML=TMPL.tmpl(a_tpl,g),
111==g.pt||112==g.pt||113==g.pt||114==g.pt){
var W=document.getElementsByClassName("js_download_app_card")[0],H=W.offsetWidth,F=Math.floor(H/2.875);
F>0&&(W.style.height=F+"px");
}
}else if(3==g.pos_type){
var W=document.createElement("div");
W.appendChild(document.createTextNode(g.image_url)),g.image_url=W.innerHTML.replace(/&amp;/g,"&"),
g.new_appmsg=window.new_appmsg,js_sponsor_ad_area.innerHTML=TMPL.tmpl(sponsor_a_tpl,g),
js_sponsor_ad_area.style.display="block";
var L=js_sponsor_ad_area.clientWidth;
108!=g.pt&&109!=g.pt&&110!=g.pt||2==g.use_new_protocol?116==g.pt||117==g.pt:document.getElementById("js_main_img").style.height=L/1.77+"px",
DomEvent.on(window,"scroll",U),U(0);
}else if(g.pos_type===AD_POS.POS_MID&&utils.checkShowCpc(el_gdt_areas[B],globalAdDebug,contentWrp,g)){
g=_parseExpCpc(g);
var G=!1;
if(P===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||P===AD_TYPE.IOS_APP_PRODUCT_TYPE)js_cpc_area.innerHTML=TMPL.tmpl(cpc_a_tpl,g),
G=!0;else{
var K=require("a/tpl/cpc_tpl.html.js"),V=g.exp_obj.sale_text;
(P===AD_TYPE.ADD_CONTACT_PRODUCT_TYPE||P===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||P===AD_TYPE.IOS_APP_PRODUCT_TYPE||P===AD_TYPE.MINI_GAME_PRODUCT_TYPE)&&(V=g.avatarTitle),
js_cpc_area.innerHTML=TMPL.tmpl(K,{
tag_pos:g.exp_obj.tag_pos,
type:g.tag_pos,
ticket:g.ticket,
url:g.url,
rl:g.rl,
aid:g.aid,
pt:g.pt,
traceid:g.traceid,
group_id:g.group_id,
apurl:g.apurl,
is_cpm:g.is_cpm,
can_see_complaint:window.can_see_complaint,
pos_type:g.pos_type,
banner:g.image_url,
price:g.exp_obj.price,
title:V,
is_wx_app:g.is_wx_app,
btn_text:g.exp_obj.btn_text,
avatar:g.avatar,
isDownload:G
});
}
}
mmversion.isIOS&&g.app_info&&g.app_info.url_scheme&&P===AD_TYPE.IOS_APP_PRODUCT_TYPE&&(document.getElementById("js_promotion_tag")&&(document.getElementById("js_promotion_tag").innerHTML="查看应用"),
document.getElementsByClassName("js_ad_btn")&&document.getElementsByClassName("js_ad_btn").length>0&&(document.getElementsByClassName("js_ad_btn")[0].innerHTML="查看"),
document.getElementById("js_ad_btn_"+g.pos_type)&&(document.getElementById("js_ad_btn_"+g.pos_type).innerHTML="查看应用"));
}else{
var J,X={},G=!1,Q={};
if(g.button_action)try{
"string"==typeof g.button_action&&(g.button_action=JSON.parse(g.button_action.html())),
g.button_action.button_text&&""!=g.button_action.button_text||(g.button_action.button_text="去逛逛");
}catch(Y){
g.button_action={
button_text:"decode error"
};
}else g.button_action={
button_text:"something wrong"
};
if(J=g.crt_size,(P===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||P===AD_TYPE.IOS_APP_PRODUCT_TYPE)&&(G=!0),
processAdAvatar(g),g.dest_type==AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE&&Wxopen_card.startConnect(g),
g.pos_type===AD_POS.POS_MID){
if(utils.checkShowCpc(el_gdt_areas[B],globalAdDebug,contentWrp,g)){
g=_parseExpCpc(g);
var V="",Z="";
(g.avatarTitle||g.exp_obj.sale_text)&&g.avatar&&(V=g.avatarTitle||g.exp_obj.sale_text,
Z=g.avatar),X={
tag_pos:g.exp_obj.tag_pos,
type:g.tag_pos,
ticket:g.ticket,
url:g.url,
rl:g.rl,
aid:g.aid,
pt:g.pt,
traceid:g.traceid,
group_id:g.group_id,
apurl:g.apurl,
is_cpm:g.is_cpm,
can_see_complaint:window.can_see_complaint,
pos_type:g.pos_type,
banner:g.image_url,
price:g.exp_obj.price,
title:V,
is_wx_app:g.is_wx_app,
is_ios:mmversion.isIOS,
isDownload:G,
btn_text:g.exp_obj.btn_text,
avatar:Z
},G&&(Q.customUpdataFunc=function(e,a){
var t=e.querySelector(".js_download_percent"),i=e.querySelector(".js_download_outside"),_=e.querySelector(".js_download_inner");
t&&(t.style.width=a.percent+"%"),i.textContent=a.btn_text,_.textContent=a.btn_text;
}),ad_render_object[B]=new CrtManager.createCrtObject(J,X,el_gdt_areas[B],Q),gdt_as[B]=el_gdt_areas[B].getElementsByClassName("js_ad_main_area");
}
}else if(g.pos_type==AD_POS.POS_SPONSOR){
var W=document.createElement("div");
W.appendChild(document.createTextNode(g.image_url)),g.image_url=W.innerHTML.replace(/&amp;/g,"&"),
g.new_appmsg=window.new_appmsg;
var f={
pt:g.pt,
ticket:g.ticket||"",
url:g.url,
traceid:g.traceid,
adid:g.aid,
is_appmsg:!0
};
if(g.video_info&&(f.displayWidth=g.video_info.displayWidth,f.displayHeight=g.video_info.displayHeight,
f.thumbUrl=g.video_info.thumbUrl,f.videoUrl=g.video_info.videoUrl,f.rl=g.rl),X={
type:g.tag_pos,
ticket:g.ticket,
url:g.url,
rl:g.rl,
aid:g.aid,
pt:g.pt,
traceid:g.traceid,
group_id:g.group_id,
apurl:g.apurl,
is_cpm:g.is_cpm,
can_see_complaint:window.can_see_complaint,
pos_type:g.pos_type,
banner:g.image_url,
title:g.biz_info.nick_name,
is_wx_app:g.button_action.jump_type==AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE,
is_ios:mmversion.isIOS,
isDownload:G,
btn_text:g.button_action.button_text,
avatar:g.biz_info.head_img,
isApp:!1
},ad_render_object[B]=new CrtManager.createCrtObject(J,X,js_sponsor_ad_area,Q),js_sponsor_ad_area.style.display="block",
gdt_as["pos_"+g.pos_type]=js_sponsor_ad_area.getElementsByClassName("js_ad_main_area"),
!ad_render_object[B].getCrtData().has_banner){
var $="&tid="+g.traceid+"&uin="+uin+"&key="+key+"&ticket="+(g.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+g.adid+"&ad_engine=0&pos_type="+g.pos_type+"&exp_id="+g.exp_info.exp_id+"&exp_value="+g.exp_info.exp_value+"&r="+Math.random();
g.report_param=$;
}
var ea=require("a/sponsor.js");
new ea({
adDetailBtn:document.getElementById("js_ad_detail"),
adMoreBtn:document.getElementById("js_ad_more"),
adAbout:document.getElementById("js_btn_about"),
adImg:document.getElementById("js_main_img"),
adMessage:document.getElementById("js_ad_message"),
adVideo:document.getElementById("js_video_container"),
adComplain:document.getElementById("js_btn_complain"),
adData:f,
a_info:g,
pos_type:g.pos_type,
report_param:$
}),DomEvent.on(window,"scroll",U),U(0);
}else if(g.pos_type==AD_POS.POS_BOTTOM){
var Q={};
if(g.video_info&&(f.displayWidth=g.video_info.displayWidth,f.displayHeight=g.video_info.displayHeight,
f.thumbUrl=g.video_info.thumbUrl,f.videoUrl=g.video_info.videoUrl,f.rl=g.rl),G&&(Q.customUpdataFunc=function(e,a){
var t=e.querySelector(".js_download_percent"),i=e.querySelector(".js_download_outside"),_=e.querySelector(".js_download_inner");
t&&(t.style.width=a.percent+"%"),i.textContent=a.btn_text,_.textContent=a.btn_text;
},Q.afterRenderFunc=function(e,a){
JSAPI.invoke("getInstallState",{
packageName:g.app_info.apk_name
},function(t){
var i=t.err_msg,_=e.querySelector(".js_watermark_text");
i.indexOf("get_install_state:yes")>-1&&g.app_info.url_scheme&&(_.textContent=354==parseInt(a.crt_size)||117==parseInt(a.crt_size)||355==parseInt(a.crt_size)||568==parseInt(a.crt_size)?"进入":"进入应用");
});
}),X=utils.extend({
banner:g.image_url,
is_wx_app:g.button_action.jump_type==AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE,
btn_text:g.button_action.button_text,
avatar:g.avatar,
isApp:!1,
isDownload:G
},g),ad_render_object["pos_"+g.pos_type]=new CrtManager.createCrtObject(J,X,js_bottom_ad_area,Q),
!ad_render_object["pos_"+g.pos_type].getCrtData().has_banner){
var $="&tid="+g.traceid+"&uin="+uin+"&key="+key+"&ticket="+(g.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+g.adid+"&ad_engine=0&pos_type="+pos_type+"&exp_id="+g.exp_info.exp_id+"&exp_value="+g.exp_info.exp_value+"&r="+Math.random();
g.report_param=$;
var aa=ad_render_object["pos_"+g.pos_type].getWrapperElm().getElementsByClassName("js_video_container_new_protocol");
aa[0]&&(aa=aa[0],g.videoContainer=aa,videoAdMap[g.aid]=new VideoAd(g));
}
gdt_as["pos_"+g.pos_type]=js_bottom_ad_area.getElementsByClassName("js_ad_main_area");
}
}
utils.lazyLoadAdImg({
aid:g.aid,
type:g.pt,
info:g
}),utils.checkAdImg(g);
}
}
bindAdOperation();
}
if(is_temp_url&&adElCountMapByPos[AD_POS.POS_MID]&&!d)for(var ta=0;ta<adElCountMapByPos[AD_POS.POS_MID];ta++){
if(!utils.checkShowCpc(el_gdt_areas[utils.getPosKeyDesc(AD_POS.POS_MID,ta)]),contentWrp)return;
el_gdt_areas[utils.getPosKeyDesc(AD_POS.POS_MID,ta)].innerHTML=TMPL.tmpl(cpc_a_tpl,{
type:"",
ticket:"",
url:"",
rl:"",
aid:"",
pt:"",
traceid:"",
group_id:"",
apurl:"",
is_cpm:"",
pos_type:"",
dest_type:"",
exp_obj:{
btn_text:"按钮"
},
image_url:"https://mmbiz.qlogo.cn/mmbiz_png/cVgP5bCElFiaPhsbHe4ctnlUllMCDCEIJib69wX3BUX42XagNypd2JcgyEiaoFRu4KicKF3avfRgVnWPABVTjtPRwQ/0?wx_fmt=png"
});
}
}
function _parseExpCpc(e){
var a=e.product_type,t={
icon_pos:"",
btn_text:"去逛逛",
price:"",
sale_text:""
};
if(5==e.watermark_type&&(t.btn_text="查看详情"),29===a||31===a?t.btn_text="查看详情":a===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||a===AD_TYPE.IOS_APP_PRODUCT_TYPE?t.btn_text=a===AD_TYPE.IOS_APP_PRODUCT_TYPE?"查看应用":"下载应用":30===a?t.btn_text="去逛逛":a===AD_TYPE.ADD_CONTACT_PRODUCT_TYPE?t.btn_text=e.biz_info.is_subscribed?"查看公众号":"关注公众号":a===AD_TYPE.MINI_GAME_PRODUCT_TYPE&&(t.btn_text="进入小游戏"),
e.dest_type===AD_CONFIG.AD_DEST_TYPE.CANVAS_AD_DEST_TYPE&&(t.btn_text="查看详情"),e.cpc_exp_info&&e.cpc_exp_info.exp_content){
var i=e.cpc_exp_info.exp_content;
try{
for(var _=JSON.parse(i.replace(/&quot;/g,'"')),n=-1,p=0;p<_.aid_list.length;p++)_.aid_list[p].aid==e.aid&&(n=p);
n>-1&&(t.icon_pos=_.icon_pos||"",t.btn_text=_.btn_text||t.btn_text,t.price=_.aid_list[n].price,
t.sale_text=_.aid_list[n].sale_text,window.__addIdKeyReport("68064",15));
}catch(o){
window.__addIdKeyReport("68064",16);
}
}
return e.exp_obj=t,e;
}
function seeAds(){
var adDatas=window.adDatas;
if(adDatas&&adDatas.num>0){
var onScroll=utils.debounce(function(){
var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
for(var i in adDatas.ads)!function(pos_key){
var gdt_a=gdt_as[pos_key];
if(gdt_a=!!gdt_a&&gdt_a[0],gdt_a&&gdt_a.dataset&&gdt_a.dataset.apurl){
var aInfo=adDatas.ads[pos_key].a_info,gid=gdt_a.dataset.gid,tid=gdt_a.dataset.tid,aid=gdt_a.dataset.aid,apurl=gdt_a.dataset.apurl,is_cpm=1*gdt_a.dataset.is_cpm,ads=adDatas.ads,a_info=ads[pos_key].a_info||{},exp_info=a_info.exp_info||{},exp_id=exp_info.exp_id||"",exp_value=exp_info.exp_value||[],pos_type=aInfo.pos_type,offsetTop=offset.getOffsetTop(el_gdt_areas[pos_key]),adHeight=el_gdt_areas[pos_key].offsetHeight,adOffsetTop=offsetTop+gdt_a.offsetTop,gh_id="",pt=aInfo.pt,intoView=scrollTop>offsetTop-innerHeight&&offsetTop+adHeight>scrollTop,signData={
click_pos:"",
rl:encodeURIComponent(a_info.rl),
__biz:biz,
pos_x:"",
pos_y:"",
press_interval:""
};
adDatas.ads[pos_key]&&aInfo&&aInfo.weapp_info&&aInfo.weapp_info.original_id&&(gh_id=aInfo.weapp_info.original_id),
adDatas.ads[pos_key].ad_engine=0;
try{
exp_value=JSON.stringify(exp_value);
}catch(e){
exp_value="[]";
}
if(-1!=apurl.indexOf("ad.wx.com")&&(adDatas.ads[pos_key].ad_engine=1),intoView?showTime.startShow(aInfo):showTime.stopShow(aid),
!ping_apurl[pos_key]&&intoView){
ping_apurl[pos_key]=!0;
var report_arg="trace_id="+tid+"&product_type="+pt+"&logtype=2&url="+encodeURIComponent(location.href)+"&apurl="+encodeURIComponent(apurl);
tid&&mmversion.gtVersion("6.3.22",!0)&&JSAPI.invoke("adDataReport",{
ad_info:report_arg
},function(){}),log("[Ad] seeAd, tid="+tid+", aid="+aid+", pos_type="+pos_type),
Sign.createSign(signData,function(adSignData,adSignK1,adSignK2,signMd5,viewidKeyObj){
var reportOriginUrl=urlParser.join("/mp/advertisement_report",{
report_type:1,
tid:tid,
aid:aid,
gh_id:gh_id,
adver_group_id:gid,
apurl:encodeURIComponent(apurl),
__biz:biz,
ascene:encodeURIComponent(window.ascene||-1),
pos_type:pos_type,
exp_id:exp_id,
exp_value:exp_value,
r:Math.random()
},!0);
ajax({
url:utils.joinSignParam(reportOriginUrl,{
adSignData:adSignData,
adSignK1:adSignK1,
adSignK2:adSignK2,
signMd5:signMd5,
viewidKeyObj:viewidKeyObj
}),
success:function success(res){
log("[Ad] seeAd report success, tid="+tid+", aid="+aid+", pos_type="+pos_type);
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret?ping_apurl[pos_key]=!1:ping_apurl.pos_0&&ping_apurl.pos_1;
},
error:function(){
log("[Ad] seeAd report error, tid="+tid+", aid="+aid+", pos_type="+pos_type),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_27_1";
},
async:!0
}),utils.reportUrlLength(adSignData,adSignK1,adSignK2,signMd5,viewidKeyObj,{
pos_type:pos_type,
tid:tid,
aid:aid
},reportOriginUrl);
});
}
var ping_cpm_apurl_obj=ping_cpm_apurl[pos_key];
if(is_cpm&&!ping_cpm_apurl_obj.hasPing){
var rh=.5;
scrollTop+innerHeight>=adOffsetTop+adHeight*rh&&adOffsetTop+adHeight*(1-rh)>=scrollTop?3==pos_type?(ping_cpm_apurl_obj.hasPing=!0,
Sign.createSign(signData,function(adSignData,adSignK1,adSignK2,signMd5,viewidKeyObj){
var reportOriginUrl=urlParser.join("/mp/advertisement_report",{
report_type:1,
tid:tid,
aid:aid,
gh_id:gh_id,
adver_group_id:gid,
apurl:encodeURIComponent(apurl+"&viewable=true"),
__biz:biz,
ascene:encodeURIComponent(window.ascene||-1),
pos_type:pos_type,
r:Math.random()
},!0);
ajax({
url:utils.joinSignParam(reportOriginUrl,{
adSignData:adSignData,
adSignK1:adSignK1,
adSignK2:adSignK2,
signMd5:signMd5,
viewidKeyObj:viewidKeyObj
}),
mayAbort:!0,
success:function success(res){
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret&&(ping_cpm_apurl_obj.hasPing=!1);
},
async:!0
}),utils.reportUrlLength(adSignData,adSignK1,adSignK2,signMd5,viewidKeyObj,{
pos_type:pos_type,
tid:tid,
aid:aid
},reportOriginUrl);
})):ping_cpm_apurl_obj.clk||(ping_cpm_apurl_obj.clk=setTimeout(function(){
ping_cpm_apurl_obj.hasPing=!0,Sign.createSign(signData,function(adSignData,adSignK1,adSignK2,signMd5,viewidKeyObj){
var reportOriginUrl=urlParser.join("/mp/advertisement_report",{
report_type:1,
tid:tid,
aid:aid,
gh_id:gh_id,
adver_group_id:gid,
apurl:encodeURIComponent(apurl+"&viewable=true"),
__biz:biz,
ascene:encodeURIComponent(window.ascene||-1),
pos_type:pos_type,
exp_id:exp_id,
exp_value:exp_value,
r:Math.random()
},!0);
ajax({
url:utils.joinSignParam(reportOriginUrl,{
adSignData:adSignData,
adSignK1:adSignK1,
adSignK2:adSignK2,
signMd5:signMd5,
viewidKeyObj:viewidKeyObj
}),
mayAbort:!0,
success:function success(res){
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret&&(ping_cpm_apurl_obj.hasPing=!1);
},
async:!0
}),utils.reportUrlLength(adSignData,adSignK1,adSignK2,signMd5,viewidKeyObj,{
pos_type:pos_type,
tid:tid,
aid:aid
},reportOriginUrl);
});
},1001)):3!=pos_type&&ping_cpm_apurl_obj.clk&&(clearTimeout(ping_cpm_apurl_obj.clk),
ping_cpm_apurl_obj.clk=null);
}
var allReport=!0;
if(107==pt||108==pt||110==pt)for(var i=0;i<see_ad_detail_report.length;i++)if(see_ad_detail_report[i])allReport=!1;else{
var report_url=location.protocol+"//mp.weixin.qq.com/mp/ad_report?action=see_report&aid="+aid+"&tid="+tid;
if((0==i&&scrollTop+innerHeight>offsetTop+1||1==i&&scrollTop+innerHeight>offsetTop+.5*adHeight||2==i&&scrollTop+innerHeight>offsetTop+adHeight)&&((new Image).src=report_url+"&seepos="+(i+1)+"&report_type=0",
see_ad_detail_report[i]=!0),i>=3)if(scrollTop+innerHeight>offsetTop&&offsetTop+adHeight>scrollTop){
if(see_ad_detail_first_see_time>0){
var t=0;
3==i&&(t=500),4==i&&(t=1e3),5==i&&(t=2e3),+new Date-see_ad_detail_first_see_time>t?((new Image).src=report_url+"&seetime="+t+"&report_type=1",
see_ad_detail_report[i]=!0):window.setTimeout(function(){
seeAds();
},t);
}
0==see_ad_detail_first_see_time&&(see_ad_detail_first_see_time=+new Date);
}else see_ad_detail_first_see_time=0;
}
}
}(i);
},50);
DomEvent.on(window,"scroll",onScroll),onScroll();
}
}
function ad_click(e,a,t,i,_,n,p,o,r,d,s,l,c,m,u,f,g,y,D){
if(!has_click[_]){
has_click[_]=!0;
{
var P=document.getElementById("loading_"+_);
g.product_type;
}
P&&(P.style.display="inline");
var v=g.exp_info||{},A=v.exp_id||"",T=v.exp_value||[];
try{
T=JSON.stringify(T);
}catch(E){
T="[]";
}
var b="";
l&&l.weapp_info&&l.weapp_info.original_id&&(b=l.weapp_info.original_id),AdClickReport({
click_pos:1,
report_type:2,
type:e,
exp_id:A,
exp_value:T,
url:encodeURIComponent(a),
tid:_,
aid:o,
rl:encodeURIComponent(t),
__biz:biz,
pos_type:d,
pt:r,
pos_x:c,
pos_y:m,
ad_w:u,
ad_h:f,
gh_id:b,
press_interval:window.__a_press_interval||-1
},function(){
if(has_click[_]=!1,P&&(P.style.display="none"),g.app_info){
var t=handleApp(a,_,idx,mid,biz,r,o,s,d,l,g,n,y);
if(t)return;
}
if(isCanvasAd(g))return void utils.openCanvasAd({
canvasId:g.canvas_info.canvas_id,
adInfoXml:g.canvas_info.ad_info_xml,
pos_type:d,
report_param:y,
url:a
});
if(D)if(g.dest_type===AD_CONFIG.AD_DEST_TYPE.OUTER_DEST_TYPE)handleH5(a,_,idx,mid,biz,r,o,s,d,l,g);else if(g.dest_type===AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE)Wxopen_card.openWxopen(l);else if(g.dest_type===AD_CONFIG.AD_DEST_TYPE.AD_DEST_TYPE)openUrlWithExtraWebview(a);else{
if(g.dest_type===AD_CONFIG.AD_DEST_TYPE.WECHAT_SHOP_DEST_TYPE)return void openUrlWithExtraWebview(urlParser.join(a,{
outer_id:l.outer_id
}));
if(g.dest_type===AD_CONFIG.AD_DEST_TYPE.BIZ_DEST_TYPE&&g.product_type==AD_CONFIG.AD_TYPE.CARD_PRODUCT_TYPE)return void Card.openCardDetail(l.card_id,l.card_ext,l);
console.info("[广告新协议兜底跳转]",g),openUrlWithExtraWebview(a);
}else if("5"==e)openUrlWithExtraWebview("/mp/profile?source=from_ad&tousername="+a+"&ticket="+n+"&uin="+uin+"&key="+key+"&__biz="+biz+"&mid="+mid+"&idx="+idx+"&tid="+_);else{
if("105"==r&&l)return void Card.openCardDetail(l.card_id,l.card_ext,l);
if("106"==r&&l)return void openUrlWithExtraWebview(urlParser.join(a,{
outer_id:l.outer_id
}));
if("118"==r||"119"==r||"120"==r)return void Wxopen_card.openWxopen(l);
if(g.dest_type===AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE)return void Wxopen_card.openWxopen(l);
if(-1==a.indexOf("mp.weixin.qq.com"))a="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(a);else if(-1==a.indexOf("mp.weixin.qq.com/s")&&-1==a.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var i={
source:4,
tid:_,
idx:idx,
mid:mid,
appuin:biz,
pt:r,
aid:o,
ad_engine:s,
pos_type:d
},p=window.__report;
if(("104"==r||"113"==r||"114"==r||"122"==r)&&l||-1!=a.indexOf("mp.weixin.qq.com/mp/ad_app_info")){
var c="",m="";
l&&(c=l.pkgname&&l.pkgname.replace(/\./g,"_"),m=l.channel_id||""),i={
source:4,
tid:_,
traceid:_,
mid:mid,
idx:idx,
appuin:biz,
pt:r,
channel_id:m,
aid:o,
engine:s,
pos_type:d,
pkgname:c
};
}
a=urlParser.join(a,i),(0==a.indexOf("http://mp.weixin.qq.com/promotion/")||0==a.indexOf("https://mp.weixin.qq.com/promotion/"))&&(a=urlParser.join(a,{
traceid:_,
aid:o,
engine:s
})),!o&&p&&p(80,a);
}
openUrlWithExtraWebview(a);
}
});
}
}
function bindAdOperation(){
seeAds();
for(var e in adDatas.ads)!function(e){
var a=el_gdt_areas[e];
if(!a)return!1;
if(!a.getElementsByClassName&&a.style)return a.style.display="none",!1;
var t=a.getElementsByClassName("js_ad_link")||[],i=adDatas.ads[e];
if(i){
var _,n,p=i.adData,o=i.a_info,r=o.pos_type,d=o.pos_type,s=i.ad_engine,l=a.getElementsByClassName("js_ad_opt_list_btn_"+r),c=a.getElementsByClassName("js_complain_btn_"+r);
if(2==o.use_new_protocol){
var m=a.getElementsByClassName("js_material_"+r),u=a.getElementsByClassName("js_ad_action_"+r);
if(p){
p.adid=window.adid||p.adid||p.aid;
var f="&tid="+p.traceid+"&uin="+uin+"&key="+key+"&ticket="+(p.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+p.adid+"&ad_engine="+s+"&pos_type="+d+"&r="+Math.random();
}
if(m.length>0&&(n=p.tid||o.traceid,_=o.aid,DomEvent.on(m[0],"click",function(e){
var a=o,t=!!e&&e.target;
if(o&&o.has_installed&&("104"==p.pt||"113"==p.pt||"114"==p.pt||"2"==p.pt)?utils.report(114,f):"103"==p.pt||"111"==p.pt||"112"==p.pt?utils.report(23,f):("104"==p.pt||"113"==p.pt||"114"==p.pt)&&utils.report(25,f),
!(!a||3===d||-1!==t.className.indexOf("js_muted_btn")||videoAdMap[a.aid]&&videoAdMap[a.aid].adPlayer&&"play"!==videoAdMap[a.aid].adPlayer.adVideoStatus)){
var i,l,c,u,g=a.type,y=a.url,D=a.rl,P=a.apurl,v=a.ticket,A=a.group_id,T=a.pt,E=o.use_new_protocol;
return i=position.getX(t,"js_material_"+r)+e.offsetX,l=position.getY(t,"js_material_"+r)+e.offsetY,
c=m[0].clientWidth,u=m[0].clientHeight,ad_click(g,y,D,P,n,v,A,_,T,d,s,p,i,l,c,u,o,f,E),
log("[Ad] ad_click: type="+g+", url="+y+", rl="+D+", apurl="+P+", traceid="+n+", ticket="+v+", group_id="+A+", aid="+_+", pt="+T+", pos_type="+d+", ad_engine="+s),
!1;
}
})),u.length>0&&o.button_action&&3!=o.pos_type)if(o.product_type===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||o.product_type===AD_TYPE.IOS_APP_PRODUCT_TYPE){
var g=require("a/app_card.js"),y=15,D=p.pkgname&&p.pkgname.replace(/\./g,"_");
new g({
btn:u[0],
adData:p,
report_param:f,
pos_type:d,
url_scheme:p.url_scheme,
via:[p.traceid,p.adid,D,source,y,s].join("."),
ticket:p.ticket,
appdetail_params:["&aid="+p.adid,"traceid="+p.traceid,"pkgname="+D,"source="+source,"type="+y,"engine="+s,"appuin="+biz,"pos_type="+d,"ticket="+p.ticket,"scene="+scene].join("&"),
engine:s,
percentStatus:function(a,t){
var i=ad_render_object[e].getData();
i.percent=t,"downloading"==a?i.btn_text="暂停":"paused"==a?i.btn_text="继续":"installed"==a?(i.percent=0,
i.btn_text="已安装"):"downloaded"==a?(i.percent=0,i.btn_text="安装"):"gotodetail"==a?(i.percent=0,
i.btn_text=117==parseInt(o.crt_size)||354==parseInt(o.crt_size)||355==parseInt(o.crt_size)||568==parseInt(o.crt_size)?"进入":"进入应用"):(i.percent=0,
i.btn_text=117==parseInt(o.crt_size)||354==parseInt(o.crt_size)||355==parseInt(o.crt_size)||568==parseInt(o.crt_size)?"进入":"进入应用"),
ad_render_object[e].updateData(i);
}
});
}else if(o.product_type==AD_TYPE.ADD_CONTACT_PRODUCT_TYPE){
var P=require("a/profile.js");
p.adid=window.adid||p.adid||p.aid,new P({
btnProfile:u[0],
adData:p,
pos_type:d,
report_param:f,
aid:p.adid,
ad_engine:s
});
}else o.product_type==AD_TYPE.CARD_PRODUCT_TYPE?new Card({
btn:u[0],
adData:p,
report_param:f,
pos_type:d
}):o.product_type==AD_TYPE.WECHATCARD_PRODUCT_TYPE?new MpShop({
btn:u[0],
adData:p,
report_param:f,
pos_type:d
}):DomEvent.on(u[0],"click",function(e){
var a=p,t=!!e&&e.target,i=a.type,_=o.button_action.jump_url,n=a.rl,l=a.apurl,c=a.tid||o.traceid,m=a.ticket,f=a.group_id,g=a.aid,y=a.pt,D=o.use_new_protocol;
if(console.info("[广告新协议点击素材]",o.dest_type,o.product_type),p){
p.adid=window.adid||p.adid||p.aid;
var P="&tid="+p.traceid+"&uin="+uin+"&key="+key+"&ticket="+(p.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+p.adid+"&ad_engine="+s+"&pos_type="+d+"&r="+Math.random();
}
var v,A,T,E;
return v=position.getX(t,"js_ad_action_"+r)+e.offsetX,A=position.getY(t,"js_ad_action_"+r)+e.offsetY,
T=u[0].clientWidth,E=u[0].clientHeight,ad_click(i,_,n,l,c,m,f,g,y,d,s,p,v,A,T,E,o,P,D),
log("[Ad] ad_click: type="+i+", url="+_+", rl="+n+", apurl="+l+", traceid="+c+", ticket="+m+", group_id="+f+", aid="+g+", pt="+y+", pos_type="+d+", ad_engine="+s),
!1;
});
}else for(var v=0,A=t.length;A>v;++v)!function(e,a){
var i=t[e],p=i.dataset;
if(p&&3!=o.pos_type){
var r=p.type,l=p.url,c=p.rl,m=p.apurl,u=p.ticket,f=p.group_id,g=p.pt,y=o.use_new_protocol,D=!0;
n=p.tid,_=p.aid,(y&&(o.product_type===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||o.product_type===AD_TYPE.IOS_APP_PRODUCT_TYPE)||115===g)&&(D=!1),
o.pos_type===AD_POS.POS_MID&&(D=!1),DomEvent.on(i,"click",function(e){
var t=!!e&&e.target,i=[AD_TYPE.ANDROID_APP_PRODUCT_TYPE,AD_TYPE.IOS_APP_PRODUCT_TYPE,AD_TYPE.ADD_CONTACT_PRODUCT_TYPE];
if(!t||!t.className||d==AD_POS.POS_MID&&a&&-1==i.toString().indexOf(a.product_type)||-1==t.className.indexOf("js_ad_btn")&&-1==t.className.indexOf("js_btn_process")&&-1==t.className.indexOf("js_muted_btn")&&-1==t.className.indexOf("js_poster_cover")&&-1==t.className.indexOf("js_ad_opt_list_btn")&&-1==t.className.indexOf("js_complain_btn")&&-1==t.className.indexOf("js_view_profile")&&-1==t.className.indexOf("js_add_contact")){
if(a){
a.adid=window.adid||a.adid||a.aid;
var p="&tid="+a.traceid+"&uin="+uin+"&key="+key+"&ticket="+(a.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+a.adid+"&ad_engine="+s+"&pos_type="+d+"&r="+Math.random();
o&&o.has_installed&&("104"==a.pt||"113"==a.pt||"114"==a.pt||"2"==a.pt)?utils.report(114,p):"103"==a.pt||"111"==a.pt||"112"==a.pt?utils.report(23,p):("104"==a.pt||"113"==a.pt||"114"==a.pt)&&utils.report(25,p);
}
var D,P,v,A;
return D=position.getX(t,"js_ad_link")+e.offsetX,P=position.getY(t,"js_ad_link")+e.offsetY,
v=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
A=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight,
ad_click(r,l,c,m,n,u,f,_,g,d,s,a,D,P,v,A,o,p,y),log("[Ad] ad_click: type="+r+", url="+l+", rl="+c+", apurl="+m+", traceid="+n+", ticket="+u+", group_id="+f+", aid="+_+", pt="+g+", pos_type="+d+", ad_engine="+s),
!1;
}
},D),DomEvent.on(i,"touchstart",function(){
window.__a_press_interval=+new Date;
}),DomEvent.on(i,"touchend",function(){
window.__a_press_interval=+new Date-window.__a_press_interval;
});
}
}(v,p);
if(l[0]&&DomEvent.on(l[0],"click",function(){
if(parseInt(window.can_see_complaint)){
var e=l[0].getElementsByClassName("js_ad_opt_list_"+o.pos_type);
utils.adOptReport(0,o.pos_type,n,_),e&&e[0]&&(e[0].style.display="none"==e[0].style.display?"block":"none");
}
return!1;
}),c[0]&&DomEvent.on(c[0],"click",function(){
var e="https://mp.weixin.qq.com/promotion/res/htmledition/mobile/html/feedback.html?aid="+_+"&traceid="+n+"&source="+o.pos_type+"&biz="+window.biz+"&material_id="+JSON.stringify(o.material_id_list);
return utils.adOptReport(1,o.pos_type,n,_),mmversion.isWp||mmversion.isIOS||mmversion.isAndroid?JSAPI.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(a){
-1==a.err_msg.indexOf("ok")&&(location.href=e);
}):openUrlWithExtraWebview(e),!1;
}),p&&2!=o.use_new_protocol){
p.adid=window.adid||p.adid||p.aid;
var T=o.exp_info||{},E=T.exp_id||"",b=T.exp_value||[];
try{
b=JSON.stringify(b);
}catch(h){
b="[]";
}
var f="&tid="+p.traceid+"&uin="+uin+"&key="+key+"&ticket="+(p.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+p.adid+"&ad_engine="+s+"&pos_type="+d+"&exp_id="+E+"&exp_value="+b+"&r="+Math.random();
if(p.report_param=f,p.use_new_protocol){
if(o.product_type===AD_TYPE.ANDROID_APP_PRODUCT_TYPE||o.product_type===AD_TYPE.IOS_APP_PRODUCT_TYPE){
var g=require("a/app_card.js"),y=15,D=p.pkgname&&p.pkgname.replace(/\./g,"_"),w=document.getElementById("js_ad_btn_"+d);
new g({
btn:w,
adData:p,
report_param:f,
pos_type:d,
url_scheme:p.url_scheme,
via:[p.traceid,p.adid,D,source,y,s].join("."),
ticket:p.ticket,
appdetail_params:["&aid="+p.adid,"traceid="+p.traceid,"pkgname="+D,"source="+source,"type="+y,"engine="+s,"appuin="+biz,"pos_type="+d,"ticket="+p.ticket,"scene="+scene].join("&"),
engine:s
});
}else if(o.product_type==AD_TYPE.ADD_CONTACT_PRODUCT_TYPE){
var P=require("a/profile.js");
new P({
btnProfile:document.getElementById("js_ad_btn_"+d),
btnViewProfile:document.getElementById("js_view_profile_"+d),
btnAddContact:document.getElementById("js_add_contact_"+d),
adData:p,
pos_type:d,
report_param:f,
aid:p.adid,
ad_engine:s,
a_info:o
});
}
9==o.material_type&&(o.report_param=f,videoAdMap[o.aid]=new VideoAd(o));
}else{
if("100"==p.pt||"115"==p.pt){
var P=require("a/profile.js");
return void new P({
btnViewProfile:document.getElementById("js_view_profile_"+d),
btnAddContact:document.getElementById("js_add_contact_"+d),
adData:p,
pos_type:d,
report_param:f,
aid:p.adid,
ad_engine:s,
a_info:o
});
}
if("102"==p.pt){
var x=require("a/android.js"),y=15,D=p.pkgname&&p.pkgname.replace(/\./g,"_");
return void new x({
btn:document.getElementById("js_app_action_"+d),
adData:p,
report_param:f,
task_ext_info:[p.adid,p.traceid,D,source,y,s].join("."),
via:[p.traceid,p.adid,D,source,y,s].join(".")
});
}
if("101"==p.pt){
var O=require("a/ios.js");
return void new O({
btn:document.getElementById("js_app_action_"+d),
adData:p,
ticket:p.ticket,
report_param:f
});
}
if("105"==p.pt)return void new Card({
btn:document.getElementById("js_card_action_"+d),
adData:p,
report_param:f,
pos_type:d
});
if("106"==p.pt)return void new MpShop({
btn:document.getElementById("js_shop_action_"+d),
adData:p,
report_param:f,
pos_type:d
});
if("103"==p.pt||"104"==p.pt||"111"==p.pt||"112"==p.pt||"113"==p.pt||"114"==p.pt||"121"==p.pt||"122"==p.pt){
var g=require("a/app_card.js"),y=15,D=p.pkgname&&p.pkgname.replace(/\./g,"_");
return void new g({
btn:document.getElementById("js_appdetail_action_"+d),
js_app_rating:document.getElementById("js_app_rating_"+d),
adData:p,
report_param:f,
pos_type:d,
url_scheme:p.url_scheme,
via:[p.traceid,p.adid,D,source,y,s].join("."),
ticket:p.ticket,
appdetail_params:["&aid="+p.adid,"traceid="+p.traceid,"pkgname="+D,"source="+source,"type="+y,"engine="+s,"appuin="+biz,"pos_type="+d,"ticket="+p.ticket,"scene="+scene].join("&"),
engine:s
});
}
if("108"==p.pt||"109"==p.pt||"110"==p.pt||"116"==p.pt||"117"==p.pt){
var I=require("a/sponsor.js");
new I({
adDetailBtn:document.getElementById("js_ad_detail"),
adMoreBtn:document.getElementById("js_ad_more"),
adAbout:document.getElementById("js_btn_about"),
adImg:document.getElementById("js_main_img"),
adMessage:document.getElementById("js_ad_message"),
adVideo:document.getElementById("js_video_container"),
adComplain:document.getElementById("js_btn_complain"),
adData:p,
a_info:o,
pos_type:d,
report_param:f
});
}
"118"==o.pt&&(p.report_param=f),"125"==o.pt&&(o.report_param=f,videoAdMap[o.aid]=new VideoAd(o));
}
}
}
}(e);
}
function isCanvasAd(e){
return!!e.canvas_info&&e.dest_type===AD_CONFIG.AD_DEST_TYPE.CANVAS_AD_DEST_TYPE;
}
function launchIosAppBackup(e,a,t,i,_,n,p,o,r,d,s,l,c){
return isCanvasAd(s)?void utils.openCanvasAd({
canvasId:s.canvas_info.canvas_id,
adInfoXml:s.canvas_info.ad_info_xml,
pos_type:r,
report_param:c,
url:e
}):s.dest_type!==AD_CONFIG.AD_DEST_TYPE.OUTER_DEST_TYPE||utils.isItunesLink(e)?s.dest_type===AD_CONFIG.AD_DEST_TYPE.WECHAT_APPLET_DEST_TYPE?void Wxopen_card.openWxopen(d):s.dest_type===AD_CONFIG.AD_DEST_TYPE.WECHAT_SHOP_DEST_TYPE?void openUrlWithExtraWebview(urlParser.join(e,{
outer_id:d.outer_id
})):void utils.openWebAppStore(s.app_info.appinfo_url,l):void handleH5(e,a,t,i,_,n,p,o,r,d,s);
}
function handleApp(e,a,t,i,_,n,p,o,r,d,s,l,c){
console.info("[广告处理下载事件]",s);
var m=arguments;
if(s.has_installed&&!utils.isItunesLink(s.app_info.appinfo_url)&&s.app_info.url_scheme)return JSAPI.invoke("launchApplication",{
schemeUrl:s.app_info.url_scheme
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=s.app_info.url_scheme);
}),!0;
if(utils.isItunesLink(s.app_info.appinfo_url)){
if(s.app_info.url_scheme&&mmversion.gtVersion("6.5.6",!0)){
var u=1,f=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
f&&f[1]&&parseInt(f[1].split("_")[0],10)>=12&&(u=0);
var g={
schemeUrl:s.app_info.url_scheme,
messageExt:s.app_info.url_scheme,
appID:s.app_info.open_platform_appid
};
s.product_type===AD_TYPE.IOS_APP_PRODUCT_TYPE&&utils.extend(g,{
installSchemeUrl:s.app_info.appinfo_url,
installAction:u
}),JSAPI.invoke("launchApplication",g,function(e){
(-1===e.err_msg.indexOf("ok")||"fail"===e.launchInstallResult)&&launchIosAppBackup.apply(null,m);
});
}else launchIosAppBackup.apply(null,m);
return!0;
}
if(s.product_type!==AD_TYPE.ANDROID_APP_PRODUCT_TYPE&&s.product_type!==AD_TYPE.IOS_APP_PRODUCT_TYPE)return!1;
if(isCanvasAd(s))return utils.openCanvasAd({
canvasId:s.canvas_info.canvas_id,
adInfoXml:s.canvas_info.ad_info_xml,
pos_type:r,
report_param:c,
url:e
}),!0;
if(-1==e.indexOf("mp.weixin.qq.com"))e="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e);else if(-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var y={
source:4,
tid:a,
idx:t,
mid:i,
appuin:_,
pt:n,
aid:p,
ad_engine:o,
pos_type:r
},D=window.__report;
if(d||-1!=e.indexOf("mp.weixin.qq.com/mp/ad_app_info")){
var P="",v="";
d&&(P=d.pkgname&&d.pkgname.replace(/\./g,"_"),v=d.channel_id||""),y={
source:4,
tid:a,
traceid:a,
mid:i,
idx:t,
appuin:_,
pt:n,
channel_id:v,
aid:p,
engine:o,
pos_type:r,
pkgname:P
};
}
e=urlParser.join(e,y),(0==e.indexOf("http://mp.weixin.qq.com/promotion/")||0==e.indexOf("https://mp.weixin.qq.com/promotion/"))&&(e=urlParser.join(e,{
traceid:a,
aid:p,
engine:o
})),!p&&D&&D(80,e);
}
return openUrlWithExtraWebview(e),!0;
}
function handleH5(e,a,t,i,_,n,p,o,r,d,s){
if(console.info("[广告处理H5事件]",s),-1==e.indexOf("mp.weixin.qq.com"))e="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e);else if(-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var l={
source:4,
tid:a,
idx:t,
mid:i,
appuin:_,
pt:n,
aid:p,
ad_engine:o,
pos_type:r
},c=window.__report;
if(("104"==n||"113"==n||"114"==n||"122"==n)&&d||-1!=e.indexOf("mp.weixin.qq.com/mp/ad_app_info")){
var m="",u="";
d&&(m=d.pkgname&&d.pkgname.replace(/\./g,"_"),u=d.channel_id||""),l={
source:4,
tid:a,
traceid:a,
mid:i,
idx:t,
appuin:_,
pt:n,
channel_id:u,
aid:p,
engine:o,
pos_type:r,
pkgname:m
};
}
e=urlParser.join(e,l),(0==e.indexOf("http://mp.weixin.qq.com/promotion/")||0==e.indexOf("https://mp.weixin.qq.com/promotion/"))&&(e=urlParser.join(e,{
traceid:a,
aid:p,
engine:o
})),!p&&c&&c(80,e);
}
console.info("[广告H5落地页最终URL]",e),openUrlWithExtraWebview(e);
}
var mmversion=require("biz_wap/utils/mmversion.js"),Device=require("biz_wap/utils/device.js"),Sign=require("a/a_sign.js"),openUrl=require("biz_wap/utils/openUrl.js"),getParaList=require("biz_common/utils/get_para_list.js"),showTime=require("biz_wap/utils/show_time.js"),urlParser=require("biz_common/utils/url/parse.js"),DomEvent=require("biz_common/dom/event.js"),AdClickReport=require("a/a_report.js").AdClickReport,ajax=require("biz_wap/utils/ajax.js"),position=require("biz_wap/utils/position.js"),Card=require("a/card.js"),Wxopen_card=require("a/wxopen_card.js"),MpShop=require("a/mpshop.js"),JSAPI=require("biz_wap/jsapi/core.js"),TMPL=require("biz_common/tmpl.js"),a_tpl=require("a/a_tpl.html.js"),sponsor_a_tpl=require("a/sponsor_a_tpl.html.js"),cpc_a_tpl=require("a/cpc_a_tpl.html.js"),Class=require("biz_common/dom/class.js"),LS=require("biz_wap/utils/storage.js"),log=require("appmsg/log.js"),CrtManager=require("a/tpl/crt_tpl_manager.js"),classList=require("biz_common/dom/class.js"),AD_CONFIG=require("a/a_config.js"),VideoAd=require("a/video.js"),utils=require("a/a_utils.js"),offset=require("biz_common/dom/offset.js"),appDialogConfirm=require("a/appdialog_confirm.js"),globalAdDebug=!!urlParser.getQuery("mock")||!!urlParser.getQuery("rtx"),AD_TYPE=AD_CONFIG.AD_TYPE,AD_POS=AD_CONFIG.AD_POS,pos_type=window.pos_type||0,__report=window.__report,js_bottom_ad_area=document.getElementById("js_bottom_ad_area"),js_sponsor_ad_area=document.getElementById("js_sponsor_ad_area"),el_gdt_areas={
pos_3:js_sponsor_ad_area,
pos_0:js_bottom_ad_area
},adElCountMapByPos={},contentWrp=document.getElementById("js_content"),ad_render_object={
pos_3:null,
pos_0:null
},gdt_as={
pos_3:js_sponsor_ad_area.getElementsByClassName("js_ad_link"),
pos_0:js_bottom_ad_area.getElementsByClassName("js_ad_link")
},ping_apurl={
pos_0:!1,
pos_1:!1,
pos_3:!1
},ping_cpm_apurl={
pos_0:{},
pos_1:{},
pos_3:{}
},isScroll=!1,isSee=!1,openUrlWithExtraWebview=openUrl.openUrlWithExtraWebview,see_ad_detail_report=[!1,!1,!1,!1,!1,!1],see_ad_detail_first_see_time=0,innerHeight=window.innerHeight||document.documentElement.clientHeight,ad_engine=0;
window.adDatas={
ads:{},
num:0
};
var adDatas=window.adDatas,has_click={},videoAdMap={};
return initAdData(),{
checkNeedAds:checkNeedAds,
afterGetAdData:afterGetAdData
};
});define("rt/appmsg/getappmsgext.rt.js",[],function(){
"use strict";
return{
base_resp:{
ret:"number",
errmsg:"string",
wxtoken:"number"
},
advertisement_num:"number",
advertisement_info:[{
hint_txt_R:"string",
url_R:"string",
type_R:"string",
rl_R:"string",
apurl_R:"string",
traceid_R:"string",
group_id_R:"string",
ticket:"string",
aid:"string",
pt:"number",
image_url:"string",
ad_desc:"string",
biz_appid:"string",
pos_type:"number",
watermark_type:"number",
logo:"string",
app_info:{},
biz_info:{},
card_info:{}
}],
comment_enabled:"number",
appmsgticket:{
ticket:"string"
},
self_head_imgs:"string",
appmsgstat:{
ret:"number",
show:"boolean",
is_login:"boolean",
like_num:"number",
liked:"boolean",
read_num:"number",
real_read_num:"number"
},
timestamp:"number",
reward_total_count:"number",
reward_head_imgs:["string"]
};
});define("pages/video_communicate_adaptor.js",[],function(){
"use strict";
function t(){
window.addEventListener("message",e,!1),v();
}
function e(t){
var e;
if(t.origin?e=t.origin:t.originalEvent&&(e=t.originalEvent.origin),/^http(s)?\:\/\/mp\.weixin\.qq\.com$/.test(e)&&t.source){
var i=t.data;
if(i&&i.type){
if(!/^mpvideo_/.test(i.type))return;
var o=i.type.replace(/^mpvideo_/,"");
/^broadcast_/.test(o)?f.postMessageEvt.broadcast({
data:i.data,
type:o
}):f.postMessageEvt[o]&&f.postMessageEvt[o](i.data);
}
}
}
function i(t){
var e=t.type.replace(/^broadcast_/,""),i=a();
if(i.length>0)for(var n=0,d=i.length;d>n;n++){
var r=i[n];
o({
win:r.contentWindow,
type:e,
data:t.data
});
}
o({
win:window,
type:e,
data:t.data
});
}
function o(t){
var e=t.type;
/^mpvideo_/.test(e)||(e="mpvideo_"+e);
var i={
data:t.data,
type:e
};
t.win.postMessage(i,document.location.protocol+"//mp.weixin.qq.com");
}
function n(t){
for(var e=a({
vid:t.vid
}),i=0,n=e.length;n>i;i++){
var d=e[i];
d.style.display="";
var r=d.parentNode,v=r.querySelectorAll('.js_img_loading[data-vid="'+t.vid+'"]');
if(v&&v.length>0)for(var i=0,n=v.length;n>i;i++)r.removeChild(v[i]);
o({
type:"afterRemoveLoading",
win:d.contentWindow
});
}
}
function a(t){
t=t||{};
for(var e=document.getElementsByTagName("iframe"),i=[],o=0,n=e.length;n>o;o++){
var a=e[o],d=a.getAttribute("src");
if(d&&-1!=d.indexOf("/mp/videoplayer")){
if("undefined"!=typeof t.vid){
var r=d.match(/[\?&]vid\=([^&]*)/);
if(!r||!r[1]||r[1]!=t.vid)continue;
}
i.push(a);
}
}
return i;
}
function d(t){
if(t.height){
var e=a({
vid:t.vid
});
if(0!=e.length){
var i=e[0],o=i.offsetHeight+1*t.height;
i.setAttribute("height",o),i.setAttribute("data-additionalheight",t.height),i.style.setProperty&&i.style.setProperty("height",o+"px","important");
}
}
}
function r(t){
f.videoInfo[t.vid]||(f.videoInfo[t.vid]={}),f.videoInfo[t.vid].ori_status=t.ori_status,
f.videoInfo[t.vid].hit_bizuin=t.hit_bizuin,f.videoInfo[t.vid].hit_vid=t.hit_vid;
}
function v(){
"function"==typeof window.__getVideoWh&&window.addEventListener("resize",function(){
for(var t=a(),e=0,i=t.length;i>e;e++){
var o=t[e];
setTimeout(function(t){
return function(){
var e=window.__getVideoWh(t),i=e.w,o=e.h,n=1*t.getAttribute("data-additionalheight");
n&&(o+=n),t.setAttribute("width",i),t.setAttribute("height",o),t.style.setProperty&&(t.style.setProperty("width",i+"px","important"),
t.style.setProperty("height",o+"px","important"));
};
}(o),50);
}
},!1);
}
function s(){
return f.videoInfo;
}
var f={
videoInfo:{},
postMessageEvt:{
broadcast:i,
removeVideoLoading:n,
addVideoIframeHeight:d,
videoInited:r
}
};
return t(),{
getVideoInfo:s
};
});define("biz_wap/utils/ajax_wx.js",["biz_common/utils/string/html.js","biz_common/utils/url/parse.js","biz_wap/jsapi/core.js"],function(e){
"use strict";
function t(e){
console.log(e),/^(http:\/\/|https:\/\/|\/\/)/.test(e.url)?/^\/\//.test(e.url)&&(e.url="https:"+e.url):e.url="https://mp.weixin.qq.com/"+e.url.replace(/^\//,""),
e.url+=-1==e.url.indexOf("?")?"?fasttmplajax=1":"&fasttmplajax=1","html"==e.f||-1!=e.url.indexOf("?f=json")&&-1!=e.url.indexOf("&f=json")||(e.url+="&f=json");
var t=null;
if("object"==typeof e.data){
var o=e.data;
t=[];
for(var a in o)o.hasOwnProperty(a)&&t.push(a+"="+encodeURIComponent(o[a]));
t=t.join("&");
}else t="string"==typeof e.data?e.data:null;
console.log("before request");
var n=1,i=function(e,t){
return r.invoke("request",{
url:e.url,
method:e.type,
data:t,
header:{
Cookie:document.cookie
}
},function(o){
if(console.log("jsapiRequest",o.err_msg),o.err_msg.indexOf(":ok")>-1){
var a={};
if(o.data){
console.log(e.dataType),console.log(e);
try{
a="json"==e.dataType?JSON.parse(o.data):o.data;
}catch(l){
return console.error(l),void(e.error&&e.error({}));
}
}
var c={};
try{
c=JSON.parse(o.data);
}catch(l){}
c.base_resp&&"-3"==c.base_resp.ret&&n>0?(n--,r.invoke("updatePageAuth",{},function(r){
console.log("updatePageAuth",r),(new Image).src="https://mp.weixin.qq.com/mp/jsmonitor?idkey=112287_3_1",
r&&r.err_msg&&r.err_msg.indexOf(":ok")>-1?(window.top.pass_ticket=encodeURIComponent(s.getQuery("pass_ticket",r.fullUrl).html(!1).replace(/\s/g,"+")),
e.pass_ticket&&(e.pass_ticket=window.top.pass_ticket),i(e,t),(new Image).src="https://mp.weixin.qq.com/mp/jsmonitor?idkey=112287_4_1"):e.success&&e.success(a);
})):e.success&&e.success(a);
}else o.err_msg.indexOf("no permission")>-1?Ajax(e):e.error&&e.error({});
e.complete&&e.complete();
});
};
return i(e,t);
}
e("biz_common/utils/string/html.js");
var s=e("biz_common/utils/url/parse.js"),r=e("biz_wap/jsapi/core.js");
return t;
});define("biz_common/utils/respTypes.js",[],function(require,exports,module,alert){
"use strict";
var logList=[],log=function(r){
logList.push(r);
},printLog=function(){
for(var r=0,e=logList.length;e>r;++r)console.log("[RespType]"+logList[r]);
},isArray=function(r){
return"[object Array]"==Object.prototype.toString.call(r);
},getValueType=function(r){
return isArray(r)?"array":typeof r;
},parseRtDesc=function(r,e){
var t="mix",o=!1,c=e;
if(e){
var n="_R",s=e.indexOf(n),i=e.length-n.length;
o=-1!=s&&s==i,c=o?e.substring(0,i):e;
}
return"string"==typeof r?t=r:isArray(r)?t="array":"object"==typeof r&&(t="object"),
{
key:c,
type:t,
isRequired:o
};
},checkForArrayRtDesc=function(r,e){
if(!isArray(r))return!1;
for(var t=0,o=r.length;o>t;++t){
for(var c,n=r[t],s=0,i=0===e.length;c=e[s++];)if(checkForRtDesc(n,c)){
i=!0;
break;
}
if(!i)return!1;
}
return!0;
},checkForStringRtDesc=function(r,e){
var t=getValueType(r),o=parseRtDesc(e),c=o.type==t;
return c||log("miss match type : "+t+" !== "+o.type),c;
},checkForObjectRtDesc=function(r,e){
if("object"!=typeof r||isArray(r))return log("must be object"),!1;
var t=r,o=r;
for(var c in e)if(e.hasOwnProperty(c)){
var n=e[c],s=parseRtDesc(n,c),i=s.key;
o=t[i];
var u=getValueType(o);
if(s.isRequired&&void 0===o)return log("is required @key="+i),!1;
if(void 0!==o){
if(u!=s.type&&"mix"!=s.type)return log("miss match type : "+u+" !== "+s.type+" @key="+i),
!1;
if(("array"==u||"object"==u)&&"mix"!=s.type&&!checkForRtDesc(o,n))return!1;
}
}
return!0;
},checkForRtDesc=function(r,e){
return isArray(e)?checkForArrayRtDesc(r,e):"object"==typeof e?checkForObjectRtDesc(r,e):"string"==typeof e?checkForStringRtDesc(r,e):!1;
},check=function(json,rtDescs){
if("string"==typeof json)try{
json=eval("("+json+")");
}catch(e){
return log("parse json error"),!1;
}
if("object"!=typeof json)return log("must be object"),!1;
isArray(rtDesc)||(rtDescs=[rtDescs]);
for(var rtDesc,i=0;rtDesc=rtDescs[i++];)if(checkForRtDesc(json,rtDesc))return!0;
return!1;
};
return{
check:function(r,e){
logList=[];
try{
var t=check(r,e);
return t||printLog(),t;
}catch(o){
return logList.push("[rtException]"+o.toString()),printLog(),!1;
}
},
getMsg:function(){
return logList.join(";");
}
};
});define("biz_wap/utils/log.js",["biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js"],function(i){
"use strict";
var s=i("biz_wap/utils/mmversion.js"),e=i("biz_wap/jsapi/core.js");
return function(i,n,o){
"string"!=typeof i&&(i=JSON.stringify(i)),n=n||"info",o=o||function(){};
var t;
s.isIOS?t="writeLog":s.isAndroid&&(t="log"),t&&e.invoke(t,{
level:n,
msg:"[WechatFe]"+i
},o);
};
});define("sougou/index.js",["appmsg/emotion/emotion.js","biz_common/tmpl.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_common/utils/string/html.js","sougou/a_tpl.html.js","appmsg/cmt_tpl.html.js","appmsg/my_comment_tpl.html.js"],function(t){
"use strict";
function e(t){
var e=document.getElementById("js_cover"),n=[];
e&&n.push(e);
var o=document.getElementById("js_content");
if(o)for(var i=o.getElementsByTagName("img")||[],s=0,r=i.length;r>s;s++)n.push(i.item(s));
for(var a=[],s=0,r=n.length;r>s;s++){
var l=n[s],c=l.getAttribute("data-src")||l.getAttribute("src");
c&&(a.push(c),function(e){
m.on(l,"click",function(){
return"ios"==t?window.JSInvoker&&window.JSInvoker.openImageList&&window.JSInvoker.openImageList(JSON.stringify({
index:e,
array:a
})):window.JSInvoker&&JSInvoker.weixin_openImageList&&window.JSInvoker.weixin_openImageList(JSON.stringify({
index:e,
array:a
})),!1;
});
}(s));
}
}
var n=t("appmsg/emotion/emotion.js"),o=t("biz_common/tmpl.js"),m=(t("biz_wap/utils/ajax.js"),
t("biz_common/tmpl.js"),t("biz_common/dom/event.js"));
t("biz_common/utils/string/html.js");
t("sougou/a_tpl.html.js"),t("appmsg/cmt_tpl.html.js");
if(document.getElementById("js_report_article3")&&(document.getElementById("js_report_article3").style.display="none"),
document.getElementById("js_toobar3")&&(document.getElementById("js_toobar3").style.display="none"),
function(){
var e=t("appmsg/my_comment_tpl.html.js"),n=document.createElement("div");
n&&(n.innerHTML=o.tmpl(e,{}),document.body.appendChild(n));
}(),n.init(),navigator.userAgent.toLowerCase().match(/ios/)){
var i=navigator.userAgent.toLowerCase().match(/(?:sogousearch\/ios\/)(.*)/);
if(i&&i[1]){
var s=i[1].replace(/\./g,"");
parseInt(s)>422&&e("ios");
}
}else e("android");
window.onerror=function(t){
var e=new Image;
e.src="/mp/jsreport?key=86&content="+t+"&r="+Math.random();
};
});