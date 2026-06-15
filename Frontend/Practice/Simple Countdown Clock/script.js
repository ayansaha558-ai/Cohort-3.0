let count=10;

let tm=setInterval(function(){
    if(count>=1){
        count--;
        console.log(count);
    }else{
        clearInterval(tm);
    }
},1000);