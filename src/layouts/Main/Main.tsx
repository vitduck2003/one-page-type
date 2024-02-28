import React, { ReactElement } from 'react';
import Discover from '../../pages/Discover';
import MemberShip from '../../pages/Membership';
import Form from '../../pages/SomthingToSay';

export default function Main(): ReactElement {
    return (
        <article className="mb-[64px] mx-auto">
            <Discover />
            <MemberShip />
            <Form />
        </article>
    );
}