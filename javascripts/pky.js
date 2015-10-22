(function($){
    $.fn.extend({
    	pky:function(originArr){
    		// var splitedArr=originArr.split(",");
    		splitedArr=originArr;
    		alert(splitedArr);
    		alert(splitedArr[0]);
       		alert(splitedArr[0].obj);//rule error
    	}
    });

        $.fn.extend({
    	pkyOne:function(originObj){
    		// var splitedArr=originArr.split(",");
    		$.each(originObj.rule)
    		{
    			alert(originObj.rule);
    		}
       		
       		//alert(splitedObj[1].rule);//error
    	}
    });

  
})(jQuery)





/*
思路All：
参数->
[{[contorller1,contorller2,contorller3,...],[rule1,rule2,rule3,...],[error1,error2,error3,...]},{[contorller1,contorller2,contorller3,...],[rule1,rule2,rule3,...],[error1,error2,error3,...]},{[contorller1,contorller2,contorller3,...],[rule1,rule2,rule3,...],[error1,error2,error3,...]},...]
返回值->
[{stat,controller,error},{stat,controller,error},{stat,controller,error},...]

过程：
原始数组<字符串>；
分割后数组<数组>（对象）；

遍历数组：
--遍历对象controller
--遍历验证规则rule（二维数组记录错误信息）
  正确与否[控件][规则]
--返回<对象>{状态，控件位置，错误信息<数组>}

打包返回
<数组>（对象）[{状态，控件位置，错误信息<数组>}]



思路One：
参数->
{[rule1,rule2,rule3,...],[error1,error2,error3,...]}
返回值->
{stat,error}

过程：
原始对象；
分割后数组<数组>（参数）；

遍历数组：
--遍历验证规则rule（一维数组记录错误信息）
  正确与否[规则]
--返回<对象>{状态，错误信息<数组>}



*/