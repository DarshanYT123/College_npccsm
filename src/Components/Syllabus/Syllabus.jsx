import React, { useState } from 'react'
import Syllabusdropdown from './Syllabusdropdown'
import BCASyllbus from './BCASyllbus'

const Syllabus = () => {

    const [selected, setSelected] = useState("BCA ")
    return (

        <>


            <div class="flex justify-between py-10 px-6 md:px-10 lg:px-20 ">
                <div className="text-[24px] text-[#B42120] font-bold not-italic leading">Syllabus</div>

                {/*=================drop down====== */}


                <Syllabusdropdown selected={selected} setSelected={setSelected} />

            </div>


            {/*============================ Main title ==================== */}




            <div className='flex items-center justify-center bg-[#B42120] py-5'>

                <h1 className='text-white text-[20px] font-bold italic-not'>BCA Syllabus</h1>

            </div>


            {/*========================================BCA syllabus================= */}

            <BCASyllbus/>


        </>
    )
}

export default Syllabus