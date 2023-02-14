import BubbleMenu from '@tiptap/extension-bubble-menu'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import Youtube from '@tiptap/extension-youtube'
import { useEditor, EditorContent, getMarkRange, Range } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from 'react'
import EditLink from './Link/EditLink'
import Toolbar from './Toolbar/Toolbar'

const Tiptap = () => {
    const [selectionRange, setSelectionRange] = useState<Range>()
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link.configure({
                autolink: false,
                linkOnPaste: false,
                openOnClick: false,
                HTMLAttributes: { target: '' },
                protocols: ['ftp', 'mailto'],
            }),
            Placeholder.configure({
                placeholder: "Let's create something amazing!",
            }),
            Youtube.configure({
                width: 640,
                height: 320,
                HTMLAttributes: { class: 'mx-auto rounded' },
            }),
        ],
        editorProps: {
            handleClick(view, position, event) {
                const { state } = view
                const range = getMarkRange(
                    state.doc.resolve(position),
                    state.schema.marks.link
                )
                if (range) setSelectionRange(range)
            },
            attributes: {
                class: 'h-full max-w-full mx-auto  prose prose-lg focus:outline-none dark:prose-invert',
            },
        },
    })
    useEffect(() => {
        if (editor && selectionRange) {
            editor.commands.setTextSelection(selectionRange)
        }
    }, [editor, selectionRange])

    return (
        <div className='mx-auto flex max-w-4xl flex-col'>
            <Toolbar editor={editor} />
            <div className='mb-2 h-[1px] w-full bg-secondary-dark dark:bg-secondary-light' />
            {editor ? <EditLink editor={editor} /> : null}
            <EditorContent editor={editor} />
        </div>
    )
}

export default Tiptap
