import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export enum AuthScreens {
  Splash = 'Splash',
  Login = 'Login',
  Register = 'Register',
  ForgotPassword = 'ForgotPassword',
  SellerHome = 'SellerHome',
  ScannerHome = 'ScannerHome',
}

export enum SellerScreens {
  Home = 'Home',
  EventDetails = 'EventDetails',
  Transaction = 'Transaction',
}
export enum ScannerScreens {
  Home = 'Home',
  EventDetails = 'EventDetails',
  Transaction = 'Transaction',
}

export type AuthParamList = {
  [AuthScreens.Splash]: undefined;
  [AuthScreens.Login]: undefined;
  [AuthScreens.Register]: undefined;
  [AuthScreens.ForgotPassword]: undefined;
  [AuthScreens.SellerHome]: { user: FirebaseFirestoreTypes.DocumentData };
  [AuthScreens.ScannerHome]: { user?: FirebaseFirestoreTypes.DocumentData };
};

export type SellerParamList = {
  [SellerScreens.Home]: { user: FirebaseFirestoreTypes.DocumentData };
  [SellerScreens.EventDetails]:{ name: string };
  [SellerScreens.Transaction]: undefined;
};
export type ScannerParamList = {
  [ScannerScreens.Home]: { user: FirebaseFirestoreTypes.DocumentData };
  [ScannerScreens.EventDetails]: { name: string };
  [ScannerScreens.Transaction]: undefined;
};
