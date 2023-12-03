self.addEventListener('push', event => {
    const options = {
        body: event.data.text(),
        icon: 'https://cdn-icons-png.flaticon.com/512/154/154870.png',
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});
