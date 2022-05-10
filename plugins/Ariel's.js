let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
I am a *BOT* you know and so I can't read your tag. Mokaya 🗣️ come and check them message please 😥.
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@919402104403/i
handler.command = new RegExp

module.exports = handler
