import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MainStackParams = {
  BottomTabs: undefined;
  Quiz: undefined;
};

export type AuthStackParams = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

export type QuizStackParams = {
  Main: undefined;
  Results: undefined;
  BottomTabs: undefined;
};

export type OnboardStackParams = {
  Department: undefined;
  Role: undefined;
  PushRequest: undefined;
};

export type DashboardStackParams = {
  Main: undefined;
  Statistics: undefined;
  Quiz: undefined;
  Results: undefined;
  Scoreboard: undefined;
};

export type ExploreStackParams = {
  Main: undefined;
};

export type HelpStackParams = {
  Main: undefined;
};

export type ScoreboardScreenProps = NativeStackScreenProps<
  DashboardStackParams,
  "Scoreboard"
>;

export type DashResultsScreenProps = NativeStackScreenProps<
  DashboardStackParams,
  "Results"
>;

export type QuizScreenProps = NativeStackScreenProps<QuizStackParams, "Main">;

export type ResultsScreenProps = NativeStackScreenProps<
  QuizStackParams,
  "Results"
>;

export type StatisticsScreenProps = NativeStackScreenProps<
  DashboardStackParams,
  "Statistics"
>;

export type DashboardScreenProps = NativeStackScreenProps<
  DashboardStackParams,
  "Main"
>;

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
