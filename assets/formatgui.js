$('#select_diastolic_flow').on('change',function(e){
    i = $("#select_diastolic_flow :selected").text();
    if (i == "Absent" || i == "Reverse") {
       $('#opt-box').html('<label for="FGRvsSGA_DVPI" style="display: inline; vertical-align: 1.2em;">DV PI: </label> <input type="text" name="FGRvsSGA_DVPI" id="FGRvsSGA_DVPI">');
       $('#opt-box1').html('<p id="FGRvsSGA_DVPI_percentage">Percentile: </p>');
    }else{
       $('#opt-box').html('');
       $('#opt-box1').html('');
    }
});
