if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js', { scope: "/" })
      .then(function(registration) {
        console.log('[ServiceWorker Client]', 'registration successful with scope: ', registration.scope);

        registration.addEventListener('updatefound', function() {
          console.log('[ServiceWorker Client]', 'updatefound')
        });

      }, function(err) {
        console.log('[ServiceWorker Client]','registration failed: ', err);
      });
  });
}
