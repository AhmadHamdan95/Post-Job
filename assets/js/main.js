$(document).ready(function(){

    // required skills tags start
    $('.add-tag').on('keyup', function (event) {
        var keyboardKey = event.keyCode || event.which;
        if (keyboardKey === 188) {
            var thisValue = $(this).val().slice(0, -1);
            $(this).siblings('.tags').append('<span class="tag-span">' + thisValue + '<i class="fas fa-times"></i></span>');
            $(this).val('');
        }
    });

    $('.tags').on('click', '.tag-span i', function () {
        $(this).parent('.tag-span').remove();
    });
    // required skills tags end

    // posted jobs modal start
    $(".mainSectionPostedJobs .PostedJobsContent").each(function(){
      var allDesc = $(this).find(".PostedJobsDescription").text();
      $(this).find(".allDescription").text(allDesc);

      if( $(this).find(".PostedJobsDescription").text().length > 140 ){
          var trimmedText = $(this).find(".PostedJobsDescription").text().substr(0, 140);
          $(this).find(".PostedJobsDescription").text(trimmedText + "....");
      }
    });

    $(".mainSectionPostedJobs .PostedJobsDetails").click(function(){      
      $(".mainSectionPostedJobs .modal-body .modalJobDescription").text( $(this).parents(".PostedJobsContent").find(".allDescription").text() );
    });
    // posted jobs modal end

    // select an specific applicant start
    $(".chBox").on("click", ".selectApplicant", function(){
        if( $(".specificApplicant").attr("disabled") ){
            $(".specificApplicant").removeAttr("disabled");
        }
        else{
            $(".specificApplicant").attr("disabled", "disabled");
        }
    });
    // select an specific applicant end

    // voting start
    /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
  });
  // voting end

});