

function showmsg(msg1){
    //alert(msg1+msg2+"好好玩");
    //return msg1+msg2;
    return msg1* msg1;
}

function random2(n,m){
    //alert(m+"   "+n);
    ans=(Math.random()*(parseInt(m)-parseInt(n))+parseInt(n));
    console.log(ans);
    return Math.ceil(ans);
}