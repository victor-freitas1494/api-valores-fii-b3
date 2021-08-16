const router_express_fii = require('express')
const puppeteer = require('puppeteer')
const router_fii = router_express_fii.Router()

router_fii.get('/api/:fii', async (req, res, next) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.google.com/search?q='+ req.params.fii)
    const valorDoDia = await page.evaluate(() => {
        const retornValor = document.querySelectorAll('.iyjjgb')
        const arrayConsulta = []
        retornValor.forEach(i => {
            arrayConsulta.push(i)
        })
        return {
            nomeDoFundo: (document.querySelector('.oPhL2e').innerHTML).toUpperCase(),
            nomeDaB3 : document.querySelector('.WuDkNe').innerHTML,
            valoresDoDia: [{
                valorFinal: document.querySelector('.IsqQVc').innerHTML,
                valorMaximo: arrayConsulta[1].innerHTML,
                valorMinima: arrayConsulta[2].innerHTML
                }
            ]
        }
    })
    res.json(valorDoDia)
    next()
})

module.exports = router_fii