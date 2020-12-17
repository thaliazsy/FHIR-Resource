var ret;
//取得網路上的資源
function HTTPGetData(urlStr) {
    var HttpObj = new XMLHttpRequest();   
    HttpObj.onreadystatechange = function () {
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
            //   alert(ret);
                 callBack(ret);
         //   alert("data retrieved");
        }
    }
	HttpObj.open("GET", urlStr, true);
    HttpObj.send();
}

//上傳 dataStr 到網路上
function HTTPPostData(urlStr, dataStr ) {
    var HttpObj = new XMLHttpRequest();
	HttpObj.open("POST", urlStr, true);
    HttpObj.setRequestHeader("Content-type", "application/json+fhir");
    //HttpObj.setRequestHeader("Content-type", "application/xml+fhir");
    HttpObj.onreadystatechange = function () {
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
				//document.getElementById("TextArea1").value = ret;
             alert(ret);
        }
    }
	
	
    HttpObj.send(dataStr);
}

function HTTPPutData(urlStr, dataStr ) {
    var HttpObj = new XMLHttpRequest();
	HttpObj.open("PUT", urlStr, true);
    HttpObj.setRequestHeader("Content-type", "application/json+fhir");
    //HttpObj.setRequestHeader("Content-type", "application/xml+fhir");
    HttpObj.onreadystatechange = function () {
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
				//document.getElementById("TextArea1").value = ret;
             alert(ret);
        }
    }
	
	
    HttpObj.send(dataStr);
}

function HTTPDeleteData(urlStr) {
    var HttpObj = new XMLHttpRequest();
	HttpObj.open("DELETE", urlStr, true);
    HttpObj.setRequestHeader("Content-type", "application/json+fhir");
    //HttpObj.setRequestHeader("Content-type", "application/xml+fhir");
    HttpObj.onreadystatechange = function () {
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
				//document.getElementById("TextArea1").value = ret;
             alert(ret);
        }
    }
	
	
    HttpObj.send(null);
}