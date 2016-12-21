function Bird(ctx,img,speed,speedDown,speedUp,landHeight){
		// 统计Bird对象的个数

		this.ctx = ctx;
		this.img = img;
		this.width = this.img.width;
		this.height = this.img.height;
		this.x = 100;
		this.y = 150;

		this.cutWidth =this.img.width/3;
		this.cutHeight =this.img.height;
		this.num = 0;
		this.cutX =0;
		this.cutY = 0;
		this.land = landHeight || 112;


		this.speed = speed || 10;
		this.speedDown = speedDown;
		this.speedUp = speedUp;
		this.__click();
}
Bird.prototype = {
	constructor:Bird,
	draw:function () {

		var baseRadian = Math.PI/180*10;//基础变动角度10
		var maxRadian = Math.PI/180*45;
		var minRadian = -Math.PI/180*45;
		// var currentRadian = baseRadian*this.speed>maxRadian?maxRadian:baseRadian*this.speed;
		var currentRadian;
		if (baseRadian*this.speed>maxRadian) {
			currentRadian=maxRadian;
		}else if (baseRadian*this.speed<minRadian) {
			currentRadian = minRadian;
		}else{
			currentRadian = baseRadian*this.speed;
		}
		this.cutX = this.cutWidth*this.num;

		
		// 旋转
		this.ctx.save();

		this.ctx.translate(this.x+this.cutWidth/2,this.y+this.cutHeight/2);
		this.ctx.rotate(currentRadian);
		this.ctx.drawImage(this.img,this.cutX,this.cutY,this.cutWidth,this.cutHeight,-this.cutWidth/2,-this.cutHeight/2,this.cutWidth,this.cutHeight);
		
		this.ctx.restore();

		// 判断鸟的中心点坐标是否上天或入地
		if(this.y+this.cutHeight/2>=this.ctx.canvas.height-this.land || this.y+this.cutHeight/2<=0){
			return true;
		}
		// 判断鸟的中心点坐标是否在路径里，在就gg 
		if (this.ctx.isPointInPath(this.x+this.cutWidth/2,this.y+this.cutHeight/2)) {
			return true;
		}

	},
	updata:function () {
		this.y += this.speed;//每次更新下降speed;
		// this.speed++;//每次更新加速度加1
		this.speed+=this.speedDown;//每次更新加速度加speedDown
		this.num++;
		if (this.num>=3) {
			this.num=0;
		}

	},
	__click:function () {
		var self = this;
		document.body.onclick = function () {
			self.speed = self.speedUp;//点击一次向上移动多少
			
		}
	}
}