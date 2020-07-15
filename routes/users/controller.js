const { User } = require("../../models");

module.exports = {
  deleteUser: async (req, res) => {
    const _id = req.params.id;

    try {
      const deletedUser = await User.findByIdAndRemove({ _id });

      res.send({
        message: "1 user has been deleted",
        result: deletedUser,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
  editUser: async (req, res) => {
    const _id = req.params.id;
    const { name, email, password } = req.body;

    try {
      const editedUser = await User.findOneAndUpdate(
        { _id },
        { name, email, password }
      );

      res.send({
        message: "1 user has been updated",
        result: editedUser,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.send({
        message: "List Users",
        results: users,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
  userRegistration: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const user = await User.create({
        name,
        email,
        password,
      });

      res.send({
        message: `Registration complete`,
        result: user,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
};
