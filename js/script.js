$(document).ready(function(){
 
    $("#sec1").hide();

 
    
    $("#hid").click(function(){
        $("#sec1").slideUp(500);
    });
          
      $("#con").click(function(e){
          e.preventDefault()
        $("#sec1").slideDown(500); 
          var x= $("#fir").val();

          $("#hel").text("Hello "+x );
    });
    
    
    $(".sec2").hide();
    
    
    $("#sho").click(function(){
        $(".sec2").slideDown(500);
        
    });
    
    $("#sec3").hide();
    $("#sec3 div").hide();
    $("#sec4").hide();
    
    $("#spMan").click(function(){
        $("#sec3").slideDown(500);
        $("#man").show(500);
        $("#sec4").slideDown(500);
    });

    $("#spLow").click(function(){
        $("#sec3").slideDown(500);
        $("#low").show(500);
        $("#sec4").slideDown(500);
    });
    
        $("#spCons").click(function(){
        $("#sec3").slideDown(500);
        $("#cons").show(500);
        $("#sec4").slideDown(500);
    });
    
    
        $("#spMed").click(function(){
        $("#sec3").slideDown(500);
        $("#med").show(500);
        $("#sec4").slideDown(500);
    });
    
        $("#spConser").click(function(){
        $("#sec3").slideDown(500);
        $("#conser").show(500);
        $("#sec4").slideDown(500);
    });
    
    
        $("#spComp").click(function(){
        $("#sec3").slideDown(500);
        $("#comp").show(500);
        $("#sec4").slideDown(500);
    });
    
    
    
        $("#spEng").click(function(){
        $("#sec3").slideDown(500);
        $("#eng").show(500);
        $("#sec4").slideDown(500);
    });
    
    
    
        $("#spAgr").click(function(){
        $("#sec3").slideDown(500);
        $("#agr").show(500);
        $("#sec4").slideDown(500);
    });







      
});