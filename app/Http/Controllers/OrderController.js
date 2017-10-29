'use strict'

const Order = use('App/Model/Order')

class OrderController {

  * index(request, response) {
    const orders = yield Order.all()

    yield response.sendView('orders', { orders: orders.toJSON() })
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = OrderController
