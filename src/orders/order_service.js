class OrderService {
  constructor() {
    this.orders = [];
    this.order_id = 0;
    this.order = require("./order_schema");
  }

  addOrder(new_order) {
    return this.order.save(new_order, (err, data) => {
      if (err) throw err;
      return data;
    });
  }

  getOrders() {
    return this.order.find({}, (err, data) => {
      if (err) throw err;
      return data;
    });
  }

  getOrder(query) {
    return this.order.find(query, (err, data) => {
      if (err) throw err;
      return data;
    });
  }

  deleteOrder(id) {
    return this.order.findByIdAndRemove(id, (err, data) => {
      return data;
    });
  }

  updateOrder(id, order) {
    return this.order.findByIdAndUpdate(id, order, (err, data) => {
      return data;
    });
  }
}

module.exports = new OrderService();
