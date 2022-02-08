import { useState, useEffect } from 'react';
import Web3 from 'web3';

function Featured() {
    return (
        <div className="w-full px-7">
            <div className="-space-y-1 pb-5">
                <p className="font-xs text-gray-600 ">February 5, 2022</p>
                <p className="font-medium text-xl my-5">Today in All Communities</p>
            </div>
            <div className="carousel flex w-full">
                <div className="flex justify-between gap-[24px]">
                    <div className="bg-gray-200 h-48 md:h-96 min-w-[270px] w-full rounded-xl">

                    </div>
                    <div className="bg-gray-200 h-48 md:h-96 min-w-[270px] w-full rounded-xl">

                    </div>
                    <div className="bg-gray-200 h-48 md:h-96 min-w-[270px] w-full rounded-xl">

                    </div>
                    <div className="bg-gray-200 h-48 md:h-96 min-w-[270px] w-full rounded-xl">

                    </div>
                    <div className="bg-gray-200 h-48 md:h-96 min-w-[270px] w-full rounded-xl">

                    </div>
                    <div className="bg-gray-200 h-48 md:h-96 min-w-[270px] w-full rounded-xl">

                    </div>
                    <div className="bg-gray-200 h-48 md:h-96 min-w-[270px] w-full rounded-xl">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;