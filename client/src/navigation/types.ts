import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParams = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

export type WelcomeScreenProps = NativeStackScreenProps<
  AuthStackParams,
  "Welcome"
>;

export type LoginScreenProps = NativeStackScreenProps<AuthStackParams, "Login">;
export type RegisterScreenProps = NativeStackScreenProps<
  AuthStackParams,
  "Register"
>;
