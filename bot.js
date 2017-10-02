const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var memepic = [
	"http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme-pics.jpg",
	"https://i.pinimg.com/736x/4d/c1/cc/4dc1cc0fbc8b2df90634df5f1a624ed1--pretty-things-things-i-love.jpg",
	"https://i.ytimg.com/vi/uezUVaVCxjs/maxresdefault.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-memes-hilarious.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme-collection.jpg",
	"https://i.pinimg.com/236x/a7/d1/2c/a7d12cf784efbf18c7da44bafea94361--ironic-quotes-quotes-so-true.jpg",
	"https://i.pinimg.com/736x/d6/09/e2/d609e22384ddd556414b27644053dea3--big-words-cool-words.jpg",
	"https://i.pinimg.com/736x/65/fe/35/65fe357925092930409c5bd1bbdf7793--funny-food-memes-humor-memes.jpg",
	"https://www.funnypica.com/wp-content/uploads/2015/05/Funny-Memes-12-570x641.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/a6/55/18/a6551844efa2f043b69e175d1bf0d83e.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/6a/f6/fb/6af6fb6b67a56d57ad95ac6848354bec.jpg",
	"https://funnymemes.co/memes/Life_is_Like_a_Box_of_Chocolates_Funny_Meme.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2016/12/30-In-Real-Life-Memes-2-Real-Life-Funny-Memes.jpg",
	"https://funnymemes.co/memes/Your_Crush_Is_Behind_You_Funny_Meme.jpg",
	"https://i.pinimg.com/736x/28/3d/1d/283d1d5648c027afa6cdb6c9535ce152--funny-monday-memes-monday-quotes.jpg",
	""
];

var busy = [
	"http://s2.quickmeme.com/img/c0/c0dd57c40909e0589e638288983426cad8e083b3084bb69788ab3614c2842828.jpg",
	"http://www.relatably.com/m/img/too-busy-memes/26736dbd86884bf385462bb541123161.jpg",
	"https://img.memecdn.com/meincraft_c_1074973.jpg",
	"https://i.imgflip.com/nin5g.jpg",
	"http://images.memes.com/meme/868357",
	"https://i.imgflip.com/swzcx.jpg",
	"https://img.memecdn.com/busy_o_424301.jpg",
	"http://s2.quickmeme.com/img/47/47d1a9865afa9788dd0291ed906321d9e89e042fd3f7b31035e4cb6dd085f63e.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPCHhqmusFbTQ1s3_OUbmYMQfQ_kIdLEW7ffuIM3f2AWiUVSqdA"
];

var fortunes = [
	"**BusyBot says:** ```css\nYes```",
	"**BusyBot says:** ```css\nYes - Definitely```",
	"**BusyBot says:** ```css\nSure```",
	"**BusyBot says:** ```fix\nNo, NEVAR```",
	"**BusyBot says:** ```fix\nSorry, uh... can you say that again?```",
	"**BusyBot says:** ```fix\nNot in a million years```",
	"**BusyBot says:** ```fix\nWhatever lets you sleep at night...```",
	"**BusyBot says:** ```fix\nSorry, I'm a bit busy right now, I'll answer next time you ask a question.```",
	"**BusyBot says:** ```css\nYou may rely on it",
	"**BusyBot says:** ```css\nMaybe",
	"**BusyBot says:** ```fix\nThe world may never know"

];


client.on('ready', () => {
  client.user.setPresence({game: {name: "-Bhelp for commands!", type: 0}});
  console.log('I am ready!');
});

client.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general").sendMessage(member.toString() + " Welcome to the server!");
  
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
if(command === "help") {
	message.author.sendMessage("**Commands:**\n'''md\n[Command](Definition)\n[info](gives information on the bot)\n[busy](sends you a busy meme)\n[8ball](ask a question and see my response!)\n");
	message.channel.sendMessage("**I just messaged you the commands, go to your direct messages!**");
}

if(command === "busy") {
	message.channel.sendMessage(busy[Math.floor(Math.random() * busy.length)]);
}

if(command === "8ball") {
	if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else message.channel.sendMessage("```diff\n- I do not understand```");
}

if(command === "memepic") {
	message.channel.sendMessage(memepic[Math.floor(Math.random() * memepic.length)]);
}

});

setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);
