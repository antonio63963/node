// const WSServer = require('ws');
const sio = require('socket.io');

// const serverHttp = require('./httpServ');
const msgArr = [];
const runnerWs = (serverHttp) => {
   //=====io================================

   const io = sio(serverHttp);

   io.on('connection', socket=> {
    console.log(`Connect ID: ${socket.id}`);
    // socket.on('/chat', (data, cb) => {
    //     const result = Math.pow(data.val, data.lvl);
    //     cb(result);
    // })
        socket.on('/chat', data =>{
            const msg = data.msg;
            console.log(data);
            console.log(`=======data is ${msg}!!!=====`);
            msgArr.push(data);
            socket.broadcast.emit('/newMsg', data)
        });
        socket.on('mesWriting', (data) => {
         socket.broadcast.emit('whoIsWriting', {userName: data.userName, msg: '...', id: socket.id});
        });
        socket.on('mesHasWrote', () => {
            socket.broadcast.emit('whoHasWrote', {id: socket.id})
        })
      

        socket.on('disconnect', () => {
            console.log(`Disconect ID: ${socket.id}`);
        })
   });

    // ==============WS============
    // wsServer = new WSServer.Server({
    //     server: serverHttp
    // });

    // wsServer.on('connection', (socket) => {
    //     let count = 0;
    //     let startRes = 'i feel good!';

    //     socket.on('message', (message) => {
    //         const req = JSON.parse(message);
    //         console.log(req);

    //         if (req.type == 'userNumber') {
    //             count += Number(req.data);
    //             console.log('recieved: ', req.data);
    //             console.log('count: ', count);
    //             res = 'good number, guy!'
    //         }
    //         if (req.type == 'prodList') {
    //             console.log('you wanna list...');
    //             res = JSON.stringify({
    //                 type: 'prodList',
    //                 data: prodList
    //             });
    //             socket.send(res)
    //         }
    //     })

    //     socket.send(JSON.stringify(startRes));
    // });
}
module.exports = runnerWs;