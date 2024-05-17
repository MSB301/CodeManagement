define([], function () {
    var prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/sense") + 1);
    return {
        "qlik": {
            host: window.location.hostname,
            prefix: prefix,
            port: window.location.port,
            isSecure: window.location.protocol === "https:"
        },
        "server": {
            "host": "localhost",
            "port": 3010,
            "isSecure": false
        }
    }
})

