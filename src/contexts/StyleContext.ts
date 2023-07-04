import React from "react";

const StyleContext = React.createContext({ isDark: true, changeTheme: () => { /* implementation */ } });

export const StyleProvider = StyleContext.Provider;
// export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
