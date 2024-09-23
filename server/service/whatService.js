const qs = require("querystring");
const http = require("https");

const sendMessage = (to, messageBody) => {
    return new Promise((resolve, reject) => {
        const options = {
            "method": "POST",
            "hostname": "api.ultramsg.com",
            "port": null,
            "path": "/instance94884/messages/chat",
            "headers": {
                "content-type": "application/x-www-form-urlencoded"
            }
        };

        const postData = qs.stringify({
            "token": "j3khtxu6s9aahtxs",  // Asegúrate de tener el token correcto
            "to": to,  // Número al que envías el mensaje
            "body": messageBody,  // El mensaje
            "priority": 1,
            "referenceId": "",
            "msgId": "",
            "mentions": ""
        });

        const req = http.request(options, function (res) {
            let chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                const body = Buffer.concat(chunks).toString();
                console.log(body);  // Ver la respuesta de UltraMsg
                resolve(body);  // Resuelve el envío del mensaje
            });

            res.on("error", function (err) {
                console.error("Error en UltraMsg:", err);  // Mostrar error
                reject(err);  // Rechaza si ocurre un error
            });
        });

        req.write(postData);
        req.end();
    });
};

module.exports = {
    sendMessage
};
