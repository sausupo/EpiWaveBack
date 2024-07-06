module.exports = {
  addUser: async({userId}, pg) => {
    try {
      const {userId: result} = await pg('users')
        .insert({userId})
        .returning('*');

      return result;
    } catch (_) {
      console.log('Беда..');
    }
  }
};