const initalState = {
    message: 'See My Code'
}

const reducer = (state = initalState, action) => {
    const newState = {...state}

    if (action.type === 'Message change') {
        newState.message = 'Thankyou';
    }
    return newState
};

export default reducer