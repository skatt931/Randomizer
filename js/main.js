$(document).ready(function () {
	getRandom();
	$("#random-btn").click(getRandom);
	
	$("#max").focus(maxFocus);
	$("#max").blur(maxBlur);
	$("#min").focus(minFocus);
	$("#min").blur(minBlur);


	function getRandom() {
		var sum = +$("#summary").val();
		var min = +$("#min").val();
		var max = +$("#max").val();
		var values = "";
		var i = 0;
		for (i; i < sum; i++) {
			var random = min + (Math.random() * (max - min));
			random = Math.floor(random);
			values += random + " ";
		}

		//умови зменшення розміру тексту при збільшенні кількості чисел
		if (sum >= 2) {
			if (sum >= 11) {
				if (sum >= 16) {
					$("#window-screen").css({
						fontSize: "40px"
						, paddingTop: "0px"
						, textAlign: "left"
					});
				} else {
					$("#window-screen").css({
						paddingTop: "30px"
					});
				}
			} else {
				$("#window-screen").css({
					fontSize: "50px"
				});
			}
		}

		$("#screen-text").fadeOut(0).fadeIn(300).text(values);
	};

	
	//Умови для max
	function maxFocus() {
		var $max = $("#max").val();
		if ($max === "99") {
			$("#max").val("");
		}
	};
	
	function maxBlur() {
		var $max = $("#max").val();
		if ($max === "") {
			$("#max").val("99");
		}
	};
	
	//Умови для min
	function minFocus() {
		var $min = $("#min").val();
		if ($min === "1") {
			$("#min").val("");
		}
	};
	
	function minBlur() {
		var $min = $("#min").val();
		if ($min === "") {
			$("#min").val("1");
		}
	};
});