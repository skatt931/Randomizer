$(document).ready(function () {
	//UI функції
	getRandom();
	$("#random-btn").click(getRandom);

	$("#max").focus(maxFocus);
	$("#max").blur(maxBlur);
	
	$("#min").focus(minFocus);
	$("#min").blur(minBlur);
	
	$("#random-city-btn").click(getRandomCity);

	//Функція визначення рандомного числа
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

		//		умови зменшення розміру тексту при збільшенні кількості чисел

		if (sum === 1) {
			$("#window-screen").css({
				fontSize: "100px"
				, paddingTop: "60px"
				, textAlign: "center"
			});
		} else if (sum >= 2 && sum < 11) {
			$("#window-screen").css({
				fontSize: "80px"
				, paddingTop: "60px"
				, textAlign: "center"
			});
		} else if (sum >= 11 && sum < 16) {
			$("#window-screen").css({
				paddingTop: "0px",
				fontSize: "50px",
				textAlign: "left"
			});
		} else if (sum >= 16){
			$("#window-screen").css({
				fontSize: "40px"
				, paddingTop: "0px"
				, textAlign: "left"
			});
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
	
	//Random city
	var APP = [{			   
		city: ["Львів","Дніпро","Луцьк","Тернопіль","Хмельницьк","Чернівці","Ужгород","Одеса","Київ","Херсон","Івано-Франківськ","Миколаїв","Чернігів","Черкаси","Полтава","Харків"],
		country: "Ukraine"
	},{
		city: ["Варшава","Гдиня","Гданськ","Вроцлав"],
		country: "Poland"
	},{
		city:["Берлін","Бремен","Ганновер","Нюрнберг","Мюнхен","Штудгард","Дрезден"],
		country: "Germany"
	},{
		city:["Прага","Брно","Острава","Злін"],
		country: "Chech Republick"
	},{
		city:["Рим","Неаполь","Катанія","Флоренція","Палермо","Венеція","Верона","Мілан","Піза"],
		country: "Italy"
	},{
		city:["Мадрид","Севілья","Сарагоса","Валенсія","Барселона","Більбао","Мурсія","Пальма"],
		country: "Spain"
	},{
		city:["Париж","Ніцца","Ліон","Марсель","Тулуза","Бордо","Канни"],
		country: "France"
	}];
	
	
	function getRandomCity() {
		var randAll = Math.floor(Math.random() * APP.length);
		var randCity = Math.floor(Math.random() * APP[randAll].city.length);
		var randCountry = Math.floor(Math.random() * APP[randAll].country.length);
		
		$("#screen-city-text").fadeOut(0).fadeIn(300).text(APP[randAll].city[randCity]);
		$("#paragraph-text").fadeOut(0).fadeIn(300).text(APP[randAll].country);
	}
		getRandomCity();
	
});