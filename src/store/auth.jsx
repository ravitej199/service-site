import { createContext, useContext, useState, useEffect} from "react";

export const AuthContext = createContext();


const AuthProvider = ({children})=>{

    const[token,setToken] = useState(localStorage.getItem("token"));
    const[user,setUser] = useState();
    const[services,setServices]  = useState();
    const authorizationToken = `Bearer ${token}`;
    const storetokenLS = (serverToken)=>{
        return localStorage.setItem("token",serverToken);

    }
    let isLoggedIn = !!token;
    console.log(isLoggedIn);

    const LogoutUser = ()=>{
         setToken("");
         return localStorage.removeItem("token");
    };


    // get currently logged in user data

    const userAuthentication = async () =>{
        console.log(token);
        try{
            const response = await fetch("http://localhost:3000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            });

            if(response.ok){
                const data = await response.json();
                setUser(data.userData);

            }
        }catch(error){
            console.log("Error fetching user data");
        }
    }

    const getServices = async () =>{
        try{
            const response = await fetch("http://localhost:3000/api/data/service",{
                method:"GET",
            });

            if(response.ok){
                const data = await response.json();
                setServices(data);

            }
        }catch(error){
            console.log("Error fetching services data");
        }
    }

    useEffect(()=>{

        getServices();
    },[]);

    useEffect(()=>{
        userAuthentication();
    },[]);

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem("token");
        if (tokenFromStorage) {
            setToken(tokenFromStorage);
        }
    }, []);
    
    return ( <AuthContext.Provider value={{isLoggedIn,storetokenLS,LogoutUser,user,services,authorizationToken}}>
        {children}
    </AuthContext.Provider>
    );
}

export const useAuth = () =>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider");
    }

    return authContextValue;

};



export default AuthProvider;