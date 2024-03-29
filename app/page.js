"use client";
import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";

const App = () => {
  const [password, setPassword] = useState("");
  const [baladyPrice, setBaladyPrice] = useState();
  const [whitePrice, setWhitePrice] = useState();
  const [redPrice, setRedPrice] = useState();
  const [type , setType  ] = useState('farms')
  const [date, setDate] = useState();
  const handlePasswordSubmit = () => {
    if (password === "your_password") {
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  const handleDownloadImage = async () => {
    html2canvas(document.querySelector("#uiContainer"),{scale:.9}).then((canvas) => {
      let link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "ui_design.png";
      link.click();
    });
  };
  const currentDate = new Date();

  const formattedDate = new Intl.DateTimeFormat("ar", {
    day: "2-digit", // Display day as two digits
    weekday: "long", // Display full weekday name
    year: "numeric",
    month: "2-digit", // Display month as two digits
  }).format(currentDate);

  useEffect(() => {
    setDate(formattedDate);
  });
  return (
    <div className=" " style={{    overflow:'visible !important'    }}>
      {/* Password Prompt */}
      {/* {password !== 'your_password' && (
        <div className="my-4">
          <label className="mr-2">
            Enter Password:
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded cursor-pointer"
            onClick={handlePasswordSubmit}
          >
            Submit
          </button>
        </div>
      )} */}

      {/* UI */}
      {password === "your_password" ||
        (true && (
          <div
            id="uiContainer"
            className="text-center w-[900px] h-[1070px]   relative "
            style={{
              backgroundImage: `url(/slide.jpg)`,
              backgroundSize: "auto 350px",
              objectFit: "",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={"header_bg.png"} width="900" height="100" />
            <h1 className="text-md absolute top-0 w-full text-white font-bold mb-2">
              الحَمدُ لِلَّهِ الَّذي أَنزَلَ عَلى عَبدِهِ الكِتابَ وَلَم يَجعَل
              لَهُ عِوَجًا
            </h1>
            <div className="flex h-24">
              <img src={"logo3.png"} className="ml-2" />
              <img src={"logo.png"} className="ml-auto mr-2" />
            </div>
            <div className="flex justify-center py-10 h-96 absolute top-0 w-full">
              <img src={"slide3.jpg"}  className=" w-7/12" />
            </div>
            <div className="absolute top-[343px]">
              <div className="relative">
                <img src={"over_slider.png"} className="ml-auto mr-2" />
                <div className="flex justify-center items-center">
                  <h1 className="absolute top-0 text-lg text-[#0d579e] font-bold ">
                    رَبَّنَـا لَا تُؤَاخِذْنَـا إِن نَّسِـينَا أَوْ
                    أَخْـطَأْنَـا
                  </h1>
                  <div className="mt-5">
                    <h1 className="font-['arabic'] text-[#0d579e] text-2xl mb-2">
                      متوسط تداول أسعار مبيعات أمس
                    </h1>
                    <h1 className="text-[#0d579e] font-['arabic'] text-2xl">
                       لبيض المائده الصحراوي والزراعي
                    </h1>
                    <h1 className="text-[#F59933] font-['arabic'] text-2xl">
                      {type=== 'farms' ? 'المــــــــــــــزارع' :'الجمـــــــــــــــلة' }
                        
                        
                    </h1>
                    <div className="bg-[#F59933] w-12 h-1 ml-auto mr-auto mt-2"></div>
                    <span className="text-[#0D579E] font['arabic'] text-3xl font-bold mt-3">
                      0122220&zwj;6011{" "}
                      <span className="text-[#F59933] font-normal">
                        // {""}
                      </span>
                      01003&zwj;731392
                    </span>

                    <div className="flex justify-center mb-5">
                      <div className="w-[550px] h-10 bg-[#0D579E] rounded mt-4 font-['arabic'] text-xl text-white flex   justify-center">
                        {date}
                      </div>
                    </div>

                    <div className=" flex justify-center gap-6 mb-16">
                  
                    <div >
                        <div 
                          className="relative "
                          >
                        <img
                          src={"eggs-white.png"}
                          width={250}
                          />
                          <div className="absolute -bottom-7 w-full flex justify-center">
                        <div className="w-24 h-14 rounded-xl border border-[#48A6FF] bg-white font-[arabic] flex  justify-center text-2xl ">{whitePrice || '00.00'}</div>
                            </div>
                          </div>
                      </div>
                      <div >
                        <div 
                          className="relative "
                          >
                        <img
                          src={"eggs-red.png"}
                          width={250}
                          />
                          <div className="absolute -bottom-7 w-full flex justify-center">
                        <div className="w-24 h-14 rounded-xl border border-[#48A6FF] bg-white font-[arabic] flex  justify-center text-2xl ">{redPrice || '00.00'}</div>
                            </div>
                          </div>
                      </div>

                    


                      <div >
                        <div 
                          className="relative "
                          >
                        <img
                          src={"eggs-balady.png"}
                          width={250}
                          />
                          <div className="absolute -bottom-7 w-full flex justify-center">
                        <div className="w-24 h-14 rounded-xl border border-[#48A6FF] bg-white font-[arabic] flex  justify-center text-2xl ">{baladyPrice || '00.00'}</div>
                            </div>
                          </div>
                          
                      </div>

                    </div>
    
                      <img src={"footer.png"} width="900" height="100" />
                    
                  </div>
                </div>
              </div>
            </div>
            

        
          </div>
        ))}
          
          {/* <div className="fixed bottom-0 flex flex-col w-1/3">
          <select id="mySelect" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="farms">مزارع</option>
          <option value="gomla">جملة</option>
          </select>
          <input
            className="border border-gray-300 rounded px-2 py-1  mb-4"
            type="text"
            id="editableText"
            value={redPrice}
            onChange={(e) => setRedPrice(e.target.value)}
            />
            <input
            className="border border-gray-300 rounded px-2 py-1  mb-4"
            type="text"
            id="editableText"
            value={whitePrice}
            onChange={(e) => setWhitePrice(e.target.value)}
            />
            <input
            className="border border-gray-300 rounded px-2 py-1  mb-4"
            type="text"
            id="editableText"
            value={baladyPrice}
            onChange={(e) => setBaladyPrice(e.target.value)}
            />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer "
        onClick={handleDownloadImage}
        >
        Download Image
      </button>


        </div> */}
        
        <div>
 

      {true && (
        <div className="fixed  bg-black inset-0 overflow-y-auto flex items-center justify-center z-50">
          <div className=" absolute top-10 left-0 bg-[#F3F4F6] w-96 p-6 rounded shadow-lg">
          <div className="w-full flex flex-col ">

          <select 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " id="mySelect"
           value={type} onChange={(e) => setType(e.target.value)}>
          <option value="farms">مزارع</option>
          <option value="gomla">جملة</option>
          </select>
          <label for="first_name" className="block mb-2 text-xl  font-[arabic] font-medium ml-auto text-gray-900 ">سعر البيض الآحمر</label>

          <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " id="mySelect"
          type="number"
            value={redPrice}
            onChange={(e) => setRedPrice(e.target.value)}
            />
          <label for="first_name" className="block mb-2 text-xl font-[arabic] font-medium ml-auto text-gray-900">سعر البيض الآبيض</label>

            <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " id="mySelect"
          type="number"
            value={whitePrice}
            onChange={(e) => setWhitePrice(e.target.value)}
            />
          <label for="first_name" className="block mb-2 font-[arabic] text-xl font-medium ml-auto text-gray-900">سعر البيض البلدي</label>

            <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " id="mySelect"
          type="number"
            value={baladyPrice}
            onChange={(e) => setBaladyPrice(e.target.value)}
            />
      <button
        className="bg-[#F59933] self-center mt-4 text-white w-30 px-4 py-2 rounded-md cursor-pointer  font-[arabic]"
        onClick={handleDownloadImage}
        >
        تحميل 
      </button>


        </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default App;
