function startDataUpload() {
	alert ("start data upload");	
	
	var question = document.getElementById("question").value;
	var answer1 = document.getElementById("answer1").value;
	var answer2 = document.getElementById("answer2").value;
	var answer3 = document.getElementById("answer3").value;
	var answer4 = document.getElementById("answer4").value;
	var correctanswer = document.getElementById("correctanswer").value;
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;

	alert(question + " "+ answer1 + " "+answer2 + " "+answer3 + " "+answer4 + " "+correctanswer + " "+latitude + " "+longitude);
	
	var postString = "question="+question +"&answer1="+answer1+"&answer2="+answer2+"&answer3="+answer3+"&answer4="+answer4+"&correctanswer="+correctanswer;
	
	
	// now add the geometry values
	postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;

	
	processData(postString);

}

var client;

function processData(postString) {
   client = new XMLHttpRequest();
   client.open('POST','http://developer.cege.ucl.ac.uk:30267/uploadData',true);
   client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   client.onreadystatechange = dataUploaded;  
   client.send(postString);
}
// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
  // this function listens out for the server to say that the data is ready - i.e. has state 4
  if (client.readyState == 4) {
    // change the DIV to show the response
    document.getElementById("dataUploadResult").innerHTML = client.responseText;
    }
}
