/*
雪佛兰app签到
抓cpctoken放到xflCookie
*/
const cookie = process.env.xflCookie;const _0x1781a7=_0x2534;function _0x475a(){const _0x361374=['4060469OwuKPF','zh-CN,zh-Hans;q=0.9','axios','application/json,\x20text/plain,\x20*/*',cookie,'keep-alive','post','8289FWVaQM','gzip,\x20deflate,\x20br','40PQpCfw','614294DAisyH','c=B|xoQp58Chn_A;x=e497132cdd304b93','empty','2024-03','https://ctwx.sgmlink.com/portal/','112335grFTCr','3592230akRmdl','SERVERCORSID=9471b821c927b7feb5455296fdefd3e0|1709643170|1709643167;\x20SERVERID=9471b821c927b7feb5455296fdefd3e0|1709643170|1709643167;\x20dcpDID=1709643170092_6bd8e8b0bba4e;\x20acw_tc=2f624a6317096431677274067e43fb3217aac9d423f59b9ebfc85ff5e155f6','211257Hrapdo','2764350QAFrns','catch','./sendNotify','10296viccWJ'];_0x475a=function(){return _0x361374;};return _0x475a();}(function(_0x2e40c8,_0x511f0e){const _0x1e5a73=_0x2534,_0x583985=_0x2e40c8();while(!![]){try{const _0x535db6=-parseInt(_0x1e5a73(0x12c))/0x1+parseInt(_0x1e5a73(0x124))/0x2+-parseInt(_0x1e5a73(0x129))/0x3*(parseInt(_0x1e5a73(0x123))/0x4)+-parseInt(_0x1e5a73(0x12d))/0x5+-parseInt(_0x1e5a73(0x12a))/0x6+parseInt(_0x1e5a73(0x131))/0x7+parseInt(_0x1e5a73(0x130))/0x8*(parseInt(_0x1e5a73(0x121))/0x9);if(_0x535db6===_0x511f0e)break;else _0x583985['push'](_0x583985['shift']());}catch(_0x4e9a56){_0x583985['push'](_0x583985['shift']());}}}(_0x475a,0x51d9b));function _0x2534(_0x31c42d,_0x14bba5){const _0x475aa2=_0x475a();return _0x2534=function(_0x25347c,_0x4eeb20){_0x25347c=_0x25347c-0x11c;let _0xfbce85=_0x475aa2[_0x25347c];return _0xfbce85;},_0x2534(_0x31c42d,_0x14bba5);}const axios=require(_0x1781a7(0x11c)),notify=require(_0x1781a7(0x12f)),header={'Host':'ctwx.sgmlink.com','X-Tingyun':_0x1781a7(0x125),'Accept':_0x1781a7(0x11d),'cpctoken':_0x1781a7(0x11e),'userType':'1','Sec-Fetch-Site':'same-origin','source':'0','Accept-Language':_0x1781a7(0x132),'Accept-Encoding':_0x1781a7(0x122),'Sec-Fetch-Mode':'cors','Content-Type':'application/json;charset=utf-8','Origin':'https://ctwx.sgmlink.com','User-Agent':'Optional(Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2016_6\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20MyChevy/7.18.0)\x20MyChevy/7.18.0','Referer':_0x1781a7(0x128),'Content-Length':'19','Connection':_0x1781a7(0x11f),'Sec-Fetch-Dest':_0x1781a7(0x126),'Cookie':_0x1781a7(0x12b)},payload={'month':_0x1781a7(0x127)};axios[_0x1781a7(0x120)]('https://ctwx.sgmlink.com/api/check/query',payload,{'headers':header})['then'](_0x438401=>{notify['sendNotify']('雪佛兰app签到结果',JSON['stringify'](_0x438401['data'])),console['log'](_0x438401);})[_0x1781a7(0x12e)](_0x78215f=>{console['error'](_0x78215f);});
