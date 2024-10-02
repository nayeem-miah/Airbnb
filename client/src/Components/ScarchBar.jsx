import { FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import toast from "react-hot-toast";

const ScarchBar = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const handlePlus = () => {
        setCount(previewCount => previewCount + 1)

    }
    const handleMinus = () => {
        setCount(previewCount => previewCount - 1)
    }
    const handlePlus2 = () => {
        setCount2(previewCount => previewCount + 1)

    }
    const handleMinus2 = () => {
        setCount2(previewCount => previewCount - 1)
    }
    const handlePlus3 = () => {
        setCount3(previewCount => previewCount + 1)

    }
    const handleMinus3 = () => {
        setCount3(previewCount => previewCount - 1)
    }
    const handlePlus4 = () => {
        setCount4(previewCount => previewCount + 1)

    }
    const handleMinus4 = () => {
        setCount4(previewCount => previewCount - 1)
    }

    return (
        <div className="mb-8  lg:w-2/3 mx-auto  bg-white z-10 shadow-sm rounded-full">
            <div className="grid grid-cols-4  border-[1px] rounded-full gap-2">

                <div className="p-3 hover:border-[1px] hover:bg-slate-200 hover:rounded-full border-r">
                    <button onClick={() => document.getElementById('my_modal_2').showModal()}><button >where

                    </button>
                        <dialog id="my_modal_2" className="modal -mt-3 lg:-ml-52">
                            <div className="modal-box bg-white">
                                <h3 className="font-bold text-lg ">Search by region</h3>
                                <div className="grid grid-cols-3 gap-6 my-4">
                                    <div className="h-24 hover:border bg-gray-200 p-2 hover:scale-110 rounded hover:bg-gray-300 text-black font-bold">
                                        <h3>I’m flexible</h3>
                                    </div>
                                    <div className="h-24 hover:border bg-gray-200 p-2 hover:scale-110 rounded hover:bg-gray-300 text-black font-bold">
                                        <h3>

                                            Southeast Asia</h3>
                                    </div>

                                    <div className="h-24 hover:border bg-gray-200 p-2 hover:scale-110 rounded hover:bg-gray-300 text-black font-bold">
                                        <h3>

                                            Canada</h3>
                                    </div>
                                    <div className="h-24 hover:border bg-gray-200 p-2 hover:scale-110 rounded hover:bg-gray-300 text-black font-bold">
                                        <h3>Europe</h3>
                                    </div>
                                    <div className="h-24 hover:border bg-gray-200 p-2 hover:scale-110 rounded hover:bg-gray-300 text-black font-bold">
                                        <h3>Malaysia</h3>
                                    </div>
                                    <div className="h-24 hover:border bg-gray-200 p-2 hover:scale-110 rounded hover:bg-gray-300 text-black font-bold">
                                        <h3>

                                            United States</h3>
                                    </div>
                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>

                        <input className="rounded-lg bg-transparent border-none outline-none placeholder-gray-500" type="text" placeholder="search here" /></button>
                </div>
                <button onClick={() => document.getElementById('my_modal_3').showModal()} className=" hover:border-[1px] hover:bg-slate-200 hover:rounded-full border-r font-bold"><button  >check in <p className="font-normal">add dates</p></button> <dialog id="my_modal_3" className="modal -mt-3">
                    <div className=" bg-white">
                        <DateRangePicker
                            onChange={item => setState([item.selection])}
                            showSelectionPreview={false}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={state}
                            displayMode={false}
                            direction="horizontal"

                            editableDateInputs={true}


                            showDateDisplay={false}
                        />

                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog> </button>
                <button onClick={() => document.getElementById('my_modal_4').showModal()} className=" hover:border-[1px] hover:bg-slate-200 hover:rounded-full border-r"><p>check out</p>
                    <dialog id="my_modal_4" className="modal -mt-3 ">
                        <div className=" bg-white">
                            <DateRangePicker
                                onChange={item => setState([item.selection])}
                                showSelectionPreview={false}
                                moveRangeOnFirstSelection={false}
                                months={2}
                                ranges={state}
                                displayMode={false}
                                direction="horizontal"

                                editableDateInputs={true}


                                showDateDisplay={false}
                            />


                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </button>
                <button onClick={() => document.getElementById('my_modal_5').showModal()} className=" hover:border-[1px] hover:bg-slate-200 hover:rounded-full "><div className="flex items-center justify-between "><p>who</p> <p className="rounded-full p-5 bg-red-500"><FaSearch color="white" className=" " /></p></div>  <dialog id="my_modal_5" className="modal -mt-3 ">
                    <div className="modal-box bg-white">
                        <div className="flex justify-between border-b py-3">
                            <h3 className="text-left font-bold text-black">Adults <p className="font-normal">Ages 13 or above</p></h3>
                            <h3 className="flex items-center text-3xl gap-3">
                                <button onClick={handleMinus} disabled={count <= 0}><CiCircleMinus className={count==0? " ": "text-black"}></CiCircleMinus></button> <span className="text-black" >{count}</span><button onClick={handlePlus}><CiCirclePlus className="text-black"></CiCirclePlus></button>
                            </h3>


                        </div>
                        <div className="flex justify-between border-b py-3">
                            <h3 className="text-left font-bold text-black"> Children <p className="font-normal">Ages 2 – 12</p></h3>
                            <h3 className="flex items-center text-3xl gap-3">
                                <button onClick={handleMinus2} disabled={count2 <= 0}><CiCircleMinus className={count2==0? " ": "text-black"}></CiCircleMinus></button> <span className="text-black">{count2}</span><button onClick={handlePlus2}><CiCirclePlus className="text-black"></CiCirclePlus></button>
                            </h3>



                        </div>
                        <div className="flex justify-between border-b py-3">
                            <h3 className="text-left font-bold text-black"> Infants <p className="font-normal">
                                Under 2</p></h3>
                            <h3 className="flex items-center text-3xl gap-3">
                                <button onClick={handleMinus3} disabled={count3 <= 0}><CiCircleMinus className={count3==0? " ": "text-black"}></CiCircleMinus></button> <span className="text-black">{count3}</span><button onClick={handlePlus3} className="text-black"><CiCirclePlus></CiCirclePlus></button>
                            </h3>

                        </div>
                        <div className="flex justify-between py-3">
                            <h3 className="text-left font-bold text-black"> Pets <p className="font-normal">
                                Bringing a service animal?</p></h3>
                            <h3 className="flex items-center text-3xl gap-3">
                                <button onClick={handleMinus4} disabled={count4 <= 0} ><CiCircleMinus className={count4==0? " ": "text-black"}></CiCircleMinus></button> <span className="text-black">{count4}</span><button onClick={handlePlus4}><CiCirclePlus className="text-black"></CiCirclePlus></button>
                            </h3>

                        </div>

                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog></button>
            </div>
        </div>
    );
};

export default ScarchBar;