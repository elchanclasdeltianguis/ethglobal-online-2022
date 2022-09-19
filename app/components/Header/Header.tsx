import React from "react";



type Props = {};




function Header({}: Props) {
  return (
    <div
      className="flex gap-16 items-center justify-between 
                    h-[120px] mx-[250px] px-[30px]"
    >
      {/* frame 1 */}
      <div
        className="font-normal text-white bg-black flex-grow-0 inline
                      text-center h-[30px] w-[94px] text-headertext"
      >
        text
      </div>
      {/* frame 39729 */}
      <div className="flex flex-row h-[60px] w-[400px] gap-4 items-start">
        <button
          className="h-[60px] w-[164px] rounded-[40px] flex flex-row items-center
                px-[18px] py-[24px] gap-2 text-black bg-white border-[4px]
                shadow-[-4px_4px_0px_0px] box-border border-gray1 mix-blend-normal
                shadow-gray1"
        >
          Qwerty
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="h-[60px] w-[164px] rounded-[40px] flex flex-row items-center
                px-[18px] py-[24px] gap-2 text-black bg-white border-[4px]
                shadow-[-4px_4px_0px_0px] box-border border-gray1 mix-blend-normal
                shadow-gray1"
        >
          Qwerty
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="h-[60px] w-[72px] rounded-[40px] flex flex-row items-center
                px-[18px] py-[24px] gap-2 text-black bg-white border-[4px]
                shadow-[-4px_4px_0px_0px] box-border border-gray1 mix-blend-normal
                shadow-gray1 bg-gradient-to-br from-[#8247E5] to-[#5200FF]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
