import React from 'react'

const Personal = () => {
  return (
    <div className=' pt-[10px] '> 
        <div className='patient-text flex  '>
            <button className='bg-blue-100  text-blue-500 border-box w-full h-5'>Print Patient Reports & Presciption
              <img src="https://cdn-icons-png.flaticon.com/128/839/839184.png" alt="" />
            </button>
            <button>Email Patient Report & Presciption
               <img src="https://cdn-icons-png.flaticon.com/128/726/726623.png" alt="" />
            </button>
        </div>
         <div> 
            <div>
                <div className=''>
                    <div>
                      <img src="https://cdn-icons-png.flaticon.com/128/3280/3280979.png" alt="" />
                      <h3>Ashish Bhambhure</h3>
                      <p>Patiet Id:<span>1234</span></p>
                    </div>
                    <div>
                        <p>Age</p>
                        <button>Edit
                          <img src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png" alt="" />
                        </button>
                    </div>
               </div>
                <div>
                  <h2>Information</h2>
                  <p>Gender: <span>M</span></p>
                  <p>Blood Group: <span>B+</span></p>
                  <p>Height: <span>167 cm</span></p>
                  <p>Weight:<span>67Kg</span></p>
                  <button>Edit
                          <img src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png" alt="" />
                  </button>
                </div>
            </div>
            <div>
               <div>
                    <div>
                       <img src="https://cdn-icons-png.flaticon.com/128/11102/11102522.png" alt="" />
                       <p>Hearth Rate</p>
                       <p><spna>84</spna> bmp</p>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/11258/11258847.png" alt="" />
                        <p>Body Temprature</p>
                        <p><span>96.5</span> F</p>
                    </div>
                    <div>
                       <img src="https://cdn-icons-gif.flaticon.com/10968/10968600.gif" alt="" />
                       <p>Glucose Level</p>
                       <p><span>100</span> mg/dl</p>
                    </div>
               </div>
               <div>
                  <h5>Test Report</h5>
                  <div>
                     <img src="https://cdn-icons-gif.flaticon.com/14447/14447788.gif" alt="" />
                     <div>
                       <p>CT scan_Abdomen</p>
                       <p>21-12-2023</p>
                     </div>
                  </div>
                  <div>
                     <img src="https://cdn-icons-gif.flaticon.com/14447/14447788.gif" alt="" />
                     <div>
                       <p>CT scan_Abdomen</p>
                       <p>21-12-2023</p>
                     </div>
                  </div>
                  <div>
                     <img src="https://cdn-icons-gif.flaticon.com/14447/14447788.gif" alt="" />
                     <div>
                       <p>CT scan_Abdomen</p>
                       <p>21-12-2023</p>
                     </div>
                  </div>
               </div>
               <div className='flex flex-row '>
                   <div className="bg-gray-200 rounded-lg shadow-md p-4">
                      <h5 className="text-lg font-semibold mb-2">Prescription</h5>
                      <div className="mb-2">
                        <p className="font-bold">Heart disease</p>
                      </div>
                      <p className="mb-1">Month</p>
                      <p className="mb-1">25-5-2023 <span className="font-bold">=</span> 10-7-2023</p>
                    </div>
                    <div className="bg-gray-200 rounded-lg shadow-md p-4">
                      <h5 className="text-lg font-semibold mb-2">Prescription</h5>
                      <div className="mb-2">
                        <p className="font-bold">Heart disease</p>
                      </div>
                      <p className="mb-1">Month</p>
                      <p className="mb-1">25-5-2023 <span className="font-bold">=</span> 10-7-2023</p>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Personal
