let timer = null;
let per = 0;

timer = setInterval(() => {
  $('.bar').css('width', per + '%');
  per += 1;
  if (per > 100) {
    $('.pageLoading').addClass('complete');
    clearInterval(timer);
  }
}, 30);
