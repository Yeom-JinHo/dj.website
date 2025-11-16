"use client";

import type { FC, JSX, ReactElement, ReactNode } from "react";
import { isValidElement } from "react";
import { Reveal } from "./Reveal";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const TextReveal: FC<TextRevealProps> = ({
  children,
  className = "",
  as = "div",
}) => {
  const generatePhrases = (child: ReactNode): string[] => {
    try {
      if (typeof child === "string") {
        // Split by words but preserve natural line breaks
        return child.split(/\s+/).filter((word) => word.length > 0);
      } else if (isValidElement(child)) {
        const element = child as ReactElement & {
          props?: {
            children?: ReactNode;
          };
        };

        if (element.props && "children" in element.props) {
          return generatePhrases(element.props.children);
        }
        return [];
      } else if (Array.isArray(child)) {
        return child.flatMap((nestedChild: ReactNode) =>
          generatePhrases(nestedChild)
        );
      }
      return [];
    } catch (error) {
      console.warn("Text reveal phrase generation error:", error);
      return [];
    }
  };

  const phrases = generatePhrases(children);

  return <Reveal phrases={phrases} className={className} as={as} />;
};

export default TextReveal;
