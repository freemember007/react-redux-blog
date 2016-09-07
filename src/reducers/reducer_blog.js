import {FETCH_BLOGS, FETCH_CATES, POST_BLOG, FILTER_BLOGS, ROOT_URL} from '../constants';
//http://skill.phodal.com/
const initState = {
    blogs: [],
    cates: [],
    filter: '',
    hasNew: false
}

const home = (state = initState, action) => {
    switch (action.type) {
        case FETCH_BLOGS:
            const { blogs } = action;
            return Object.assign({}, state, { blogs });
        case FILTER_BLOGS:
            return Object.assign({}, state, { filter: action.filter });
        case FETCH_CATES:
            const { cates } = action;
            return Object.assign({}, state, { cates });
        case POST_BLOG:
            const { blog } = action;
            console.log('post:',blog);
            return Object.assign({}, state, { blogs: [...blogs, blog] });
        default:
            return state;
    }
}

export default home; 