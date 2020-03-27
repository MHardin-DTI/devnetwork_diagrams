$(function() {

const outputConnect = document.querySelector('.output-connect');
const outputSrvrs = document.querySelector('.output-srvrs');
const queryURL= "https://api.myjson.com/bins/19o1hc";

$.ajax ({
  url: queryURL,
  method: "GET",
  }).then(data => {
    console.log(data);

    data.connections.forEach(info => {
      console.log(info);

      $("#btn-connect").click(function(){
        outputConnect.innerHTML += `
        ${info.name}
        <br>
        `        
      })
    })

    data.servers.forEach(info => {
      console.log(info);

      $("#btn-srvrs").click(function(){
        outputSrvrs.innerHTML += `
        ${info.name}
        <br>
        `        
      })
    })
  })
});
