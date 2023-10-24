import {defineStore} from 'pinia'
import {ref} from 'vue'


export const useFavoritoStore = defineStore('favorito',()=>{
    
    const favoritos = ref([])
    
    if(localStorage.getItem('favorito')){ favoritos.value = JSON.parse(localStorage.getItem('favorito'))}

    const addPokemmon = (pokemon) => {
        favoritos.value.push(pokemon)
        localStorage.setItem('favorito',JSON.stringify(favoritos.value))
    }
    
    const removePokemmon = (id) => {
        favoritos.value = favoritos.value.filter(poke => poke.id !== id)
        localStorage.setItem('favorito',JSON.stringify(favoritos.value))
    }    

    const isExistPokemmon = (nombre) => favoritos.value.find(poke => poke.name === nombre)

    return{
       favoritos,
       addPokemmon,
       removePokemmon,
       isExistPokemmon
       
    }
})