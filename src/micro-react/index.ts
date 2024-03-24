import { ChildrenType, DOMElementType, MicroReactElement } from "./type";
/**
 * micro-react source code
 * micro-react is a minimalistic implementation of React
 */
const render = (element: MicroReactElement, container: HTMLElement) => {
  const dom = createDom(element);
  container.appendChild(dom);
};

const createElement = (
  type: ChildrenType,
  props: {
    [key: string]: any;
  },
  ...children: (MicroReactElement | string)[]
): MicroReactElement => ({
  type,
  props: {
    ...props,
    children: children.map((child) =>
      typeof child === "object" ? child : createTextElement(child)
    ),
  },
});

const createTextElement = (text: string): MicroReactElement => {
  return {
    type: "TEXT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
};

const createDom = (element: MicroReactElement): DOMElementType => {
    const dom =
        element.type === "TEXT"
            ? document.createTextNode(element.props.nodeValue)
            : document.createElement(element.type);
    
    Object.keys(element.props).forEach((propName) => {
        if (propName !== "children") {
            if (dom instanceof HTMLElement) {
                dom.setAttribute(propName, element.props[propName]);
            }
        }
    });
    
    return dom;
};

const useState = () => {
  // TODO
};

const useEffect = () => {
  // TODO
};

const useRef = () => {
  // TODO
};

const useContext = () => {
  // TODO
};

const useMemo = () => {
  // TODO
};

const MicroReact = {
  createElement,
  render,
  useState,
  useEffect,
  useRef,
  useContext,
  useMemo,
};

export default MicroReact;
