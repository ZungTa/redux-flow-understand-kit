import {  createAction } from 'redux-actions';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// export const increment = createAction(INCREMENT);
export const increment = () => {
    console.log('액션 안')

    return {
        type: INCREMENT
    }
}

export const decrement = createAction(DECREMENT);

export default function reducer(state = 0, action) {
    console.log('리듀서 안 action 값: ', action);
    switch(action.type) {
        case INCREMENT:
            if(true){
                console.log('INCREMENT 안 state : ', state)
            }
            return state+1;
        case DECREMENT:
            if(true){
                console.log('DECREMENT 안 state: ', state)
            }
            return state-1;
        default:
            if(true) {
                console.log('default 안 state: ', state)
            }
            return state;
    }
}

// export default handleActions({
//     [INCREMENT]: (state, action) => {console.log('리듀서 안'); state + 1},
//     [DECREMENT]: (state, action) => state - 1
// }, 0);