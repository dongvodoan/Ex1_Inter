$(document).ready(function(){
	// Show information
	$(".btn_show").click(function() {
    var infor = [];
    $(this).closest('tr').find('td').not(':last').each(function() {
    	var textval = $(this).text(); // this will be the text of each <td>
    	infor.push(textval);
   	});
    alert("ID: "+infor[0]+"\n"+"Name: "+infor[1]+"\n"+"Group: "+infor[2]);
	});

    // Datapicker
    $('#datepicker').datepicker({ dateFormat: 'dd/mm/yy' }).val();
    
	// Validation
	$("form").validate({
	 	rules: {
	 		firstname: {
	 			required: true,
	 			maxlength: 25
	 		},
	 		lastname: {
	 			required: true,
	 			maxlength: 25
	 		},
	 		yearold: {
	 			required: true,
	 			number: true,
	 			digits: true,
	 			min: 15,
	 			max: 150
	 		},
	 		startdate: {
	 			required: true,
	 			dateITA: true
	 		},
	 		phonenumber: {
	 			required: true,
	 			pattern: /^(0|\+84)(\d{2}|\d{3})\d{7}$/
	 		}
	 	},
		messages: {
		 	firstname: {
		 		required: "Vui lòng nhập firstname",
		 		maxlength: "Vượt quá số chữ cho phép"
		 	},
		 	lastname: {
		 		required: "Vui lòng nhập lastname",
		 		maxlength: "Vượt quá số chữ cho phép"
		 	},
		 	yearold: {
		 		required: "Vui lòng nhập yearold",
		 		number: "Chỉ được nhập số",
		 		digits: "Không được nhập số thập phân",
		 		min: "Dưới tuổi cho phép. Tuổi thấp nhất: 15",
		 		max: "Vượt quá tuổi cho phép. Tuổi tối đa cho phép: 150"
		 	},
		 	startdate: {
		 		required: "Vui lòng nhập startdate",
		 		dateITA: "Sai định dạng"
		 	},
		 	phonenumber: {
		 		required: "Vui lòng nhập phonenumber",
		 		pattern: "nhập sai format"
		 	}
		}
	});
});

/*Form 2*/
$(document).ready(function(){
	$("input[type=text]").change(function(){
		var firstname = $("#firstname").val();
    	var lastname  = $("#lastname").val();
    	var fullname = lastname + " " + firstname;
    	$("#fullname").text(fullname);
	});

	$("input[type=radio]").change(function(){
		var gender = $(this).parent().text();
    	$("#gender").text(gender);
    });

    $("select").change(function(){
    	var nationality = " " ;
    	$("select option:selected").each(function(){
    		nationality += $(this).text();
       	});
    	$("#nationality").text(nationality);
    }).change();
});