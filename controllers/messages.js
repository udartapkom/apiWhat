const sendMessage = async (req, res, next) => {
   const { apiUrl, idInstance, apiTokenInstance, chatId, message } = req.body;
    if(!apiUrl || !idInstance || !apiTokenInstance || !chatId || !message) {
        res.status(400).send("Невозможно отправить сообщение")
    }
    try {
        const response = await  fetch(`${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
            method: 'POST',
            headers: {
                'User-Agent': 'undici-stream-example',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "chatId": `${chatId}@c.us`,
                "message": message
            })
        })
        const { status } = response;
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log(error)
    }
}

const reciveMessage = async (req, res, next) => {
        const { apiUrl, idInstance, apiTokenInstance } = req.body;
    if(!apiUrl || !idInstance || !apiTokenInstance) {
        res.status(400).send("Невозможно принять сообщение")
    }
    try {
        const response = await  fetch(`${apiUrl}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log(error)
    }
}

const delNotification = async (req, res, next) => {
    const { apiUrl, idInstance, apiTokenInstance, receiptId } = req.body;
	console.log(apiUrl, idInstance, apiTokenInstance, receiptId);
    if(!apiUrl || !idInstance || !apiTokenInstance || !receiptId) {
        res.status(400).send("Невозможно удалить уведомление")
    }
    try {
        const response = await fetch(`${apiUrl}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`, {
           method: 'DELETE',
        })
        const data = await  response.json();
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    sendMessage,
    reciveMessage,
    delNotification
}