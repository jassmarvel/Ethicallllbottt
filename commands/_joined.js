/*CMD
  command: /joined
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

  if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "👨‍💻 Wait a Movement....",
  show_alert: false, // or true for popup
});

const channel = "@the_biggners_journery";
if(!options){
  Api.getChatMember({ 
    chat_id : channel,
    user_id : user.telegramid,
    on_result : "/joined"
  })
return
}
var status = options.result.status;
   
const isJoined = status!='left'

if (isJoined) {
Bot.runCommand("/mainmenu90#80")
}else{
Bot.sendMessage("*🚫 Join All Channels..!*")

Bot.runCommand("/start")
}




