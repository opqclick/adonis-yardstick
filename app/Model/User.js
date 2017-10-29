'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
    static get table () {
        return 'customers'
      }
}

module.exports = User
