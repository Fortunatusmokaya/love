let handler = async m => m.reply(`
💎 *Love Botto*\n\n🔗 *Info :* Very easy and fast to deploy termux-heroku WhatsApp bot written in Js, Modified Tokio-wabot. GitHub deploy link: GitHub.com/itsajaygaur/tokio-wabot. Join Bots WhatsApp Group for More Fun: https://chat.whatsapp.com/LKluyOFrU4CHlJHdOmDjzV
`.trim()) // repository
handler.help = ['script']
handler.tags = ['info']
handler.command = /^script|botto$/i

module.exports = handler
