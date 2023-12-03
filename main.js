document.addEventListener('DOMContentLoaded', () => {
    // Check if the browser supports service workers
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    }
});

function requestPushPermission() {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            showNotification();
        }
    });
}

function showNotification() {
    navigator.serviceWorker.ready
        .then(registration => {
            registration.showNotification('Hi', {
                body: 'This is a simple push notification!',
                icon: 'icon.png',
            });
        });
}
