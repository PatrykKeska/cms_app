import Link from 'next/link'
import { FC, ReactNode } from 'react'
import AdminNav from './AdminNav'
import { AiOutlineFileAdd } from 'react-icons/ai'

interface Props {
    children: ReactNode
}

const AdminLayout: FC<Props> = ({ children }): JSX.Element => {
    return (
        <section className='flex flex-row'>
            <AdminNav />
            <div className='flex flex-1 p-5'>{children}</div>
            <Link
                className='fixed right-10 bottom-10 z-10 rounded-full bg-secondary-dark p-2 text-primary shadow-sm transition hover:scale-90 dark:bg-secondary-light dark:text-primary-dark'
                href='admin/post/create'
            >
                <AiOutlineFileAdd size={25} />
            </Link>
        </section>
    )
}

export default AdminLayout
