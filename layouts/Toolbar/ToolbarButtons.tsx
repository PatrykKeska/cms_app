import { FC } from 'react'
import Button from '../../components/common/text_editor/Toolbar/Button'
import {
    BsTypeBold,
    BsTypeStrikethrough,
    BsBraces,
    BsCode,
    BsListOl,
    BsListUl,
    BsTypeUnderline,
    BsImageFill,
    BsTypeItalic,
    BsLink45Deg,
    BsYoutube,
} from 'react-icons/bs'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { Editor } from '@tiptap/core'
import { getFocusedEditor } from '../../components/common/text_editor/EditorUtils'
import InsertLink from '../../components/common/text_editor/Link/InsertLink'
import { LinkOption } from '../../components/common/text_editor/Link/LinkForm'
interface Props {
    editor: Editor
}

const ToolbarButtons: FC<Props> = ({ editor }): JSX.Element => {
    const handleLinkSubmit = ({ url, openInNewTab }: LinkOption) => {
        const { commands } = editor
        if (openInNewTab) {
            commands.setLink({ href: `${url}`, target: '_blank' })
        } else {
            commands.setLink({ href: `${url}` })
        }
    }

    return (
        <>
            <div className='h- mx-3 h-6 w-[1px] border-r-2 bg-secondary-dark dark:bg-secondary-light' />
            <Button
                active={editor.isActive('bold')}
                onClick={() => getFocusedEditor(editor).toggleBold().run()}
            >
                <BsTypeBold />
            </Button>

            <Button
                active={editor.isActive('italic')}
                onClick={() => getFocusedEditor(editor).toggleItalic().run()}
            >
                <BsTypeItalic />
            </Button>

            <Button
                active={editor.isActive('underline')}
                onClick={() => editor.commands.toggleUnderline()}
            >
                <BsTypeUnderline />
            </Button>

            <Button
                active={editor.isActive('strike')}
                onClick={() => getFocusedEditor(editor).toggleStrike().run()}
            >
                <BsTypeStrikethrough />
            </Button>

            <div className='h- mx-3 h-6 w-[1px] border-r-2 bg-secondary-dark dark:bg-secondary-light' />
            <Button
                active={editor.isActive('blockquote')}
                onClick={() =>
                    getFocusedEditor(editor).toggleBlockquote().run()
                }
            >
                <RiDoubleQuotesL />
            </Button>

            <Button
                active={editor.isActive('code')}
                onClick={() => getFocusedEditor(editor).toggleCode().run()}
            >
                <BsCode />
            </Button>

            <Button
                active={editor.isActive('codeBlock')}
                onClick={() => getFocusedEditor(editor).toggleCodeBlock().run()}
            >
                <BsBraces />
            </Button>

            <InsertLink onSubmit={handleLinkSubmit} />

            <Button
                active={editor.isActive('orderedList')}
                onClick={() =>
                    getFocusedEditor(editor).toggleOrderedList().run()
                }
            >
                <BsListOl />
            </Button>

            <Button
                active={editor.isActive('bulletList')}
                onClick={() =>
                    getFocusedEditor(editor).toggleBulletList().run()
                }
            >
                <BsListUl />
            </Button>
            <div className='h- mx-3 h-6 w-[1px] border-r-2 bg-secondary-dark dark:bg-secondary-light' />
            <Button>
                <BsImageFill />
            </Button>

            <Button>
                <BsYoutube />
            </Button>
        </>
    )
}

export default ToolbarButtons
