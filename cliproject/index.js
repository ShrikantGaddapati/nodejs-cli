const mongoose = require("mongoose");
//mapping global promises  to get rid of warnings
mongoose.Promise = global.Promise;
//db connection
mongoose.connect(
  "mongodb+srv://mern:mernpass@cluster0.k7ggp.mongodb.net/test?authSource=admin&replicaSet=atlas-fpa78l-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
  }
);

//importing module
const Customer = require("./models/customers");

//now we have implemeted model, ill add few functions.
//add customers
const addCustomers = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New customer added");
    mongoose.connection.close();
  });
};

//find customers
// const findCustomer = (name) => {
//   //making it case senitive
//   const search = new RegExp(name, "i");
//   Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
//     (customer) => {
//       console.info(customer);
//       console.info(`${customer.length} matches`);

//     }
//   );
// };
const findCustomer = (name) => {
  // Make case insensitive
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      mongoose.connection.close();
    }
  );
};

//update customers
const updateCustomer = (_id, customer) => {
  Customer.update({ _id }, customer).then((customer) => {
    console.info("customer updated");
    mongoose.connection.close();
  });
};

//delete customers
const deleteCustomer = (_id) => {
  Customer.remove({ _id }).then((customer) => {
    console.info("customer removed");
    mongoose.connection.close();
  });
};

//listing
const listCustomer = () => {
  Customer.find().then((customer) => {
    console.info(customer);
    console.info(`${customer.length}customer`);
    mongoose.connection.close();
  });
};

//exporting methods
module.exports = {
  addCustomers,
  findCustomer,
  updateCustomer,
  deleteCustomer,
  listCustomer,
};
