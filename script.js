
function toggleMode(){
  const html = document.querySelector('html');
  const img = document.querySelector('#profile img');

  if(html.classList.contains('light')){
    html.classList.remove('light');

    img.setAttribute('src', 'assets/assets/avatar-cesar.png')
  }else{
    html.classList.add('light');

    img.setAttribute('src', 'assets/assets/avatar-light-cesar.png')
  }
}

