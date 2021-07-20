console.log('it works');

const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', (e) => {
  socket.send('Hello Server!');
});

socket.addEventListener('message', (e) => {
  console.log('Message from server ', e.data);
})