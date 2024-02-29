import React, { ReactElement } from 'react';
import CardDiscover from '../CardDiscover/Card';
interface DiscoverData {
    imgUrl: string;
    title: string;
    desc: string;
  }
  
  interface MembershipProps {
    data: DiscoverData[];
  }
const Discover: React.FC<MembershipProps> = ({data}): ReactElement => {
    return (
        <div>
            <section
                className="px-[32px] bg-gray-300 pt-[64px] mx-auto"
                style={{ fontFamily: 'italic' }}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="6000"
            >
                <h2 className="text-black text-center text-[60px] font-bold mb-[64px]">
                    Discover our live classes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center text-center w-fit md:w-full lg:w-fit m-auto">
                    <CardDiscover data={data}/>
                </div>
            </section>
        </div>
    )
}
export default Discover;