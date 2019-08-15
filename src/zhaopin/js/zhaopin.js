$(function () {
    $('#publish-btn').click(function() {
        let publishBtns = $(this).siblings('.publish-btn-bg');
        publishBtns.toggleClass('publish-btn-active');
        publishBtns= null;
    })
});
