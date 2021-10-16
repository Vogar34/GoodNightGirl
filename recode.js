const Discord = require('discord.js');//api v12
const client = new Discord.Client();
const token = '';
client.setMaxListeners(700);
client.login(token);// logins into bot with token.


client.on('message', function(message){ 
    const lang = [// takes more space but its cleaner looking
        'https://cdn.discordapp.com/attachments/747978940689285232/842543722419060776/IMG_20210513_192212861.jpg', 
        'https://cdn.discordapp.com/attachments/747978940689285232/842543683508895774/IMG_20210513_192147120.jpg',
        'https://cdn.discordapp.com/attachments/747978940689285232/842543684406607922/IMG_20210513_192159966.jpg', 
        'https://cdn.discordapp.com/attachments/747978940689285232/842543609332629534/IMG_20210513_192126737.jpg',
        'https://cdn.discordapp.com/attachments/747978940689285232/842543608845959259/IMG_20210513_192057514.jpg'
    ]//checks if messages contains feet/foot
          if(message.content.includes('feet') || message.content.includes('foot')) { 
              message.channel.send(lang[Math.floor(Math.random()*lang.length)]); //chooses random image
          }
    })

    client.on('message', function(message){
        if(message.content.toLowerCase().startsWith('.help')){
            const embed = new Discord.MessageEmbed()
        .setTitle('BOT OVERVIEW')
        .setAuthor('Made by Gamr')
        .setColor('#49d0f2')
        .setFooter('GN BB')
        .setTimestamp()
        .addFields({ name: 'COMMAND: .help', value: 'Shows the BOT menu', inline: true },)
        .addFields({ name: 'These are all of the commands!', value: 'Please use this for good reasons and/or purposes!' }, { name: 'COMMAND: good night', value: 'this sends a dm to the author of the text, and a nice message!', inline: true },)
        .addFields({ name: 'COMMAND: .gn', value: 'Sends the video ;)', inline: true },)
        .addFields({ name: 'COMMAND: .poll', value: 'Starts poll. Proper usage: .poll [question].', inline: true },)
        .addFields({ name: 'COMMAND: .a', value: 'Starts a announcement, Proper usage: .a [announcement].', inline: true },)
        .addFields({ name: 'COMMAND: .filter [on/off]', value: 'Filters swear words.', inline: true },)
        .addFields({ name: 'COMMAND: .rust', value: 'Rust commands.', inline: true },)
        .addFields({ name: 'COMMAND: .basecode', value: 'Says a number 0000-9999 that could be used as a base code in rust.', inline: true },)
        .addFields({ name: 'COMMAND: .lines', value: 'Tells you the amount of lines in the bot.', inline: true },)
        .addFields({ name: 'COMMAND: .codehelp', value: 'Tells you some advice while trying to guess codes to bases in rust.', inline: true },)
        .addFields({ name: 'COMMAND: .gamr (currently unavailable)', value: 'Sends a sexy :weary: message to @Gamr and the author of the command.', inline: true },)
        .addFields({ name: 'COMMAND: .joinvoice', value: 'Joins General and does literally nothing expect sit there.', inline: true },)
        .addFields({ name: 'COMMAND: .leavevoice', value: 'Leaves General.', inline: true },)
        .addFields({ name: 'COMMAND: .play', value: 'Plays a special song.', inline: true },)
        .addFields({ name: 'COMMAND: .moneydance', value: 'Best gif ever.', inline: true },)
        .addFields({ name: 'COMMAND: .notfunny', value: 'if someone is not funny, reply with this', inline: true },)
        .addFields({ name: 'COMMAND: savetest', value: 'See if bot works', inline: true },) 
        .addFields({ name: 'COMMAND: .server', value: 'Sends the server name', inline: true },)
        .addFields({ name: 'COMMAND: .members', value: 'Tells you the amount of members', inline: true },)
        .addFields({ name: 'COMMAND: .blackjack', value: 'starts a fun, small gambling addiction for anyone who plays it', inline: true },)
        .addFields({ name: 'COMMAND: .emulator', value: 'Lists multiple links to popular emulators', inline: true },) 
        message.channel.send(embed)
             }
        }
    )
    client.on('message', function(message){
        if(message.content.toLowerCase().startsWith('good night')){
        message.reply('good night girl see you tommorow.');//replies to message
        }
    })
    client.on('message', function(message){
    if(message.content.toLowerCase().startsWith('good night')){ 
        message.author.send(' Good night get at least 5-10 hours of sleep.'); //sends dm to author
        }
    }) 
    client.on('message', function(message){
        if(message.content.toLowerCase().startsWith('.gn')){
            message.reply("Video as requested: ");
            message.channel.send("https://cdn.discordapp.com/attachments/597203841854865430/756203831838244905/gn.mp4");
        }
    })
    //polling system
client.on('message', function(message){
    let CheckCount = 0;// sets default value for checks and x's
    let XCount = 0;
    if (message.content.toLowerCase().startsWith('.poll')) {
        let question = message.content.substring(6);//gets the String value after ".poll"
        const embed = new Discord.MessageEmbed()//makes embed
        .setTitle('Poll')
        .setAuthor('Made by Gamr')
        .setColor('#00FFFF')
        .setFooter('Vote Above')
        .addFields({ name: ' do we agree with "'+question+'" ? ', value: '...', inline: true }, )
        .setTimestamp()
        .addFields({ name: '\u200B', value: '\u200B' }, { name: 'COMMAND: .poll', value: 'starts poll. Proper usage: .poll [question]', inline: true },)
        message.channel.send(embed)//sends the embed
        message.react(`✅`).then(() => message.react('❌'));// reacts to the embed with 
        
        const filter = (reaction, user) => {
            return [`✅`, '❌'].includes(reaction.emoji.name);// only reactions it counts for the poll
        }
    const collector = message.createReactionCollector(filter, {time: 10000}); //waits 10 seconds
    collector.on('collect', (reaction, reactionCollector) => {
    if (reaction.emoji.name === `✅`) {
        CheckCount++;//adds value to the variable CheckCount
    } else if (reaction.emoji.name === `❌`) {
        XCount++;// adds value to the variable XCount
    }
});
    collector.on('end', (reaction, reactionCollector) => {
       if (CheckCount > XCount){//checks if more people voted check than x
            message.channel.send("Yes we do!");
        }
        else if (CheckCount < XCount){// checks if more people voted x than check
            message.channel.send("No we dont.");
        }
        else{ //otherwise it has to be a tie.
            message.channel.send("Tied.");
        }
    })
    }
})

client.on('message', function(message){
    //announcement system 
    if (message.content.toLowerCase().startsWith('.a')) {

        let announcement = message.content.substring(2);
        message.delete();
        message.channel.send('@here look at this hot Announcement');
        const embed = new Discord.MessageEmbed()
        .setTitle('Announcement')
        .setAuthor('Made by Gamr')
        .setColor('#FBFF00')
        .setFooter('Look Above')
        .addFields({ name: '  IMPORTANT --> '+announcement+' ', value: '...', inline: true },)
        .setTimestamp()
        .addFields( {name: 'COMMAND: .a', value: 'Use this carefully and only for major announcements', inline: true },)
        message.channel.send(embed);
        }
    })
    client.on('message', message => { // mass pinging for fun
        if (message.content.toLowerCase().startsWith('.sorry')) {
            let amount = message.content.substring(6);
            message.delete()
           for(var i = 0;i<amount;i++){
            message.channel.send('@everyone @here');
           }
        }
    }) 
    const swears = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", 
"b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", 
"bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", 
"bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker",
"cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", 
"crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", 
"cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", 
"dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", 
"fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", 
"fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", 
"fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker",  "fuk", "fuker", "fukker", "fukkin", "fuks", 
"fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker","gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", 
"fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", 
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
    if(message.content.toLowerCase().startsWith('.filter')) {
    let ed = message.content.substring(6)
        if(ed.includes("on")){
            enableSwearsFilter = true;
            message.channel.send('Filter is now on');
            const embed = new Discord.MessageEmbed()
        .setTitle('Filter')
        .setAuthor('Made by Gamr')
        .setColor('FF75BE')
        .setFooter('Look Above')
        .addFields({ name: ' Filter is now on!  ', value: '!!!Dont be saying those swears!!!', inline: true },)
        .setTimestamp()
        .addFields({ name: '\u200B', value: '\u200B' },{ name: 'COMMAND: .filter on', value: 'Use this if people are saying those naughties!', inline: true },)
        message.channel.send(embed) 
            }else{
            enableSwearsFilter = false;
            message.channel.send('Filter is now off!');
             const embed = new Discord.MessageEmbed()
             .setTitle('Filter')
             .setAuthor('Made by Gamr')
             .setColor('85002A')
             .setFooter('Look Above')
             .addFields({ name: ' Filter is now off!  ', value: '!!!   I DONT CARE IF YOU SAY SWEAR WORDS   !!!', inline: true },)
             .setTimestamp()
             .addFields({ name: '\u200B', value: '\u200B' },{ name: 'COMMAND: .filter off', value: 'Use this if you are okay with people saying swear words!', inline: true },)
        message.channel.send(embed);
            }
        }
    })//random number system starts
    client.on('message', function(message){
        if (message.content.toLowerCase().startsWith('.number')) {//command that you have to use
            message.reply('si papi');//replies to message
            message.channel.send(Math.floor((Math.random() * 100000) + 1));// sends a number from 1-100000
        }
    }) 
    client.on('message', function(message){//broken
        if (message.content.toLowerCase().startsWith('.gamr')) { 
            client.users.fetch('693514148679778324');
            for(let i=0;i<5;i++){
                client.users.cache.get('6693514148679778324').send("your a cutie xxxx");
                message.author.send('your a cutie xxxxx');
            }
        }
    })
    client.on('message', function(message){
        if(message.content.toLowerCase().startsWith('a')) {
       for(let i=0;i<5;i++){
        if (message.author == ('')) {//insert id here
            message.author.send('<3 luv u');
        }
       }
    }
})
client.on('message', function(message){
    if (message.content.toLowerCase().startsWith('.basecode')) {
        var x =Math.floor(Math.random() * 9999) + 1;
        if(x > 1000) {
            message.channel.send(x), message.channel.send('si papi :heart:')
        }
    }
})
client.on('message', function(message){
    if (message.content.toLowerCase().startsWith('.codehelp')) {
        message.channel.send('They are several codes that are more commonly used. Some Examples are: http://www.5z8.info/trojan_tulc.')  //sketchy link that redirects you
    }}) //end 
    client.on('message', message => {
        if(message.content === '.rust'){
            const embed = new Discord.MessageEmbed()
            .setTitle('BOT OVERVIEW')
            .setAuthor('Made by Gamr')
            .setColor('#182686')
            .setFooter('GN BB')
            .addFields({ name: 'COMMAND: .rust', value: 'Shows the rust help menu', inline: true },)
            .addFields({ name: 'These are all of the commands!', value: 'Please use this for good reasons and/or purposes!' },{ name: 'COMMAND: .codehelp', value: 'this sends a link to common codes.', inline: true },)
            .addFields({ name: 'COMMAND: .basecode', value: 'Sends a random 4 digit number', inline: true },)
            .setTimestamp()  
            message.channel.send(embed)
        }
    }) //end of rust commands
    client.on('message', function(message) { //joins general, does nothing besides sitting there
        let voicechannel = client.channels.cache.get('738993570102640645');
        if (message.content.toLowerCase().startsWith('.joinvoice')&& voicechannel) { 
            message.channel.send('joining General!');
            voicechannel.join();
        console.log('Successfully connected.');
        }else if(!voicechannel){
            return console.error('The channel does not exist!');
        }else if(message.content.toLowerCase().startsWith('.leavevoice')){
            voicechannel.leave();
            message.channel.send('leaving General!');
            console.log('Successfully disconnected.');
        }
      })
    client.on('message', function(message){
        if (message.content.toLowerCase().startsWith('.moneydance')) { 
            message.channel.send( "https://cdn.discordapp.com/emojis/849093945970393088.gif?v=1, #owned by Money™ ");
        }
    })
    /*client.on('message', message => {//WIP FIX SOON THX BB
        if(message.content.toLowerCase().includes('.pause')) {
            message.channel.send('pausing now!')
            const broadcast = client.voice.createBroadcast();
                for (const connection of client.voice.connections.values()) {
                    broadcast.on('error',console.error)
                  broadcast.end()
                }
            }
        }  
    )*/ //wip 
    client.on('message', message => {
        if(message.content.toLowerCase().includes('.play')) {
            message.channel.send('playing now!');
            const broadcast = client.voice.createBroadcast();
            broadcast.play('C:/Users/Gamr/testing.mp3');
            // Play "music.mp3" in all voice connections that the client is in.
            for (const connection of client.voice.connections.values()) {
              connection.play(broadcast);
             broadcast.on('error',console.error)
          
            }
        }
    }
)

