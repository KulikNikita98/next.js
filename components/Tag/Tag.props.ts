import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export default interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size: 'small' | 'medium'
    color: 'primary' | 'green' | 'red' |  'ghost' | 'grey';
    href?: string,

}