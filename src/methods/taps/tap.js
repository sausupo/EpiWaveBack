module.exports = {
  tap: async({userId, coinsAmount}, pg) => {
    const result = await pg('users')
      .update({coinsAmount})
      .where({userId})
      .returning('*');

    return result;
  }
};