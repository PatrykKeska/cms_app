import { url } from 'inspector'
import { FC, useEffect, useState } from 'react'
import { validURL } from '../EditorUtils'

interface Props {
    isActive: boolean
    closeForm?: (arg: boolean) => void
    onSubmit: (link: LinkOption) => void
    initialState: LinkOption
}
export interface LinkOption {
    url: string
    openInNewTab: boolean
}

const LinkForm: FC<Props> = ({
    isActive,
    closeForm,
    onSubmit,
    initialState,
}): JSX.Element | null => {
    const [link, setLink] = useState<LinkOption>({
        url: '',
        openInNewTab: false,
    })
    const [err, setErr] = useState(false)

    const handleSubmit = () => {
        if (!link.url.trim()) return
        onSubmit({ ...link, url: validURL(link.url) })
        setLink({ url: '', openInNewTab: false })
        if (closeForm) closeForm(false)
    }

    useEffect(() => {
        if (initialState) {
            setLink({ ...initialState })
        }
    }, [initialState])
    return isActive ? (
        <div className='rounded bg-primary p-2 shadow-sm shadow-secondary-dark dark:bg-primary-dark'>
            <input
                autoFocus
                type='text'
                placeholder='https://example.com'
                className='rounded border-2 border-secondary-dark bg-transparent p-2 text-primary-dark transition focus:border-primary-dark dark:border-primary dark:text-primary'
                value={link.url}
                onChange={({ target }) =>
                    setLink({ ...link, url: target.value })
                }
            />

            <div className='flex flex-row items-center gap-2 py-2'>
                <input
                    type='checkbox'
                    id='open-in-new-tab'
                    checked={link.openInNewTab}
                    onChange={() =>
                        setLink({ ...link, openInNewTab: !link.openInNewTab })
                    }
                />
                <label htmlFor='open-in-new-tab'>Open in new tab</label>
                <button
                    onClick={handleSubmit}
                    className='rounded bg-action px-2 py-1 text-primary dark:text-primary-dark'
                >
                    Apply
                </button>
            </div>
        </div>
    ) : null
}

export default LinkForm
