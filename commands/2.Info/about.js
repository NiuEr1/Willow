const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  try {

    const bicon = client.user.displayAvatarURL();
    const botembed = new Discord.MessageEmbed()
      .setColor(client.warna.kato)
      .setThumbnail(bicon)
      .addField("Nama", "Willow")
      .addField("Tanggal Lahir", "23 September")
      .addField("Pemilik", "Niu`Er#0001")
      .addField("Bahasa", "Discord.JS dengan NodeJS")
      .addField("Motto", "Bagi Steam Wallet")
      .addField("Terima Kasih Kepada", "Karen-Araragi-Master")
      .addField("Tim Pengembang", "The OwO Family")
      .setFooter("Stable Release | Niu`Er#0001")
      .setAuthor(message.guild.name, message.guild.iconURL())
    message.channel.send(botembed);
  } catch (error) {
    return message.channel.send(`Something went wrong: ${error.message}`);
    // Restart the bot as usual.
  }
}

exports.conf = {
  aliases: ["kato"],
  cooldown: 5
}

exports.help = {
  name: 'about',
  description: 'melihat tentang Willow-Bot',
  usage: 'n!about',
  example: 'n!about'
}