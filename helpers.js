function successfullMessage(msg) {
    return "β *WhatsBAT*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *WhatsBAT*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *WhatsBAT*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
