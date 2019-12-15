const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    config: {
    name: "meme",
    category: "fun",
    usage: " ",
    description: "Sends an epic meme",
    },
    run: async (bot, message, args) => {

        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle("meme!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}
