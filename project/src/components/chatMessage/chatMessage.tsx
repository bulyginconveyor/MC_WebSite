import { children, JSXElement, Match, Switch } from "solid-js"

import './chatMessage.css';

export enum OrientationMessage {
    left,
    right
}

type ChatMessageProps = {
    children: JSXElement,
    orientation: OrientationMessage
}

export default function ChatMessage(props: ChatMessageProps){

    const c = children(() => props.children);
    
    return (
        <Switch>
            <Match when={props.orientation === OrientationMessage.right}>
                <div class="right_message">
                    {c()}
                </div>
            </Match>
            <Match when={props.orientation === OrientationMessage.left}>
                <div class="left_message">
                    {c()}
                </div>
            </Match>
        </Switch>
        
    )
}