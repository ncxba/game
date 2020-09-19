function UserInfo() {

};

//清除登录信息
UserInfo.clear = function() {
	delCookie("token");
    delCpid("cpid");
    delGameid("gameid");
    delRoleid("roleid");
};

//检查是否已登录
UserInfo.has_login = function() {
	var token = UserInfo.token();
	if(!token) {
		return false;
	}
	return true;
};


UserInfo.token = function() {
	if(arguments.length == 0) {
		return getCookie("token");
	}
	if(arguments[0] === '') {
		delCookie("token");
		return;
	}
	setCookie("token", arguments[0]);
};

//存cookie
function setCookie(name, value) {
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()+"; path=/";
}

//读取cookies
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}

//删除cookies
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if(cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()+"; path=/";
}

//cpid
UserInfo.has_cpid = function() {
    var cpid = UserInfo.cpid();
    if(!cpid) {
        return false;
    }
    return true;
};


UserInfo.cpid = function() {
    if(arguments.length == 0) {
        return getCpid("cpid");
    }
    if(arguments[0] === '') {
        delCpid("cpid");
        return;
    }
    setCpid("cpid", arguments[0]);
};

//存openid
function setCpid(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()+"; path=/";
}

//读取cpid
function getCpid(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if(arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

//删除cpid
function delCpid(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCpid(name);
    if(cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()+"; path=/";
}

//gameid
UserInfo.has_gameid = function() {
    var tel = UserInfo.gameid();
    if(!tel) {
        return false;
    }
    return true;
};


UserInfo.gameid = function() {
    if(arguments.length == 0) {
        return getGameid("gameid");
    }
    if(arguments[0] === '') {
        delGameid("gameid");
        return;
    }
    setGameid("gameid", arguments[0]);
};

//存cookie
function setGameid(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()+"; path=/";
}

//读取cookies
function getGameid(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if(arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

//删除cookies
function delGameid(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getGameid(name);
    if(cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()+"; path=/";
}

//gameid
UserInfo.has_roleid = function() {
    var tel = UserInfo.roleid();
    if(!tel) {
        return false;
    }
    return true;
};


UserInfo.roleid = function() {
    if(arguments.length == 0) {
        return getRoleid("roleid");
    }
    if(arguments[0] === '') {
        delRoleid("roleid");
        return;
    }
    setRoleid("roleid", arguments[0]);
};

//存cookie
function setRoleid(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()+"; path=/";
}

//读取cookies
function getRoleid(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if(arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

//删除cookies
function delRoleid(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getRoleid(name);
    if(cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()+"; path=/";
}