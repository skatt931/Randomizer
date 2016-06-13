$(document).ready(function () {
	//UI функції
	$("#random-btn").click(getRandom);

	$("#max").focus(maxFocus);
	$("#max").blur(maxBlur);

	$("#min").focus(minFocus);
	$("#min").blur(minBlur);

	$("#random-city-btn").click(getRandomCity);

	$("#random-phrase-btn").click(getRandomPhrase);

	//Функція визначення рандомного числа
	function getRandom() {
		var sum = +$("#summary").val();
		var min = +$("#min").val();
		var max = +$("#max").val() + 1;
		var values = "";
		var i = 0;
		for (i; i < sum; i++) {
			var random = min + (Math.random() * (max - min));
			random = Math.floor(random);
			values += random + " ";
		}

		//	умови зменшення розміру тексту при збільшенні кількості чисел

		if (sum === 1) {
			$("#window-screen").css({
				fontSize: "100px"
				, paddingTop: "60px"
				, textAlign: "center"
			});
		} else if (sum >= 2 && sum < 7) {
			$("#window-screen").css({
				fontSize: "80px"
				, paddingTop: "60px"
				, textAlign: "center"
			});
		} else if (sum >= 7 && sum < 11) {
			$("#window-screen").css({
				fontSize: "80px"
				, paddingTop: "0px"
				, textAlign: "center"
			});
		} else if (sum >= 11 && sum < 16) {
			$("#window-screen").css({
				paddingTop: "0px"
				, fontSize: "50px"
				, textAlign: "left"
			});
		} else if (sum >= 16) {
			$("#window-screen").css({
				fontSize: "40px"
				, paddingTop: "0px"
				, textAlign: "left"
			});
		}

		$("#screen-text").fadeOut(0).fadeIn(300).text(values);
	};

	//Перевірка на число
	$("#summary").keypress(onlyNumber);
	$("#max").keypress(onlyNumber);
	$("#min").keypress(onlyNumber);
	
	
	function onlyNumber(event) {
		event = event || window.event;
		if (event.charCode && (event.charCode < 48 || event.charCode > 57)) // проверка на event.charCode - чтобы пользователь мог нажать backspace, enter, стрелочку назад...
			return false;
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

	//Second page Random city
	var APP = [{
		city: ["Варшава", "Гдиня", "Гданськ", "Вроцлав"]
		, country: "Poland"
	}, {
		city: ["Берлін", "Бремен", "Ганновер", "Нюрнберг", "Мюнхен", "Штудгард", "Дрезден"]
		, country: "Germany"
	}, {
		city: ["Прага", "Брно", "Острава", "Злін"]
		, country: "Chech Republick"
	}, {
		city: ["Рим", "Неаполь", "Катанія", "Флоренція", "Палермо", "Венеція", "Верона", "Мілан", "Піза"]
		, country: "Italy"
	}, {
		city: ["Мадрид", "Севілья", "Сарагоса", "Валенсія", "Барселона", "Більбао", "Мурсія", "Пальма"]
		, country: "Spain"
	}, {
		city: ["Париж", "Ніцца", "Ліон", "Марсель", "Тулуза", "Бордо", "Канни"]
		, country: "France"
	}, {
		city: ["Клуж", "Бухарест", "Тімішоара", "Ясси", "Бая-Маре", "Сіная", "Дева", "Сучава"]
		, country: "Romania"
	}, {
		city: ["Софія", "Варна", "Русе", "Плевен", "Бургас", "Габрово", "Враца", "Монтана"]
		, country: "Bolgaria"
	}, {
		city: ["Афіни", "Салоніки", "Яніна", "Ларісса", "Патри"]
		, country: "Greece"
	}, {
		city: ["Стамбул", "Анкара", "Бурса", "Анталья", "Мерсін", "Адана", "Кайсері", "Конья"]
		, country: "Turkey"
	}, {
		city: ["Тбілісі", "Батумі", "Руставі", "Поті", "Кутаісі", "Горі", "Сухум"]
		, country: "Georgia"
	}, {
		city: ["Кумамото", "Фукуока", "Токіо", "Кіото", "Хамамацу", "Окаяма", "Осака"]
		, country: "Japan"
	}, {
		city: ["Анахайм", "Атланта", "Балтимор", "Баффало", "Бостон", "Бостон", "Бербанк", "Вашингтон", "Голлівуд", "Голлівуд", "Гонолулу", "Даллас", "Де-Мойн", "Де-Мойн", "Денвер", "Детройт", "Джексон", "Джерсі-Сіті", "Індіанаполіс", "Йонкерс", "Канзас-Сіті", "Клівленд", "Колумбус ", "Колумбус", "Лас-Вегас", "Лонг-Біч", "Лос-Анджелес", "Маямі", "Мемфіс", "Мілвокі", "Міннеаполіс", "Новий Орлеан", "Норфолк ", "Нью-Йорк", "Ньюарк", "Оклахома-Сіті", "Окленд", "Остін", "Пасадена", "Піттсбург", "Портленд ", "Провіденс", "Річмонд", "Рочестер", "Сакраменто", "Сан-Антоніо", "Сан-Дієго", "Сан-Франциско", "Сан-Хосе", "Санта-Ана", "Сент-Луїс", "Сент-Пол", "Сіетл", "Сірак'юс", "Скрентон", "Солт-Лейк-Сіті", "Спрингфілд", "Толідо", "Філадельфія", "Фінікс", "Форт-Лодердейл", "Фресно", "Х'юстон", "Цинциннаті", "Чикаго", "Чикаго-Гайтс", "Чикаго-Ридж"]
		, country: "USA"
	}, {
		city: ["Шанхай", "Пекін", "Гонконг", "Чунцін", "Шеньян", "Тянцзін", "Гуанчжоу", "Сіань", "Ханчжоу", "Харбін"]
		, country: "China"
	}];

	var APPUKR = [{
		city: ["Красноармійськ", "Калуш", "Коростень", "Ковель", "Дружківка", "Прилуки", "Рубіжне", "Антрацит", "Харцизьк", "Лозова", "Стрий", "Коломия", "Шахтарськ", "Сніжне", "Енергодар", "Ізюм", "Новоград - Волинський", "Брянка", "Бориспіль", "Димитров", "Іллічівськ", "Нововолинськ", "Ровеньки", "Лубни", "Білгород - Дністровський", "Комсомольськ", "Жовті Води", "Нова Каховка", "Фастів", "Краснодон", "Марганець", "Охтирка", "Ромни", "Львів", "Дніпро", "Луцьк", "Тернопіль", "Хмельницький", "Чернівці", "Ужгород", "Одеса", "Київ", "Херсон", "Івано-Франківськ", "Миколаїв", "Чернігів", "Черкаси", "Полтава", "Харків", "Маріуполь", "Кіровоград", "Рівне", "Суми", "Житомир", "Вінниця", "Кам'янець-Подільський", "Хотин", "Чорноморськ", "Мукачево", "Біла Церква", "Прип'ять", "Кривий Ріг", "Запоріжжя", "Трускавець", "Шацьк", "Затока", "Скадовськ", "Берегове"]
		, country: "Ukraine"
	}];


	function getRandomCity() {
		var randAll = Math.floor(Math.random() * APP.length);
		var randCity = Math.floor(Math.random() * APP[randAll].city.length);

		var randCityUkr = Math.floor(Math.random() * APPUKR[0].city.length);
		if (document.getElementById("allCountry").checked) {
			$("#screen-city-text").fadeOut(0).fadeIn(300).text(APP[randAll].city[randCity]);
			$("#paragraph-text").fadeOut(0).fadeIn(300).text(APP[randAll].country);
		} else if (document.getElementById("ukraine").checked) {
			$("#screen-city-text").fadeOut(0).fadeIn(300).text(APPUKR[0].city[randCityUkr]);
			$("#paragraph-text").fadeOut(0).fadeIn(300).text(APPUKR[0].country)
		}
	}





	//Third page, random phrase
	var appPhrase = [{
		phrase: ["А що ми ще можемо знати про речі, крім того, що вони є такими, якими нам видаються?", "У всьому міститься частина всього."]
		, person: "Анаксагор (500 р. до н. е. — 428 р. до н. е.) давньогрецький філософ"
	}, {
		phrase: ["Я повсюди чужоземець."]
		, person: "Арістіп (430 р. до н. е. — 355 р. до н. е.) давньогрецький філософ"
	}, {
		phrase: ["Дайте мені точку опори, і я зрушу світ."]
		, person: "Архімед (бл. 287—212 до н. е.) давньогрецький учений і винахідник"
	}, {
		phrase: ["Немає шедеврів, що загинули в забутті.", "Слава — сонце мертвих."]
		, person: "Оноре де Бальзак (1799-1850) французький письменник"
	}, {
		phrase: ["Існувати — означає бути сприйнятим."]
		, person: "Берклі Джордж (1685-1753) англійський філософ"
	}, {
		phrase: ["Багато чого може трапитися поміж чашею вина і губами.", "Видатна душа не позбавлена божевілля.", "Навіть відоме відоме небагатьом.", "У кого є друзі, у того немає друга."]
		, person: "Арістотель (384 р. до н. е. — 322 р. до н. е.) давньогрецький філософ"
	}, {
		phrase: ["З вірою мало що зробиш, але без віри не зробиш нічого.", "Історія мистецтва — це історія відроджень.", "Нічого не слід сприймати серйозно.", "Усе треба сприймати серйозно.", "Один крок не лише від великого до смішного, а й від смішного до великого."]
		, person: "Батлер Семюел (1835-1902) англійський письменник, філософ, теолог"
	}, {
		phrase: ["Усе своє ношу з собою.", "Той, хто пливе на кораблі, не перебуває ні поміж живих, ні поміж мертвих."]
		, person: "Біант (642-577 до н. е.) давньогрецький мудрець"
	}, {
		phrase: ["Ненависть можна успадкувати, кохання — ніколи."]
		, person: "Авербах Бершольд (1812—1882) німецький письменник"
	}, {
		phrase: ["Щастя — це гарне здоров'я і погана пам'ять."]
		, person: "Бергман Інґрід (1915-1982) шведська кіноактриса"
	}, {
		phrase: ["Самотнє серце швидше остигає."]
		, person: "Блонська Ванда польська журналістка"
	}, {
		phrase: ["Той, хто любить, повинен розділяти долю того, кого він любить."]
		, person: "Булгаков Михайло(1891-1940) російський письменник"
	}, {
		phrase: ["Краса — це обіцянка щастя."]
		, person: "Ґоббс Томас (1588-1679) англійський філософ"
	}, {
		phrase: ["Любов — це все. І це все, що ми знаємо про неї."]
		, person: "Дікінсон Емілі (1830-1886) американська поетеса"
	}, {
		phrase: ["Купи собаку. Це єдиний спосіб купити любов за гроші."]
		, person: "Іпохорська Яніна (1914-1981) польська художниця і журналістка"
	}, {
		phrase: ["Доказ справжньої любові полягає у тому, щоби любити любимих і ворогувати з ворогами"]
		, person: "Йоанн Дамаскін (бл. 675 —до 753) візантійський богослов, філософ і поет"
	}, {
		phrase: ["Краса — це вічність, що триває мить.", "Кохати — це означає згоджуватися старітися з іншою людиною."]
		, person: "Камю Альбер (1913-1960) французький письменник і філософ"
	}, {
		phrase: ["Те, що говорить жінка коханому, писано на вітрі і воді."]
		, person: "Катулл (6л. 87-54 до н. е.) давньоримський поет"
	}, {
		phrase: ["Допоки люди люблять, вони пробачають."]
		, person: "Ларошфуко Франсуа де (1613-1680) французький письменник"
	}, {
		phrase: ["Скільки всього потрібно, щоби зробити щасливою тільки одну людину."]
		, person: "Монтеск'є Шарль Луї (1689-1755) французький просвітник"
	}, {
		phrase: ["Ти не можеш бути щасливий сам: щастя є справою двох.", "Не ганяйся за щастям: воно завжди знаходиться у тобі самому."]
		, person: "Піфагор (бл. 650 — бл. 569 до н. е.) давньогрецький математик"
	}, {
		phrase: ["Любити — це не означає дивитися один на одного, любити — це означає разом дивитися в одному напрямку."]
		, person: "Сент-Екзюпері Антуан де (1900-1944)"
	}, {
		phrase: ["Легше жити з пристрасною жінкою, ніж з нудною. Правда, їх іноді душать, але рідко кидають.", "Немає такої жінки, якій вдалося б сказати «до побачення» менше, ніж у тридцяти словах.", "Жінки якось відразу вгадують з ким ми готові їм зрадити. Іноді навіть до того, як це прийде нам в голову."]
		, person: "Джордж Бернард Шоу (1856 - 1950) англійський драматург і публіцист."
	}, {
		phrase: ["Жодна людина не може стати більш чужою, ніж та, котру в минулому любили.", "Тільки той, хто не раз залишався один, знає щастя зустрічей з коханою.", "Любов не терпить пояснень. Їй потрібні вчинки.", "Будь-яка любов хоче бути вічною. У цьому і полягає її вічна мука.", "Запам'ятай одну річ, хлопчино: ніколи, ніколи і ще раз ніколи ти не опиниться смішним в очах жінки, якщо зробиш щось заради неї.", "Жінкам нічого не потрібно пояснювати, з ними завжди треба діяти."]
		, person: "Цитата з романів Еріха Марії Ремарка (1898- 1970) німецький письменник"
	}, {
		phrase: ["Життя коротке, і треба прожити його краще. Смерть страшна, але ще страшнішим було б усвідомлення, що житимеш вічно і ніколи не помреш."]
		, person: "А.Чехов"
	}, {
		phrase: ["У людини два життя, і друге починається тоді, коли ми розуміємо, що життя лише одне."]
		, person: "Том Хідлстон"
	}, {
		phrase: ["Вода, у тебе немає ні смаку, ні кольору, ні запаху, тебе неможливо описати, тобою насолоджуються, не відаючи, що ти таке. Не можна сказати, що ти необхідна для життя: ти — саме життя. Ти наповнюєш нас радістю, яку не пояснити нашими відчуттями."]
		, person: "Антуан де Сент-Екзюпері"
	}];


console.log(appPhrase[25].phrase[0].length);


	function getRandomPhrase() {
		var randAll = Math.floor(Math.random() * appPhrase.length);
		var randPhrase = Math.floor(Math.random() * appPhrase[randAll].phrase.length);
		
		console.log(appPhrase[randAll].phrase[randPhrase].length);
		
		if(appPhrase[randAll].phrase[randPhrase].length >=  60) {
			$("#screen-phrase-text").css({
				fontSize: "20px",
				fontWeight: "bold"
			});
		} else if (appPhrase[randAll].phrase[randPhrase].length <=  60) {
			$("#screen-phrase-text").css({
				fontSize: "28px",
				fontWeight: "normal"
			});
		}
		
		$("#screen-phrase-text").fadeOut(0).fadeIn(300).text(appPhrase[randAll].phrase[randPhrase]);
		$("#person-text").fadeOut(0).fadeIn(300).text(appPhrase[randAll].person);
	};


	//functions in pages
	getRandom();
	getRandomPhrase();
	if (document.getElementById("allCountry")) {
		getRandomCity();
	}
	
});