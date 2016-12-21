function Sky(ctx,img,speed){
		// 统计sky对象的个数
		Sky.len++;

		this.ctx = ctx;
		this.img = img;
		this.width = this.img.width;
		this.height = this.img.height;
		this.x = (Sky.len-1)*this.width;
		this.y = 0;
		this.speed = speed || 10;
}
Sky.len = 0;
Sky.prototype = {
	constructor:Sky,
	draw:function () {
		if (this.x<-this.width) {
			this.x = this.x+this.width*3;
		}
		this.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
	},
	updata:function () {
		this.x -= this.speed;
	}
}