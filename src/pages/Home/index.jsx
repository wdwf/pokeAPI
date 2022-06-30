import { useEffect, useState } from 'react'
import { getPokemonData, getPokemons, searchPokemon } from '../../api'
import { FavoriteProvider } from '../../context/favoritesContext'

import Pokedex from '../../components/Pokedex'
import Searchbar from '../../components/Searchbar' 
import Navbar from '../../components/Navbar'

import PokeQuestion from '../../assets/pikachugif.gif'

import { Home_Container, Header_Wrapper } from './styles'

const favoritesKey = "f"

export default function Home() {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0) 
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [listPokes, setListPokes] = useState([])
    const [favorites, setFavorites] = useState([])

    const itensPerPage = 25

    const fetchPokemons = async () => {
        try {
            setLoading(true)
            setNotFound(false)
            const data = await getPokemons(itensPerPage, itensPerPage * page)
            const promises = data.results.map(async ({url}) => {
                return await getPokemonData(url)
            })

            const results = await Promise.all(promises);
            setListPokes(results)
            setLoading(false)
            setTotalPages(Math.ceil(data.count / itensPerPage))
        } catch (error) {
            console.log(error)
        }
    }

    const loadFavoritePokemons = () => {
        const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
        setFavorites(pokemons)
    }

    const updateFavoritePokemons = (name) => {
        const updateFavorites = [...favorites]
        
        //Verifica se ja tem esse fav na lista
        const favoriteIndex = favorites.indexOf(name)
        
        if(favoriteIndex >= 0) {
            updateFavorites.splice(favoriteIndex, 1)
        } else {
            updateFavorites.push(name)
        }
        window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites))
        setFavorites(updateFavorites)
    }

    const onSearchHandler = async (pokemon) => {
        if(!pokemon) {
            return fetchPokemons()
        }

        setLoading(true)
        setNotFound(false)
        const result = await searchPokemon(pokemon)
        console.log(result)
        if(!result) {
            setNotFound(true)
        } else {
            setListPokes([result])
            setPage(0)
            setTotalPages(1)
        }
        setLoading(false)
    }

    useEffect(() => {
        loadFavoritePokemons()
    }, [])

    useEffect(() => {
        fetchPokemons();
    }, [page])

    return (
        <FavoriteProvider
            value={{
                favoritePokemons: favorites, 
                updateFavoritePokemons: updateFavoritePokemons
            }}
        >
            
            <Home_Container>
                <Header_Wrapper>
                    <Navbar/>
                    <Searchbar onSearch={onSearchHandler}/>
                </Header_Wrapper>
                {notFound ? (
                    <div className='not-found-text'>
                        <span>Pokemon não localizado!</span>
                        <div>
                            <img src={PokeQuestion} alt="" />
                        </div>
                    </div>
                ) : (
                    <Pokedex 
                        pokemons={ listPokes }
                        loading={loading}
                        page={page}
                        setPage={setPage}
                        totalPages={totalPages}
                    />
                )}
            </Home_Container>
        </FavoriteProvider>
    )
}