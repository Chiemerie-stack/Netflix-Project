
//Listen for tab click
$(".tab-item").click(function(){
    $(".tab-content-item").removeClass("show");
    $(".tab-item").removeClass("tab-border");
    $(this).addClass("tab-border");
    const tabId = $(this).attr("id");
    const tabcontentId = `#${tabId}-content`;
    $(tabcontentId).addClass("show");
 })
