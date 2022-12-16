import { FC } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

interface Props {
    text: string
}

const Head: FC<Props> = ({ text }): JSX.Element => {
    return (
        <div className='flex items-center space-x-2 text-primary-dark dark:text-primary'>
            <p>{text}</p>
            <AiFillCaretDown />
        </div>
    )
}

export default Head
