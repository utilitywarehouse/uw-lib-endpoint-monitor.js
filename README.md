# uw-lib-endpoint-monitor.js

Simple wrapper for HTTP request to monitor endpoints.

### Usage

```node
const monitor = require('@utilitywarehouse/uw-lib-endpoint-monitor.js');

const monitorA = monitor('http://my.site/ready', {
    code: 200, // optional, what code to consider OK
    timeout: 1500, // optional, call timeout in milliseconds
    interval: 10, // optional, time between checks in seconds
});

monitorA.on('available', () => console.log('OK'));
monitorA.on('unavailable', (err) => console.error(err));
```
