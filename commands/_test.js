/*CMD
  command: /test
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

Bot.inspect(content) 

let result;
try {
  result = JSON.parse(content);
}catch(e){  
  // now on error you can see what text do you have in content
  // and you can check this text in JSON validator
  throw new Error('JSON parsing error: ' + content)
}
var status = result.status;
if (status == "error") {
  Bot.sendMessage("Error, check your email and try again!");
  Bot.runCommand("/start");
} else {
  var text = "Verification code sent successfully. It might take up to a minute to arrive. Please check your spam or junk folder as well.";
  var button = [[{ text: "⛔ Cancel", callback_data: "/disagree" }]]; // Moved button declaration inside the else block
  Api.editMessageText({ chat_id: request.message.chat.id, 
    text: text,
    message_id: request.message.message_id,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: button }
  });
  Bot.runCommand("/started1");
}
