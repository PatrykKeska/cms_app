import { Editor } from '@tiptap/react'
import { FC } from 'react'
import ToolbarButtons from '../../../../layouts/Toolbar/ToolbarButtons'
import DropdownOptions from '../../DropdownOptions'
import Head from '../../Head'
import { getFocusedEditor, getLabel } from '../EditorUtils'

interface Props {
    editor: Editor | null
}

const Toolbar: FC<Props> = ({ editor }): JSX.Element | null => {
    if (!editor) return null
    const options = [
        {
            label: 'Paragraph',
            click: () => getFocusedEditor(editor).setParagraph().run(),
        },
        {
            label: 'Heading 1',
            click: () =>
                getFocusedEditor(editor).toggleHeading({ level: 1 }).run(),
        },
        {
            label: 'Heading 2',
            click: () =>
                getFocusedEditor(editor).toggleHeading({ level: 2 }).run(),
        },
        {
            label: 'Heading 3',
            click: () =>
                getFocusedEditor(editor).toggleHeading({ level: 3 }).run(),
        },
    ]
    return (
        <div className='flex flex-row items-center gap-1 bg-primary p-3 transition dark:bg-primary-dark'>
            <DropdownOptions
                options={options}
                head={<Head text={getLabel(editor)} />}
            />
            <ToolbarButtons editor={editor} />
        </div>
    )
}

export default Toolbar
