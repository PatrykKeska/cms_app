import { FC } from 'react'
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from 'react-icons/bs'
import { toggleNav } from '../../utilities/toggleNav'

interface Props {
    isOpen: boolean
    navRef: any
    setOpen: (s: boolean) => void
}

const NavToggleButton: FC<Props> = ({
    isOpen,
    navRef,
    setOpen,
}): JSX.Element => {
    return (
        <button
            onClick={() => toggleNav(isOpen, navRef, setOpen)}
            className='w-8 self-end transition-all duration-500 ease-linear'
        >
            {isOpen ? (
                <BsFillArrowLeftCircleFill size={25} />
            ) : (
                <BsFillArrowRightCircleFill size={25} />
            )}
        </button>
    )
}

export default NavToggleButton
