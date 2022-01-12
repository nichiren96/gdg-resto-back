class OrderRouting {
  constructor() {
    this.routes = [];
  }
  add(route) {
    this.routes.push(route);
  }
  getRoutes() {
    return this.routes;
  }
}
