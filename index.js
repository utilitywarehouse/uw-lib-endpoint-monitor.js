const axios = require('axios');
const Emitter = require('events').EventEmitter;
module.exports = (endpoint, {code = 200, timeout = 1500, interval = 10 } = {}) => {
    const client = axios.create({
        timeout: timeout
    });

    const emitter = new Emitter();

    setInterval(() => {
        client.get(endpoint).then(response => {
            if (response.status !== code) {
                throw new Error(`Expected code ${code} but ${response.status} received.`);
            }

            emitter.emit('available');
        }).catch(err => {
            emitter.emit('unavailable', err);
        })
    }, interval * 1000);

    return emitter;
}
