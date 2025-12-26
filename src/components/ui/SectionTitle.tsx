import React from 'react'

interface SectionTitleProps {
    children: React.ReactNode
    className?: string
    dark?: boolean // For light backgrounds
}

export default function SectionTitle({
    children,
    className = '',
    dark = false
}: SectionTitleProps) {
    const textColor = dark ? 'text-midnight' : 'text-cream'

    return (
        <h2 className={`text-section-title font-headline uppercase mb-8 ${textColor} ${className}`}>
            {children}
        </h2>
    )
}
