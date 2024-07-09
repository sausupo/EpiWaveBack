module.exports = {
  getUser: async({userId}, {refId}, pg) => {
    try {
      if (refId) {
        const [{id, coinsAmount}] = await pg('users')
          .where('userId', refId)
          .returning(['id', 'coinsAmount'])

        if (id) {
          await pg('users')
            .update({coinsAmount: coinsAmount + 50000})
            .where({id});
        }
      }
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