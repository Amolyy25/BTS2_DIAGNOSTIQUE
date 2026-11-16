import React from 'react'

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode
    bold?: boolean
}

export const Text: React.FC<TextProps> = ({
    children,
    bold = false,
    style,
    ...props
}) => {
    return (
        <span
            style={{
                fontWeight: bold ? 'bold' : 'normal',
                ...style,
            }}
            {...props}
        >
            {children}
        </span>
    )
}
