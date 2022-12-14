import { useRef } from 'react'
import NavLink from '../components/common/NavLink'
import { linksToRender } from '../utilities/linksToRender'
import NavToggleButton from '../components/common/NavToggleButton'
import { useLoadNavigation } from '../hooks/useLoadNavigation'

const AdminNav = () => {
    const navRef = useRef<HTMLElement>(null)
    const { isOpen, setOpen } = useLoadNavigation(navRef)

    return (
        <nav
            ref={navRef}
            className='sticky top-0 h-screen w-12 flex-col overflow-hidden bg-secondary-light shadow-sm transition-width ease-in dark:bg-secondary-dark'
        >
            <ul className=' flex h-full flex-col gap-5'>
                {linksToRender.map((item) => (
                    <li key={item.href}>
                        <NavLink
                            href={item.href}
                            description={item.description}
                            Icon={item.Icon}
                            isOpen={isOpen}
                        />
                    </li>
                ))}

                <NavToggleButton
                    isOpen={isOpen}
                    navRef={navRef}
                    setOpen={setOpen}
                />
            </ul>
        </nav>
    )
}

export default AdminNav
