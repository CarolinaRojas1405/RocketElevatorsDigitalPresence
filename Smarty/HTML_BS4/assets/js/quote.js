//Hides questions on page loading.
$(document).ready(function(){
    $('#residential').hide();
    $('#commercial').hide();
    $('#corporate').hide();
    $('#hybrid').hide();
    
//display by option selected
    var selectMe = $('#selectMe').val();
   
    $('#selectMe').change(function() {
       selectMe = $(this).children("option:selected").val();
        console.log(selectMe);

        if (selectMe == "residential") {
            $("#residential").show();
            $('#productLine').show();
            $('#commercial').hide();
            $('#corporate').hide();
            $('#hybrid').hide();
            
        } else if (selectMe == "commercial"){
            $("#commercial").show();
            $('#productLine').show();
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
            $('#productLine').show();
            $('#residential').hide();
            $('#commercial').hide();
            $('#corporate').hide();

        } else {
            $('#residential').hide();
            $('#commercial').hide();
            $('#corporate').hide();
            $('#hybrid').hide();
            
        }
    });

    });
    
    //residential cages

    function cageElevatorRes() {
        var residApts = document.getElementById('residApts').value
        var residBase = document.getElementById('residBasem').value
        var residFloors = document.getElementById('residFloors').value
        var aptsByFloor = residApts / (residFloors - residBase)
        var cagesByApts = aptsByFloor / 6
        var totalCagesByApts = Math.ceil(cagesByApts)
        var column = Math.ceil(residFloors / 20)
        var totalCagesResidential = totalCagesByApts * column
       
        document.getElementById('residElevCages').value = totalCagesResidential;

    }

    //residential price

    function resPrice() {
        if (document.getElementById('residStandard').checked) {
            var cagesForResid = document.getElementById('residElevCages').value
            var standard = cagesForResid * 7565
            var standardIns = standard * .1
            var totalStandard = standard + standardIns

            document.getElementById('elevPriceRes').value = standard.toFixed(2);
            console.log(cagesForResid)
            document.getElementById('instFeesRes').value = standardIns.toFixed(2);
            document.getElementById('totalRes').value = totalStandard.toFixed(2);
       
        } else if (document.getElementById('residPremium').checked) {
        var cagesForResid = document.getElementById('residElevCages').value
        var premium = cagesForResid * 12345
        var premiumIns = premium * .13
        var totalPremium = premium + premiumIns

        document.getElementById('elevPriceRes').value = premium.toFixed(2);
        document.getElementById('instFeesRes').value = premiumIns.toFixed(2);
        document.getElementById('totalRes').value = totalPremium.toFixed(2);
        
        } else if (document.getElementById('resiExcelium').checked) {
            var cagesForResid = document.getElementById('residElevCages').value
            var excelium = cagesForResid * 15400
            var exceliumIns = excelium * .16
            var totalExceluim = excelium + exceliumIns

            document.getElementById('elevPriceRes').value = excelium.toFixed(2);
            document.getElementById('instFeesRes').value = exceliumIns.toFixed(2);
            document.getElementById('totalRes').value = totalExceluim.toFixed(2);
            
        } 

    }

    //Commercial Price

    function commPrice() {
        if (document.getElementById('comStandard').checked) {
            var cagesForComm = document.getElementById('cagesElevatorComm').value
            var standard = cagesForComm * 7565
            var standardIns = standard * .1
            var totalStandard = standard + standardIns

            document.getElementById('elevPriceCom').value = standard.toFixed(2);
            document.getElementById('instFeesCom').value = standardIns.toFixed(2);
            document.getElementById('totalCom').value = totalStandard.toFixed(2);

        } else if (document.getElementById('comPremium').checked) {
            var cagesForComm = document.getElementById('cagesElevatorComm').value
            var premium = cagesForComm * 12345
            var premiumIns = premium * .13
            var totalPremium = premium + premiumIns

            document.getElementById('elevPriceCom').value = premium.toFixed(2);
            document.getElementById('instFeesCom').value = premiumIns.toFixed(2);
            document.getElementById('totalCom').value = totalPremium.toFixed(2);

        } else if (document.getElementById('comExcelium').checked) {
            var cagesForComm = document.getElementById('cagesElevatorComm').value
            var excelium = cagesForComm * 15400
            var exceliumIns = excelium * .16
            var totalExceluim = excelium + exceliumIns

            document.getElementById('elevPriceCom').value = excelium.toFixed(2);
            document.getElementById('instFeesCom').value = exceliumIns.toFixed(2);
            document.getElementById('totalCom').value = totalExceluim.toFixed(2);

        } 

    }


    //Corporate Cage

    function cageElevatorCorp() {
        var corpFloors = document.getElementById('floorsCorp'). value
        var corpMxByFloor = document.getElementById('maxOccupants').value
        var columnCorp = Math.ceil(corpFloors / 20)
        var cageCorp = Math.ceil((corpFloors * corpMxByFloor) /1000)
        var cageByColumn = Math.ceil(cageCorp / columnCorp)
        var totalCageCorp = columnCorp * cageByColumn

        document.getElementById('corpElevCages').value = totalCageCorp;

    }


    //Corporate Price

    function corpPrice() {
        if (document.getElementById('corpStandard').checked) {
            var cageElevCorp = document.getElementById('corpElevCages').value
            var standard = cageElevCorp * 7565
            var standardIns = standard * .1
            var totalStandard = standard + standardIns

            document.getElementById('elevPriceCorp').value = standard.toFixed(2);
            document.getElementById('instFeesCorp').value = standardIns.toFixed(2);
            document.getElementById('totalPriceCorp').value = totalStandard.toFixed(2);
 
        } else  if (document.getElementById('corpPremium').checked) {
            var cageElevCorp = document.getElementById('corpElevCages').value
            var premium = cageElevCorp * 12345
            var premiumIns = premium * .13
            var totalPremium = premium + premiumIns

            document.getElementById('elevPriceCorp').value = premium.toFixed(2);
            document.getElementById('instFeesCorp').value = premiumIns.toFixed(2);
            document.getElementById('totalPriceCorp').value = totalPremium.toFixed(2);
 
        } else if (document.getElementById('corpExcelium').checked) {
            var cageElevCorp = document.getElementById('corpElevCages').value
            var excelium = cageElevCorp * 15400
            var exceliumIns = excelium * .16
            var totalExceluim = excelium + exceliumIns

            document.getElementById('elevPriceCorp').value = excelium.toFixed(2);
            document.getElementById('instFeesCorp').value = exceliumIns.toFixed(2);
            document.getElementById('totalPriceCorp').value = totalExceluim.toFixed(2);
 
        } 
        
    }


    //Hybrid Cage

    function cageElevatorHybrid() {
        var hybridFloors = document.getElementById('floorsHybrid'). value
        var hybridMxByFloor = document.getElementById('maxOccHybrid').value
        var columnHybrid = Math.ceil(hybridFloors / 20)
        var cageHybrid = Math.ceil((hybridFloors * hybridMxByFloor) /1000)
        var cageByColumn = Math.ceil(cageHybrid / columnHybrid)
        var totalCageHybrid = columnHybrid * cageByColumn

        document.getElementById('hybridElevCages').value = totalCageHybrid;

    }


    // Hybrid Price

    function hybridPrice() {
        if (document.getElementById('hybridStandard').checked) {
            var hybridCage = document.getElementById('hybridElevCages').value
            var standard = hybridCage * 7565
            var standardIns = standard * .1
            var totalStandard = standard + standardIns

            document.getElementById('elevPriceHybr').value = standard.toFixed(2);
            document.getElementById('instFeesHybr').value = standardIns.toFixed(2);
            document.getElementById('totalPriceHybr').value = totalStandard.toFixed(2);

        } else if (document.getElementById('hybridPremium').checked) {
            var hybridCage = document.getElementById('hybridElevCages').value
            var premium = hybridCage * 12345
            var premiumIns = premium * .13
            var totalPremium = premium + premiumIns

            document.getElementById('elevPriceHybr').value = premium.toFixed(2);
            document.getElementById('instFeesHybr').value = premiumIns.toFixed(2);
            document.getElementById('totalPriceHybr').value = totalPremium.toFixed(2);
            
        } else if (document.getElementById('hybridExcelium').checked) {
            var hybridCage = document.getElementById('hybridElevCages').value
            var excelium = hybridCage * 15400
            var exceliumIns = excelium * .16
            var totalExceluim = excelium + exceliumIns

            document.getElementById('elevPriceHybr').value = excelium.toFixed(2);
            document.getElementById('instFeesHybr').value = exceliumIns.toFixed(2);
            document.getElementById('totalPriceHybr').value = totalExceluim.toFixed(2);
            
        }

    }
    



    
            /* function selectProd() {

           
    var productLine = document.getElementsByName('productLine').value;
   
   
   
        if (document.getElementById('standard').checked) {
               
           var standard = document.getElementById('standard').value;

            console.log(standard);
    
       }else if (document.getElementById('premium').checked) {
            
            selectProd = document.getElementById('premium').value;
            console.log(selectProd);
        
        }else if (document.getElementById('excelium').checked) {
            
            selectProd = document.getElementById('excelium').value;
            console.log(selectProd);
        } 
    } 
   */
    
        



/* 
    document.querySelector('#cagesElevator').addEventListener('change', (event) =>{
        console.log(event.target.value);
        
        function calculation(){
            let calc = document.getElementById('cagesElevator').value;

            if (isNaN(calc)) {


                

            } else {
                
            }
        }
    })
 */
    


        
        /* if(residentialApts > 0){
            var residentialApts
            console.log(residentialApts);
            }
       
         */
        

    /* function residentialPrice() {

       
       
        var residentialFloors = parseInt($("#residentialFloors").val());

        var residentialBasem = parseInt($("#residentialBasem").val());


        var shaftrequired = Math.ceil(residentialApts/(residentialFloors-residentialBasem) / 6);
            
        var shaftElevatorResidential = Math.ceil(Math.pow(shaftrequired, 2));
        
            if (shaftElevatorResidential > 0){
            
            document.getElementById
                    
            } else {


            }
            };

    function commercialPrice() {

        $('shaftElevatorCommercial') = document.getElementById("cagesElevator").val();
            
            if (shaftElevatorCommercial > 0){
                  
                shaftElevatorCommercial 
                        
                } else {
        
        
                }
                };
        

 */


    /* function commercialPrice(cagesElevator, productLine) {
       var cagesElevator = document.getElementById("cageElevator").value;


       
    } */

      /* var residentialFloors = document.getElementById("residentialFloors").value;
      if (residentialFloors > 0){
          var residentialFloors
    } else {}

    var residentialBasem = document.getElementById("residentialBasem").value;
        if (residentialBasem > 0){
            var residentialBasem
      } else {}

    }
    var totalAptsByFloor = residentialFloors - residentialBasem; */






    /* for (var i = 0; i < document.quoteForm.productLine.length; i++) {

    if(document.quoteFormu.productLine[i].checked){
            Selection = document.quoteFormu.productLine[i].value;
             }
            
    } */

    
   

