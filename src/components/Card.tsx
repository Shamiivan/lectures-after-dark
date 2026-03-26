import type { ReactNode } from 'react';
import styles from './Card.module.css';

export interface CardProps {
    variant?: 'default' | 'elevated' | 'outlined' | 'image-top';
    image?: string;
    imageHeight?: string;
    padding?: 'none' | 'small' | 'medium' | 'large';
    hoverable?: boolean;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
}

export const Card = ({
    variant = 'default',
    image,
    imageHeight = '240px',
    padding = 'medium',
    hoverable = true,
    className = '',
    children,
    onClick
}: CardProps) => {
    const cardClasses = [
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        hoverable && styles.hoverable,
        className
    ].filter(Boolean).join(' ');

    return (
        <div
            className={cardClasses}
            onClick={onClick}
        >
            {image && (
                <div className={styles.imageWrapper} style={{ height: imageHeight }}>
                    <img src={image} alt="" className={styles.image} />
                </div>
            )}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};
