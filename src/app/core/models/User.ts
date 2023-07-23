export interface IUser {
  email: string;
  password: string;
  username: string;
  age: number;
  avatar: string;
  about: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
