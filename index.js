const Discord = require('discord.js');
const client = new Discord.Client();




client.once('ready', () => {
	console.log('Ready!');
});


//ROCK PAPER SCISSORS

const prefix = '!';
client.on('message' , message => {


	if (message.author.bot) return;
	if (message.content.indexOf(prefix) !== 0) return;
	
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	
	if (command == 'rps') {
		
		const choiceA = ['rock', 'paper', 'scissors'];
		const random = Math.floor((Math.random() * choice.length));
		const result = choice[random];
		
		const choiceB = args[0];
		if (!choiceB) return message.channel.send(`These: \`${prefix}rps <rock|paper|scissors>\``);
        if (!choiceA.includes(choiceB)) return message.channel.send(`These: \`${choiceA.join(', ')}\``);
		
		message.channel.send('Bot's choice: '  + result);
		
		if (result === choiceB) return message.reply ("Draw");
		
		switch (choiceB) {

			case 'rock': {
				if (result === 'paper') 
					
				return message.reply('You lost');
				
				if (result === 'scissors')
			
					
				 return message.reply('You lost');
				}
			
			case 'paper': {
              			if (result === 'scissors') 
					
				return message.reply('You lost')
				
				if (result === 'rock')
				
				return message.reply('You won');

			}
           		 case 'scissors': {
				if (result === 'rock') 
				
				return message.reply('You lost') 
				
				if (result === 'paper')
				
				return message.reply('You won'); 
					

			}

		}
	}

			
});
