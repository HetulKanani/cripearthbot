const { Client, Message, MessageEmbed } = require('discord.js');
const e = require('express');

module.exports = {
    name: 'slowmode',
    aliases: ['dhirechat'],
    description: "Lets you set slowmode on the channel.",
    useage: 'slowmode <time>',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const amount = parseInt(args[0]);

        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.author.tag)
                    .setDescription("**You Dont Have The Permissions To Warn Users! - [MANAGE_MESSAGES]**")
                    .setFooter("happy to help ")
            )
        }
        if (isNaN(amount)) return message.channel.send(
            new MessageEmbed()
                .setColor("RED")
                .setAuthor(message.author.tag)
                .setDescription("**Please Give Valid Time...**")
                .setFooter("happy to help ")
        )

        if (args[0] === amount + "s") {
            message.channel.setRateLimitPerUser(amount);

            if (amount > 1) return message.channel.send(
                new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.author.tag)
                    .setDescription(`** slowmode is now ${amount} Seconds... **`)
                    .setFooter("happy to help ")
            )


        }


        if (args[0] === amount + "min") {
            message.channel.setRateLimitPerUser(amount);

            if (amount > 1) return message.channel.send(
                new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.author.tag)
                    .setDescription(`** slowmode is now ${amount} Minutes... **`)
                    .setFooter("happy to help ")
            )
        }
        if (args[0] === amount + "h") {
            message.channel.setRateLimitPerUser(amount);

            if (amount > 1) return message.channel.send(
                new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.author.tag)
                    .setDescription(`** slowmode is now ${amount} Hours... **`)
                    .setFooter("happy to help ")
            )


        } else {
            message.channel.send(
                new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.author.tag)
                    .setDescription(`** You can only set seconds(s), minutes(min) and hours(h) **`)
                    .setFooter("happy to help ")
            )
        }

    }
}