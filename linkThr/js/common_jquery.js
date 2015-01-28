$(function(){
	var cVal = $("#cit").val();
	for ( var p in ProvinceLink) {
		addOption(pro,ProvinceLink[p].name,p);
	}
	$("#pro").change(function(){
		var pVal = $("#pro").val();
		if(pVal == -1){
	    	clearOption(cit,dis);
	    }else{
	    	clearOption(cit,dis);
	    	for(var c in ProvinceLink[pVal].city){
	    		addOption(cit,ProvinceLink[pVal].city[c].name,c);
	    	}
	    }
	});
});
function addOption(_id,_text,_val){
	$(_id).append("<option value=" + _val + ">" + _text + "</option>");
}
function clearOption(){
	for(var i = 0 ;i < arguments.length; i++){
		alert("#"+$(arguments[i]+">option").length);
	}
}