export const add_debit = (state, value) => {
    state.debit = state.debit + value;
}

export const remove_debit = (state, value) => {
    state.debit = state.debit - value;
}

export const add_product = (state, product) => {
    let exists = false
    state.products_selecteds = state.products_selecteds.filter( product_selected => {
        if(product.name == product_selected.name) {
            product_selected.quantity += 1
            exists = true
        }
        return product_selected
    })
    if(!exists) {
        product.quantity = 1
        state.products_selecteds.push(product)
    }
}


export const remove_product = (state, product) => {
    state.products_selecteds = state.products_selecteds.filter( product_selected => {
        if(product.name == product_selected.name) {
            product_selected.quantity -= 1
        }
        if(product_selected.quantity > 0) {
            return product_selected
        }

    })
}
    