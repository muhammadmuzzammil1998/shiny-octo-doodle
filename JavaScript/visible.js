let visible = elem => {
  let top, bottom
  top = $(elem).offset().top + $(elem).height() + 50
  bottom = $(elem).offset().top + 50
  return (
    top >= $(window).scrollTop() &&
    bottom <= $(window).scrollTop() + $(window).height()
  )
}

// visible($("#element"))
