/*CMD
  command: /ans#Prirod3digit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var value = message
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value.*")
  return
}

var colours = ["BIG 📈", "SMALL📉"];
var randomColor = colours[Math.floor(Math.random() * colours.length)];

Bot.sendKeyboard("⚡ Next Prediction ⚡,\n⬅️ Back","*✅ Prediction Result:\n👨‍💻 Period No: "+message+"\n⚡ Colour: " + randomColor+"*");

