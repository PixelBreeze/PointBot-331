var version = '0.0.1';
//
//Version 0.0.1
//Created first version of PointBot-331
//

API.sendChat('PointBot-331 v' + version + ' is online! Type \pb help for a list of commands.');
API.sendChat('Warning: this bot is still under development; points you get are not final and it doesn\'t have to work 100% correct.')

//This function runs when someone says something
function all(data) {
	var message = data.message;
	var username = data.un;
	var userid = data.uid;
	var messageid = data.cid;
	if (message.slice(0,3) != '\pb') {
		return;
	}
	if (message.split(' ').length < 2) {
		return;
	}
	
	//Check what the message is, and if it's an existing PointBot command, respond
	switch (message) {
		case '\pb help':
			API.sendChat('[PB] [@' + username + '] Click here for a list of commands: https://github.com/DragonCzz/PointBot-331/blob/master/commands.md');
		break;
	}
}

//Let the function "all" run when there is a new message
API.on(API.CHAT,all);
