function successfullMessage(msg) {
    return "✅ *WhatsBAT*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *WhatsBAT*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *WhatsBAT*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
