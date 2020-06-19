const crawler = require('./controller/crawler')
const exchange = require('./controller/exchange')

var retorno = {};

module.exports = {
  Query: {
    async RequestSmartMEI(parent, { url }, context, info) {
      const infoMEI = crawler.getMEIInfo(url);
      infoMEI.then(i => {
        const ret = exchange.exchangeInfo(i);
        ret.then(r => {
          retorno = r;
          return { retorno };
        })
      })
      return retorno
    }
  }
}
