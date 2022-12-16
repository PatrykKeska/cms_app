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
interface Props {
    editor: Editor
}

const ToolbarButtons: FC<Props> = ({ editor }): JSX.Element => {
    return (
        <>
            <Button onClick={() => getFocusedEditor(editor).toggleBold().run()}>
                <BsTypeBold />
            </Button>

            <Button
                onClick={() => getFocusedEditor(editor).toggleItalic().run()}
            >
                <BsTypeItalic />
            </Button>

            <Button onClick={() => editor.commands.toggleUnderline()}>
                <BsTypeUnderline />
            </Button>

            <Button
                onClick={() => getFocusedEditor(editor).toggleStrike().run()}
            >
                <BsTypeStrikethrough />
            </Button>

            <div className='h- mx-3 h-6 w-[1px] border-r-2 bg-secondary-dark dark:bg-secondary-light' />
            <Button
                onClick={() =>
                    getFocusedEditor(editor).toggleBlockquote().run()
                }
            >
                <RiDoubleQuotesL />
            </Button>

            <Button onClick={() => getFocusedEditor(editor).toggleCode().run()}>
                <BsCode />
            </Button>

            <Button
                onClick={() => getFocusedEditor(editor).toggleCodeBlock().run()}
            >
                <BsBraces />
            </Button>

            <Button>
                <BsLink45Deg />
            </Button>

            <Button
                onClick={() =>
                    getFocusedEditor(editor).toggleOrderedList().run()
                }
            >
                <BsListOl />
            </Button>

            <Button
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
