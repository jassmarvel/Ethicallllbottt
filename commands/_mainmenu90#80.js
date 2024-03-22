/*CMD
  command: /mainmenu90#80
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ⬅️ back
  group: 
CMD*/

var referCount = User.getProperty("referCount")

if (referCount == undefined) {
  let refUser = Libs.ReferralLib.getAttractedBy()

  if (refUser) {
    var refBalance = Libs.ResourcesLib.anotherUserRes(
      "balance",
      refUser.telegramid
    )
    refBalance.add(+1)

    var refUserText =
      "*✅ Your invited user joined channels, you got 1 point.*"

    Api.sendMessage({
      chat_id: refUser.telegramid,
      text: refUserText,
      parse_mode: "Markdown"
    })

    User.setProperty("referCount", 1, "integer") 

   
  }
}

var text = "*👋 Hey! Welcome to our Bot.\n\n❤️‍🔥 Get 99.99% accurate colour prediction!*\n\n*💡 This Prediction Bot will only work when you have Register with bellow links.*\n\n*TirangaGames:*\nhttps://tirangagames.in/#/register?invitationCode=34858121497\n\n*82 Lottery:*\nhttps://82bet.com/#/register?invitationCode=1586397264\n\n*📑 If you follow with above links, there will be upto 99% chance of right prediction.*"
var keyboard =
  "🎰 Colour Prediction"

Bot.sendKeyboard(keyboard, text)

