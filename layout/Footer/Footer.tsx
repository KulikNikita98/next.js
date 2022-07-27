import { FooterProps } from './Footer.props';
import styles from './Footer.module.css'
import cn from 'classnames';
import { format } from 'date-fns'

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
    return (<footer  {...props}  className={cn(styles.footer, props.className)}>
        <div className={styles.left}>
            OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
        </div>
        <ul className={styles.right}>
            <li className={styles['right-item']}>
                <a className={styles['right-link']} target="_blank" href="#!">
                    Пользовательское соглашение
                </a>
            </li>
            <li className={styles['right-item']}>
                <a className={styles['right-link']} target="_blank" href="#!">
                    Политика конфиденциальности
                </a>
            </li>
        </ul>
    </footer>)
} 