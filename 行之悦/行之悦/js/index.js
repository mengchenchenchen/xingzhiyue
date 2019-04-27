//header

 $(window).scroll(function(){
 	if($(document).scrollTop()>0){
 		$('.header').addClass('header-hover');
 		$('.balloon').addClass('balloon_show');
 	}else{
 		$('.header').removeClass('header-hover');
 		$('.balloon').removeClass('balloon_show');
 	}
 	var bgImg_scroll = $(document).scrollTop();
 	var bgImg_scroll2 = bgImg_scroll/1.5;
 	$('.bgImg').css("background-position","0  "+bgImg_scroll2+"px");
 })
 var arr = [
 	{
 		name:"热门",
 		items:['摩洛哥','坦桑尼亚','玻利维亚','巴哈马','古巴','挪威','新西兰','秘鲁','南极','北极','芬兰']
 	},
 	{
 		name:"极地",
 		items:['南极','北极']
 	},
 	{
 		name:"非洲",
 		items:['博茨瓦纳','摩洛哥','坦桑尼亚','纳米比亚','南非']
 	},
 	{
 		name:"美洲",
 		items:['墨西哥','玻利维亚','美国','巴哈马','智利','阿根廷','古巴','秘鲁','加拿大']
 	},
 	{
 		name:"欧洲",
 		items:['克罗地亚','德国','意大利','法国','捷克','挪威','芬兰']
 	},
 	{
 		name:"大洋洲",
 		items:['新西兰']
 	},
 	{
 		name:"亚洲",
 		items:['缅甸','伊朗','印度','斯里兰卡','中国','约旦','以色列','新加坡']
 	}
 ]
 $(function(){
 	$('.destination a').on('mouseover',function(){
 		$('.area_hot').show();
 		for(var i in arr){
	 	if(arr[i].name == $(this).text()){
	 		$('.destination i').css('display','none');
	 		$(this).children('i').show();
	 		$('.area_hot td').html("");
	 		$(".area_hot td").append($('<span>所有</span>'));
	 		for(var j in arr[i].items){
	 			var items = $('<a href="">'+arr[i].items[j]+'</a>');
	 			$(".area_hot td").append(items);
	 			}
	 		}
		}

 	})
})

 //icon图片


 
 