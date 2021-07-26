const WSServer = require('ws');
// const serverHttp = require('./httpServ');

const runnerWs = (serverHttp) => {
   
    // ==============WS============
    wsServer = new WSServer.Server({
        server: serverHttp
    });

    wsServer.on('connection', (socket) => {
        let count = 0;
        let startRes = 'i feel good!';

        socket.on('message', (message) => {
            const req = JSON.parse(message);
            console.log(req);

            if (req.type == 'userNumber') {
                count += Number(req.data);
                console.log('recieved: ', req.data);
                console.log('count: ', count);
                res = 'good number, guy!'
            }
            if (req.type == 'prodList') {
                console.log('you wanna list...');
                res = JSON.stringify({
                    type: 'prodList',
                    data: prodList
                });
                socket.send(res)
            }
        })

        socket.send(JSON.stringify(startRes));
    });
}
module.exports = runnerWs;