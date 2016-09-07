import { SIGN_UP, SIGN_IN } from '../constants';

export const loginUser = (state = {}, action) => {
    switch (action.type) {
        case SIGN_UP:
            let { user } = action;
            return user;
        case SIGN_IN:
            return action.user;
        default:
            return state;
    }
}

export default loginUser;