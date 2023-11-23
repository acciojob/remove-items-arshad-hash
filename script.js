//your JS code here. If required.
let  select = document.getElementById("colorSelect");
let selectOption=document.getElementsByTagName("option");
let button= document.querySelector("input");

button.addEventListener("click" , ()=>{
	for (let i = 0; i < selectOption.length; i++) {
		if(select.value===selectOption[i].value)
		{
			selectOption[i].remove();
			break;
		}
		
	}
	
});