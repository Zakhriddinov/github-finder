import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();
export const GithubProvider = ({ children }) => {
   const intialState = {
      users: [],
      user: {},
      repos: [],
      loading: true
   }
   const [state, dispatch] = useReducer(githubReducer, intialState);

   const value = {
      ...state,
      dispatch,
   }
   return <GithubContext.Provider value={value}>
      {children}
   </GithubContext.Provider>
}
export default GithubContext