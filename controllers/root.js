const Test = require('../models/Test')

module.exports = {
    getIndex: async (req, res) => {
        const tests = await Test.find()
        res.render('index.ejs', {tests: tests})
    },
    createTest: async (req, res) => {
        try {
            await Test.create({
                thing: req.body.thing
            })
            console.log('Test has been added!')
            res.redirect('/')
        } catch(err){
            console.log(err)
        }
    }
}