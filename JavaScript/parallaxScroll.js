let visible = elem => {
  let top, bottom
  top = $(elem).offset().top + $(elem).height() + 50
  bottom = $(elem).offset().top + 50
  return (
    top >= $(window).scrollTop() &&
    bottom <= $(window).scrollTop() + $(window).height()
  )
}
let parallax = _ =>
  $(".parallax").each(function() {
    if (visible($(this))) {
      $(this).css({
        backgroundPosition: `50% ${Math.round(
          ($(this).height() - $(window).scrollTop() - 20) * 0.5
        )}px`
      })
    }
  })
$(window).bind("scroll", parallax)

/* 
<style>
  .wrapper {
    padding: 200px;
    text-align: center;
    background-size: cover;
    background-attachment: fixed;
    background-position: right;
    background-position: center;
  }

  .bg1 {
    background-image: url(bg1.png);
  }

  .bg2 {
    background-image: url(bg2.png);
  }

  .bg3 {
    background-image: url(bg3.png);
  }
</style>

<div class="parallax bg1 wrapper">Wrapper 1</div>
<div class="parallax bg2 wrapper">Wrapper 2</div>
<div class="parallax bg3 wrapper">Wrapper 3</div>
*/
