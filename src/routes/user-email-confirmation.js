import UserSchema from '../../../models/UserSchema';
const express = require('express');
const router = express.Router();
const express = require('express');
const router = express.Router();

/* confirm user email page. */
router.get('/email-confirmation', function(req, res, next) {
  try {
    const user = await UserSchema.findOne({hash: params.hash, deleted_at: {$exists: false}});
    if (!user) {
        throw new Error('Usuário não encontrado!');
    }
    console.log("TEST EMAIL");
    console.log(user);
    await UserSchema
        .findOneAndUpdate({_id: user._id, deleted_at:{$exists: false}},
            {$set:{email_confirmed_at:new Date()}},{new: 'true'});
    res.status(200).json({confirmUserEmail:true}});
  } catch (error) {
      next(error);
  }
});

module.exports = router;
