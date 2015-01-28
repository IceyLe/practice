// var pro = [];
// var cit = [];
// var dis = [];
// for ( var p in ProvinceLink) {
// 	pro.push(ProvinceLink[p].name);
// 	for(var c in ProvinceLink[p].city){
// 		cit.push(ProvinceLink[p].city[c].name);
// 		for(var d in ProvinceLink[p].city[c].district){
// 			dis.push(ProvinceLink[p].city[c].district[d].name);
// 		}
//     }
// }
var proid = document.getElementById("pro");
var citid = document.getElementById("cit");
var disid = document.getElementById("dis");

function onload(){
	for ( var p in ProvinceLink) {
		addOption(proid,ProvinceLink[p].name,p);
	}
	// for(var i = 0 ;i < pro.length; i++){
	// 	addOption(proid,pro[i],i);
	// }
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
    	// for(var i = 0 ;i < cit[proid.value].length; i++){
    	// 	addOption(citid,cit[proid.value][i],i);
    	// }
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
    	// for(var i = 0 ;i < dis[citid.value].length; i++){
    	// 	addOption(disid,dis[citid.value][i],i);
    	// }
    }
}
