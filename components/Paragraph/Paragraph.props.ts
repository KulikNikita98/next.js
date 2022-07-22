import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode,
    size: 'big' | 'medium' | 'small'
}