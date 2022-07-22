import TagProps from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({ size = 'medium', color = 'ghost', href, children, ...props }: TagProps): JSX.Element => {
    return <div {...props} className={cn(styles.tag, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.ghost]: color === 'ghost',
        [styles.green]: color === 'green',
        [styles.medium]: color === 'grey',
        [styles.primary]: color === 'primary',
        [styles.red]: color === 'red',
    })}> {
            href ? <a href={href}>{children}</a> : <>{children}</>
        }
    </div>
}