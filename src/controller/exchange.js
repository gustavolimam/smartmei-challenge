const axios = require("axios");

exports.exchangeInfo = async (MEIInfo) => {
    const response = await axios.get("https://api.exchangeratesapi.io/latest?base=BRL");
    const date = new Date();
    const exchangeResponse = {};

    exchangeResponse.dataConsulta = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    exchangeResponse.descricaoTarifa = MEIInfo.descricaoTarifa.trim();
    exchangeResponse.valorReal = parseFloat(MEIInfo.valorTransferencia.replace("R$", "").replace(",", ".")).toFixed(2);
    exchangeResponse.valorDolar = parseFloat(response.data.rates.USD * exchangeResponse.valorReal).toFixed(2);
    exchangeResponse.valorEuro = parseFloat(response.data.rates.EUR * exchangeResponse.valorReal).toFixed(2);

    return exchangeResponse
};
