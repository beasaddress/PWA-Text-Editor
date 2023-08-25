const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installBtn.style.visibility = 'visible';
    
  
    installBtn.addEventListener('click', () => {
      event.prompt();
      installBtn.setAttribute('disabled', true);
      installBtn.textContent = 'Installed!';
    });
  });


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
     
  console.log('👍', 'appinstalled', event);
});
