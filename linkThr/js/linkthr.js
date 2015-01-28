function $(id) {
    return document.getElementById(id);
}

function LinkStr(wrapID, pro, city, dist) {
    this.wrapElem = $(wrapID);
    this._render(pro, city, dist);
}

LinkStr.prototype.init = function() {
    this._getData();
    this._onload();
    this._bindEvent();
}
LinkStr.prototype._render = function(pro, cit, dis) {
    var str = 
        '<select name="pro" id="' + pro + '">'+
        '    <option value="-1">请选择省</option>'+
        '</select>'+
        '<select name="cit" id="' + cit + '">'+
        '    <option value="-1">请选择市</option>'+
        '</select>'+
        '<select name="dis" id="' + dis + '">'+
        '    <option value="-1">请选择区</option>'+
        '</select>';
    this.wrapElem.innerHTML = str;
    this.proid = $(pro);
    this.citid = $(cit);
    this.disid = $(dis);
}
LinkStr.prototype._getData = function() {
    this.linkdata = ProvinceLink;
}
LinkStr.prototype._bindEvent = function() {
    var me = this;
    this.proid.addEventListener("change", function(event) {
        me._proChange();
    });
    this.citid.addEventListener("change", function(event) {
        me._citChange();
    });
}
LinkStr.prototype._onload = function() {
    for (var p in ProvinceLink) {
        this._addOption(this.proid, ProvinceLink[p].name, p);
    }
}
LinkStr.prototype._clearOption = function() {
    for (var i = 0; i < arguments.length; i++) {
        arguments[i].options.length = 1;
    }
}
LinkStr.prototype._proChange = function() {
    if (this.proid.value == -1) {
        this._clearOption(this.citid, this.disid);
    } else {
        this._clearOption(this.citid, this.disid);
        for (var c in ProvinceLink[this.proid.value].city) {
            this._addOption(this.citid, ProvinceLink[this.proid.value].city[c].name, c);
        }
    }
}
LinkStr.prototype._citChange = function() {
    if (this.citid.value === -1) {
        this._clearOption(this.disid);
    } else {
        this._clearOption(this.disid);
        for (var d in ProvinceLink[this.proid.value].city[this.citid.value].district) {
            this._addOption(this.disid, ProvinceLink[this.proid.value].city[this.citid.value].district[d].name, d);
        }
    }
}
LinkStr.prototype._addOption = function(_id, _text, _val) {
        var opt = document.createElement("option");
        var txt = document.createTextNode(_text);
        var attr = document.createAttribute("value");
        opt.attributes.setNamedItem(attr);
        opt.setAttribute("value", _val);
        opt.appendChild(txt);
        _id.appendChild(opt);
}