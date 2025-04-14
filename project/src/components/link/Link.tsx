import { children, JSXElement } from "solid-js"

import './Link.css';
import { A } from "@solidjs/router";

type LinkProps = {
    children: JSXElement,
    href: string,
    class?: string,
}

export default function Link(props: LinkProps){
    const c = children(() => props.children);
    
    return (
        <A href={props.href} class={"link " + props.class}>
            {c()}
        </A>
    )
}