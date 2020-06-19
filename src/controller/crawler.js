const axios = require("axios");
const cheerio = require("cheerio");

exports.getMEIInfo = async (url) => {
  const response = await axios.get(url);

  if (response) {
    const $ = cheerio.load(response.data);
    var MEIInfo = {};

    $("#tarifas-2 > .row").map((i, el) => {
      if (i === 2) {
        MEIInfo.descricaoTarifa = $(el).children().eq(0).text();
        MEIInfo.valorTransferencia = $(el).children().eq(2).text();
      }
    });
  }

  return MEIInfo;
};
