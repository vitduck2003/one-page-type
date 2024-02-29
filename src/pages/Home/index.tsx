// HomePage.tsx
import React, { ReactElement } from 'react';
import Discover from '../../components/Discover';
import MemberShip from '../../components/Membership';
import Form from '../../components/SomthingToSay';
import dataDiscover from '../../Data/discover';
import dataMemberShip from '../../Data/membership';
export default function HomePage(): ReactElement {
    const homeContent = (
        <>
            <Discover data={dataDiscover}/>
            <MemberShip data={dataMemberShip}/>
            <Form />
        </>
    );

    return (
        <>
            {homeContent}
        </>
    );
}