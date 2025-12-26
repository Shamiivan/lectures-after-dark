import React from 'react'

interface ParagraphProps {
    children: React.ReactNode
    className?: string
    maxWidth?: 'prose' | 'full' | 'narrow'
}

export default function Paragraph({
    children,
    className = '',
    maxWidth = 'full'
}: ParagraphProps) {
    const widthClasses = {
        prose: 'max-w-prose', // ~65ch - optimal readability
        narrow: 'max-w-2xl',
        full: 'max-w-full',
    }

    return (
        <p className={`text-base leading-relaxed ${widthClasses[maxWidth]} ${className}`}>
            {children}
        </p>
    )
}
