export type ChildrenType = keyof HTMLElementTagNameMap | "TEXT";
export type DOMElementType = HTMLElement | Text;

export interface MicroReactElement {
    type: ChildrenType;
    props: {
        [key: string]: any;
        children: MicroReactElement[];
    };
}

