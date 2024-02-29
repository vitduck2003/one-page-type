import React, { ReactElement } from 'react';
import PageForm from '../Form/Form';

const Form: React.FC = (): ReactElement => {
    return (
            <section className="lg:px-[32px] lg:pt-[64px] mx-auto" style={{ fontFamily: 'Montserrat' }}>
                <PageForm />
            </section>
    )
}
export default Form;