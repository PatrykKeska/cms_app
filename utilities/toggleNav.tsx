const toggleNav = (
    state: boolean,
    navRef: any,
    setOpen: (s: boolean) => void
) => {
    const currentNav = navRef.current
    if (!currentNav) return
    const { classList } = currentNav
    if (!state) {
        classList.remove('w-12')
        classList.add('w-60')
    } else if (state) {
        classList.remove('w-60')
        classList.add('w-12')
    }
    setOpen(!state)
    localStorage.setItem('nav-status', JSON.stringify(!state))
}

export { toggleNav }
