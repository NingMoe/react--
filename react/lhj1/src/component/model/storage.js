var app={

    set:function(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    get:function(key){
        return JSON.parse(localStorage.getItem(key));

    },
    hasCollectionData(aid,collectdata){  /*判断collectdata里面有没有数据*/


            //forEach是个异步

        for(var i=0;i<collectdata.length;i++){

            if(aid==collectdata[i].aid){

                return true;
            }
        }

        return false;


    }
}

export default  app;