import { NextPage } from 'next'
import AdminLayout from '../../layouts/AdminLayout'

interface Props {}

const Admin: NextPage<Props> = () => {
    return (
        <AdminLayout>
            <p>test</p>
        </AdminLayout>
    )
}

export default Admin
