$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true, 
    autoplay:true,
    aoutplayHoverPause:true,
    lazyLoad:true,
    responsive: {
      0: {
        items:1
      },
      600: {
        items:3
      }
    }
  });
});


$(function() {
  var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      var links = this.el.find('.article-title');
      links.on('click', {
          el: this.el,
          multiple: this.multiple
      }, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
      $this = $(this),
          $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
          $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
      };
  }
  var accordion = new Accordion($('.accordion-container'), false);
});

$(document).ready(function(){
  $('.element').on('click', function(){
    $(this).animate({height: $(this).children('h3').height() + $(this).children('.table').height() + 30 + 'px'}, 500);
    if ($(this).children('h3').children('span')[0].innerText == '+'){
      $(this).animate({height: $(this).children('h3').height() + $(this).children('.table').height() + 30 + 'px'}, 500);
      $(this).children('h3').children('span')[0].innerText = '-';
      $(this).children('h3').children('span')[1].innerText = '-';
    } else {
      $(this).animate({height: '51px'}, 100);
      $(this).children('h3').children('span')[0].innerText = '+';
      $(this).children('h3').children('span')[1].innerText = '+';
    }
  });

  $('.element > .table > table > tbody > tr').each(function(){
    $(this)[0].childNodes[2].innerText = parseFloat($(this)[0].childNodes[1].innerText) / 10 + '%';
  });
});
