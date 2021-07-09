const db = require('../database').mute;

module.exports = async (client) => {

    const mutes = db.all();
    for (mute of mutes) {

        const member = db.get(mute.ID);
        const timeLatest = Date.now() - member.first;
        if (timeLatest > member.dur) {
            await client.guilds.cache.get(member.guild).members.cache.get(mute.ID).roles.remove('678063527013122101');
            db.delete(mute.ID);
        } else return;

    }
}