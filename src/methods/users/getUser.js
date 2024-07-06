const {addUser} = require('./addUser');

module.exports = {
  getUser: async({userId}, pg) => {
    try {
      let result = await pg('users')
        .where({userId});

      if (!result.length) {
        result = await pg('users')
          .insert({userId})
          .returning('*');
      }

      return result;
    }
    catch (_) {
      console.log('Беда..');
    }
  }
};