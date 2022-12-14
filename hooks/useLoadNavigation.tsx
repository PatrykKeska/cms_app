import { useEffect, useState } from 'react'
import { toggleNav } from '../utilities/toggleNav'

const useLoadNavigation = (navRef: any) => {
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        const navState = localStorage.getItem('nav-status')
        if (navState !== null) {
            const newState = JSON.parse(navState)
            setOpen(newState)
            toggleNav(!newState, navRef, setOpen)
        } else {
            localStorage.setItem('nav-status', JSON.stringify(isOpen))
        }
    }, [isOpen, navRef])
    return { isOpen: isOpen, setOpen: setOpen }
}

export { useLoadNavigation }
