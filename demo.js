//This is a fucking node.js demo. XD
let  _ =  require('lodash'),request = require('request');

let obj = {"fqf":{"r":[],"b":[]},"fq":{"r":[],"b":[]},"tt":{"r":[],"b":[]}};

let [tqRf,tqBf,tqR,tqB,ttR,ttB] = [[],[],[],[],[],[]];

let [tqRArr,tqBArr,ttRArr,ttBArr] = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],[1,2,3,4,5,6,7,8,9,10,11,12],];


for(let i = 1;i<=100;i++){
    tqRf.push(_.sampleSize(tqRArr.sort(()=>Math.random()-0.5),7));tqBf.push(_.sampleSize(tqBArr.sort(()=>Math.random()-0.5),1));tqR.push(_.sampleSize(tqRArr.sort(()=>Math.random()-0.5),6));tqB.push(_.sampleSize(tqBArr.sort(()=>Math.random()-0.5),1));ttR.push(_.sampleSize(ttRArr.sort(()=>Math.random()-0.5),5));ttB.push(_.sampleSize(ttBArr.sort(()=>Math.random()-0.5),2));
}

let [qRf,qBf,qR,qB,tR,tB] = [_.sortBy(tqRf[_.random(tqRf.length-1,1)]),_.sortBy(tqBf[_.random(tqBf.length-1,1)]),_.sortBy(tqR[_.random(tqR.length-1,1)]),_.sortBy(tqB[_.random(tqB.length-1,1)]),_.sortBy(ttR[_.random(ttR.length-1,1)]),_.sortBy(ttB[_.random(ttB.length-1,1)])];

obj["fqf"]["r"]=qRf;obj["fqf"]["b"]=qBf;obj["fq"]["r"]=qR;obj["fq"]["b"]=qB;obj["tt"]["r"]=tR;obj["tt"]["b"]=tB;

console.log(JSON.stringify(obj));

console.log(obj.fqf.r);

let msgStr = "双色球小复式:红球-"+ obj.fqf.r+"|"+ "篮球-"+obj.fqf.b+"|"+"双色球单式:红球-"+ obj.fq.r+"|"+"篮球-"+obj.fq.b+"|"+"大乐透单式:红球-"+ obj.tt.r +"|"+"篮球-"+obj.tt.b;

let msgTitle = "每日幸运球"+"|"+msgStr;

console.log(msgStr,msgTitle);

//以下为微信消息推送：采用第三方应用推送，https://github.com/LeeYouRan/wxpusher-client

let options = {
    headers: {"Connection": "close"},
    url: 'http://wxpusher.zjiecode.com/api/send/message',
    method: 'POST',
    json:true,
    body: 
    {
        "appToken":"AT_2gu0cohPvim6E9vEUOavT5MFb5IxRyk8",
        "content":msgStr,
        "summary":msgTitle,//消息摘要，显示在微信聊天页面或者模版消息卡片上，限制长度100，可以不传，不传默认截取content前面的内容。
        "contentType":1,//内容类型 1表示文字  2表示html(只发送body标签内部的数据即可，不包括body标签) 3表示markdown 
        "topicIds":
        [ //发送目标的topicId，是一个数组！！！，也就是群发，使用uids单发的时候， 可以不传。
            665
        ],
        "uids":
        [//发送目标的UID，是一个数组。注意uids和topicIds可以同时填写，也可以只填写一个。
            "UID_UODGrf35v8508jAf61zoEb1UobiQ"
        ],
        "url":"http://wxpusher.zjiecode.com/api/send/message" //原文链接，可选参数
    }
};

function callback(error, response, data) {
    if (!error && response.statusCode == 200) {
        console.log('----info------',data);
    }
}

request(options, callback);
