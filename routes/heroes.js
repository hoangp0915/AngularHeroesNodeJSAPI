var router = require('express').Router();
var Hero = require('../models/hero');

router.get('/', async (req, res) => {
    try {
        const heros = await Hero.find();
        res.json(heros);
    } catch (error) {
        res.json({ message: error })
    }
})
router.post('/', async (req, res) => {
    const hero = new Hero({
        name: req.body.name
    });
    try {
      const heroSave = await hero.save();
      res.json(heroSave);
    } catch (error) {
        res.json({message: error});
    }
});

router.get('/:idHero', async (req, res) => {
    try {
      const post = await Hero.findById(req.params.idHero);
      res.json(post);
    } catch (error) {
        res.json({message: error});
    }
});

router.delete('/:idHero', async (req, res) => {
    try {
      const deleteHero = await Hero.remove({_id:req.params.idHero});
      res.json(deleteHero);
    } catch (error) {
        res.json({message: error});
    }
});


router.patch('/:heroID', async (req, res) => {
    try {
        const updateHero = await Hero.updateOne(
            { _id: req.params.heroID },
            { $set: { name: req.body.name } }
        );

        res.json(updateHero);

    } catch (error) {
        res.json({ message: error })
    }
});


router.get('/search/name=:nameHero', async(req, res)=>{
    const nameHero = req.params.nameHero;
    try {
        const hero = await Hero.find({name: new RegExp(nameHero)});
        res.json(hero);
    } catch (error) {
        res.json({message: error});
    }
});
module.exports = router;