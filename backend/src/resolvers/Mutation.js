const Mutations = {
  async createNote(parent, args, ctx, info) {
    // TODO: Check to ensure they are logged in

    const note = await ctx.db.mutation.createNote(
      {
        data: { ...args },
      },
      info
    );

    return note;
  },
};

module.exports = Mutations;
