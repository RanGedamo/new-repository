async function yasu(){
  try{
      return await fetch('https://www.oref.org.il/WarningMessages/History/AlertsHistory.json',{
      method:"GET"})
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
yasu()
