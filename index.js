const express = require("express")
const app = express()
const engine = require("express-handlebars").engine
const port = 5000

const langsData = require("./translations.json");

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get('/:lang?', (req, res) => {
    const { lang } = req.params;

    if (!lang) {
        res.render('home', {
            pageTitle: langsData.fr.pageTitle,
            title: langsData.fr.title
        })
    } else {
        res.render('home', {
            pageTitle: langsData[lang].pageTitle,
            title: langsData[lang].title
        })
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})