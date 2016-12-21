function Pipe(ctx,imgDown,imgUp,speed,space,landHeight){
		// 统计sky对象的个数
		Pipe.len++;

		this.ctx = ctx;
		this.imgDown = imgDown; //上面那张
		this.imgUp = imgUp;		//下面那张
		this.width = this.imgUp.width;//52*3=156
		this.drawWidth = this.imgUp.width*3;//52*3=156
		this.height = this.imgUp.height;
		this.speed = speed || 10;

		this.upY = 0;
		this.downY = 0;
		this.casHeight = this.ctx.canvas.height;
		this.land = landHeight;//112
		this.space = space;//上下柱子之间的间隔
		this.x = (Pipe.len-1)*this.drawWidth+500;
		this.maxHeight = this.casHeight-this.land-this.space-150;//上下柱子加起来最大高度

		this._init();

}
Pipe.len = 0;
Pipe.prototype = {
	constructor:Pipe,
	_init:function () {

		this._randomY();
		this.ctx.drawImage(this.imgDown,this.x,this.downY,this.width,this.height);
		this.ctx.drawImage(this.imgUp,this.x,this.upY,this.width,this.height);


	},
		//每次随机生成上柱子的高度
	_randomY:function () {
		var minHeight = this.maxHeight*Math.random();
		this.downHeight = minHeight>100?minHeight:100;
		this.downY = this.downHeight - this.height;
		this.upY = this.downHeight + this.space ;
	},
	draw:function () {

		if (this.x<-this.drawWidth) {
			this.x = this.x+this.drawWidth*8*2;//拼接到第二屏后
			this._randomY();

		}
		this.ctx.drawImage(this.imgDown,this.x,this.downY,this.width,this.height);
		this.ctx.drawImage(this.imgUp,this.x,this.upY,this.width,this.height);

		// 绘制路径 柱子
		this.ctx.rect(this.x,this.downY,this.width,this.height);
		this.ctx.rect(this.x,this.upY,this.width,this.height);
	},
	updata:function () {
		this.x -= this.speed;
	}
}