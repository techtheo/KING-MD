const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '2349134983467'
global.devs = '2349134983467';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.postimg.cc/kXv7hkSC/theogod.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'THEO-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Theo_Idolo' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? "KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0l5SmdFL1VuV3dyczMwSlUxMndJWEZoK0IrTVRUbVNkcWFBa2p5UHNtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVBsS2hWVmpuMWxHVWhidThDeG5RREhhVFNaM056SlJRN20ySTN6WWFWWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTVVGNmxIWm90cE1OVzZVbERidzQ5YzE0ZmZsTzJtSG90VmFST3FkcjNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuYkREQzJZVXFvWXpsVEwrSmZvYVJNaE1acHQ2c2xLWDViT3F1SjAydGdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CLzdIelVuMDd4WTdyTUF5RkJIVXNTRDFXZmVya1ZlaDc5ODVLZkkxVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5ZL2xtMmY1dmlJam9UVUNZeUZTTDc0K0huc0RzT3VQaHhCQ0w5dmJSMm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0U0aGlCWmRRbzBtcFNLcmR1WkxRTlJReHd4K1UwenlybTc5QldncklHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREtTZ3lrNFVXdENjZTRXMlVVOGJVSG81UmdIeW5udWtkQkNFL2hObWwyWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9STm9iMDNRQW9NWjdSVGJJVDZnTnVYSFFGSmdQbGxyQXdaTURYSU1sZzgyWnBhT0cxcWVQcVlJVHlMMHduSWwvcVpST2VWR2NBNVFBTDlsSFVPMWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiIvK0djUDYwSTNvZVJROFVwTUVPOTBjd3hqanluL2w1ZklTQWlMOTh5QUswPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5a1FDQmFhaVQ2V2ZMZzhNWDhKZkhnIiwicGhvbmVJZCI6ImMzOWY5NTk0LWUxMGItNDgxYS1iZGIxLTBlY2JiOTg0OTQ1YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhR0JNWDFveE9kUFlGMDIrZzFKWWV2VHhYWUk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtvK1JNVHJVTGQwei91OWt4TlU3d1cyWDdjRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08vbWdGc1FyYzJ4dEFZWUJpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZYUGxWdXpPTVU4dWNySHd2TmpjTmlOd29Zc0xKWVU3eVhXSUFmc3plQ1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjV3ME1wd0crTlkvSmxnd1U1bVpaWENGNHBsUVJrWU5wOUQ5ZzRrcTExMWw0clN3czFvV0VXV0NYb2wrTTFWQWk5OWRna05BemJ4S1lZMzU3T0xNeENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqMkZsZDFSN2U5VXRnMXY2MklnZ0dHQnB6ajhQTU1ub1hXUENqREpiNkZlSTZ0bm8wcWxMZ0hHaUQrc1JiWldkS2VCYjQrODM0MnVDNGs3SXptS0tqdz09In0sIm1lIjp7ImlkIjoiMjM0OTEzNDk4MzQ2Nzo1MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUaGVvIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzQ5ODM0Njc6NTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlZ6NVZic3pqRlBMbkt4OEx6WTNEWWpjS0dMQ3lXRk84bDFpQUg3TTNnbCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDQ3NzM3Mn0=" : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'false' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'false' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Theo ti gbera tan' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
