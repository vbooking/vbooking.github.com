var SignObj = function (){
	var _that = this;
	this.context=[
		"爱java、javascript、C#、Oracle、Sql server、MongoDB、android、c/c++ 、shell、hack,爱我自己。别叫我前辈，别称呼您，别给我发广告，别天天要现成代码，别问我在哪上班，别在上班时间Q我求帮忙解决这个那个，单线程哥忙不过来",	
			"为API生，为框架死，为debug奋斗一辈子；吃符号亏，上大小写的当，最后死在需求上。",	"借由一副疲惫的身体，(好几天没有吃饭睡觉)埋藏着一颗没有形状的心。(因而也不知道自己在干什么)在惊涛骇浪中，(面对和程序一样长的出错报告)依然追逐着，再调试)那久已忘记的身影......(Shit，空指针！)",			"世上最遥远的距离，是我在if里你在else里，似乎一直相伴又永远分离；世上最痴心的等待，是我当case你是switch，或许永远都选不上自己；世上最真情的相依，是你在try我在catch，无论你发神马脾气，我都默默承受，静静处理。到那时，再来期待我们的finally"
		"程序员，他们单纯、固执、容易体会到成就感；面对压力，能够挑灯夜战不眠不休；面对困难，能够迎难而上挑战自我。他们也会感到困惑与傍徨，但每个程序员的心中都有一个比尔盖茨或是乔布斯的梦想“用智慧开创属于自己的事业”。我想说的是，其实我是一个程序员。"	
		
		] 
		var sign = document.getElementById("sign");	
		var signLength = 0;
		this.replaceSign = function (){		
		   if(signLength>=_that.context.length){
			  signLength = 0;
			  return;
		   }
		     sign.innerHTML=_that.context[signLength];
		   signLength++;
		}
		
};

	var signObj =new  SignObj()
	setInterval(signObj.replaceSign,8000);
