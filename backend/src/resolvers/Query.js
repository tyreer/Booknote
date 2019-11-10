const { forwardTo } = require('prisma-binding');

const Query = {
  notes: forwardTo('db'),
  // async notes(parent, args, ctx, info) {
  //   const notes = await ctx.db.query.notes();

  //   return notes;
  // },
};

module.exports = Query;
