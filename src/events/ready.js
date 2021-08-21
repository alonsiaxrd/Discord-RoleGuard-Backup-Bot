const client = global.client;
const cfg = require("../configs/config.json");

module.exports = async () => {
  
  let danger = false;
  client.user.setPresence({ activity: { name: cfg.Bot.Durum }, status: cfg.Bot.Status });
  let VoiceChannelID = client.channels.cache.get(cfg.Channels.VoiceChannelID);
  if (VoiceChannelID) VoiceChannelID.join().catch(() => { });
  console.log(`(${client.user.username}) adlı ana hesapta [${client.guilds.cache.get(cfg.Server.GuildID).name}] adlı sunucuda giriş yapıldı.`)
  let guild = client.guilds.cache.get(cfg.Server.GuildID)
  client.backup();
  client.channelBackup();
  client.logSend(`Başarıyla rol \`(${guild.roles.cache.size} rol)\` ve kanal \`(${guild.channels.cache.size} kanal)\` verileri kaydedildi.`)
  setInterval(() => {
  if(danger != true) client.backup()
  client.logSend(`Başarıyla rol \`(${guild.roles.cache.size} rol)\` ve kanal \`(${guild.channels.cache.size} kanal)\` verileri kaydedildi.`)
  }, 900000)
  setInterval(() => {
  if(danger != true) client.channelBackup()
  }, 900000)}

module.exports.conf = {
  name: "ready",
};
