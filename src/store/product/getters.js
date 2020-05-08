export const balance_br = (state) => {
    let total = state.balance - state.debit
    return total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}