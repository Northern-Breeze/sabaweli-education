import { Action, action, Thunk, thunk } from "easy-peasy";

interface UserModel {
  name: string,
  email: string,
  token: string,
  isAuth: boolean,
  setAuth: Action<UserModel, boolean>
  asyncAuth: Thunk<UserModel, string>
}

const User: UserModel = {
  name: '',
  email: '',
  token: '',
  isAuth: false,
  setAuth: action((state) => {
      state.isAuth = true;
  }),
  asyncAuth: thunk((action) => {
    const token = localStorage.getItem('token') || "";
    if (token) {
      action.setAuth(true);
    } else {
      action.setAuth(false);
    }
  })
}

export default User;