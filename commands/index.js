const help = require("./help");
const rings = require("./rings");
const ringsimg = require("./ringsimg");
const quest = require("./quest");
const hero = require("./hero");
const card = require("./card");
const rr = require("./rulesRef");
const myrings = require("./myrings");

module.exports = function({
  author,
  cardList,
  scenarios,
  rulesRef,
  emojiSymbols,
  channel,
  logger
}) {
  return {
    help: () => help(channel),
    rings: query =>
      rings(query, cardList, emojiSymbols, channel, author, logger),
    ringsimg: query => ringsimg(query, cardList, channel, logger),
    quest: () => quest(scenarios, author, channel, logger),
    hero: query => hero(query, cardList, emojiSymbols, channel, logger),
    card: query => card(query, cardList, emojiSymbols, channel, logger),
    rr: query => rr(query, rulesRef, emojiSymbols, channel, author, logger),
    myrings: () => myrings(author, channel, logger)
  };
};
