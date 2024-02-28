import React, { ReactElement } from 'react';

interface ContentProps {
    className ?: string;
    title: string;
    content: string;
}

const ContentCardDiscover: React.FC<ContentProps> = ({ title, content, className }): ReactElement => {
    return (
        <>
            <h4 style={{ fontFamily: 'Oswald, sans-serif' }} className={`text-[26px] font-bold leading-[31px] text-black mt-4 mb-2 ${className}`}>{title}</h4>
            <p className="text-[20px] font-light leading-[36px] text-black mt-2 mb-4"><i>{content}</i></p>
        </>
    );
};

export default ContentCardDiscover;