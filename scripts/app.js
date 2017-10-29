$(document).ready(function() { 
 $.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/ericjameswilson/int3p2json/master/data3.json',
    dataType: 'json',
    success: function(data) {
      $.each(data, function(i, house) {
        if (house.columncount == 1) {
          $('#col-1').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 2) {
          $('#col-2').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 3) {
          $('#col-3').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 4) {
          $('#col-4').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 5) {
          $('#col-5').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 6) {
          $('#col-6').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 7) {
          $('#col-7').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 8) {
          $('#col-8').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 9) {
          $('#col-9').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 10) {
          $('#col-10').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 11) {
          $('#col-11').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 12) {
          $('#col-12').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 13) {
          $('#col-13').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 14) {
          $('#col-14').prepend('<div class="fade">' + house.addressnumber + '</div>')
        } else if (house.columncount == 15) {
          $('#col-15').prepend('<div class="fade">' + house.addressnumber + '</div>')

        }
      });
    },
    complete: function() {
			  
		$('body').jGravity({
            target: 'everything',
            ignoreClass: 'ignoreMe',
            weight:1,
            depth: 5,
            drag: false
          });
          	    

      $('.fade').click(function(i, house) {
      $(this).css("display", "none");
      });
    },
  });
});
