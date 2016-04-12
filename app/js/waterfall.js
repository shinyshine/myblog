
//浏览器视口大小不同  一行就有不同的列数  手机端1个 一般为2个  特大屏幕为四个
function waterfall() {
	var dataItem = $('#content .data-item');
	
	var cols = 2,
		itemWidth = 495;
	var hArr = [];  //存放每一列高度的数组
	for(var i = 0, len = dataItem.length; i < len; i ++) {
		var itemHeight = $(dataItem[i]).height();
		if(i < cols) {
			hArr.push(itemHeight + 30);
		}else {
			var minH = Math.min.apply(null, hArr);
			var index = getMinHindex(hArr, minH); 

			dataItem[i].style.position = 'absolute';
			dataItem[i].style.top = minH + 'px';
			dataItem[i].style.left = itemWidth * index + 'px';
			hArr[index] += itemHeight + 30;
		}
	}

	console.log(hArr);

}

function getMinHindex(arr, val) {
	for(var i = 0, len = arr.length; i < len; i ++) {
		if(arr[i] == val) {
			return i;
		}
	}

}

//检测是否具备滚动加载数据块的条件
function checkScrollSlide() {
	var itemObj = $('#content .data-item'),
	    len = itemObj.length,
		obj = itemObj[len-1];
	var lastItemoffsetTop = $(obj).offset().top + Math.floor($(obj).height()/2),
		scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
		height = document.body.clientHeight || document.documentElement.clientHeight;

	console.log(lastItemoffsetTop);
	return (lastItemoffsetTop < scrollTop + height) ? true : false;



}
window.onload = function() {
	var data = [
		{
			img: '../images/1.jpg',
			title: 'html5 音频和视频',
			update: '2015-04-02',
			abstract: '一个公司通常有一套通用的开发框，包括后台的java代码和前端的js/css/image/等等，java代码是很好办的，用maven管理，划分出相应的模块，比如 core.jar, common.jar等等，上传到公司的maven库，然后其它项目去依赖就好了。'
		},
		{
			img: '../images/2.jpg',
			title: 'HTML5新特性之离线缓存技术',
			update: '2016-02-02',
			abstract: '离线缓存的起因： HTML5之前的网页，都是无连接，必须联网才能访问，这其实也是web的特色，这其实对于PC是时代问题并不大，但到了移动互联网时代，设备终端位置不再固定， 依赖无线信号，网络的可靠性变得降低，比如坐在火车上'
		},
		{
			img: '../images/3.jpg',
			title: 'Python迭代器，函数式编程，map/reduce高阶函数',
			update: '2016-04-12',
			abstract: '离线缓存的起因： HTML5之前的网页，都是无连接'
		},
		{
			img: '../images/4.jpg',
			title: 'Python迭代器，函数式编程',
			update: '2016-04-12',
			abstract: '离线缓存的起因： HTML5之前的网页，都是无连接'
		},
		{
			img: '../images/5.jpg',
			title: 'Python迭代器，函数式编程，map/reduce高阶函数',
			update: '2016-04-12',
			abstract: '离线缓存的起因： HTML5之前的网页，都是无连接'
		},
		{
			img: '../images/6.jpg',
			title: 'Python迭代器，函数式编程，map/reduce高阶函数',
			update: '2016-04-12',
			abstract: '离线缓存的起因： HTML5之前的网页，都是无连接'
		},
		{
			img: '../images/7.jpg',
			title: 'Python迭代器，函数式编程，map/reduce高阶函数',
			update: '2016-04-12',
			abstract: '离线缓存的起因： HTML5之前的网页，都是无连接'
		},
		{
			img: '../images/8.jpg',
			title: 'Python迭代器，函数式编程，map/reduce高阶函数',
			update: '2016-04-12',
			abstract: '离线缓存的起因： HTML5之前的网页，都是无连接'
		},
		{
			img: '../images/9.jpg',
			title: 'Python迭代器，函数式编程，map/reduce高阶函数',
			update: '2016-04-12',
			abstract: '离线缓存的起因： HTML5之前的网页，都是无连接'
		},
		{
			img: '../images/10.jpg',
			title: 'Python迭代器，函数式编程，map/reduce高阶函数',
			update: '2016-04-12',
			abstract: '离线缓存的起因： HTML5之前的网页，都是无连接'
		},
		{
			img: '../images/11.jpg',
			title: 'Python迭代器，函数式编程，map/reduce高阶函数',
			update: '2016-04-12',
			abstract: '离线缓存的起因： HTML5之前的网页，都是无连接'
		},
		{
			img: '../images/12.jpg',
			title: 'Python迭代器，函数式编程，map/reduce高阶函数',
			update: '2016-04-12',
			abstract: '离线缓存的起因： HTML5之前的网页，都是无连接'
		}
	];
	var contentObj = $('#content ul');
	
	waterfall();
	window.onscroll = function() {
		if(checkScrollSlide()) {
			for(var i = 0, len = data.length; i < len; i ++) {
				var html = '<li class="data-item">' +
						'<div class="item-container">' +
							'<div class="bg-container"><img src="' + data[i]['img'] + '" /></div>' +
								'<div class="item-content">' +
									'<div class="content-container">' +
									'<h1><a href="#">' + data[i]["title"] + '</a></h1>' +
									'<p class="update-time">更新于 ' + data[i]["update"] + '</p>' +
									'<div class="mood-level">' +
										'<i class="mood-icon"></i>' +
										'<i class="mood-icon"></i>' +
										'<i class="mood-icon"></i>' +
										'<i class="mood-icon"></i>' +
										'<i class="music-icon"></i>' +
									'</div>' +
									'<div class="abstract">' + data[i]['abstract'] + '</div>' +
								'</div>' +
							'</div>' +
						'</div>	' +		
					'</li>';

				contentObj.append(html);
			}
			waterfall();
		}

		checkScrollSlide();
	}
}



var DomUtil = {
	getByClass: function(parent, className) {
		return '';


	}
}

var BomUtil = {

}