/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

function doTouchOwnLink(){
  Bot.sendMessage("*You click on yours own link!*");
}

function doAttracted(refUser){
  Bot.sendMessage(
    "*You invite by user:* " + Libs.commonLib.getLinkFor(refUser));

  Bot.sendMessageToChatWithId(
    refUser.telegramid,
    "*You invited new user:* " + Libs.commonLib.getLinkFor(user)+"\n\n*⚠️Point will credit when invited user join all channel*"
  );
}

function doAlreadyAttracted(){
  Bot.sendMessage("");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAlreadyAttracted: doAlreadyAttracted,
  linkPrefix: "colour",
  debug: false
}

RefLib.track(trackOptions);


var newUser = User.getProperty("newUse")

if (!newUser) {
  User.setProperty("newUse", "Yes", "string")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
status.add(1)

Bot.sendMessageToChatWithId(6632694425,
    "*👨🏻‍✈️New User🆕*\n\n*🤴🏻User = "+user.first_name+"\n\n👮🏻‍♂Username =* @"+user.username+ 
     " \n\n*💳User Id =* " +
      user.telegramid +
      "\n\n*📊User Count:* "+status.value()+""
  )

  
}



var buttons = [
    [
      {
        text: "↗️ Join",
        url: "https://t.me/the_biggners_journery"
      }],
    [
      {
        text: "✅ Joined",
        callback_data: "/joined"
      }
    ]
  ]

  

Api.sendPhoto({
    photo: "https://telegra.ph/file/696580b1c0b0080a2ed6d.jpg",
    caption: "*👨‍💻 Join our channels to get colour prediction from bot:*",
    reply_markup: {
      inline_keyboard: buttons
    },
    parse_mode: "Markdown"
  })

  
