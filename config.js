const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923318086563";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_47_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDM2LFxuICAgICAgICA0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODksXG4gICAgICAgIDM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk3LFxuICAgICAgICA1MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTExLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NixcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJ1Y3Ztd0ZLcDFCRjlydjFRWU5qajkxNUtROVFQY0RyMGdmcHErR3dYK0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE4MDg2NTYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRDk1OTY4OTQzMDFEMkU5MEVBNzBFOUE0NTNDMEM2MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc3OTA0NjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTgwODY1NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAyNjY0MzY3MUE4Qjc2NzhGNkMwNTc1OEFEMDAyMzBFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzc5MDQ2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxODA4NjU2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDQzNjE5Njk2QkVBM0YzQUQ0NkVBQUMxQzk3RTNERUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3NzkwNDcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE4MDg2NTYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQThDQTUzNDc4RDVGRUM3MUEzMkQ4MTVENTY3OTQ1RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc3OTA0NzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOFNGdFNia2pRNU9CSmNudl9JTV9NZ1wiLFxuICBcInBob25lSWRcIjogXCI4ZTlhMDE1ZS05MDIyLTRmMjgtYWY1Yi04MWRjMjU5ODMwYzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTU4LFxuICAgICAgMjQ5LFxuICAgICAgMTM1LFxuICAgICAgMjAxLFxuICAgICAgMTM5LFxuICAgICAgMTk0LFxuICAgICAgMjA4LFxuICAgICAgMjUzLFxuICAgICAgODUsXG4gICAgICAxMyxcbiAgICAgIDg2LFxuICAgICAgMTA2LFxuICAgICAgMTQ2LFxuICAgICAgNDcsXG4gICAgICAxNTksXG4gICAgICA1MixcbiAgICAgIDgxLFxuICAgICAgNjcsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAxMTQsXG4gICAgICAyNTIsXG4gICAgICA5NSxcbiAgICAgIDQ3LFxuICAgICAgMTYwLFxuICAgICAgMTkyLFxuICAgICAgMTQ1LFxuICAgICAgOTMsXG4gICAgICAxOCxcbiAgICAgIDE4MSxcbiAgICAgIDEyLFxuICAgICAgNTIsXG4gICAgICAyMDYsXG4gICAgICAxOTAsXG4gICAgICAyNTUsXG4gICAgICAxMTUsXG4gICAgICAxMDIsXG4gICAgICAyMixcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSRlZTQUs2UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzE4MDg2NTYzOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDQxMjc3NTc1NzgzNjY6MjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiS0lORyDwn5GRXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG13MStBSEVQNzY3N2NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2SkFoTENwMVVtNlBQYWhGVUFGQk5TOXhvbEVEMzdzUzc4RG9pNmpoUnlVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInErTGV5eFFqU2dKb1dpanlqRjhsdytGazkvb29sSzJnc1NWUzZZOEg2bWxsWWFxVW5QNU9RWWFMbHJDTEhyRjlIWHlVSTR1RGd4SUZyNjVRVjhqeEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjl3eFhOdWdoT0JFRThON2lGcDRvMTRPNVF1TGdtaE03VFZpNUlLNGtoNWFXa1BacGh5cFBwNmtQVURpKytZRTI3THFHOTZRRVhlZ3dPZFV4d0lJVWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxODA4NjU2MzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzc5MDQ2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdDeFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0N4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSG0zMzBXZHM3NzUvSXV4b200dHJ0MHh4QTgrZmZnRUc2TC9GTFUyb2JGcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDgxODA2NDU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc3OTA0NTk1OTBcIn0iCn0="  // PUT your SESSION_ID 


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
