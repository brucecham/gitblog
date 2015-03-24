define(function (require,exports,module){
	exports.init = function(){
		$("#activeBtn").touchend(function(){
			$("#keybordBox").show()
		});
		$("#keybordBox .box").touchend(function(e){
			var T = $(e.currentTarget),Input = $("#activeBtn"),
			InVal = Input.data("value"),InTxt = Input.html();
			if( T.data("type") == "sure" ){
				$("#keybordBox").hide();
			}else if( T.data("type") == "del"){
				var InValDel = InVal.substring(0,InVal.length-1),
				InTxtDel = InTxt.substring(0,InTxt.length-1);
				Input.html(InTxtDel).data("value",InValDel);
				if( InValDel == "" ){
					// Input.html("请输入密码")
				}
			}else if( T.data("type") == "num" ){
				if( InVal.length < 6 ){
					if(InVal.length == 0){
						InTxt = "";
					}
					Input.html( InTxt + T.data("value") ).data("value", InVal + T.data("value"));
					setTimeout(function(){
						var setTval = $("#activeBtn").html()
						Input.html( setTval.replace(/\d/g,"●") )
					},201)
				}
			}
		})
	}
})