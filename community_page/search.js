// function show() {
//   document.getElementsByClassName(".board-item").style.display = "block";
// }

// function hide() {
//   document.getElementsByClassName(".board-item").style.displaye = "none";
// }

// document.querySelector(".js-board-item").addEventListener("click", show);
// document.querySelector("#close").addEventListener("click", close);

// function selectOptionsupdated(select) {
//   document.getElementById('myButton').style.display = 'block';
// }

jQuery(function($) { 
    $('#filterText').keyup(function(event) { 
      var val = $(this).val(); if (val == "") { 
        $('.board-item').show(); 
      } else { 
        $('.board-item').hide(); 
        $(".board-item:contains('"+val+"')").show(); 
      } 
    });
  });