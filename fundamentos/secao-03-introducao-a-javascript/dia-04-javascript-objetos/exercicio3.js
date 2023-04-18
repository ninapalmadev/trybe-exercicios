let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

function customerInfo(order) {
    let nome = order.name;
    let tel = order.phoneNumber;
    let street = order['address'].street;
    let number = order.address.number;
    let apart = order.address.apartment;
    let deliveryPerson = order.order['delivery'].deliveryPerson;

    console.log(`Olá, ${deliveryPerson}, entrega para: ${nome}, Telefone: ${tel}, R. ${street}, Nº ${number}, AP: ${apart}`);
}

customerInfo(order);

function orderModifier(order) {
    let deliveryPerson = order.name;
    deliveryPerson = 'Luiz Silva';
    let total = 50;
    let pizza = Object.keys(order.order.pizza);
    let drink = order.order.drinks.coke.type
    console.log(`Olá, ${deliveryPerson}, o valor total de seu pedido de ${pizza[0]} e ${pizza[1]} e ${drink} é R$ ${total}`);
}

orderModifier(order); 