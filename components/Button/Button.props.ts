import { ReactNode } from 'react';

export default interface ButtonProps {
    children: ReactNode,
    appearance: 'primary' | 'ghost'
}