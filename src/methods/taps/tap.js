module.exports = {
  tap: async({userId, coinsAmount}, pg) => {
    await pg('users')
      .update({coinsAmount})
      .where({userId});
  }
};