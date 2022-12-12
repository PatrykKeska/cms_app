import { NextPage } from 'next'
import AdminNav from '../../components/common/AdminNav'

interface Props {}

const Admin: NextPage<Props> = () => {
    return (
        <section>
            <AdminNav />
        </section>
    )
}

export default Admin
