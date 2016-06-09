//
module.exports = {
    defer:function() {
        var success,fail,val,error;
        return {
            resolve:function(data){
                val = data;
                if(success)
                success(val);
            },
            reject:function(reason){
                error = reason;
                if(fail)
                fail(error);
            },
            promise:{
                then:function(fullfilled,rejected){
                    if(val){
                        fullfilled(val);
                    }else{
                        success = fullfilled;
                    }
                    if(error){
                        rejected(error);
                    }else{
                        fail = rejected;
                    }


                }
            }
        }
    }
}