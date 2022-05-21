let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
You tagged my *OWNER* Love 🌚 He is busy though ❤️, Hehe. Leave Him Alone 🤝.
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@2348106542427/i
handler.command = new RegExp

module.exports = handler
