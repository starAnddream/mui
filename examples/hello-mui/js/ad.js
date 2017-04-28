<<<<<<< HEAD
document.addEventListener('DOMContentLoaded',function(){
	document.querySelector("body").addEventListener('click',function (event) {
		event.preventDefault();
		event.stopPropagation();
		var target = event.target;
		for (; target && target !== document; target = target.parentNode) {
			if(target.tagName=='A'){
				plus.runtime.openURL(target.getAttribute("href"));
				break;
			}
			console.log("target:"+target.tagName);
		}
	},true);
	
	//判断是否包含viewport meta信息，若无，则动态插入
	var content = 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no';
	if(!document.querySelector('meta[name=viewport]')) {
		var meta = document.createElement('meta');
		meta.name = 'viewport';
		meta.content = content;
		document.getElementsByTagName('head')[0].appendChild(meta);
	}

},false)
=======
document.addEventListener('DOMContentLoaded',function(){
	document.querySelector("body").addEventListener('click',function (event) {
		event.preventDefault();
		event.stopPropagation();
		var target = event.target;
		for (; target && target !== document; target = target.parentNode) {
			if(target.tagName=='A'){
				plus.runtime.openURL(target.getAttribute("href"));
				break;
			}
			console.log("target:"+target.tagName);
		}
	},true);
	
	//判断是否包含viewport meta信息，若无，则动态插入
	var content = 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no';
	if(!document.querySelector('meta[name=viewport]')) {
		var meta = document.createElement('meta');
		meta.name = 'viewport';
		meta.content = content;
		document.getElementsByTagName('head')[0].appendChild(meta);
	}

},false)
>>>>>>> 94f36684d3014b66ca8e7b501ebd3c25b0b63214
