export interface ReduxState {
  login: string;
  password: string;
  isLogin: boolean;
}

export type Action =
  | {
      type: "INPUT";
      data: {
        name: "login" | "password";
        value: string;
      };
    }
  | {
      type: "AUTH"
    };
