import { FC, useState } from 'react'
import { BsYoutube } from 'react-icons/bs'
import Button from './Button'

interface Props {
    onSubmit: (link: string) => void
}

const EmbedYoutube: FC<Props> = ({ onSubmit }): JSX.Element => {
    const [isActive, setActive] = useState(false)
    const [url, setUrl] = useState('')

    const handleSubmit = () => {
        if (!url.trim()) return setActive(false)
        onSubmit(url)
        setUrl('')
        setActive(false)
    }

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
                <BsYoutube />
            </Button>
            {isActive && (
                <div className=' absolute top-full right-0 z-50 mt-4'>
                    <div className='flex space-x-1'>
                        <input
                            autoFocus
                            type='text'
                            placeholder='https://youtube.com'
                            className='rounded border-2 border-secondary-dark bg-transparent p-2 text-primary-dark transition focus:border-primary-dark dark:border-primary dark:text-primary'
                            value={url}
                            onChange={({ target }) => setUrl(target.value)}
                        />
                        <button
                            onClick={handleSubmit}
                            className='rounded bg-action px-2 text-primary dark:text-primary-dark'
                        >
                            Embed
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EmbedYoutube
