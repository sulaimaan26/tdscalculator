

function getTDS(){
	let TDSValue=document.getElementById("tdsvalue").value;
	if(TDSValue !== ""){
		document.getElementById("form-section").style.display="none"
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {	
			if (this.readyState == 4 && this.status == 200) {
				console.log(TDSValue)
				var myObj = JSON.parse(this.responseText);  
				let card=document.getElementById("card-section");
				let icon=document.getElementById("icon");
				let message=document.getElementById("message");
				let description=document.getElementById("description");
				let id=0;
				//TDS Range check 
				if(TDSValue > 0 && TDSValue <= 150){
					id=1
				}else if(TDSValue > 150 && TDSValue <= 500){
					id=2
				}else{
					id=3;
				}
				//End
				let temp=myObj._data.filter(function(data){
					return data.id === id;
				})
				card.style.display="block"
				icon.style.height=temp[0].height
				message.innerText=temp[0].message
				description.innerText=temp[0].description
				icon.setAttribute("src",temp[0].img)	
				console.log(myObj)
			}
		};
		xmlhttp.open("GET", "data.json", true);
		xmlhttp.send();
	}
	
}	


