let handler = m => m

let linkRegex = /youtu.be\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isytLink = linkRegex.exec(m.text)

  if (chat.antiLink && isytLink) {
    await m.reply(`*「 ANTI LINK 」*\n\nDetected *${await this.getName(m.sender)}* you have sent the YouTube  link!\n\nByee Look for subscribers elsewhere!`)
    if (isrowner) return m.reply('*Hey sorry, I  won't kick my owner,*Mokaya* you won\'t be kicked. hehe..*')
    if (!isBotAdmin) return m.reply('*Bot is not admin, Otherwise am leaving too -*')
    let linkyt = ('https://youtu.be/' + await this.youtubeInviteCode(m.chat)))
    let isLinkThisyt = new RegExp(linkyt, 'i')
    let isytlink = isLinkThisyt.test(m.text)
    if (isytlink) return m.reply('*Lol send your own Youtube link :v*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
