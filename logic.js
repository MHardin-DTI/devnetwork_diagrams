$(function() {

const dropdowncontent_conn = document.querySelector('.dropdown-content_conn');
const content_svrs = document.querySelector('.card-content_svrs');
const pill = document.querySelector('.badge-pill');
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
        content_svrs.innerHTML += `
        <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false"
        aria-controls="multiCollapseExample1">${info.name}</a>
        <hr>

        <div class="row">
        
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
        `
      
     
      // })
    })
  })
});
