import { createContext, useContext } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    return(
        <AuthContext.Provider
            value={{name: "Teste", email: "teste@teste.com"}}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = ( ) => {
    const context = useContext(AuthContext)

    return context;
}

export { AuthProvider, useAuth } 