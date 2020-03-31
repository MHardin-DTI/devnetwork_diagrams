$(function () {

  const dropdowncontent_conn = document.querySelector('.dropdown-content_conn');
  const content_svrs = document.querySelector('.card-content_svrs');
  const pill = document.querySelector('.badge-pill');
  const queryURL = "https://api.myjson.com/bins/19o1hc";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(data => {
    console.log(data);
    data.connections.forEach(info => {
      $("#btn_conn").one("click", function () {
        $('.dropdown-trigger').dropdown();
        dropdowncontent_conn.innerHTML += `
          <li><a href="#!">${info.name}</a></li>
        `
      })
    })

    data.servers.forEach(info => {
      //console.log(info);
      content_svrs.innerHTML += `

      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#${info.name}" aria-expanded="true" aria-controls="${info.name}">
              ${info.name}
              </button>
            </h2>
          </div>
      
          <div id="${info.name}" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
            <h6><strong>Sites </strong></h6> 
            ${info.details}
            </div>
          </div>
        </div>
      </div>
      `


      // })
    })
  })
});