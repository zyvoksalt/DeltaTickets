const Discord = require("discord.js");
const fs = require("fs");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {

    if(!message.member.hasPermission("ADMINISTRATOR"))
    {
        return message.channel.send("> :no_entry: Désolé tu n'as pas les permissions ``ADMINISTRATOR`` :no_entry:");
    }

if(message && message.deletable) message.delete().catch(e => {});

let embed = new Discord.MessageEmbed()
.setTitle(`Système de Ticket`)
.setColor(color.none)
.setFooter(`DeltaTickets | Crée par DeltaBot Inc.`, bot.user.displayAvatarURL())
.setDescription(`Réagissez avec 🎟️ pour créer un ticket.`);
message.channel.send(embed).then(m => {
  m.react('🎟️');
});

}

exports.help = {
    name: "ticket",
    aliases: ['createticket', "t"]
}