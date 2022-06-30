import Pagination from '../Pagination'
import Pokemon from '../Pokemon'

import { Pokedex_Container } from './styles'

import PokeLoad from '../../assets/pikachu-running.gif'

const Pokedex = ({ pokemons, loading, setPage, page, totalPages }) => {
    
    const onLeftClickHandler = () => {
        if(page > 0) {
            setPage(page - 1)
        }
    }

    const onRightClickHandler = () => {
        if(page !== totalPages) {
            setPage(page + 1)
        }
    }

    return (
        <Pokedex_Container>
            <div className='pokedex-header'>
                <h2>Pokedex</h2>
                <Pagination 
                    page={page+1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                />
            </div>
            {loading ? (
                <div className='loading'>
                    <p>Carregando...</p>
                    <img src={PokeLoad} alt="" />
                </div>
            ) : (
                <div className='pokedex-grid'>
                    {pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon}/>
                        )
                    })} 
                    
                </div>
            )}
        </Pokedex_Container>
    )
}

export default Pokedex