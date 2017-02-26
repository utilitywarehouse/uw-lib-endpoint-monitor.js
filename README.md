# uw-lib-endpoint-monitor.js

Simple wrapper for HTTP request to monitor endpoints.

### Usage

```node
const monitor = require('@utilitywarehouse/uw-lib-endpoint-monitor.js');

const monitorA = monitor({
    client: //optional, you can pass an optional axios client to be used
    endpoint: // required, address to call
    code: 200, // optional, what code to consider OK
    timeout: 1500, // optional, call timeout in milliseconds
    interval: 10, // optional, time between checks in seconds
});

monitorA.on('available', () => console.log('OK'));
monitorA.on('unavailable', (err) => console.error(err));
```

Note that when not using the optional `client` parameter the `endpoint` must be an URL, when `client` with configured baseURL is passed you should provide path only.

