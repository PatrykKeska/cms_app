import Underline from '@tiptap/extension-underline'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar/Toolbar'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [StarterKit, Underline],
        editorProps: {
            attributes: {
                class: 'h-full max-w-full mx-auto  prose prose-lg focus:outline-none dark:prose-invert',
            },
        },
    })

    return (
        <div className='mx-auto flex max-w-4xl flex-col'>
            <Toolbar editor={editor} />
            <div className='h-[1px] w-full bg-secondary-dark dark:bg-secondary-light' />
            <EditorContent editor={editor} />
        </div>
    )
}

export default Tiptap
