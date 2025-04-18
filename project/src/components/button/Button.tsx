import { children, JSXElement, Match, mergeProps, Switch } from "solid-js"

import './Button.css';

export enum TypeThin {
    classic,
    thin,
    full_thin,
}

type ButtonProps = {
    children: JSXElement,
    "class"?: string,
    thin?: TypeThin
    dark?: boolean
}

export default function Button(props: ButtonProps){
    const finalProps = mergeProps({thin: TypeThin.classic, dark: false}, props);

    return (
        <Switch fallback={<div>А тут должна быть кнопка👀</div>}>
            <Match when={finalProps.dark === false}>
                <LightButton {...finalProps}/>
            </Match>
            <Match when={finalProps.dark === true}>
                <DarkButton {...finalProps}/>
            </Match>
        </Switch>
    )
}

function LightButton(props: ButtonProps){
    const c = children(() => props.children);
    const thin = () => thinClass(props.thin!);
    
    return (
        <button class={"group " + thin().body + props.class}>
            <div class={"bg-white light_btn " + thin().content + props.class}>
                {c()}
            </div>
            <div class={"group-hover:bg-black group-focus:border-2 light_btn " + thin().shadow + props.class}>
                {c()}
            </div>
        </button>
    )
}

function DarkButton(props: ButtonProps){
    const c = children(() => props.children);
    const thin = () => thinClass(props.thin!);
    
    return (
        <button class={"group " + thin().body + props.class}>
            <div class={"bg-black dark_btn " + thin().content + props.class}>
                {c()}
            </div>
            <div class={"group-hover:bg-white group-focus:border-2 dark_btn " + thin().shadow + props.class}>
                {c()}
            </div>
        </button>
    )
}

type ThinResult = {
    body: string;
    content: string;
    shadow: string;
};

function thinClass(thin: TypeThin): ThinResult {
    
    var thinResult: ThinResult;
    
    switch(thin){
        case TypeThin.classic:
            thinResult = {
                body: "classic_body ",
                content: "classic_content ",
                shadow: "classic_shadow ",
            };
            break;

        case TypeThin.thin:
            thinResult = {
                body: "thin_body ",
                content: "thin_content ",
                shadow: "thin_shadow ",
            };
            break;

        case TypeThin.full_thin:
            thinResult = {
                body: "fullthin_body ",
                content: "fullthin_content ",
                shadow: "fullthin_shadow ",
            };
            break;
    }

    return thinResult;
}