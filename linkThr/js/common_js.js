var proid = document.getElementById("pro");
var citid = document.getElementById("cit");
var disid = document.getElementById("dis");

function onload(){
	for ( var p in ProvinceLink) {
		addOption(proid,ProvinceLink[p].name,p);
	}
}
function addOption(_id,_text,_val){
	var opt=document.createElement("option");
    var txt=document.createTextNode(_text);
	var attr=document.createAttribute("value");
	opt.attributes.setNamedItem(attr);
    opt.setAttribute("value",_val);
    opt.appendChild(txt);
    _id.appendChild(opt);
}
function clearOption(){
	for(var i = 0 ;i < arguments.length; i++){
		arguments[i].options.length = 1;
	}
}
function proChange(){
    if(proid.value == -1){
    	clearOption(citid,disid);
    }else{
    	clearOption(citid,disid);
    	for(var c in ProvinceLink[proid.value].city){
    		addOption(citid,ProvinceLink[proid.value].city[c].name,c);
    	}
    }
}
function citChange(){
    if(citid.value == -1){
    	clearOption(disid);
    }else{
    	clearOption(disid);
    	for(var d in ProvinceLink[proid.value].city[citid.value].district){
 			addOption(disid,ProvinceLink[proid.value].city[citid.value].district[d].name,d);
 		}
    }
}
