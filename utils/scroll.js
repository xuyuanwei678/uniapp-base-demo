/**
 * 解决软键盘弹出时的位置滚动问题
 * 用于微信H5端，其他端未测试。
 * 使用方法：
 * 1.有弹出软键盘时需要复位滚动位置的页面引入；
 * 2.在页面的onLoad生命周期函数中调用compatibility()；
 **/
export default{
	compatibility(){
	    let isReset = true;
	    const u = navigator.userAgent;
	    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
	    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		var scrollTop;
	    let originalHeight = document.documentElement.clientHeight || document.body.clientHeight;
	    if(isAndroid) {
			console.log('isAndroid')
	        window.onresize = function(){
	            let resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
	            if(resizeHeight < originalHeight){
	                isReset = false;
	            }else{
	                isReset = true;
	                setTimeout(() => {
	                    if(isReset){
							uni.pageScrollTo({
								duration:0,//
								scrollTop:res.top - data.top,//滚动到实际距离是元素距离顶部的距离减去最外层盒子的滚动距离
							})
							
	                    }
	                },300)
	            }
	        }
	    }else if(isIOS){
	        document.body.addEventListener('focusin', () => {
	            isReset = false;
				scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	        })
	        document.body.addEventListener('focusout', () => {
	            isReset = true;
				if(isReset){
					uni.pageScrollTo({
						duration:100,//过渡时间
						scrollTop:scrollTop,//滚动到实际距离是元素距离顶部的距离减去最外层盒子的滚动距离
					})
				}
	        })
	    }
	}
	
}

