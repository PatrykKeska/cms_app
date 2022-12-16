import { FC, ReactNode, useState } from 'react'

interface Props {
    options: { label: string; click(): void }[]
    head: ReactNode
}

const DropdownOptions: FC<Props> = ({ head, options }): JSX.Element => {
    const [showOptions, setShowOptions] = useState(false)
    return (
        <button
            onClick={() => setShowOptions(!showOptions)}
            onBlur={() => setShowOptions(false)}
            className='relative mr-2'
        >
            {head}
            {showOptions && (
                <div className='absolute top-full right-2 z-10 mt-4 min-w-max rounded border-2 border-primary-dark bg-primary text-left dark:border-primary dark:bg-primary-dark'>
                    <ul className='space-y-3 p-3'>
                        {options.map(({ label, click }) => (
                            <li
                                onClick={click}
                                key={label}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </button>
    )
}

export default DropdownOptions
