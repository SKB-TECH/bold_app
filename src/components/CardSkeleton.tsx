import React from 'react';
import { Skeleton } from 'antd';

const CardSkeleton: React.FC = () => {

    return (
        <div className="flex flex-col gap-5 w-[100%] md:w-80 md:h-[21rem] bg-white border rounded-lg p-3 hover:drop-shadow-md translate ease-in duration-300">
            <Skeleton.Image   active={true} className='' style={{width:295, height:150}} />
            <Skeleton paragraph={{ rows: 3 }} active  />
        </div>
    );
};

export default CardSkeleton;
