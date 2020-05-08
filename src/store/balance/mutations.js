export const add_debit = (state, value) => {
    if(state.balance - (state.debit + value) >= 0) {
        state.debit = state.debit + value;
    }
    else {
        alert('Insufficient balance');
    }
    
}

export const remove_debit = (state, value) => {
    state.debit = state.debit - value
}