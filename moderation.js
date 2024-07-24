// auto delete links
client.on('messageCreate', (message) => {
    // roles whitelist
    const roleNames = ['example', 'example', 'example'];

    // match urls
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // check if message contains url
    if (urlRegex.test(message.content)) {
        // role check
        const memberHasRole = message.member.roles.cache.some(role => roleNames.includes(role.name));

        // if member doesnt have role delete message
        if (!memberHasRole) {
            message.delete()
                .then(() => {
                    console.log(`Deleted link from: ${message.author.tag}`);
                })
                .catch(err => {
                    console.error('Failed to delete the link:', err);
                });
            return;
        }
    }
});
