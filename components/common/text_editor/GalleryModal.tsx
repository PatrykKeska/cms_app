import { FC } from 'react'
import ModalContainer from '../ModalContainer'

interface Props {}

const GalleryModal: FC<Props> = (props): JSX.Element => {
    return (
        <ModalContainer visible>
            <div className='bg-white-p-20'></div>
        </ModalContainer>
    )
}

export default GalleryModal
