;(function($){
    $.extend($.fn, {
        toggleButton: function(opt){
            const o = $.extend({
                buttonCounts: 3,
                spaceBetween: '1rem',
                buttonWidth: '2.272rem'
            }, opt)
            const $this = $(this);
            const $buttonWrap = $this;

            function init () {}

          return $this;
        }
      })
})(Zepto)