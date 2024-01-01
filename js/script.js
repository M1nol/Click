function confirmAge(isConfirmed) {
    if (isConfirmed) {
      document.body.style.backdropFilter = 'none';
      document.getElementById('overlay').style.display = 'none';
    } else {
        window.location.href = 'https://www.google.com/search?sca_esv=594966039&sxsrf=AM9HkKnG5I3RVzgkC2C3NDX-xEJzWbetUg:1704149589325&q=cats&tbm=isch&source=lnms&prmd=ivsnmbtz&sa=X&ved=2ahUKEwjusqn3o72DAxUcSvEDHfz1AvAQ0pQJegQIERAB&biw=1444&bih=924&dpr=2';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflow = 'hidden'; 
    document.getElementById('overlay').style.display = 'flex';
  });
  
  function redirectToAnotherPage() {
    window.location.href = 'https://youtu.be/JM8_vHcMr2E?si=ddgqcasHH9D0MMV9';
  }