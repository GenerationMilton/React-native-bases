// import { BasicTypes } from "./typescript/BasicTypes";
// import { ObjectLiterals } from "./typescript/ObjectLiterals";
// import { BasicFunctions } from "./typescript/BasicFunctions";
// import { Counter } from "./components/Counter";

// import { LoginPage } from "./components/LoginPage";
// import { UserPage } from "./components/UserPage";
import { FormsPage } from "./components/FormsPage";

import { AuthProvider as AuthProviderFromContext } from "./context/AuthContext";
import type { ComponentType, PropsWithChildren } from "react";

const AuthProvider = AuthProviderFromContext as ComponentType<
  PropsWithChildren<{}>
>;

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5">React + TS</h1>
        {/* <ObjectLiterals /> */}
        {/*<BasicTypes /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UserPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  );
}

export default App;
