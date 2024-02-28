import React, {ReactElement} from 'react';

interface ImageProps {
    className ?: string
    urlImage: string
}
const CardDiscoverImage: React.FC<ImageProps> = ({className, urlImage}): ReactElement => {
return (
    <img className={`lg:h-[270px] md:h-[263px] lg:w-[340px] md:w-full ${className}`} src={urlImage} alt="" />
);
};
export default CardDiscoverImage;