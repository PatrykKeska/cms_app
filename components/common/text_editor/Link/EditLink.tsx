import { FC, useCallback, useState } from 'react'
import { BsBoxArrowUpRight, BsPencilSquare } from 'react-icons/bs'
import { BiUnlink } from 'react-icons/bi'
import { Editor, BubbleMenu } from '@tiptap/react'
import LinkForm, { LinkOption } from './LinkForm'
import { link } from 'fs'

interface Props {
    editor: Editor
}

const EditLink: FC<Props> = ({ editor }): JSX.Element => {
    const [showEditForm, setShowEditForm] = useState(false)

    const handleOnLinkOpenClick = useCallback(() => {
        const { href } = editor.getAttributes('link')
        if (href) {
            window.open(href, '_blank')
        }
    }, [editor])

    const handleLinkEditClick = () => {
        setShowEditForm(true)
    }

    const handleUnlinkClick = () => {
        editor.commands.unsetLink()
    }

    const handleSubmit = ({ url, openInNewTab }: LinkOption) => {
        editor.chain().focus().unsetLink()
        editor
            .chain()
            .focus()
            .unsetLink()
            .setLink({ href: url, target: openInNewTab ? '_blank' : '' })
            .run()
        setShowEditForm(false)
    }

    const getInitialState = useCallback(() => {
        const { href, target } = editor.getAttributes('link')
        return { url: href, openInNewTab: target ? true : false }
    }, [editor])

    return (
        <BubbleMenu
            shouldShow={({ editor }) => editor.isActive('link')}
            editor={editor}
            tippyOptions={{
                onHide: () => {
                    setShowEditForm(false)
                },
            }}
        >
            <LinkForm
                isActive={showEditForm}
                onSubmit={handleSubmit}
                initialState={getInitialState()}
            />
            {!showEditForm && (
                <div className='z-50 flex items-center space-x-6 rounded bg-primary p-3 text-primary-dark shadow-md shadow-secondary-dark dark:bg-primary-dark dark:text-primary'>
                    <button onClick={handleOnLinkOpenClick}>
                        <BsBoxArrowUpRight />
                    </button>

                    <button onClick={handleLinkEditClick}>
                        <BsPencilSquare />
                    </button>

                    <button onClick={handleUnlinkClick}>
                        <BiUnlink />
                    </button>
                </div>
            )}
        </BubbleMenu>
    )
}

export default EditLink
