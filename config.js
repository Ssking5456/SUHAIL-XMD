const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "." ;  
global.video= "." ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://pin.it/5QqMO4OeI" || "https://pin.it/50mPO2tJ3" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923318086563";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://pin.it/OoksegGvL" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_09_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTg3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjExLFxuICAgICAgICAxODksXG4gICAgICAgIDM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDg5LFxuICAgICAgICA4LFxuICAgICAgICA1OSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2LFxuICAgICAgICAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMxLFxuICAgICAgICA5NixcbiAgICAgICAgODUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0bFlpbDVjK3NIQkMwM1VrZ3BVN1VSK2EwS3lneTg1Yjc0dE5OTUxTalRJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJYzdvbmRYQ1FaeWZBdnN3cjlxY0lnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ4MDhmNDFiLWFiNDktNGM4Yy1iZmY4LWZhMzU2ZjQyY2ZjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICAzNSxcbiAgICAgIDE1NCxcbiAgICAgIDIzOSxcbiAgICAgIDIyOCxcbiAgICAgIDExOSxcbiAgICAgIDE0OSxcbiAgICAgIDIyMixcbiAgICAgIDkxLFxuICAgICAgMzEsXG4gICAgICA3LFxuICAgICAgNDcsXG4gICAgICAyMzEsXG4gICAgICA4OCxcbiAgICAgIDMzLFxuICAgICAgNjUsXG4gICAgICA3MSxcbiAgICAgIDksXG4gICAgICAxNzIsXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICAxODYsXG4gICAgICA3NixcbiAgICAgIDEwMyxcbiAgICAgIDExMCxcbiAgICAgIDQ2LFxuICAgICAgMTA2LFxuICAgICAgMTQsXG4gICAgICA4OCxcbiAgICAgIDIwOSxcbiAgICAgIDE2MSxcbiAgICAgIDIwOCxcbiAgICAgIDExMCxcbiAgICAgIDc5LFxuICAgICAgOSxcbiAgICAgIDIzMixcbiAgICAgIDIyMCxcbiAgICAgIDQzLFxuICAgICAgMjQ2LFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdZRk1LM05XXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTgwODY1NjM6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNDEyNzc1NzU3ODM2NjoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdXcxK0FIRU9TOWpiZ0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZKQWhMQ3AxVW02UFBhaEZVQUZCTlM5eG9sRUQzN3NTNzhEb2k2amhSeVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicExoN2xEWW5SL0lCUUYyemF6ZjVCSzBncFZySlY3K3MvUktJVDk4UUFJLzZlRFg2ekpiM3B2c01TZElaV1JqcTFDMmtlOURJQjhXY0Q2ZHZKdHpERGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS1N4Vm5tREswUVhLVmIxK2l0b040aExrOFdyWmtRSkszcENJNjluazdOVnpqdCtybmtJa3ZOY29ubmVpdmg5am9lWStoUXUwVWFUMmozRk9tS0ZkRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE4MDg2NTYzOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4Mjc0MTUxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0MzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHQzMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtNDhabXoxLzk3anNJUkF4QTRzZDlmcE5ORCtIclNMRnQ2TUlxZFFqMFNJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwODE4MDY0NTksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyODI3NDEyMDU1OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "KING",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
