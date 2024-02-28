import React, { Fragment } from 'react';

interface IconProps {
    className: string;
}

const Icon: React.FC<IconProps> = ({ className }) => {
    return (
        <Fragment>
            <i className={className}></i>
        </Fragment>
    );
};

export default Icon;