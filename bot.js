const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  client.user.setPresence({game: {name: "-+help for commands!", type: 0}});
  console.log('I am ready!');
});

client.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general").sendMessage(member.toString() + " Welcome taco brethren!");
  
  member.addRole(member.guild.roles.find("name", "Member"));
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "info") {
    var embed = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .addField("What I am", "I am a bot created by: Zandercros12!", true)
      .addField("This is you ------------>", " nice icon", true)
      .addField("What I do", "Murder")
      .addField("Am I a good bot?", "no")
      .setColor(0x00FFFF)
    message.channel.sendEmbed(embed);
  }



});

setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);
