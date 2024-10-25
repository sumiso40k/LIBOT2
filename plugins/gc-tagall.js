const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝗪𝗶𝗻𝗻𝗶𝗲 𝗯𝗼𝘁 ${pesan}`;
  let teks = `𝑨𝒄𝒕𝒊𝒗𝒆𝒏𝒔𝒆 𝑨𝒍𝒗!!\n\n ${oi}\n\n 𝑴𝒆𝒏𝒄𝒊𝒐𝒏𝒆𝒔:\n\n`;
  for (const mem of participants) {
    teks += `🪻 @${mem.id.split('@')[0]}\n`;
  }
  teks += `𝗪𝗶𝗻𝗻𝗶𝗲 𝗯𝗼𝘁`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
