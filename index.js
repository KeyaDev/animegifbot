const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: "ODIzMjUyMDQ0NTQ2NTcyMzQ5.YFeHNg.jZOvXr9auAQAZ_DxkWiPxX0dbEs", //TOKEN YOUR BOT(ТОКЕН ВАШЕГО БОТА)
prefix: "&" //PREFIX YOUR BOT(ПРЕФИКС ВАШЕГО БОТА)
})
bot.onMessage()
//commands(команды)

bot.command({
name: "ping", //Trigger(Триггер команды)
code: `$ping Pong!` //Code(Код команды)
})

//status(статус бота)

bot.status({
  text: "Status your bot",
  type: "WATCHING",
  time: 12
})

//variables(переменные)

bot.variables({
  Name1: 'Value1',
  Name2: 'Value2'
})
