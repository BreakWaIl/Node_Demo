var  _ =  require('lodash');

let obj = {
    "s":{
        "red1":[],
        "blue1":[]
    },
    "d":{
        "red2":[],
        "blue2":[]
    }
};

for(let i = 1;i<=1000000;i++){
    let red1 = _.sampleSize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],6);
    let blue1 = _.sampleSize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],1);
    let red2 = _.sampleSize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],5);
    let blue2 = _.sampleSize([1,2,3,4,5,6,7,8,9,10,11,12],2);
    obj["s"]["red1"] = _.sortBy(red1);
    obj["s"]["blue1"] = blue1;
    obj["d"]["red2"] = _.sortBy(red2);
    obj["d"]["blue2"] = blue2;

}

console.log(obj);
