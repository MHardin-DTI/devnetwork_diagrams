$(function() {

const output = document.querySelector('.output');
const queryURL= "https://api.myjson.com/bins/19o1hc";

$.ajax ({
  url: queryURL,
  method: "GET",
  }).then(data => {
    console.log(data);

    data.connections.forEach(info => {
      console.log(info.name);

      $("#alertbtn").click(function(){
        output.innerHTML += `
        ${info.name}
        <br>
        `        
      })

    })
  })
});
