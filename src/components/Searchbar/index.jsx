import { useState, useContext } from 'react'
import { Searchbar_Container } from './styles';
import FavoriteContext from '../../context/favoritesContext';

import Lupa from '../../assets/Lupa.png'
import Pokebola from '../../assets/poke.png'

const Searchbar = ({ onSearch }) => {
    const [search, setSearch] = useState("")
    const { favoritePokemons } = useContext(FavoriteContext)

    const onChangeHandler = (e) => {
        setSearch(e.target.value)

        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }


    return (
        <Searchbar_Container>
            <div className='search-wrapper'>
                <div className='searchbar-btn'>
                    <button onClick={onButtonClickHandler}>
                        <img src={Lupa} alt="" />
                    </button>
                </div>
                <div className="searchbar">
                    <input type="text" placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
                </div>
            </div>

            <div className="pokemons-likes-wrapper">
                <img src={Pokebola} alt="" />
                <div className="pokemons-likes">Pokemons favoritados: {favoritePokemons.length}</div>
            </div> 
            
        </Searchbar_Container>
    );
};

export default Searchbar;
