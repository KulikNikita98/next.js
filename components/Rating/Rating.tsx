import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';
import { KeyboardEvent, useEffect, useState } from 'react';


export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    function constructRating(currentRating: number): void {
        const updatedRating = ratingArray.map((rate: JSX.Element, index: number) => {
            return (
                <StarIcon tabIndex={isEditable ? 0 : -1} className={cn(styles.star, {
                    [styles.filled]: index < currentRating,
                    [styles.editable]: isEditable,
                })}
                    onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
                    key={index}
                >

                </StarIcon>
            );
        });
        setRatingArray(updatedRating);
    }

    function changeDisplay(index: number) {
        if (!isEditable) {
            return;
        }
        constructRating(index);
    }

    function handleSpace(i: number, e: KeyboardEvent<SVGElement>) {
        if (setRating && e.code === "Space") {
            setRating(i);
        }

    }

    function onClick(i: number) {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    }

    return (
        <ul className={styles['star-list']} {...props}>
            {ratingArray.map((r: JSX.Element, i: number) =>
                <li
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onClick={() => onClick(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    className={styles['star-item']}
                     key={i}>
                        {r}
                </li>
            )}
        </ul>
    );
};