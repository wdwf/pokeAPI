import { Container_Pagination } from './styles'

import SetaEsquerda from '../../assets/seta-esquerda.png'
import SetaDireita from '../../assets/seta-direita.png'

const Pagination = ({page, totalPages, onLeftClick, onRightClick}) => {
    return (
        <Container_Pagination>
            <button onClick={onLeftClick}>
                <img src={SetaEsquerda} alt="" />
            </button>
                <div className='number-pages'>{page} de {totalPages}</div>
            <button onClick={onRightClick}>
            <img src={SetaDireita} alt="" />
            </button>
        </Container_Pagination>
    )
}

export default Pagination