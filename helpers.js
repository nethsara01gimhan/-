function successfullMessage(msg) {
    return "✅ *KING-BOT-MD*:  ```" + msg + "```"
}

function errorMessage(msg) {
    return "🛑 *KING-BOT-MD*:  ```" + msg + "```"
}

function infoMessage(msg) {
    return "⏺️ *KING-BOT-MD*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
