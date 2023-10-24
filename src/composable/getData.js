
import axios from "axios"
import { ref } from "vue"

export const useGetData = () =>{
    
    const data = ref(null)
    const loading = ref(true)
    const myError = ref('')
    const getData = async (url) =>{
        try
        { 
          const result = await axios.get(url)
          data.value = result.data 
        }catch(error) {
            console.error(error)
            myError.value = "Error de Servidor" 
        }finally{ loading.value = false }
    }

    return {
        getData,
        data,
        loading,
        myError
    }
}