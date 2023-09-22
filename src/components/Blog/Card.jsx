import cardImg from "../../images/hero-img-1.png"
import rightArrow from "../../images/iocn/arrow-right.png";


function Card(){
    return (
      <>
        <div className="container mt-[48px]">
          <div className="flex flex-col ">
            <div className="h-[60%]">
              <img className="w-full h-full" src={cardImg} alt="" />
            </div>
            <div className="h-[40%] text-white mt-[20px]">
              <span className="w-[40px] h-[22px] font-semibold text-sm py-[6px] px-[16px] rounded-full bg-gray-700">
                TXAA
              </span>
              <h1 className="text-5xl my-[10px]">
                Top successful AI chatbot tool 2013
              </h1>
              <div className="flex gap-x-[10px] opacity-75 ">
                <p className="flex items-center gap-x-[8px] text-lg ">
                  <span className="w-[6px] h-[6px] rounded-full bg-white inline-block"></span>{" "}
                  2 July 2023
                </p>
                <p className="flex items-center gap-x-[8px] text-lg">
                  <span className="w-[6px] h-[6px] rounded-full bg-white inline-block"></span>{" "}
                  0 Comments
                </p>
              </div>
              <p className="text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold mt-[6px] webkit-text">
                Read More{" "}
                <img className="inline-block" src={rightArrow} alt="" />
              </p>
            </div>
          </div>
        </div>
      </>
    );
}


export default Card;