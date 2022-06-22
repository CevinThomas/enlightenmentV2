import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParams = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

export type OnboardStackParams = {
  Department: undefined;
  Role: undefined;
  PushRequest: undefined;
};

export type DashboardStackParams = {
  Main: undefined;
};

export type ExploreStackParams = {
  Main: undefined;
};

export type HelpStackParams = {
  Main: undefined;
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
export type DepartmentScreenProps = NativeStackScreenProps<
  OnboardStackParams,
  "Department"
>;
export type RoleScreenProps = NativeStackScreenProps<
  OnboardStackParams,
  "Role"
>;

export type PushRequestScreenProps = NativeStackScreenProps<
  OnboardStackParams,
  "PushRequest"
>;
