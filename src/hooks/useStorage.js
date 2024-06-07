import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () =>{
    // buscar os itens salvos
    const getItem = async() => {
        try{
            const passwords =await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        }catch(error){
            console.log("Erro ao buscar",error)
            return[];
        }
    }
    //Salvar um item no storage
    const saveItem = async () =>{
        try {
            let passwords = await getItem(key,value);

            passwords.push()

            await AsyncStorage.setItem (key,JSON.stringify(passwords))
        } catch (error) {
            console.log("ERRO AO SALVAR",error)
        }

    }

    //Remover algo do storage
    const removeItem = async (key,item) => {

        try {
            let passwords = await getItem(key,value);

            let myPasswords = passwords.filter(( ) =>{
                    return(passwords !== item)
            } )

            await AsyncStorage.setItems(key.stringify(myPasswords))
            return myPasswords


        } catch (error) {
            console.log("ERROR AO DELETAR",error)
            
        }
    }

    return{
        getItem,
        saveItem,
        removeItem,
    }

}

export default useStorage;