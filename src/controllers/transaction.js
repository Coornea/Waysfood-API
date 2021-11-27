const { user, order, transaction } = require("../../models");

exports.addTransaction = async (req, res) => {
   try {
      const data = req.body;
      await transaction.create(data);

      res.send({
         status: "Success!",
         message: "Add Transaction Finished!",
      });
   } catch (error) {
      console.log(error);
      res.send({
         status: "Failed!",
         message: "Server Error!",
      });
   }
};

exports.getTransactions = async (req, res) => {
   try {
      const data = await transaction.findAll({
         where: {
            idBuyer: req.user.id,
         },
         attributes: {
            exclude: ["createdAt", "updatedAt", "idBuyer", "idSeller", "idProduct"],
         },
         include: [
            {
               model: order,
               as: "orders",
               attributes: {
                  exclude: ["createdAt", "updatedAt", "idUser", "qty", "price"],
               },
            },
            {
               model: user,
               as: "buyer",
               attributes: {
                  exclude: ["createdAt", "updatedAt", "password", "status"],
               },
            },
            {
               model: user,
               as: "seller",
               attributes: {
                  exclude: ["createdAt", "updatedAt", "password", "status"],
               },
            },
         ],
      });

      res.send({
         status: "Success!",
         data,
      });
   } catch (error) {
      console.log(error);
      res.send({
         status: "Failed!",
         message: "Server Error!",
      });
   }
};
