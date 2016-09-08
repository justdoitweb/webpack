var util=require('./util.js');

$(function(){
	$("#submit_btn").click(function(event) {
		var cont = $("#comment_cont").val();

		if(cont == ''){
			alert('请输入评论内容');
			return;
		}

		var html = '';
		html+= '<div class="row-list">'
		html+= '<p class="comment-info"><div class="col-xs-4">2016-09-07</div><div class="col-xs-8 text-right">192.168.3.1</div></p>';
		html+= '<p class="comment-cont">'+cont+'</p>';
		html+= '</div>';

		$(".comment-list").append(html);
		$("textarea").val('');
	});

	$("textarea").keydown(function(event) {
		var _value = $(this).val();
		$(".leave_num").text(util.remainWords(_value));
	});
})