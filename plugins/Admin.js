let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'no'
  if (isAdmin) throw '*Master*, You are no longer_An Admin, 😥 Type *.p-owner* anytime and *I will make you Group Admin again 🌚'
  await conn.groupDemoteAdmin(m.chat, [m.sender])
}
handler.command = /^d-owner$/i
handler.owner = true
handler.botAdmin = true
module.exports = handler
