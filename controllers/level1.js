const Object = require('../models/Object')

module.exports = {
    getLevel1: async (req, res) => {
        const objects = await Object.find()
        res.render('level1.ejs', {objects: objects})
    },
    createObject: async (req, res) => {
        try {
            await Object.create({
                objective: req.body.newKey, 
                difficulty: req.body.newValue
            })
            console.log('Object has been added!')
            res.redirect('/level1')
        }catch(err){
             console.log(err)
         }
    },
    deleteObject: async (req, res) => {
        try {
            await Object.findOneAndDelete({
                _id: req.body.objectID
            })
            res.json("Object Deleted")
        } catch(err){
            console.log(err)
        }
    },
    updateObject: async (req, res) => {
        try {
            await Object.findOneAndUpdate(
                {_id: req.body.objectID},{
                    objective: req.body.newKey,
                    difficulty: req.body.newValue
                }
            )
            res.json("Object Updated")
        } catch(err){
            console.log(err)
        }
    }
}