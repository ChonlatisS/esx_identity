$(function() {
	window.addEventListener('message', function(event) {
		if (event.data.type == "enableui") {
			document.body.style.display = event.data.enable ? "block" : "none";
		}
	});

	document.onkeyup = function (data) {
		if (data.which == 27) { // Escape key
			$.post('http://esx_identity/escape', JSON.stringify({}));
		}
	};
	
	$("#register").submit(function(event) {
		event.preventDefault(); // Prevent form from submitting
		
		// Verify date
		var date = $("#card_date").val();
		var dateCheck = new Date($("#card_date").val());

		if (dateCheck == "Invalid Date") {
			date == "invalid";
		}

		$.post('http://esx_identity/register', JSON.stringify({
			firstname: $("#card-username").val(),
			lastname: $("#card-holder").val(),
			dateofbirth: date,
			sex: $("input[type='radio'][name='sex']:checked").val(),
			height: $("#card-height").val()
		}));
	});
});

var Card = function () {

    $('#card-username').on('keyup change', function() {
        $('.credit-card-box .card-username div').html($(this).val());
    });
    
    $('#card-holder').on('keyup change', function() {
        $('.credit-card-box .card-holder div').html($(this).val());
    });
	
    $('#card-username').on('keyup change', function() {
        $('.credit-card-box .card-username-signature div').html($(this).val());
    });
    
    $('#card-holder').on('keyup change', function() {
        $('.credit-card-box .card-holder-signature div').html($(this).val());
    });
    
    $('#card_date').on('keyup change', function() {
        $('.credit-card-box .card_date div').html($(this).val());
    });

    $('#card_sexM').on('keyup change', function() {
        $('.credit-card-box .card_sex div').html($(this).val());
    });

    $('#card_sexF').on('keyup change', function() {
        $('.credit-card-box .card_sex div').html($(this).val());
    });
    
    $('#card-height').on('keyup change', function() {
        $('.credit-card-box .card-height div').html($(this).val());
    });
    
};

Card();