const BAT = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    BAT.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```Tanrı Türk\'ü Korusun. 🐺 WhatsBAT Hizmetinde!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```User```\n\n*Whatsapp Group:* https://chat.whatsapp.com/JPZOBWcWJZQCns7RJETbwT\n*Developer:* wa.me/905061689909 \n*Co-Developer:* wa.me/905436254003' , MessageType.text);
        }
        else {
            const pow = '*Powered by WhatsBAT*'
            const payload = Config.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture()
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow });
            }
        }
    }));

    BAT.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    BAT.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
          await message.client.sendMessage(message.jid,'```Tanrı Türk\'ü Korusun. 🐺 WhatsBAT Hizmetinde!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```User```\n\n*Whatsapp Group:* https://chat.whatsapp.com/JPZOBWcWJZQCns7RJETbwT\n*Developer:* wa.me/905061689909 \n*Co-Developer:* wa.me/905436254003' , MessageType.text);
        }
        else {
            const pow = '*Powered by WhatsBAT*'
            const payload = Config.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture()
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow });
            }
        }
    }));

    BAT.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    BAT.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
          await message.client.sendMessage(message.jid,'```Tanrı Türk\'ü Korusun. 🐺 WhatsBAT Hizmetinde!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```User```\n\n*Whatsapp Group:* https://chat.whatsapp.com/JPZOBWcWJZQCns7RJETbwT\n*Developer:* wa.me/905061689909 \n*Co-Developer:* wa.me/905436254003' , MessageType.text);
        }
        else {
            const pow = '*Powered by WhatsBAT*'
            const payload = Config.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture()
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow });
            }
        }
    }));

    BAT.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true }, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
