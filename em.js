const { time } = require('console');
const Discord = require('discord.js');//api v12
const { TIMEOUT } = require('dns');
const client = new Discord.Client();
const token = ''
const ffmpeg = require("ffmpeg")
const ytdl = require('ytdl-core-discord')
client.setMaxListeners(700) 



var lang = ['https://cdn.discordapp.com/attachments/747978940689285232/842543722419060776/IMG_20210513_192212861.jpg', 'https://cdn.discordapp.com/attachments/747978940689285232/842543683508895774/IMG_20210513_192147120.jpg','https://cdn.discordapp.com/attachments/747978940689285232/842543684406607922/IMG_20210513_192159966.jpg', 'https://cdn.discordapp.com/attachments/747978940689285232/842543609332629534/IMG_20210513_192126737.jpg', 'https://cdn.discordapp.com/attachments/747978940689285232/842543608845959259/IMG_20210513_192057514.jpg' ]
// drake's request
client.on('message', function(message){ 
    if (message.content.toLowerCase().includes('feet')) { 
        message.channel.send(lang[Math.floor(Math.random()*lang.length)]);
    }
           
    if (message.content.toLowerCase().includes('foot')) {
        message.channel.send(lang[Math.floor(Math.random()*lang.length)]);
    }
          
    })



client.on('message', function(message){

    var blueCount = 0;
    var redCount = 0;

    if (message.content.toLowerCase().startsWith('.color')) {
        let question = message.content.substring(6);

        const embed = new Discord.MessageEmbed()
        .setTitle('Color')
        .setAuthor('Made by Gamr')
       
        .setFooter('Vote Above')
        .addFields(
            { name: 'what color do we want? ', value: '...', inline: true },
        )
        .setTimestamp()
    
        .addFields(
            { name: 'COMMAND: .color', value: 'change color of embed. Proper usage: .color', inline: true },
        )
        
        message.channel.send(embed)
    
        message.react(`🟦`).then(() => message.react('🟥'));
        const filter = (reaction, user) => {
            return [`🟦`, '🟥'].includes(reaction.emoji.name);
        };


        const collector = message.createReactionCollector(filter, {time: 10000});
collector.on('collect', (reaction, reactionCollector) => {
    if (reaction.emoji.name === `🟦`) {
        blueCount+=1
    } else if (reaction.emoji.name === `🟥`) {
        redCount+=1
    }
});
collector.on('end', (reaction, reactionCollector) => {
       if (blueCount > redCount){
            message.channel.send("Color is blue");
            var color = '#4287f5'
        }
        else if (blueCount < redCount){
            message.channel.send("Color is red");
            var color = '#f54242'
        }
        else if (blueCount = redCount){
            message.channel.send("undefined color");
        }
    })}});




client.on('message', function(message){


if(message.content.toLowerCase().startsWith('.help')){ //bot overview
    const embed = new Discord.MessageEmbed()
    .setTitle('BOT OVERVIEW')
    .setAuthor('Made by Gamr')
    .setColor('#49d0f2')
    .setFooter('GN BB')
    //god this code is messy for embeds
    .addFields(
		{ name: 'COMMAND: .help', value: 'Shows the BOT menu', inline: true },
	)
    .addFields(
		{ name: 'These are all of the commands!', value: 'Please use this for good reasons and/or purposes!' },
		{ name: 'COMMAND: good night', value: 'this sends a dm to the author of the text, and a nice message!', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .gn', value: 'Sends the video ;)', inline: true },
	)
    .setTimestamp()

    .addFields(
		{ name: 'COMMAND: .poll', value: 'Starts poll. Proper usage: .poll [question].', inline: true },
    )
    .addFields(
		{ name: 'COMMAND: .a', value: 'Starts a announcement, Proper usage: .a [announcement].', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .filter [on/off]', value: 'Filters swear words.', inline: true },
    )
    .addFields(
		{ name: 'COMMAND: .rust', value: 'Rust commands.', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .basecode', value: 'Says a number 0000-9999 that could be used as a base code in rust.', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .lines', value: 'Tells you the amount of lines in the bot.', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .codehelp', value: 'Tells you some advice while trying to guess codes to bases in rust.', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .gamr (currently unavailable)', value: 'Sends a sexy :weary: message to @Gamr and the author of the command.', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .joinvoice', value: 'Joins General and does literally nothing expect sit there.', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .leavevoice', value: 'Leaves General.', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .play', value: 'Plays a special song.', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .moneydance', value: 'Best gif ever.', inline: true },
	)
    
    .addFields( 
		{ name: 'COMMAND: .notfunny', value: 'if someone is not funny, reply with this', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: savetest', value: 'See if bot works', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .server', value: 'Sends the server name', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .members', value: 'Tells you the amount of members', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .blackjack', value: 'starts a fun, small gambling addiction for anyone who plays it', inline: true },
	)
    .addFields(
		{ name: 'COMMAND: .emulator', value: 'Lists multiple links to popular emulators', inline: true },
	)
    message.channel.send(embed)
}

}) 

client.on('message', message => {
    
    if(message.content.toLowerCase().startsWith('good night'))
    if(message.author.client){
        return;
    }
    else {
        message.channel.send(' good night girl see you tommorow.')
    }

});

client.on('message', message => {
    if(message.content.toLowerCase().startsWith('good night'))
    message.author.send(' Good night get at least 5-10 hours of sleep.');
 
});
    client.on('message', message => {
          if(message.content.toLowerCase().startsWith('.gn'))
  message.channel.send(' Video as requested:', {
    files: [ 
      'gn.mp4'
    ]
})})

// start of polling system.
var CheckCount = 0;
var XCount = 0;
client.on('message', function(message){
    XCount = 0;
    CheckCount = 0;

    if (message.content.toLowerCase().startsWith('.poll')) {
        let question = message.content.substring(6);

        const embed = new Discord.MessageEmbed()
        .setTitle('Poll')
        .setAuthor('Made by Gamr')
        .setColor('#00FFFF')
        .setFooter('Vote Above')
        .addFields(
            { name: ' do we agree with "'+question+'" ? ', value: '...', inline: true },
        )
        .setTimestamp()
    
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'COMMAND: .poll', value: 'starts poll. Proper usage: .poll [question]', inline: true },
        )
        
        message.channel.send(embed)
    
        message.react(`✅`).then(() => message.react('❌'));
        const filter = (reaction, user) => {
            return [`✅`, '❌'].includes(reaction.emoji.name);
        };


        const collector = message.createReactionCollector(filter, {time: 10000});
collector.on('collect', (reaction, reactionCollector) => {
    if (reaction.emoji.name === `✅`) {
        CheckCount+=1
    } else if (reaction.emoji.name === `❌`) {
        XCount+=1
    }
});
collector.on('end', (reaction, reactionCollector) => {
       if (CheckCount > XCount){
            message.channel.send("Yes we do!");
        }
        else if (CheckCount < XCount){
            message.channel.send("No we dont.");
        }
        else if (CheckCount = XCount){
            message.channel.send("we dont know");
        }
})}}) // end of polling system
   

// this next system will be a announcement system where you can easily tell your entire server something.
client.on('message', function(message){



    if (message.content.toLowerCase().startsWith('.a')) {
        let announcement = message.content.substring(2);

        const embed = new Discord.MessageEmbed()
        .setTitle('Announcement')
        .setAuthor('Made by Gamr')
        .setColor('#FBFF00')
        .setFooter('Look Above')
        .addFields(
            { name: '  IMPORTANT --> '+announcement+' ', value: '...', inline: true },
            
        )
        .setTimestamp()
    
        .addFields(
           // { name: '\u200B', value: '\u200B' },
            { name: 'COMMAND: .a', value: 'Use this carefully and only for major announcements', inline: true },
            
        )
        message.channel.send(embed)

    }})
    client.on('message', message => {
        if (message.content.toLowerCase().startsWith('.a')) {
            message.delete()
    message.channel.send('@here look at this hot Announcement')
    }})
//end of announcement system

    client.on('message', message => { // mass pinging for fun
        if (message.content.toLowerCase().startsWith('.sorry')) {
            message.delete()

           for(var i = 0;i<15;i++){
            message.channel.send('@everyone @here');
           }
                
           
   
  

    }}) //end of mass ping
//fun thing that annoys people

client.on('message', message => { // mass pinging for fun
    if (message.content.toLowerCase().startsWith('ping1')) {
        message.delete()

      for(var i = 0;i<15;i++){
        message.channel.send('@everyone');
      }
}})
//swear filter
const swears = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", 
"b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", 
"bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", 
"bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker",
"cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", 
"crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", 
"cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", 
"dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", 
"fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", 
"fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", 
"fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", 
"fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", 
"hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", 
"knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums",
 "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", 
 "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", 
 "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", 
 "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker",
  "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", 
  "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking",
   "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos",
    "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", 
    "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", 
    "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", 
    "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", 
    "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", 
    "willy", "xrated", "xxx"];
    var enableSwearsFilter = true;

client.on('message', message => {

  let foundSwears = message.content.toLowerCase().split(" ").filter(word => swears.indexOf(word) > -1)
  if (enableSwearsFilter && foundSwears.length > 0) {
    console.log("You can't say "+foundSwears.join(", "));
    message.delete();
    message.channel.send("Don't say that!");
  }
});

client.on('message', message => {
  if (message.content.split(" ")[0].toLowerCase() === ".filter") {
    enableSwearsFilter = message.content.split(" ")[1].toLowerCase() === "on";
    disableSwearsFilter = message.content.split(" ")[1].toLowerCase() === "off";
  }
  
  
})
  
client.on('message', function(message){
    if (message.content.toLowerCase().startsWith('.filter off')) {
      message.channel.send('Filter is now off!');
      
  
      const embed = new Discord.MessageEmbed()
      .setTitle('Filter')
      .setAuthor('Made by Gamr')
      .setColor('85002A')
      .setFooter('Look Above')
      .addFields(
          { name: ' Filter is now off!  ', value: '!!!   I DONT CARE IF YOU SAY SWEAR WORDS   !!!', inline: true },
          
      )
      .setTimestamp()
  
      .addFields(
          { name: '\u200B', value: '\u200B' },
          { name: 'COMMAND: .filter off', value: 'Use this if you are okay with people saying swear words!', inline: true },
          
      )
      message.channel.send(embed) }
      
      });
          
client.on('message', function(message){
  if (message.content.toLowerCase().startsWith('.filter on')) {
    message.channel.send('Filter is now on');
    

    const embed = new Discord.MessageEmbed()
    .setTitle('Filter')
    .setAuthor('Made by Gamr')
    .setColor('FF75BE')
    .setFooter('Look Above')
    .addFields(
        { name: ' Filter is now on!  ', value: '!!!Dont be saying those swears!!!', inline: true },
        
    )
    .setTimestamp()

    .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'COMMAND: .filter on', value: 'Use this if people are saying those naughties!', inline: true },
        
    )
    message.channel.send(embed) }
  }); // end of swear system
  //start of random number system
    client.on('message', function(message){
if (message.content.toLowerCase().startsWith('.number')) {
    message.channel.send('si papi')  
   
    message.channel.send(Math.floor(Math.random() * 100000 + 0));
}})
//end of number system
client.on('message', function(message){
if (message.content.toLowerCase().startsWith('.gamr')) {
    client.users.fetch('693514148679778324');
setInterval(function () {
    
    
    message.author.send('your a cutie xxxxx'); 
    message.users.cache.get('693514148679778324').send('your a cutie xxxxx'); 
}, 1 * 10 * 10); //cutie joe system end
}})

client.on('message', function(message){
    if(message.content.toLowerCase().startsWith('a')) {

   
  
    
    setInterval(function () {
        {
            if (message.author == ('')) {
                message.author.send('<3 luv u');
            }
            
        }
        
        
      //  message.users.get('393857356716572684').send('what was it'); 
    }, 1 * 10 * 10); //z system end
    }})
    /*client.on('message', function(message){              //tori
        if(message.content.toLowerCase(('simp'))) {
    
       
      //anti simp measures (@damian)
        
        setInterval(function () {
            {
                
                    message.author.send('your a simp >:(((');
            }
            
            
          //  message.users.get('393857356716572684').send('what was it'); 
        }, 1 * 10 * 10); //z system end
        }}) */
// makes guessing codes more fun
client.on('message', function(message){
    if (message.content.toLowerCase().startsWith('.basecode')) {
         
        var x =Math.floor(Math.random() * 9999) + 1;
        if(x > 1000) {
            message.channel.send(x), message.channel.send('si papi :heart:')
        }
        
    }})
//end of guessing codes
    
//start of a tutorial
client.on('message', function(message){
    if (message.content.toLowerCase().startsWith('.codehelp')) {
        message.channel.send('They are several codes that are more commonly used. Some Examples are: http://www.5z8.info/trojan_tulc.')  //sketchy link that redirects you
    }}) //end 
    //start of rust command overview
    client.on('message', message => {
        if(message.content === '.rust'){
            const embed = new Discord.MessageEmbed()
            .setTitle('BOT OVERVIEW')
            .setAuthor('Made by Gamr')
            .setColor('#182686')
            .setFooter('GN BB')
            .addFields(
                //{ name: '\u200B', value: '\u200B' },
                { name: 'COMMAND: .rust', value: 'Shows the rust help menu', inline: true },
                //{ name: '\u200B', value: '\u200B' },
            )
            .addFields(
                { name: 'These are all of the commands!', value: 'Please use this for good reasons and/or purposes!' },
                //{ name: '\u200B', value: '\u200B' },
                { name: 'COMMAND: .codehelp', value: 'this sends a link to common codes.', inline: true },
            )
            .addFields(
                //{ name: '\u200B', value: '\u200B' },
                { name: 'COMMAND: .basecode', value: 'Sends a random 4 digit number', inline: true },
            )
            .setTimestamp()  
            message.channel.send(embed)
        }
        }) //end of rust commands

 //START OF TESTING COMMANDS

//testing if I could send messages to only author
      //  client.on('message', function(message){
          //  if (message.content.toLowerCase().includes('a')) {
         //       client.users.fetch('510527756862357507');
         //   setInterval(function () {
          //      message.author.send('(put gif here)');  
          //  }, 1 * 100 * 100); 
          //  }})
        //end of all code
    client.on('message', function(message) { //just to keep track of development
        if (message.content.toLowerCase().startsWith('.lines')) 
        message.channel.send("this program is at 864 lines as of July 26th ")
    })
    client.on('message', function(message) { 
        if (message.content.toLowerCase().startsWith('yes')) {
            if(message.author.client = true){
                return;
    
            }
            else {
                let number = Math.floor(Math.random() * 10) + 1;
                var x = number
             message.channel.send(x)
            }
       
        } 
      /*  x = Math.floor(Math.random() * 10) + 1; //testing some game, doesnt work as of now (work on later)
       if (number == x)
       message.channel.send("thats the right number!")
       else {
           message.channel.send("thats the wrong number, the number was:" + x)
       }
       */
    })
client.on('message', function(message) { //joins general, does nothing besides sitting there
    if (message.content.toLowerCase().startsWith('.joinvoice')) { 
        message.channel.send('joining General!')
let voicechannel = client.channels.cache.get("854918485000060970")
if (!voicechannel) return console.error("The channel does not exist!");
  voicechannel.join().then(connection => {
    console.log("Successfully connected.");
  }).catch(e => {
    console.error(e);
    })}}); 



    client.on('message', function(message) { //joins general, does nothing besides sitting there
        if (message.content.toLowerCase().startsWith('.leavevoice')) { 
    let voicechannel = client.channels.cache.get("854918485000060970")
      voicechannel.leave()
      message.channel.send('leaving General!')
        }}); 

client.on('message', function(message) {
if(message.content == '.moneydance') //lame way to do this, but otherwise it randomly sends :moneydance:
message.channel.send( "https://cdn.discordapp.com/emojis/849093945970393088.gif?v=1, #owned by Money™ ")
   

//testing
}) 
client.on('message', function(message) { //WIP do FRIDAY
    if(message.content == '.moneydancespam') //lame way to do this, but otherwise it randomly sends :moneydance:
    message.channel.send( "https://cdn.discordapp.com/emojis/849093945970393088.gif?v=1, #owned by Money™ ")
    }) 
    //end
    client.on('message', message => {
if(message.content.toLowerCase().includes('.notfunny')) {
   message.delete()
   message.channel.send("not funny");
}


    }); 
    
   // client.on('message', function(message){
     ///   if (message.content.toLowerCase('.disable')) {
       //     message.channel.send('DEBUG disabled')
      //  }
    //else {
        client.on('message', function(message){
            
            if (message.content.toLowerCase().includes('.enablesecretdebug')) {
                if(message.author.id = '693514148679778324') {
                message.delete()
                message.channel.send('DEBUG COMMANDS ENABLED')
                
                    client.on('message', message => {
                        if(message.content.toLowerCase().includes('.pause')) {
                            message.channel.send('pausing now!')
                            const broadcast = client.voice.createBroadcast();
                                for (const connection of client.voice.connections.values()) {
                                    broadcast.on('error',console.error)
                                  broadcast.end()
                                }
                            }
                        } 
                    )   
                
                    client.on('message', message => {
                        if(message.content.toLowerCase().includes('.play')) {
                            message.channel.send('playing now!')
                            const broadcast = client.voice.createBroadcast();
                            broadcast.play('C:/Users/Gamr/testing.mp3');
                            // Play "music.mp3" in all voice connections that the client is in
                            for (const connection of client.voice.connections.values()) {
                              connection.play(broadcast);
                             broadcast.on('error',console.error)
                             /* 
                                }
                              } */
                          
                            }
                
                        }})
                }
                else {

                }
            
            client.on('message', function(message){
                if (message.content.toLowerCase().includes('savetest')) {
                    client.users.fetch('750829752868405269');
                setInterval(function () {
                    message.channel.send('smile');  
                }, 1 * 100 * 100); 
                }})

                /*client.on('message', function(message){
                    if (message.content.toLowerCase().includes('a')) {
                        client.users.fetch('693514148679778324');
                    setInterval(function () {
                        message.author.send('smile');  
                    }, 1 * 100 * 100); 
                    }})
    */
 
                }})

                var hCount = 0;
                var sCount = 0;        
client.on('message',function(message){
if(message.content ==".blackjack") {
    hCount=0
    sCount=0
   
  let card1 = Math.floor(Math.floor(Math.random() * (11 - 2 + 1))) + 1;
   let card2 =Math.floor(Math.floor(Math.random() * (11 - 2 + 1))) + 1;
 var card3 = Math.floor(Math.floor(Math.random() * (11 - 2 + 1))) + 1;
  var card4 = Math.floor(Math.floor(Math.random() * (11 - 2 + 1))) + 1;

/*if(card3 = 11) {
    message.channel.send("You have an Ace")
    message.channel.send("")
  }
if(card4 = 11) {
   message.channel.send("You have an Ace")
     message.channel.send("")
 }*/
 setTimeout(function() { 
 message.react(`✅`).then(() => message.react('❌'));
},4000);
 const filter = (reaction, user) => {
     return [`✅`, '❌'].includes(reaction.emoji.name);
 }

 setTimeout(function() { 
  message.channel.send("Loading Cards...")
 },400);
 setTimeout(function() { 
 const embed = new Discord.MessageEmbed()
 .setTitle('Cards')
 .setColor('#03fc03')//green
 .addFields({ name: 'Card One:' +card3, value: 'test', inline: true },)
 .addFields({ name: 'Card Two:' +card4, value: 'test', inline: true },)
 .setTimestamp()
 var playerhand = message.channel.send(embed)
 var x32 = card4+card3
 message.channel.send('Total: ' +x32)
},2000);

setTimeout(function() { 
    const embed3 = new Discord.MessageEmbed()
    .setTitle('Dealer Cards')
    .setColor('#d10000')//red
    .addFields({ name: 'Dealer Card One:' +card1, value: 'test', inline: true },)
    .addFields({ name: 'Dealer Card Two: Hidden', value: 'test', inline: true },)
    .setTimestamp()
   var dealerhand= message.channel.send(embed3)
   },2500);


        const collector = message.createReactionCollector(filter, {time: 13000});
collector.on('collect', (reaction, reactionCollector) => {
    if (reaction.emoji.name === `✅`) {
        hCount+=1
    } else if (reaction.emoji.name === `❌`) {
        sCount+=1
    }
    
       

});
collector.on('end', (reaction, reactionCollector) => {
       if (hCount > sCount){
        var hit1 = Math.floor(Math.floor(Math.random() * (11 - 2 + 1))) + 1;
            message.channel.send("Hitting...");
        

            setTimeout(function() { 
                message.channel.send("Generating Card..");
            },1000);

            setTimeout(function() { 
                const embed4 = new Discord.MessageEmbed()
                .setTitle('Cards')
                .setColor('#5993ff')
                .addFields({ name: 'Card One:' +card3, value: 'test', inline: true },)
                .addFields({ name: 'Card Two:' +card4, value: 'test', inline: true },)
                .addFields({ name: 'Card Three:' +hit1, value: 'test', inline: true },)
                .setTimestamp()
                message.channel.send(embed4)
                var x33 = card3+card4+hit1;
                message.channel.send('Total: ' +x33)
            },2000);

            setTimeout(function() { 
                const embed5 = new Discord.MessageEmbed()
                .setTitle('Dealer Cards')
                .setColor('#b56100')//green
                .addFields({ name: 'Dealer Card One: ' +card1, value: 'test', inline: true },)
                .addFields({ name: 'Dealer Card Two: '+card2, value: 'test', inline: true },)
                .setTimestamp()
                message.channel.send(embed5)
                var x34 = card1+card2;
                message.channel.send('Dealer Total: ' +x34)
            },2500);
            setTimeout(function() { 
                var x34 = card1+card2;
                var x33 = card3+card4+hit1;
                if(x34>x33){
                    message.reply("you Lose!")
                }
                else{
                    message.reply("You Win!")
                }
            },5000);

            setTimeout(function() { 
                var x33 = card3+card4+hit1;
                if(x33>21){
                    message.reply("Bust!")
                }
               
            },5000);



        }

            else if (hCount < sCount){
                message.channel.send("Standing...");
           
                setTimeout(function() { 
                    const embed5 = new Discord.MessageEmbed()
                    .setTitle('Dealer Cards')
                    .setColor('#b56100')//green
                    .addFields({ name: 'Dealer Card One: ' +card1, value: 'test', inline: true },)
                    .addFields({ name: 'Dealer Card Two: '+card2, value: 'test', inline: true },)
                    .setTimestamp()
                    message.channel.send(embed5)
                    var x34 = card1+card2;
                    message.channel.send('Dealer Total: ' +x34)
                },2000);


                setTimeout(function() { 
                    var x34 = card1+card2;
                    var x32 = card4+card3
                    if(x34>x32){
                        message.reply("you Lose!")
                    }
                    else{
                        message.reply("You Win!")
                    }
                    if(x34=x32){
                        message.reply("You Tied")
                    }
                },5000);

                setTimeout(function() { 
                    var x32 = card4+card3
                    if(x32>21){
                        message.reply("Bust!")
                    }
                   
                },5000);
                
                setTimeout(function() { 
                    var x34 = card1+card2;
                    if(x34>21){
                        message.channel.send("Bust!")
                    }
                   
                },5000);

            }
            else if (hCount = sCount){
                message.channel.send("we dont know");
            }



})}})
         
                client.on('message', function(message) {
                     if (message.content === `.server`) {
                        message.channel.send(`Server name: ${message.guild.name}`);
                    }
                    else if (message.content === `.members`) {
                        message.channel.send(`Total members: ${message.guild.memberCount}`);
                    }
                });




//neverlose code gen
           /*     client.on('message', function(message,) {
                    if(message.content=".nlgen")
                    message.channel.send("WILL TAKE WHILE TO GET LUCKY HAVE FUN SITTING FOR 20+ hours!!!")
                    function makeid(length) {
                        var result           = '';
                        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                        var charactersLength = characters.length;
                        for ( var i = 0; i < length; i++ ) {
                          result += characters.charAt(Math.floor(Math.random() * 
                     charactersLength));
                       }
                       return result;
                    }
                    setInterval(function() {
                  x= (makeid(Math.floor(Math.floor(Math.random() * (26 + 9)))));
message.channel.send("https://neverlose.cc/activate?code="+x)
                    },1*1*1);
                });*/



                client.on('message', function(message){
                    if(message.content.toLowerCase().startsWith(`.emulator`)){
              const embed7 = new Discord.MessageEmbed()
              .setTitle('Emulators')
              .setColor('#ff69fa')
              .addFooter("I have virustotal'd all of these at: virustotal.com, and it comes up with 0 detections aka 0 virus/malware.")
              .addFields(
                  { name: 'N64', value: 'Project-64: https://www.pj64-emu.com/, is a emulator for n64 games, it is open source: https://github.com/project64/project64, and widely trusted by the community.', inline: true },
                  )
              .addFields(
                { name: 'NES', value: 'FCEUX: http://fceux.com/web/home.html, is a emulator for NES games, it is also open source: https://github.com/TASVideos/fceux/.', inline: true },)
              .addFields({ name: 'GameCube/Wii', value: 'Dolphin: https://dolphin-emu.org/, is a emulator for GameCube/Wii games, it is also open source: https://github.com/dolphin-emu/dolphin, and is the most popular emulator for gamecube+wii.', inline: true },
              )
              .addFields({ name: 'DS', value: 'desmume: http://desmume.org/ is a emulator for Nintendo DS games, it is also open source on github: https://github.com/TASVideos/desmume. Multiple sites have praised it.', inline: true },
              )
              .addFields(
                { name: 'ROMS', value: 'https://vimm.net/?p=vault', inline: true },
            )
              .addFields(
                  { name: 'I will be adding more soon <3', value: 'I use most of the emulators.', inline: true },
              )
              .setTimestamp()

        
     
          message.channel.send(embed7)
          }  
        })
                client.on('message', function(message) {
                    if(message.content===".discgen") {
                        message.channel.send("Nitro gen")
                        function makeid(length) {
                            var result           = '';
                            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                            var charactersLength = characters.length;
                            for ( var i = 0; i < length; i++ ) {
                              result += characters.charAt(Math.floor(Math.random() * charactersLength)+6);
                           }
                           return result;
                        }
                        setInterval(function() {
                        x= (makeid(Math.floor(Math.floor(Math.random() * (16)))));},1*1*1);
                   
                        setInterval(function() {
                        message.channel.send("https://discord.gift/"+x)
                        },1*1*1);
                        }});

client.on('message', function(message) {
 //   if (message.author.client)
      
  //  else
  if(message.content.includes("im so bored")) {
      
        var ans = [
            "I am also bored.",
            "why do you think you coded this",
            "nice array",
            "E",
            "A",
            "Sports",
            "this is picks from a list of answers randomly!",
            "I need ideas for my bot",
            "good night",
            "javascript is cool",
            "<3"
        ]
        message.channel.send(ans[Math.floor(Math.random()* ans.length)]);

    }
  
})




client.on('message', function(message) {
   
if(message.content.includes(".coinflip")) {
    //const ht = message.content.substring(9,1);
    function cf(){
        const coinflip= [
            'https://cdn.discordapp.com/attachments/867148210563842078/873250416308154418/heads.gif',
            'https://cdn.discordapp.com/attachments/867148210563842078/873250420896714773/tails.gif',
        ]
        const hot = coinflip[Math.floor(Math.random()*coinflip.length)];
        const embed = new Discord.MessageEmbed()
        .setTitle('Coinflip')
        .setAuthor('Made by Gamr')
        .setFooter('who win')
        .addFields(
            { name: 'Heads or tails? ', value: '...', inline: true },
        )
        .setTimestamp()
        .setImage(hot)
        message.channel.send(embed)

    }
 
cf();



        /*if(ht == "heads" && coinflip == 'https://cdn.discordapp.com/attachments/867148210563842078/873250416308154418/heads.gif'){
            message.channel.send("You were correct!");
        }else if(ht.includes("tails") && coinflip == 'https://cdn.discordapp.com/attachments/867148210563842078/873250420896714773/tails.gif'){
            message.channel.send("You were correct!");
        }else{
            message.channel.send("you were incorrect :neutral_face: ");
        }*/
}})


client.on('message', function(message){
if(message.content==(".cracks")) {
    message.channel.send("USE AT OWN RISK:  SUP v2:https://cdn.discordapp.com/attachments/724794094580138015/868758779913719848/sup_v2_crack.dll STAINLESS:https://cdn.discordapp.com/attachments/724794094580138015/869219392351793162/stainless_new_crack.dll  DOPIUM: https://yougame.biz/threads/220607/. USE AT YOUR OWN RISK, DM ME FOR MY 2018 CHEAT.")
}

})
/*client.on('message', function(message){
    if(message.content==(".when")) {
        var timeTillCharge = ;
        message.channel.send("")
    }
    
    })

*/
client.on('message',function(message){
        if(message.content.startsWith(".getbetter") ){
            let name = message.content.substring(11);
            message.channel.send("hey, @"+ name +" get better soon babe <3");
       
     }
}
)

client.on('message',function(message){
    if(message.content == ".kick"){
    let newMember = client.users.fetch('693514148679778324');
newMember.setChannel(null,"gay");
}   
  });

client.login(token)
