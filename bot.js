const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var gif = [
	"https://media.giphy.com/media/Eg2Noq3e44cvK/giphy.gif",
	"http://p.fod4.com/p/media/b808431fbb/m8YD3waBSPCsYzvwLDcj_donald%20trump%20electrocuted.gif",
	"https://media.giphy.com/media/PmpA5ohOUl1xC/giphy.gif",
	"http://www.teamjimmyjoe.com/wp-content/uploads/2017/02/funny-Little-Kim-Jong-un.gif",
	"http://68.media.tumblr.com/f57839187069c4c1bc65e268840559f7/tumblr_oq96fi4zu51udh5n8o1_250.gif",
	"http://img62.laughinggif.com/pic/HTTPS9tZWRpYS50ZW5vci5jby9pbWFnZXMvZjFmYWE4ZmJmMzk2NzVkZDhlMWJkOTMxYmMxNTFkMWYvdGVub3IuZ2lm.gif",
	"http://www.best-gif.com/wp-content/uploads/2016/04/funny-gifs-Stop-the-clown-mom-it-driving-me-crazyyy.gif",
	"http://9to5animations.com/wp-content/uploads/2017/01/Donald-Trump-funny-gif-image.gif",
	"https://media.tenor.com/images/4b5f35b6033e266a524a029a61a4d1c6/tenor.gif",
	"https://media.tenor.com/images/0e2ff58eb8d23a3d22b9b00505c057dd/tenor.gif",
	"https://media.tenor.com/images/1d4cefd98877009a93f0f09556ffa5a2/tenor.gif",
	"http://www.teamjimmyjoe.com/wp-content/uploads/2016/02/giphy.gif",
	"https://media.giphy.com/media/m80Q4HTDNPFHq/giphy.gif",
	"http://cdn2-www.craveonline.com/assets/mandatory/legacy/2016/05/man_file_1067410_6Funny-GIFS-at-Radass-001.gif",
	"https://media.tenor.com/images/c26e863624ee27ba7489d2514e9a6418/tenor.gif",
	"http://teamjimmyjoe.com/wp-content/uploads/2016/11/trump-clinton-godzilla-funny-gifs.gif",
	"https://s-media-cache-ak0.pinimg.com/originals/50/72/40/507240a9542ffa2663eafb74f49372a9.gif",
	"http://gifsec.com/wp-content/uploads/2017/04/3gr23bdyqad.gif",
	"http://www.teamjimmyjoe.com/wp-content/uploads/2015/06/men-in-black-sunglasses.gif",
	"http://cdn3-www.craveonline.com/assets/mandatory/legacy/2016/06/man_file_1109297_10_mandatory_gifs_of_the_week.gif",
	"https://media.giphy.com/media/wW95fEq09hOI8/giphy.gif",
	"https://media.giphy.com/media/l3zoKeX8bMG5sMP4s/giphy.gif",
	"https://media.giphy.com/media/P8XNUbh3Wuwa4/giphy.gif",
	"https://media.giphy.com/media/N95FS0GTW33Z6/giphy.gif",
	"http://68.media.tumblr.com/tumblr_m4uzpgCgx11qhjnqgo1_500.gif",
	"https://s-media-cache-ak0.pinimg.com/originals/29/1f/c0/291fc0a981073af5c734b50db261ce43.gif",
	"https://media.giphy.com/media/Qjmp5vKEERPyw/giphy.gif"
];

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
	"https://i.pinimg.com/736x/a6/55/18/a6551844efa2f043b69e175d1bf0d83e--so-funny-funny-shit.jpg",
	"https://i.pinimg.com/736x/55/43/94/554394f9a01b34093435c3cac157433f--funny-girl-memes-funny-memes-about-life.jpg",
	"https://lh3.googleusercontent.com/ayR8RBlecNTMziYrSYpuoG4yS7a8KMfPQDYqtiNw8vY6mgB4RGr555peMpjy3WRTxQ=h310",
	"https://i.pinimg.com/736x/78/70/ae/7870ae0798fa9c93ee4bde7ebc756177--online-casino-bonus-lol-funny-pictures.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/2d/d8/e2/2dd8e2c93967b62f275991a6044695ab.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2014/11/Best-funny-Memes-collection.jpg",
	"https://i.pinimg.com/736x/e0/06/6c/e0066c0c7f8f128a38b5732f15349bd1--funny-comments-funny-stuff.jpg",
	"https://i.pinimg.com/736x/f8/4f/7e/f84f7e3932b9f09a067b5fb224f1b654--funniest-memes-funny-jokes.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2014/11/Most-Funny-Memes-Humor.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/5b/e3/90/5be3902970a2eabc0433caeca1b2f3da.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/fb/7c/04/fb7c0481989959838c21d9798873f461.jpg",
	"https://i.pinimg.com/736x/ab/de/c4/abdec49c547d55604ec4c802a8b19423--toilet-ideas-funny-medical.jpg",
	"https://i.pinimg.com/736x/cc/29/d7/cc29d7d55a15091b05f873cc879eda55--halloween-ideas-funniest-memes.jpg",
	"https://i.pinimg.com/236x/3d/d1/71/3dd1710cbdf760f6fbacc380667f63f6--donald-trump-funny-memes.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2015/07/Top-25-Funny-Memes.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/1e/87/4e/1e874e55e9185e30fb1dedfc01cab0f8.jpg",
	"https://i.pinimg.com/736x/fd/6d/2b/fd6d2b1daa8133150e8c88c3c07e3178--funny-asian-memes-funny-memes.jpg",
	"https://i.pinimg.com/736x/3a/a9/89/3aa9892fec54a038fad612babbfde552--laugh-quotes-funniest-memes.jpg",
	"https://i.pinimg.com/736x/09/5d/de/095dde57ed99b3879eda68199bbc3aad.jpg",
	"https://i.pinimg.com/736x/27/5d/84/275d84b3ada01a03db88204aa84e9ee6--funny-facts-lol-funny.jpg",
	"https://i.pinimg.com/736x/36/c6/8e/36c68e200adb17bcf8fb17123356e092--cute-memes-funny-memes.jpg",
	"https://i.pinimg.com/736x/3f/36/d0/3f36d0a870adb56a63baafcc9a0cf86a--funny-meme-pictures-funny-memes.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxu62HNVXpwLT3dVyuXK9uXxKqY07XOZP72hc_0bLUM1aDKKO",
	"https://i.pinimg.com/736x/5c/71/89/5c718951eee8e8b08bb212ad99122124--funny-qoutes-funny-memes.jpg",
	"https://i.pinimg.com/736x/75/27/df/7527dfe8ab2e6ced4f52a0f928659037--so-funny-funny-memes.jpg",
	"https://i.pinimg.com/736x/ca/2a/d8/ca2ad89390ad7b26f869fa78e9d8e66e--snapchat-funny-humor-snapchat-memes.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/b2/f5/3a/b2f53a63031cf03b37c02f1bf0eead43--funny-shit-funny-stuff.jpg",
	"https://i.pinimg.com/736x/87/72/b8/8772b8a9a45ff7bd52e969af452ab680--funny-call-of-duty-memes-funny-gamer-memes.jpg",
	"https://i.pinimg.com/736x/b8/ce/45/b8ce45cadffe168e82646b8973fd074e--lil-debbie-funny-memes.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2016/04/30-Funniest-Memes-24-Funny-Memes.jpg",
	"https://i.pinimg.com/736x/78/b8/02/78b8026cfb006e7c5bc5e2d05c5617b6--funny-sports-memes-nfl-memes.jpg"
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
	"**BusyBot says:** ```css\nYou may rely on it```",
	"**BusyBot says:** ```css\nMaybe```",
	"**BusyBot says:** ```fix\nThe world may never know```"

];


client.on('ready', () => {
  client.user.setPresence({game: {name: "-Bhelp for commands!", type: 0}});
  console.log('I am ready!');
});

client.on("guildMemberAdd", function(member) {
  member.addRole(member.guild.roles.find("name", "Member"));
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "info") {
    var embed = new Discord.RichEmbed()
      .setThumbnail(message.client.avatarURL)
      .addField("What I am", "I am a bot created by: Zandercros12!", true)
      .addField("This is you ------------>", " nice icon", true)
      .addField("What I do", "Murder")
      .addField("Am I a good bot?", "no")
      .setColor(0x00FFFF)
    message.channel.sendEmbed(embed);
  }
if(command === "help") {
	message.author.sendMessage("**Commands:**\n```md\n[Command](Definition)\n[info](gives information on the bot)\n[busy](sends you a busy meme)\n[8ball](ask a question and see my response!)\n[memepic](sends a funny meme)\n[randomgif](sends a random gif)```");
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

if(command === "randomgif") {
	message.channel.sendMessage(gif[Math.floor(Math.random() * gif.length)]);
}

});

setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);
