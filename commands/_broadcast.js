/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: send message

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid !== 6632694425) {
Bot.sendMessage("*You Are Not An Admin.*");
    return;
}
Bot.sendMessage("*Message sent to all users*")
Bot.runAll({
command: "/message",
options: {chat_id: request.chat.id,message_id: request.message_id}
})
