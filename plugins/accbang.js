let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'no'
  if (isAdmin) throw 'You already promoted yourself to *ADMIN* 🥵🥵, You Are an Admin now. 😎 ❤️'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^🔝$/i
handler.owner = true
handler.botAdmin = true
module.exports = handler
