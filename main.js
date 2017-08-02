window.addEventListener("load", function() {
  var box = document.getElementById("elem"),
    num = document.getElementById("number"),
    tl = new TimelineMax({repeat: 1}),
    count = 4;

    num.innerHTML = count;
    tl
    .to(box, 1.2, {
      width: '100vw',
      onComplete: toHtml
    })
    .set(num, {color: '#EBD9A7'},"-=0.8" )
    .to(box, 1.2, {
      width: '0vw',
      onComplete: toHtml
    })
    .set(num, {color: '#18384D'},"-=0.8" );

  function toHtml() {
    count--;
    if (count <= 0) {
      num.innerHTML = 'СТАРТ';
      TweenMax.set(num, {color: '#C76160'})
    } else num.innerHTML = count;
  }
});
