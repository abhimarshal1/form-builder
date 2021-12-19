import React from "react";

// Components
import GlobalStyle from "components/GlobalStyle";

// Providers
import { StoreProvider } from "providers/StoreProvider";

// Containers
import Playground from "containers/Playground";

const App = () => {
  return (
    <div className="App pb-4">
      <GlobalStyle />
      <StoreProvider>
        <Playground />
      </StoreProvider>
    </div>
  );
};

export default App;
