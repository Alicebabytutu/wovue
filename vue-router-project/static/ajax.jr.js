function InitAjax(){
	var ajax = false;
	try{
		ajax = new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch (e){
		try{
			ajax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch (E){
			ajax = false;
		}
	}

	if (!ajax && typeof XMLHttpRequest!='undefined'){
		ajax = new XMLHttpRequest();
	}
	return ajax;
}


function ajaxPost(url,callback,data){
		if(!data){
			//data 没有对应实参 值为 undefined的时候;
			data = null;
		}
		var ajax = InitAjax();
		ajax.open("POST",url);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
		ajax.send(data); //undefined == null;
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				callback(ajax.responseText)
			}
		}
}

function ajaxGet(url,callback,data){
	if(data){
		url = url + "?" + data;
	}
	var ajax = InitAjax();
	ajax.open("GET",url);
	ajax.send(null);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			callback(ajax.responseText);
		}
	}
}