$(function() {

    const queryURL= "http://mvc.ad.jocoks.com/OrgDataMVC/DirectReports/DEPT/CMO";
 
    $.ajax ({
       url: queryURL,
       method: "GET",
     }).then(function(response){
        
        console.log(response[0].Name);
     })
   
});
