var socket = io();

socket.on('connect', function() {
  console.log('New user connected');

});

socket.on('disconnect', function() {
  console.log('Disconneted');
});

socket.on('newMessage', function(message) {
  console.log('New Message',message);
});
