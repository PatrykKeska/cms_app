import { NextPage } from 'next'
import AdminNav from '../../layouts/AdminNav'

interface Props {}

const Admin: NextPage<Props> = () => {
    return (
        <section>
            <AdminNav />
        </section>
    )
}

export default Admin
