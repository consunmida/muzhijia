$(function () {
    var _btn_wap = $('#publish-btn').siblings('.publish-btn-bg');
    var _btn = $('.publish-btn-common');
    var _btn_list = _btn_wap.children('.publish-btn-common');
    var _length = _btn_list.length;
    var _btn_width = _btn.width();
    var _top = _btn.position().top;
    var _left = _btn.position().left;
    var _click_flag = false;
    var _center_index = Math.ceil(_length / 2);
    $('#publish-btn').click(function() {
        var _height = _btn_width;
        var _center_offset = (_btn_width / 3);
        _btn_wap.toggleClass('publish-btn-active');
        if (!_click_flag) {
            _btn_list.forEach((element, index) => {
                var _animation_left = _length%2 ? (_center_index - index - 1)* _btn_width :
                (index + 1 ) === _center_index ? _btn_width/2 :
                 (index) === _center_index ? -_btn_width/2 :
                 (_center_index - index - 1)* _btn_width + (_center_index - index - 1) > 0;
                 // 偶数
                 var _half_offset = 0;
                 if (_length%2) {
                    var _animation_left = (_center_index - index - 1)* _btn_width;
                    var _offset =  (_center_index - 1 - index) * _center_offset ;
                 } else {                    
                     if ((_center_index - index - 1) >= 0) {
                         _half_offset = _btn_width/2;
                        var _animation_left = (index + 1 ) === _center_index ? 
                        0 : ((_center_index - index - 1)* _btn_width);

                        var _offset = (index + 1 ) === _center_index ? _center_offset/2 :(_center_index - 1 -index + 0.5)* _center_offset;  
                     } else {
                        _half_offset = -_btn_width/2;
                        var _animation_left = (index === _center_index) ? 
                        0 : ((_center_index - index)* _btn_width);

                        var _offset = index === _center_index ?  -_center_offset/2 : (_center_index - 1 -index + 0.5) * _center_offset;   
                     }
                     
                 }
                $(element).css({top: _top - _height/2 + 'px', left: _left - _half_offset - _offset - _animation_left  + 'px'})
            });
        } else {
            _btn.css({top: '50%',  left: '50%'})
        }

        _click_flag = !_click_flag;
    })
});
