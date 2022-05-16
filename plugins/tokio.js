let handler = async m => m.reply(`
💎 *Dreaded Bot*\n\n🔗 *Info :* Very easy and fast to deploy termux-heroku WhatsApp bot written in Js, Modified Tokio-wabot. GitHub deploy link: GitHub.com/itsajaygaur/tokio-wabot. Join Bots WhatsApp Group for Music Requests: https://chat.whatsapp.com/KKuPUQSg2KQ6juZvkYm70t 
`.trim()) // repository
handler.help = ['dreaded']
handler.tags = ['info']
handler.command = /^dreaded|botto$/i

module.exports = handler
