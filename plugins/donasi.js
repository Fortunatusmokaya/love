let handler = async m => m.reply(`
💤 Keep Your money for yourself, *OWNER* is rich 🌛. For Music Requests join: https://chat.whatsapp.com/Bzzntl7j7x98YBZVpc7wiz.
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
