document.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body')
  var button = document.querySelector('.switch');
  var text = document.querySelector('h1')

  button.addEventListener('click', function(e){
    if (e.target.classList.contains('on')){
      e.target.className = 'switch off';
      body.className = 'dark';
      text.innerText = "Hey, who turned off the lights?"
    }else if (e.target.classList.contains('off')){
      e.target.className = 'switch on';
      body.className = 'light';
      text.innerText = "It's so bright in here!'"
    }
  })
});
