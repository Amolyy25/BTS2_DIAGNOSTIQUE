import React from 'react'

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    gap?: string | number
    align?: React.CSSProperties['alignItems']
    justify?: React.CSSProperties['justifyContent']
    wrap?: React.CSSProperties['flexWrap']
}

export const RowFlex: React.FC<FlexProps> = ({
    children,
    gap = '1rem',
    align = 'center',
    justify = 'flex-start',
    wrap = 'nowrap',
    style,
    ...props
}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap,
                alignItems: align,
                justifyContent: justify,
                flexWrap: wrap,
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    )
}

export const ColumnFlex: React.FC<FlexProps> = ({
    children,
    gap = '1rem',
    align = 'stretch',
    justify = 'flex-start',
    wrap = 'nowrap',
    style,
    ...props
}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap,
                alignItems: align,
                justifyContent: justify,
                flexWrap: wrap,
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    )
}
