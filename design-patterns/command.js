class OrderManager {
  constructor() {
    this.orders = []
  }

  execute(command, ...args) {
    command.run(this.orders, ...args)
  }
}

class Command {
  constructor(run) {
    this.run = run
  }
}

const AddOrder = (id, name) => {
  return new Command((orders) => {
    orders.push([id, name])
  })
}

const CancelOrder = (id) => {
  return new Command((orders) => {
    const orderIndex = orders.findIndex(([orderId]) => orderId === id)
    if (orderIndex !== -1) {
      orders.splice(orderIndex, 1)
    }
  })
}

const manager = new OrderManager()

manager.execute(AddOrder(1, "Pastor Tacos"))
manager.execute(AddOrder(2, "Guacamole"))
manager.execute(AddOrder(3, "Agua Fresca"))

manager.execute(CancelOrder(2))

console.log("Manager: ", manager.orders)
