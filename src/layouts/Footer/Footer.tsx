import React, { ReactElement } from 'react';
import Text from './FooterText';

export default function TheFooter(): ReactElement {
    return (
        <footer className="mx-auto text-center py-4 text-white bg-[#333333]">
            <Text className="my-[32px]" content="Sample text. Click to select the Text Element." />
            <Text className="my-[32px]" content="Website Design created with Best Website" />
        </footer>
    );
}