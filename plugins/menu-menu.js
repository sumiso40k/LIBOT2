import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './SHADOW.jpeg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
      ⭐ 𝐒𝐇𝐀𝐃𝐎𝐖.𝐁𝐎𝐓 ⭐

   𝗛ola, ${taguser}

⭐ 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐃𝐄𝐋 𝐁𝐎𝐓: @𝐒𝐇𝐀𝐃𝐎𝐖
⭐ 𝐍𝐔𝐌𝐄𝐑𝐎: wa.me/525541081250
⭐ 𝐅𝐄𝐂𝐇𝐀: ${date}

𝐏𝐑𝐄𝐂𝐈𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓: 𝟑𝟎 𝐌𝐗 𝐌𝐄𝐍𝐒𝐔𝐀𝐋
𝐅𝐀𝐂𝐈𝐋 𝐔𝐒𝐎, +𝟐𝟎𝟎 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒

    ⭐ 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 ⭐

⭐ ${usedPrefix}enable restrict
⭐ ${usedPrefix}disable restrict
⭐ ${usedPrefix}enable autoread
⭐ ${usedPrefix}disable autoread
⭐ ${usedPrefix}enable antispam
⭐ ${usedPrefix}disable antispam
⭐ ${usedPrefix}enable anticall
⭐ ${usedPrefix}disable anticall
⭐ ${usedPrefix}enable modoia
⭐ ${usedPrefix}disable modoia
⭐ ${usedPrefix}enable audios_bot
⭐ ${usedPrefix}disable audios_bot
⭐ ${usedPrefix}enable antiprivado
⭐ ${usedPrefix}disable antiprivado


    ⭐ 𝐉𝐔𝐄𝐆𝐎𝐒 ⭐

⭐ ${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*
⭐ ${usedPrefix}fake *<texto1> <@tag> <texto2>*
⭐ ${usedPrefix}ppt *<papel / tijera /piedra>*
⭐ ${usedPrefix}prostituto *<nombre / @tag>*
⭐ ${usedPrefix}prostituta *<nombre / @tag>*
⭐ ${usedPrefix}gay2 *<nombre / @tag>*
⭐ ${usedPrefix}lesbiana *<nombre / @tag>*
⭐ ${usedPrefix}pajero *<nombre / @tag>*
⭐ ${usedPrefix}pajera *<nombre / @tag>*
⭐ ${usedPrefix}puto *<nombre / @tag>*
⭐ ${usedPrefix}puta *<nombre / @tag>*
⭐ ${usedPrefix}manco *<nombre / @tag>*
⭐ ${usedPrefix}manca *<nombre / @tag>*
⭐ ${usedPrefix}rata *<nombre / @tag>*_
⭐ ${usedPrefix}love *<nombre / @tag>*
⭐ ${usedPrefix}doxear *<nombre / @tag>*
⭐ ${usedPrefix}pregunta *<texto>*
⭐ ${usedPrefix}suitpvp *<@tag>*
⭐ ${usedPrefix}slot *<apuesta>*
⭐ ${usedPrefix}ttt *<nombre sala>*
⭐ ${usedPrefix}delttt
⭐ ${usedPrefix}acertijo
⭐ ${usedPrefix}simi *<texto>*
⭐ ${usedPrefix}top *<texto>*
⭐ ${usedPrefix}topgays
⭐ ${usedPrefix}topotakus
⭐ ${usedPrefix}formarpareja
⭐ ${usedPrefix}verdad
⭐ ${usedPrefix}reto
⭐ ${usedPrefix}cancion
⭐ ${usedPrefix}pista
⭐ ${usedPrefix}akinator
⭐ ${usedPrefix}wordfind

    ⭐ 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 ⭐

⭐ ${usedPrefix}enable *welcome*
⭐ ${usedPrefix}disable *welcome*
⭐ ${usedPrefix}enable *modohorny*
⭐ ${usedPrefix}disable *modohorny*
⭐ ${usedPrefix}enable *antilink*
⭐ ${usedPrefix}disable *antilink*
⭐ ${usedPrefix}enable *antilink2*
⭐ ${usedPrefix}disable *antilink2*
⭐ ${usedPrefix}enable *detect*
⭐ ${usedPrefix}disable *detect*
⭐ ${usedPrefix}enable *audios*
⭐ ${usedPrefix}disable *audios*
⭐ ${usedPrefix}enable *autosticker*
⭐ ${usedPrefix}disable *autosticker*
⭐ ${usedPrefix}enable *antiviewonce*
⭐ ${usedPrefix}disable *antiviewonce*
⭐ ${usedPrefix}enable *antitoxic*
⭐ ${usedPrefix}disable *antitoxic*
⭐ ${usedPrefix}enable *antitraba*
⭐ ${usedPrefix}disable *antitraba*
⭐ ${usedPrefix}enable *antiarabes*
⭐ ${usedPrefix}disable *antiarabes*
⭐ ${usedPrefix}enable *modoadmin*
⭐ ${usedPrefix}disable *modoadmin*
⭐ ${usedPrefix}enable *antidelete*
⭐ ${usedPrefix}disable *antidelete*


     ⭐ 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑  ⭐

⭐ ${usedPrefix}instagram *<enlace / link / url>*
⭐ ${usedPrefix}mediafire *<enlace / link / url>*
⭐ ${usedPrefix}gitclone *<enlace / link / url>*
⭐ ${usedPrefix}gdrive *<enlace / link / url>*
⭐ ${usedPrefix}tiktok *<enlace / link / url>*
⭐ ${usedPrefix}tiktokimg *<enlace / link / url>*
⭐ ${usedPrefix}xnxxdl *<enlace / link / url>*
⭐ ${usedPrefix}xvideosdl *<enlace / link / url>*
⭐ ${usedPrefix}twitter *<enlace / link / url>*
⭐ ${usedPrefix}fb *<enlace / link / url>*
⭐ ${usedPrefix}ytshort *<enlace / link / url>*
⭐ ${usedPrefix}ytmp3 *<enlace / link / url>*
⭐ ${usedPrefix}ytmp4 *<enlace / link / url>*
⭐ ${usedPrefix}ytmp3doc *<enlace / link / url>*
⭐ ${usedPrefix}ytmp4doc *<enlace / link / url>*
⭐ ${usedPrefix}videodoc *<enlace / link / url>*
⭐ ${usedPrefix}dapk2 *<enlace / link / url>*
⭐ ${usedPrefix}stickerpack *<enlace / link / url>*
⭐ ${usedPrefix}play *<texto>*
⭐ ${usedPrefix}play2 *<texto>*
⭐ ${usedPrefix}play.1 *<texto>*
⭐ ${usedPrefix}play.2 *<texto>*
⭐ ${usedPrefix}playdoc *<texto>*
⭐ ${usedPrefix}playdoc2 *<texto>*
⭐ ${usedPrefix}playlist *<texto>*
⭐ ${usedPrefix}spotify *<texto>*
⭐ ${usedPrefix}ringtone *<texto>*
⭐ ${usedPrefix}soundcloud *<texto>*
⭐ ${usedPrefix}imagen *<texto>*
⭐ ${usedPrefix}pinterest *<texto>*
⭐ ${usedPrefix}wallpaper *<texto>*
⭐ ${usedPrefix}pptiktok *<nombre de usuario>*
⭐ ${usedPrefix}igstalk *<nombre de usuario>*
⭐ ${usedPrefix}igstory *<nombre de usuario>*
⭐ ${usedPrefix}tiktokstalk *<username>*

  ⭐ 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ⭐

⭐ ${usedPrefix}githubsearch *<texto>*
⭐ ${usedPrefix}pelisplus *<texto>*
⭐ ${usedPrefix}modapk *<texto>*
⭐ ${usedPrefix}stickersearch *<texto>*
⭐ ${usedPrefix}stickersearch2 *<texto>*
⭐ ${usedPrefix}xnxxsearch *<texto>*
⭐ ${usedPrefix}animeinfo *<texto>*
⭐ ${usedPrefix}google *<texto>*
⭐ ${usedPrefix}letra *<texto>*
⭐ ${usedPrefix}wikipedia *<texto>*
⭐ ${usedPrefix}ytsearch *<texto>*
⭐ ${usedPrefix}playstore *<texto>*

     ⭐ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐆𝐑𝐔𝐏𝐎𝐒 ⭐ 

⭐ ${usedPrefix}add *<numero>*
⭐ ${usedPrefix}kick *<@tag>*
⭐ ${usedPrefix}kick2 *<@tag>*
⭐ ${usedPrefix}listanum *<texto>*
⭐ ${usedPrefix}kicknum *<texto>*
⭐ ${usedPrefix}grupo *<abrir / cerrar>*
⭐ ${usedPrefix}grouptime *<opcion> <tiempo>*
⭐ ${usedPrefix}promote *<@tag>*
⭐ ${usedPrefix}demote *<@tag>*
⭐ ${usedPrefix}demote *<@tag>*
⭐ ${usedPrefix}infogroup
⭐ ${usedPrefix}resetlink
⭐ ${usedPrefix}link
⭐ ${usedPrefix}setname *<texto>*
⭐ ${usedPrefix}setdesc *<texto>*
⭐ ${usedPrefix}invocar *<texto>*
⭐ ${usedPrefix}setwelcome *<texto>*
⭐ ${usedPrefix}setbye *<texto>*
⭐ ${usedPrefix}hidetag *<texto>*_
⭐ ${usedPrefix}hidetag *<audio>*
⭐ ${usedPrefix}hidetag *<video>*
⭐ ${usedPrefix}hidetag *<imagen>*
⭐ ${usedPrefix}warn *<@tag>*
⭐ ${usedPrefix}unwarn *<@tag>*
⭐ ${usedPrefix}listwarn
⭐ ${usedPrefix}fantasmas
⭐ ${usedPrefix}destraba
⭐ ${usedPrefix}setpp *<imagen>*

   ⭐ 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 ⭐

⭐ ${usedPrefix}logos *<efecto> <texto>*
⭐ ${usedPrefix}logochristmas *<texto>*
⭐ ${usedPrefix}logocorazon *<texto>*
⭐ ${usedPrefix}ytcomment *<texto>*
⭐ ${usedPrefix}hornycard *<@tag>*
⭐ ${usedPrefix}simpcard *<@tag>*
⭐ ${usedPrefix}lolice *<@tag>*
⭐ ${usedPrefix}itssostupid
⭐ ${usedPrefix}pixelar
⭐ ${usedPrefix}blur

⭐ 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 ⭐

⭐ ${usedPrefix}piropo
⭐ ${usedPrefix}consejo
⭐ ${usedPrefix}fraseromantica
⭐ ${usedPrefix}historiaromantica


     ⭐ 𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄𝐒 ⭐

⭐ ${usedPrefix}menuanimes

     ⭐ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 +𝟏𝟖 ⭐

🔞 ${usedPrefix}labiblia


  ⭐ 𝐄𝐅𝐄𝐂𝐓𝐎 𝐃𝐄 𝐕𝐎𝐂𝐄𝐒 ⭐

𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍 𝐀𝐔𝐃𝐈𝐎 𝐔 𝐍𝐎𝐓𝐀 𝐃𝐄 𝐕𝐎𝐙

⭐ ${usedPrefix}bass
⭐ ${usedPrefix}blown
⭐ ${usedPrefix}deep
⭐ ${usedPrefix}earrape
⭐ ${usedPrefix}fast
⭐ ${usedPrefix}fat
⭐ ${usedPrefix}nightcore
⭐ ${usedPrefix}reverse
⭐ ${usedPrefix}robot
⭐ ${usedPrefix}slow
⭐ ${usedPrefix}smooth
⭐ ${usedPrefix}tupai

     ⭐ 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 ⭐

⭐ ${usedPrefix}inspect *<link wa_gc>*
⭐ ${usedPrefix}chatgpt *<texto>*
⭐ ${usedPrefix}delchatgpt
⭐ ${usedPrefix}gptvoz *<texto>*
⭐ ${usedPrefix}dall-e *<texto>*
⭐ ${usedPrefix}spamwa *<numero|texto|cantidad>*
⭐ ${usedPrefix}tamaño *<cantidad> <imagen / video>*
⭐ ${usedPrefix}readviewonce *<imagen / video>*
⭐ ${usedPrefix}clima *<país> <ciudad>*
⭐ ${usedPrefix}encuesta *<texto1|texto2...>*
⭐ ${usedPrefix}afk *<motivo>*
⭐ ${usedPrefix}ocr *<responde a imagen>*
⭐ ${usedPrefix}hd *<responde a imagen>*
⭐ ${usedPrefix}acortar *<enlace / link / url>*
⭐ ${usedPrefix}calc *<operacion math>*
⭐ ${usedPrefix}del *<mensaje>*
⭐ ${usedPrefix}whatmusic *<audio>*
⭐ ${usedPrefix}readqr *<imagen (QR)>*
⭐ ${usedPrefix}qrcode *<texto>*
⭐ ${usedPrefix}readmore *<texto1| texto2>*
⭐ ${usedPrefix}styletext *<texto>*
⭐ ${usedPrefix}traducir *<texto>*
⭐ ${usedPrefix}nowa *<numero>*
⭐ ${usedPrefix}covid *<pais>*
⭐ ${usedPrefix}horario
⭐ ${usedPrefix}dropmail

⭐ 𝐑𝐏𝐆 - 𝐋𝐈𝐌𝐈𝐓𝐄𝐒 - 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀 ⭐

⭐ ${usedPrefix}adventure
⭐ ${usedPrefix}cazar
⭐ ${usedPrefix}cofre
⭐ ${usedPrefix}balance
⭐ ${usedPrefix}claim
⭐ ${usedPrefix}heal
⭐ ${usedPrefix}lb
⭐ ${usedPrefix}levelup
⭐ ${usedPrefix}myns
⭐ ${usedPrefix}perfil
⭐ ${usedPrefix}work
⭐ ${usedPrefix}minar
⭐ ${usedPrefix}minar2
⭐ ${usedPrefix}buy
⭐ ${usedPrefix}buyall
⭐ ${usedPrefix}verificar
⭐ ${usedPrefix}robar *<cantidad> <@tag>*
⭐ ${usedPrefix}transfer *<tipo> <cantidad> <@tag>*
⭐ ${usedPrefix}unreg *<numero de serie>*

      ⭐ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 ⭐

⭐ ${usedPrefix}sticker *<responder a imagen o video>*
⭐ ${usedPrefix}sticker *<enlace / link / url>*
⭐ ${usedPrefix}sticker2 *<responder a imagen o video>*
⭐ ${usedPrefix}sticker2 *<enlace / link / url>*
⭐ ${usedPrefix}s *<responder a imagen o video>*
⭐ ${usedPrefix}s *<enlace / link / url>*
⭐ ${usedPrefix}emojimix *<emoji 1>&<emoji 2>*
⭐ ${usedPrefix}scircle *<imagen>*
⭐ ${usedPrefix}sremovebg *<imagen>*
⭐ ${usedPrefix}semoji *<tipo> <emoji>*
⭐ ${usedPrefix}qc *<texto>*
⭐ ${usedPrefix}attp *<texto>*
⭐ ${usedPrefix}attp2 *<texto>*
⭐ ${usedPrefix}attp3 *<texto>*
⭐ ${usedPrefix}ttp *<texto>*
⭐ ${usedPrefix}ttp2 *<texto>*
⭐ ${usedPrefix}ttp3 *<texto>*
⭐ ${usedPrefix}ttp4 *<texto>*
⭐ ${usedPrefix}ttp5 *<texto>*
⭐ ${usedPrefix}pat *<@tag>*
⭐ ${usedPrefix}slap *<@tag>*
⭐ ${usedPrefix}kiss *<@tag>*
⭐ ${usedPrefix}dado
⭐ ${usedPrefix}wm *<packname> <author>*
⭐ ${usedPrefix}stickermarker *<efecto> <imagen>*
⭐ ${usedPrefix}stickerfilter *<efecto> <imagen>*

    ⭐ 𝐎𝐖𝐍𝐄𝐑𝐒 𝐘 𝐌𝐎𝐃𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒 ⭐

⭐ ${usedPrefix}setprefix *<prefijo>*
⭐ ${usedPrefix}resetprefix
⭐ ${usedPrefix}autoadmin
⭐ ${usedPrefix}grouplist
⭐ ${usedPrefix}chetar
⭐ ${usedPrefix}leavegc
⭐ ${usedPrefix}cajafuerte
⭐ ${usedPrefix}blocklist
⭐ ${usedPrefix}addowner *<@tag / numero>*
⭐ ${usedPrefix}delowner *<@tag / numero>*
⭐ ${usedPrefix}block *<@tag / numero>*
⭐ ${usedPrefix}unblock *<@tag / numero>*
⭐ ${usedPrefix}enable *restrict*
⭐ ${usedPrefix}disable *restrict*
⭐ ${usedPrefix}enable *autoread*
⭐ ${usedPrefix}disable *autoread*
⭐ ${usedPrefix}enable *public*
⭐ ${usedPrefix}disable *public*
⭐ ${usedPrefix}enable *pconly*
⭐ ${usedPrefix}disable *pconly*
⭐ ${usedPrefix}enable *gconly*
⭐ ${usedPrefix}disable *gconly*
⭐ ${usedPrefix}enable *anticall*
⭐ ${usedPrefix}disable *anticall*
⭐ ${usedPrefix}enable *antiprivado*
⭐ ${usedPrefix}disable *antiprivado*
⭐ ${usedPrefix}enable *modejadibot*
⭐ ${usedPrefix}disable *modejadibot*
⭐ ${usedPrefix}enable *audios_bot*
⭐ ${usedPrefix}disable *audios_bot*
⭐ ${usedPrefix}enable *antispam*
⭐ ${usedPrefix}disable *antispam*
⭐ ${usedPrefix}msg *<texto>*
⭐ ${usedPrefix}banchat
⭐ ${usedPrefix}unbanchat
⭐ ${usedPrefix}resetuser *<@tag>*
⭐ ${usedPrefix}banuser *<@tag>*
⭐ ${usedPrefix}unbanuser *<@tag>*
⭐ ${usedPrefix}dardiamantes *<@tag> <cantidad>*
⭐ ${usedPrefix}añadirxp *<@tag> <cantidad>*
⭐ ${usedPrefix}banuser *<@tag>*
⭐ ${usedPrefix}bc *<texto>*
⭐ ${usedPrefix}bcchats *<texto>*
⭐ ${usedPrefix}bcgc *<texto>*
⭐ ${usedPrefix}bcgc2 *<audio>*
⭐ ${usedPrefix}bcgc2 *<video>*
⭐ ${usedPrefix}bcgc2 *<imagen>*
⭐ ${usedPrefix}bcbot *<texto>*
⭐ ${usedPrefix}cleartpm
⭐ ${usedPrefix}restart
⭐ ${usedPrefix}update
⭐ ${usedPrefix}banlist
⭐ ${usedPrefix}addprem *<@tag> <tiempo>*
⭐ ${usedPrefix}addprem2 *<@tag> <tiempo>*
⭐ ${usedPrefix}addprem3 *<@tag> <tiempo>*
⭐ ${usedPrefix}addprem4 *<@tag> <tiempo>*
⭐ ${usedPrefix}delprem *<@tag>*
⭐ ${usedPrefix}listcmd
⭐ ${usedPrefix}setppbot *<responder a imagen>*
⭐ ${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*
⭐ ${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*
⭐ ${usedPrefix}saveimage
⭐ ${usedPrefix}viewimage

    ⭐ @𝐋𝐀𝐑𝐈𝐎𝐒.𝐏𝐒𝐃 𝐁𝐎𝐓 ⭐ `.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
