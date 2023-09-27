import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "jotai";
import RootStack from "./src/navigation/RootStack";

export default function App() {
  return (
    <Provider>
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    </Provider>
  );
}
