$(document).ready(function() {
	$(".asidebtn-block").click(function(){
		$(this).parent(".asidebtn").addClass("active");
		$(this).parent(".asidebtn").nextAll().removeClass("active");
		$(this).parent(".asidebtn").prevAll().removeClass("active");

	});
	$(".asideClose").click(function(){
		$(".asidebtn").removeClass("active");
		$(".asideContent").removeClass("active");
	});
	// click on page link to view side2
	$(".asideContent__side1-list-item-p").click(function(){
		$(".asideContent__side1-list-item").removeClass("active");
		$(this).parent(".asideContent__side1-list-item").addClass("active");
		var matchID = $(this).attr("href");
		$('.orPagList.active').removeClass("active");
		$(matchID).addClass("active");
	});
	// click on page link to vie side2 end
	// click on section link to view side3 start
	$(".orPagList__btn").click(function(){
		$(".orPagList__btn.active").removeClass("active");
		$(this).addClass("active");
		var matchID2 = $(this).attr("href");
		$('.sections-content.active').removeClass("active");
		$(matchID2).addClass("active");
	});
	// click on section link to view side3 end
});
