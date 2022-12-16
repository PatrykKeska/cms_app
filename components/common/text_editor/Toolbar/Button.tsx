import classNames from 'classnames'
import { FC, MouseEventHandler, ReactNode, useCallback } from 'react'

interface Props {
    children: ReactNode
    active?: boolean
    disable?: boolean
    onMouseDown?: MouseEventHandler<HTMLButtonElement>
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<Props> = ({
    children,
    active,
    disable,
    onClick,
    onMouseDown,
}): JSX.Element => {
    const getActiveStyle = useCallback((): string => {
        if (active) {
            return 'dark:bg-primary dark:text-primary-dark bg-primary-dark text-primary'
        } else return 'text-secondary-light bg-secondary-dark'
    }, [active])
    const commonClasses =
        'p-2 rounded text-lg hover:scale-110 hover:shadow-md transition'
    return (
        <button
            type='button'
            onClick={onClick}
            onMouseDown={onMouseDown}
            className={classNames(commonClasses, getActiveStyle())}
            disabled={disable}
        >
            {children}
        </button>
    )
}

export default Button
