		<script>
			//
			window.onload = function() {
				//获取所有对象:
				//获取用户名元素:
				var unameEle = document.getElementById("usename");
				//获取密码输入框元素对象
				var passEle = document.getElementById("password");
				//获取确认框元素对象;
				var repassEle = document.getElementById("repassword");
				//获取消息框对象
				var infoEle = document.getElementById("info");
				//获取email 元素
				var emailEle = document.getElementById("email");
				//获取birthday 元素对象
				var birthEle = document.getElementById("birthday");
				//初始化所有输入框
				initialiseValue(unameEle, passEle, repassEle, infoEle, emailEle);

				//var flag=false;
				//校验
				checkoutUsername(unameEle, infoEle); //用户名
				checkoutPassword(passEle, infoEle); //密码
				checkoutRepass(passEle, repassEle, infoEle); //验证一致性
				checkoutEmail(emailEle, infoEle); //校验电子邮件地址.
				//checkoutBirthday(birthEle, infoEle); //校验生日.
			}
			//初始化
			function initialiseValue(unameEle, passEle, repassword, infoEle, emailEle) {
				//初始化用户名消息框:
				unameEle.placeholder = "请您在此输入用户名:";
				//初始化密码输入框
				passEle.placeholder = "请您在此处输入密码:";
				//初始化确认框
				repassword.placeholder = "请您再次输入密码:";
				//
				//初始化消息框样式
				infoEle.style.color = "red";
				//初始化email地址输入框
				emailEle.placeholder = "例如 :exampl@xxx.com"
			}
			//校验用户名
			function checkoutUsername(unameEle, infoEle) {
				//创建用户名正则表达式对象 用户名只能是数字和字母的组合
				var reg = /^[A-Za-z0-9]+$/;
				//绑定监视器
				unameEle.onblur = function() {
					//利用正则表达式校验用户名
					if(!(reg.test(unameEle.value))) {
						infoEle.innerHTML = "用户名只能是数字和字母的组合,请重新输入:";
					} else {
						infoEle.innerHTML = "";
					}
				}
			}
			//校验密码
			function checkoutPassword(passEle, infoEle) {
				//创建密码正则对象: 以字母开头，长度在6~18之间，只能包含字符、数字和下划线
				var reg = /^[a-zA-Z]\w{5,17}$/;
				//失去焦点开始校验
				passEle.onblur = function() {
					if(!(reg.test(passEle.value))) {
						infoEle.innerHTML = "以字母开头，长度在6~18之间，只能包含字符、数字和下划线:";
					} else {
						infoEle.innerHTML = "";
					}
				}
			}
			//校验用户名和密码是否一直
			function checkoutRepass(passEle, repassEle, infoEle) {
				//失去焦点时开始校验
				repassEle.onblur = function() {
					if(passEle.value != repassEle.value) {
						repassEle.value = "";
						infoEle.innerHTML = "两次密码不一致,请重新输入";
					} else {
						infoEle.innerHTML = "";
					}
				}
			}
			//校验电子邮箱地址:
			function checkoutEmail(emailEle, infoEle) {
				var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				emailEle.onblur = function() {
					if(!(reg.test(emailEle.value))) {
						infoEle.innerHTML = "您输入的邮件地址不合法";
					} else {
						infoEle.innerHTML = "";
					}
				}
			}
			
		</script>
