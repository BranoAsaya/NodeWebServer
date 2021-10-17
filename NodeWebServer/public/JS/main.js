setInterval(() => {
  let time = new Date();

  document.querySelector('p').innerText=`${time.toLocaleTimeString()}`;
  
  
}, 1000);
