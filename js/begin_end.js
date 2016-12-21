var easy = document.getElementById('easy');
	var hard = document.getElementById('hard');
	var beginGame = document.getElementById('beginGame');
	var endGame = document.getElementById('endGame');
	var timeBox = document.getElementsByClassName('timeBox')[0];

	easy.onclick = function () {
		beginGame.style.display = 'none';
		cas.style.display = 'block';
		// timeBox.style.display = 'block';
		// 背景速度，小鸟速度,小鸟下降加速度，点击一次小鸟上升位移
		begin(7,3,1,-5);
	}
	hard.onclick = function () {
		beginGame.style.display = 'none';
		cas.style.display = 'block';
		// timeBox.style.display = 'block';
		// 背景速度，小鸟速度,小鸟下降加速度，点击一次小鸟上升位移
		begin(15,8,2,-11);
	}