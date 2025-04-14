import { children, JSXElement } from "solid-js"

import './Container.css';

type ContainerProps = {
    children: JSXElement,
    class?: string
}

export default function Container(props: ContainerProps){
    const c = children(() => props.children);
    
    return (
        <div class={"container " + props.class}>
            {c()}
        </div>
    )
}