self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windows => {
      const page = windows.find(client => client.url.includes('focus-timer.html'));
      return page ? page.focus() : undefined;
    })
  );
});
