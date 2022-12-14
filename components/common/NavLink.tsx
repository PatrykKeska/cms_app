import Link from 'next/link'
import { FC } from 'react'
import { IconType } from 'react-icons'
interface Props {
    href: string
    Icon: IconType
    description: string
    isOpen: boolean
}

const NavLink: FC<Props> = ({
    href,
    Icon,
    description,
    isOpen,
}): JSX.Element => {
    return (
        <Link
            className='relative flex flex-row gap-3 overflow-hidden fill-highlight-light p-3 text-xl font-light underline-offset-1 transition-transform duration-200 hover:scale-[0.98] dark:fill-highlight-dark'
            href={href}
        >
            <Icon size={24} />
            {isOpen && (
                <span className='absolute left-12 bottom-3 fill-highlight-light text-xl   font-semibold leading-none dark:fill-highlight-dark'>
                    {description}
                </span>
            )}
        </Link>
    )
}

export default NavLink
