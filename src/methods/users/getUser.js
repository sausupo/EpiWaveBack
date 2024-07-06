module.exports = {
  getUser: async({userId}, pg) => {
    try {
      const result = await pg('users')
        .where({userId});

      return result;
    }
    catch (_) {
      console.log('Беда..');
    }
  }
};