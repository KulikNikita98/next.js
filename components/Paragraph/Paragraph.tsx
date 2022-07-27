import ParagraphProps from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({ size = 'medium', children, ...props }: ParagraphProps): JSX.Element => {
    return <p {...props} className={cn(styles.p, {
        [styles.big]: size === 'big',
        [styles.medium]: size === 'medium',
        [styles.small]: size === 'small',
    })}>
        {children}
    </p>;
};