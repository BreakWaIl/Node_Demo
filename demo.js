//This is a fucking node.js demo. XD
let  _ =  require('lodash'),
    redis = require('redis'),
    RDS_PORT = 6379,
    RDS_HOST = '127.0.0.1',
    RDS_OPTS = {},
    client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);


let obj = {
    "fqf":{
        "r":[],
        "b":[]
    },
    "fq":{
        "r":[],
        "b":[]
    },
    "tt":{
        "r":[],
        "b":[]
    }
};

let [oldArr,tqRf,tqBf,tqR,tqB,ttR,ttB] = [[],[],[],[],[],[],[]];

let [tqRArr,tqBArr,ttRArr,ttBArr] = [
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
    [1,2,3,4,5,6,7,8,9,10,11,12],
];

client.get("CP", function(err, reply){

	if(reply){
		 oldArr = reply.split(",|");
	}

    let [res,unkey] = func();

    if(!oldArr.includes(unkey.substring(0,unkey.length-2))){

        client.set("CP",reply+unkey,redis.print);

        console.log(res);

        return res; 
    }

    });



let func = function(){

    for(let i = 1;i<=100;i++){
    tqRf.push(_.sampleSize(tqRArr.sort(() => Math.random() - 0.5),7));
    tqBf.push(_.sampleSize(tqBArr.sort(() => Math.random() - 0.5),1));
    tqR.push(_.sampleSize(tqRArr.sort(() => Math.random() - 0.5),6));
    tqB.push(_.sampleSize(tqBArr.sort(() => Math.random() - 0.5),1));
    ttR.push(_.sampleSize(ttRArr.sort(() => Math.random() - 0.5),5));
    ttB.push(_.sampleSize(ttBArr.sort(() => Math.random() - 0.5),2));
}

let [qRf,qBf,qR,qB,tR,tB] = [
    _.sortBy(tqRf[_.random(tqRf.length-1,1)]),
    _.sortBy(tqBf[_.random(tqBf.length-1,1)]),
    _.sortBy(tqR[_.random(tqR.length-1,1)]),
    _.sortBy(tqB[_.random(tqB.length-1,1)]),
    _.sortBy(ttR[_.random(ttR.length-1,1)]),
    _.sortBy(ttB[_.random(ttB.length-1,1)])
];

obj["fqf"]["r"] = qRf;
obj["fqf"]["b"] = qBf;
obj["fq"]["r"] = qR;
obj["fq"]["b"] = qB;
obj["tt"]["r"] = tR;
obj["tt"]["b"] = tB;

let uniqueValue = qRf.concat(qBf).concat(qR).concat(qB).concat(tR).concat(tB).concat(['|']).join();

return [obj,uniqueValue];

}


