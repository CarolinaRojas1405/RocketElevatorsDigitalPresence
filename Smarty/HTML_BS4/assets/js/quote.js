$(document).ready(function(){
    $('#residential').hide();
    $('#commercial').hide();
    $('#corporate').hide();
    $('#hybrid').hide();
    $('#productLine').hide();

    var selectMe = $('#selectMe').val();
   
    $('#selectMe').change(function() {
       selectMe = $(this).children("option:selected").val();
        console.log(selectMe);

        if (selectMe == "residential") {
            $("#residential").show();
            $('#commercial').hide();
            $('#corporate').hide();
            $('#hybrid').hide();
            
        } else if (selectMe == "commercial"){
            $("#commercial").show();
            $('#residential').hide();
            $('#corporate').hide();
            $('#hybrid').hide();
        } else if (selectMe == "corporate"){
            $("#corporate").show();
            $('#residential').hide();
            $('#commercial').hide();
            $('#hybrid').hide();

        } else if (selectMe == "hybrid"){
            $("#hybrid").show();
            $('#residential').hide();
            $('#commercial').hide();
            $('#corporate').hide();

        } else {
            $('#residential').hide();
            $('#commercial').hide();
            $('#corporate').hide();
            $('#hybrid').hide();
            $('#productLine').hide();
        }
    });

    var residentialApts = document.getElementById("residentialApts").value;
        if (residentialApts > 0){
            var residentialApts
      } else {}

      var residentialFloors = document.getElementById("residentialFloors").value;
      if (residentialFloors > 0){
          var residentialFloors
    } else {}

    var residentialBasem = document.getElementById("residentialBasem").value;
        if (residentialBasem > 0){
            var residentialBasem
      } else {}

      





    /* for (var i = 0; i < document.quoteForm.productLine.length; i++) {

    if(document.quoteFormu.productLine[i].checked){
            Selection = document.quoteFormu.productLine[i].value;
             }
            
    } */

    
   
});
