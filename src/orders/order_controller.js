class OrderController {
  constructor(orderService) {
    this.orderService = orderService;
  }
  getOrders() {
    return this.orderService.getOrders();
  }
  getOrder(id) {
    return this.orderService.getOrder(id);
  }
  createOrder(order) {
    return this.orderService.createOrder(order);
  }
  updateOrder(order) {
    return this.orderService.updateOrder(order);
  }
  deleteOrder(id) {
    return this.orderService.deleteOrder(id);
  }
}

module.exports = OrderController;
