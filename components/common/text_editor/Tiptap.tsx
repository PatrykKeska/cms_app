import Underline from '@tiptap/extension-underline'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar/Toolbar'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [StarterKit, Underline],
        content: '<p>Hello World!</p>',
    })

    return (
        <div className='mx-auto flex max-w-4xl flex-col'>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default Tiptap
