import { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
    visible?: boolean
    onClose?(): void
}

const ModalContainer: FC<Props> = ({
    children,
    onClose,
    visible,
}): JSX.Element | null => {
    if (!visible) return null
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-primary bg-opacity-5 backdrop-blur-[2px] dark:bg-primary-dark dark:bg-opacity-5'>
            {children}
        </div>
    )
}

export default ModalContainer
