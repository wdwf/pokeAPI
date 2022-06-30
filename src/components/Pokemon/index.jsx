import { useContext } from 'react';
import FavoriteContext from '../../context/favoritesContext'
import { Pokemon_Container } from './styles';

const Pokemon = ({pokemon}) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }

    const heart = favoritePokemons.includes(pokemon.name) ? "💖" : "🖤"
    
    return (
        <Pokemon_Container>
            <div className="pokemon-image-container">
                <img className="pokemon-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className="pokemon-type-text">{type.type.name}</div>
                            )
                        })}
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>{heart}</button>
                </div>
            </div>
        </Pokemon_Container>
    );
};

export default Pokemon;
