const axios = require('axios');
const Emitter = require('events').EventEmitter;
module.exports = ({client, endpoint, code = 200, timeout = 1500, interval = 10 } = {}) => {
    if (!client) {
        client = axios.create({
            timeout: timeout
        });
    }

    const emitter = new Emitter();

    setInterval(() => {
        client.get(endpoint, {
            validateStatus: function (status) {
                return status === code;
            }
        }).then(() => {
            emitter.emit('available');
        }).catch(err => {
            emitter.emit('unavailable', err);
        })
    }, interval * 1000);

    return emitter;
}
