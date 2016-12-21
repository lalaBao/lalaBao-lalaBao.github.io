function Land(ctx,img,speed){
		// 统计sky对象的个数
		Land.len++;

		this.ctx = ctx;
		this.img = img;
		this.width = this.img.width;
		this.height = this.img.height;
		this.x = (Land.len-1)*this.width;
		this.y = this.ctx.canvas.height-this.height;
		this.speed = speed || 10;
}
Land.len = 0;
Land.prototype = {
	constructor:Land,
	draw:function () {
		if (this.x<-this.width) {
			this.x = this.x+this.width*6;
		}
		this.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
	},
	updata:function () {
		this.x -= this.speed;
	}
}