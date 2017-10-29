'use strict'

const Lucid = use('Lucid')

class Order extends Lucid {

  static get table () {
    return 'orderdetails'
  }

}

module.exports = Order
