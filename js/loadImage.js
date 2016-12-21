//加载完所有图片，再统一进行绘制
	function loadImage(imgs,fn) {
		var tempImg;
		var imgObjs=[];
		var count = 0;
		var imgsLength = 0;

		for (var key in imgs) {
			imgsLength++;
			tempImg = new Image();
			tempImg.onload = function () {
				count++;
				if (count == imgsLength) {
					fn(imgObjs);
				}
			}
			tempImg.src = imgs[key];
			imgObjs[key] = tempImg;

		}
	}