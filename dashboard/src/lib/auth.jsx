import storage from "../utils/storage";


const handleUserResponse = async (data) => {
    const { jwt, user } = data;
    storage.setToken(jwt);
    return user;
}

export const useAuth = () => {
   return {
       token: storage.getToken(),
       user: storage.getToken() != null
   }
}