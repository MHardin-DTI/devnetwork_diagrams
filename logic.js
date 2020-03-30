$(function() {

const outputSrvrs = document.querySelector('.output-srvrs');
const dropdowncontent_conn = document.querySelector('.dropdown-content_conn');
const dropdowncontent_svrs = document.querySelector('.dropdown-content_svrs');
const queryURL= "https://api.myjson.com/bins/19o1hc";

$.ajax ({
  url: queryURL,
  method: "GET",
  }).then(data => {
    console.log(data);
    data.connections.forEach(info => {
      $("#btn_conn").one("click",function(){
        $('.dropdown-trigger').dropdown();
        dropdowncontent_conn.innerHTML += `
          <li><a href="#!">${info.name}</a></li>
        `      
      })
    })

    data.servers.forEach(info => {
      //console.log(info);
      $("#btn_svrs").one("click",function(){
        $('.dropdown-trigger').dropdown();
        dropdowncontent_svrs.innerHTML += `
        <li><a href="#!">${info.name}</a></li>
      `       
      })
    })
  })
});
