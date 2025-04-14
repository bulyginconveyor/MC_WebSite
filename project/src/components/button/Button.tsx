import { children, JSXElement, Match, mergeProps, Switch } from "solid-js"

import './Button.css';

enum TypeButton {
    classic,
    thin,
    verythin,
    custom
}

export enum TypeThin {
    classic,
    thin,
    full_thin,
}

type ButtonProps = {
    children: JSXElement,
    "class"?: string,
    "type"?: TypeButton,
    thin?: TypeThin
}

export default function Button(props: ButtonProps){
    const finalProps = mergeProps({"type": TypeButton.classic, thin: TypeThin.classic}, props);

    return (
        <Switch fallback={<div>А тут должна быть кнопка👀</div>}>
            <Match when={finalProps.type === TypeButton.custom}>
                <CustomButton {...finalProps}/>
            </Match>
            <Match when={finalProps.type === TypeButton.classic}>
                <ClassicButton {...finalProps}/>
            </Match>
        </Switch>
    )
}

function CustomButton(props: ButtonProps){
    const c = children(() => props.children);
    const thin = () => thinClass(props.thin!);

    return (
        <button class={props.class + " " + thin()}>
            {c()}
        </button>
    )
}

function ClassicButton(props: ButtonProps){
    const c = children(() => props.children);
    const thin = () => thinClass(props.thin!);
    
    return (
        <button class={"group classic " + thin() + props.class}>
            {c()}
            <div class={"group-hover:bg-black group-focus:border-2 " + thin() + props.class}>
            {c()}
            </div>
        </button>
    )
}

function thinClass(thin: TypeThin): string{
    var thinResult: string = "";
    switch(thin){
        case TypeThin.classic:
            thinResult = "classic_h ";
            break;
        case TypeThin.thin:
            thinResult = "thin_h ";
            break;
        case TypeThin.full_thin:
            thinResult = "full-thin_h ";
            break;
    }

    return thinResult;
}