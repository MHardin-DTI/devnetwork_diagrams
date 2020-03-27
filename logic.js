$(function() {

const output = document.querySelector('.output');
const queryURL= "http://mvc.ad.jocoks.com/OrgDataMVC/DirectReports/DEPT/CMO";

$.ajax ({
  url: queryURL,
  method: "GET",
  }).then(data => {
    console.log(data);
    data.forEach(person => {  
      console.log(person.Name + ' ' + person.Title);
      $("#alertbtn").click (() => {
        output.innerHTML += `
        ${person.Name} ${person.Title}
        <br>
        `
      })
    })
  })
});
