import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [ data, setData ] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token });

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovies:token", token);

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    const signOut = () => {
        localStorage.removeItem("@rocketmovies:user");
        localStorage.removeItem("@rocketmovies:token");

        setData({})
    }

    async function updateProfile({user}) {
        try {
            await api.put("/users", user)
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

            setData({ user, token: data.token})
            alert("Perfil atualizado!")

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível atualizar o perfil")
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketmovies:user");
        const token = localStorage.getItem("@rocketmovies:token");

        if ( user && token ) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setData({ token, user: JSON.stringify(user)})
        }
    }, [])

    return(
        <AuthContext.Provider
            value={{ 
                signIn, 
                user: data.user, 
                updateProfile,
                signOut,
            }}
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