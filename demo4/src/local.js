import Game from './game'

var Local = function() {
    //游戏对象
    var game;
    var INTERVAL = 200;
    var timer = null;
    var timeCount = 0;
    var time = 0;
    //绑定键盘事件
    var bindKeyEvent = function () {
        document.onkeydown = function (e) {
            if (e.keyCode == 38) {
                game.rotate()
            } else if (e.keyCode == 39) {
                game.right()
            } else if (e.keyCode == 40) {
                game.down()
            } else if (e.keyCode == 37) {
                game.left()
            } else if (e.keyCode == 32) {//space
                game.fall()
            }
        }
    }
    //移动
    var move = function () {
        timeFunc();
        if (!game.down()) {
            game.fixed();
            var line = game.checkClear();
            if (line) {
                game.addScore(line);
            }
            var gameOver = game.checkGameover();
            if (gameOver) {
                game.gameover(false);
                stop();
            } else {
                game.performNext(generateType(), generateDir());
            }
        }
    }
    //计时函数
    var timeFunc = function () {
        timeCount = timeCount + 1;
        if (timeCount == 5) {
            timeCount = 0;
            time = time + 1;
            game.setTime(time);
        }
    }
    //随机生成一个方块种类
    var generateType = function () {
        return Math.ceil(Math.random() * 7) - 1
    }
    //随机生成一个旋转次数
    var generateDir = function () {
        return Math.ceil(Math.random() * 4) - 1
    }
    //开始
    var start = function () {
        var doms = {
            gameDiv: document.getElementById('game'),
            nextDiv: document.getElementById('next'),
            timeDiv: document.getElementById('time'),
            scoreDiv: document.getElementById('score'),
            resultDiv: document.getElementById('gameover')
        }
        game = new Game();
        game.init(doms, generateType(), generateDir());
        bindKeyEvent();
        game.performNext(generateType(), generateDir())
        timer = setInterval(move, INTERVAL)
    }
    var stop = function () {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        document.onkeydown = null;
    }
    //导出API
    this.start = start;
    this.sotp = stop;
}

export default Local
