import { FC, useState } from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import Button from '../Toolbar/Button'
import LinkForm, { LinkOption } from './LinkForm'

interface Props {
    onSubmit: (link: LinkOption) => void
}

const InsertLink: FC<Props> = ({ onSubmit }): JSX.Element => {
    const [isActive, setActive] = useState(false)

    return (
        <div
            onKeyDown={({ key }) =>
                key === 'Escape' ? setActive(false) : null
            }
            className='relative'
        >
            <Button
                active={isActive}
                onClick={() => setActive(!isActive)}
            >
                <BsLink45Deg />
            </Button>

            <div className=' absolute top-full right-0 z-50 mt-4'>
                <LinkForm
                    initialState={{ url: '', openInNewTab: false }}
                    isActive={isActive}
                    closeForm={setActive}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    )
}

export default InsertLink
