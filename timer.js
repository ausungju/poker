window.onload = function(){
	var clockTarget = document.getElementById("clock");

	function clocking() {
		var date = new Date();
		var month = date.getMonth();
		var clockDate = date.getDate();
		var day = date.getDay();
		var week = ['일', '월', '화', '수', '목', '금', '토'];
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

		clockTarget.innerText = `${month+1}월 ${clockDate}일 ${week[day]}요일` + 
		`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }
		`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
	}

	function init() {
	setInterval(clocking, 1000);
	}
init();
};
