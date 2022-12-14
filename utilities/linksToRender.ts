import {
    AiOutlineDashboard,
    AiOutlineContainer,
    AiOutlineTeam,
    AiOutlineMail,
} from 'react-icons/ai'
import { IconType } from 'react-icons'
import { CodeLogo } from '../assets/icons/code_logo'

interface LinkInterface {
    description: string
    href: string
    Icon: IconType
}

const linksToRender = [
    {
        description: 'Admin',
        href: '/admin',
        Icon: CodeLogo,
    },
    {
        description: 'Dashboard',
        href: '/admin/dashboard',
        Icon: AiOutlineDashboard,
    },
    {
        description: 'Posts',
        href: '/admin/posts',
        Icon: AiOutlineContainer,
    },
    {
        description: 'Users',
        href: '/admin/users',
        Icon: AiOutlineTeam,
    },
    {
        description: 'Comments',
        href: '/admin/comments',
        Icon: AiOutlineMail,
    },
    ] as LinkInterface[];



    export {linksToRender}