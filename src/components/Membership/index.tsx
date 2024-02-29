import React, { Fragment } from "react";
import CardMemberShip from "../CardMembership/Card";

interface MembershipData {
    title: string;
    features: string[];
    buttonText: string;
  }
  
  interface MembershipProps {
    data: MembershipData[];
  }
    const MemberShip: React.FC<MembershipProps> = ({data}) => {
    return (
        <Fragment>
            <section style={{ fontFamily: 'Montserrat' }} className="bg-gray-300 lg:py-[64px] mx-auto sm:pb-6 ">
                <h2 style={{ fontFamily: 'Oswald' }} className="text-black text-center text-[60px] font-bold">Membership Options</h2>
                <p className="text-center sm:text-[20px] leading-[39px] mb-8">All Memberships include full access to our amenities, pools, fitness classes & much more id est laborum.</p>
                <div className="mx-auto pb-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center justify-center gap-8 lg:w-fit mx-8 lg:mx-auto">
                    <CardMemberShip data={data}/>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default MemberShip;