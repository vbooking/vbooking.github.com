var SignObj = function (){
	var _that = this;
	this.context=[
		"爱java，爱javascript，爱C#，爱Oracle，爱Sql server，爱MongoDB,爱android，爱c/c++ ，爱shell，爱hack,爱我自己。别叫我前辈，别称呼您，别给我发广告，别天天要现成代码，别问我在哪上班，别在上班时间Q我求帮忙解决这个那个，单线程哥忙不过来",	
			"为API生，为框架死，为debug奋斗一辈子；吃符号亏，上大小写的当，最后死在需求上。",	"借由一副疲惫的身体，(好几天没有吃饭睡觉)埋藏着一颗没有形状的心。(因而也不知道自己在干什么)在惊涛骇浪中，(面对和程序一样长的出错报告)依然追逐着，再调试)那久已忘记的身影......(Shit，空指针！)",
		
			
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
