
    async function yasu(){
        try{
            return await fetch('http://www.oref.org.il/WarningMessages/History/AlertsHistory.json')
            .then(res=>res.json())
            .then(result=>{
              result.forEach(element => {
                console.log(result);
              });
            })
        }
        catch(err){}
        finally{}
    }