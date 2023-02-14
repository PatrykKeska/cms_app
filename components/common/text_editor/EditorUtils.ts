import { Editor } from "@tiptap/core";

const getFocusedEditor = (editor: Editor)=> editor.chain().focus()
    

const getLabel = (editor: Editor): string=> {
    if(editor.isActive('heading', {level: 1})) return 'Heading 1'
    if(editor.isActive('heading', {level: 2})) return 'Heading 2'
    if(editor.isActive('heading', {level: 3})) return 'Heading 3'
    return 'Paragraph'
}

const validURL = (link:string) : string => {
    let url
    try{
        url = new URL(link)
    }catch(e){
        url = new URL('https://' + link); 
    }
    return url.origin

}

export{getFocusedEditor, getLabel, validURL}