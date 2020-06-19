const crawler = require('../src/controller/crawler')

describe("Crawler", () => {
  it("Should return the price of the transfer in the profissional plan", async () => {

    const infoMEI = await crawler.getMEIInfo("https://www.smartmei.com.br");
    const tarifa = infoMEI.descricaoTarifa.trim();
    expect(tarifa).toBe('Transferência');
  });
});
