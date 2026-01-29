import React from 'react'

interface TitleProps {
    Heading: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ Heading }) => {
    return (
        <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-center">
              {Heading}
            </h2>
            <div className="section-divider mb-6 w-20 mx-auto h-1 bg-amber-600 rounded-full"></div>
        </div>
    )
}

export default Title
