import React, { useState } from 'react'
import Syllabusdropdown from './Syllabusdropdown'
import BCASyllbus from './BCASyllbus'

const Syllabus = () => {

    const [selected, setSelected] = useState("BCA ")
    return (

        <>


            <div class="flex justify-between py-8 px-6 md:px-10 lg:px-20 ">
                <div className="text-[28px] text-[#B42120] font-bold not-italic leading">Syllabus</div>

                {/*=================drop down====== */}


                <Syllabusdropdown selected={selected} setSelected={setSelected} />

            </div>


            {/*============================ Main title ==================== */}




            <div className='flex items-center justify-center bg-[#B42120] py-3'>

                <h1 className='font-KaiseiHarunoUmi text-white text-[24px] font-bold italic-not'>BCA Syllabus</h1>

            </div>


            {/*========================================BCA syllabus================= */}

            <BCASyllbus/>


        </>
    )
}

export default Syllabus