var app={
    init:function(){
        console.log("funziona");
        $.get("data.json")
        .done(app.success);
        
    },
    success:function(jsondata){
        console.log(jsondata);
        jsondata.carddata.forEach(element => {
         let html=`  <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">${element.item}</a>
                </h4>
                <h5>$${element.prezzo}</h5>
                <p class="card-text">${element.text}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>`;

          $('#container').append(html);







            
        });
    }
};
$(document).ready(app.init);
