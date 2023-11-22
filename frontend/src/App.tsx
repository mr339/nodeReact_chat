import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);
  console.log(user, "asdfdsf");

  if (!user) {
    return <AuthPage onAuth={(user: any) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
