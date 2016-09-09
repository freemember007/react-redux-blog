import axios from 'axios';
import { SIGN_UP, SIGN_IN, ROOT_URL} from '../constants';

//  register
export const signUp = (user) => {
  let url = ROOT_URL + '/user/signUp';
  axios.post(url, user).then(res => {
    user = res.data;
  });

  return {
    type: SIGN_UP,
    user,
  }
}

const LOGIN_USER = ROOT_URL + '/user/signIn';


//  login
export const signIn = user => {
  return (dispatch, getState) => {
    // const cache = sessionStorage.getItem(LOGIN_USER);
    axios.post(LOGIN_USER, user).then(res => {
      dispatch(handleSignIn(res.data.user));
      sessionStorage.setItem(LOGIN_USER, JSON.stringify(res.data.user));
      sessionStorage.setItem('token',res.data.token);
    });
    // if (cache) {
    //   console.log('fromcache');
    //   dispatch(handleSignIn(JSON.parse(cache)));
    // } else {
    //   console.log('fromfetch');
    //   axios.post(LOGIN_USER, user).then(res => {
    //     dispatch(handleSignIn(res.data));
    //     sessionStorage.setItem(LOGIN_USER,JSON.stringify(res.data));
    //   });
    // }
  }
}

export const checkLogin = () => {
  const token = sessionStorage.getItem('token');
  let url = ROOT_URL + '/user/check?token=';
  if (token) {
    url += token;
  }
  return dispatch => {
    axios.get(url).then(res => {
      if (!res.data) return;
      dispatch(handleSignIn(res.data));
    })
  }
}

const handleSignIn = user => ({
  type: SIGN_IN,
  user,
})

