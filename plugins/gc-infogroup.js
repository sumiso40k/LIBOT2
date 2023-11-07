const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/SHADOW.jpeg';
  const {antiToxic, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
    const text = `* 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 𝐁𝐘 @𝐋𝐀𝐑𝐈𝐎𝐒.𝐏𝐒𝐃 ⭐ *\n
*𝐈𝐃𝐄𝐍𝐓𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎:* 
${groupMetadata.id}

*𝐍𝐎𝐌𝐁𝐑𝐄:* 
${groupMetadata.subject}

*𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍:* 
${groupMetadata.desc?.toString() || '𝐒𝐈𝐍 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍'}

*𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐏𝐀𝐑𝐓𝐈𝐂𝐈𝐏𝐀𝐍𝐓𝐄𝐒:*
${participants.length} Participantes

*𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎:* 
@${owner.split('@')[0]}

*𝐀𝐃𝐌𝐈𝐍𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎:*
${listAdmin}

*𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐀𝐒:*
 𝐖𝐄𝐋𝐂𝐎𝐌𝐄: ${welcome ? '✅' : '❌'}
 𝐃𝐄𝐓𝐄𝐂𝐓: ${detect ? '✅' : '❌'} 
 𝐃𝐄𝐓𝐄𝐂𝐓 𝟐: ${detect2 ? '✅' : '❌'} 
 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊: ${antiLink ? '✅' : '❌'} 
 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝟐: ${antiLink2 ? '✅' : '❌'} 
 𝐌𝐎𝐃𝐎 𝐇𝐎𝐑𝐍𝐘: ${modohorny ? '✅' : '❌'} 
 𝐀𝐔𝐓𝐎𝐒𝐓𝐈𝐂𝐊𝐄𝐑: ${autosticker ? '✅' : '❌'} 
 𝐀𝐔𝐃𝐈𝐎𝐒: ${audios ? '✅' : '❌'} 
 𝐀𝐍𝐓𝐈𝐕𝐈𝐄𝐖𝐎𝐍𝐂𝐄: ${antiviewonce ? '✅' : '❌'} 
 𝐀𝐍𝐓𝐈𝐃𝐄𝐋𝐄𝐓𝐄: ${antidelete ? '✅' : '❌'} 
 𝐀𝐍𝐓𝐈𝐓𝐎𝐗𝐈𝐂: ${antiToxic ? '✅' : '❌'} 
 𝐀𝐍𝐓𝐈𝐓𝐑𝐀𝐁𝐀: ${antiTraba ? '✅' : '❌'} 
 𝐌𝐎𝐃𝐎𝐀𝐃𝐌𝐈𝐍: ${modoadmin ? '✅' : '❌'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i;
handler.group = true;
export default handler;
