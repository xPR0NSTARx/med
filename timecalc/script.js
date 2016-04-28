var add = function(){
	op(1);
};

var sub = function(){
	op(-1);
};

var op = function(sign){
	var iMin = document.querySelector("#iMin");
	var iSec = document.querySelector("#iSec");
	var sMin = document.querySelector("#sMin");
	var sSec = document.querySelector("#sSec");

	if(iMin.value == "")
		iMin.value = "0";
	if(iSec.value == "")
		iSec.value = "0";
	iSec.value = ("0" + iSec.value).slice(-2);

	var iMinI = parseInt(iMin.value);
	var iSecI = parseInt(iSec.value);
	var sMinI = parseInt(sMin.innerHTML);
	var sSecI = parseInt(sSec.innerHTML);
	
	var iSecs = iMinI * 60 + iSecI;
	var sSecs = sMinI * 60 + sSecI * (sMin.innerHTML.charAt(0) == '-' ? -1 : 1);
	
	sSecs += iSecs * sign;

	sMinI = sSecs > 0 ? Math.floor(sSecs / 60) : Math.ceil(sSecs / 60);
	sSecI = Math.abs(sSecs) % 60;
	
	sMin.innerHTML = sMinI == 0 && sSecs < 0 ? "-0" : sMinI;
	sSec.innerHTML = ("0" + sSecI).slice(-2);

	iMin.focus();
	iMin.select();
};
