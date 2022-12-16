import { NextPage } from 'next'
import Tiptap from '../../../components/common/text_editor/Tiptap'

interface Props {}

const create: NextPage<Props> = () => {
    return (
        <div>
            <Tiptap />
        </div>
    )
}

export default create
