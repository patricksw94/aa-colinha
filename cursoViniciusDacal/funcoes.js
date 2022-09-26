const shoppingCart = {
    user: {
         id: 1, 
    firstName: 'John', 
    lastName: 'souzaLima'
},
    items: [
        { 
            product: { id: 1, name: 'banana'},
            quantity: 10,
         },
        { 
            product: { id: 2, name: 'laranja'},
            quantity: 1,
         }
    ]
};

/* const shoppingCart = {
    user: { 
        id: 1,
    name: 'Patrick de Souza Lima',
          },
    items: [
        { 
            product: { id: 1 },
            quantity: 10,
         },
        { 
            product: { id: 2 },
            quantity: 1,
         }
    ]
}; */

function formatShoppingCart(shoppingCart) {
    const result = {};
        result.user= {
            id: shoppingCart.user.id,
            name: `${shoppingCart.user.firstName} ${shoppingCart.user.lastName}`,
        }
    };

    shoppingCart.items.map((item) => {
        return {
            ...item,
            product: { id: item.product.id },
        };
    });
    
console.log(formatShoppingCart(shoppingCart));

console.log(shoppingCart)