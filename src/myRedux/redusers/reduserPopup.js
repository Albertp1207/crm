const popup = (state = false, action) => {
    switch (action.type) {
        case 'TURN_ON':
            return true;

        case 'TURN_OF':
            return false;
          
        default:
            return state;
    }
    
}

export default popup;