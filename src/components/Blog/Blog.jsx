
import blogImg from "../../images/about/about-hero-1.png";
import rightArrow from "../../images/iocn/arrow-right.png";



function Blog() {
    return (
      <>
        <div className="container mt-[48px]">
          <div className="flex gap-x-[30px]">
            <div className="w-[40%]">
              <img src={blogImg} alt="" />
            </div>
            <div className="w-[60%] text-white py-[40px] ">
              <span className="w-[72px] h-[34px] py-[6px] px-[16px] rounded-full bg-gray-700">
                TXAA
              </span>
              <h1 className="text-7xl my-[10px]">
                Top successful AI chatbot tool 2013
              </h1>
              <p className="text-lg opacity-75">
                Dicta sunt explicabo.Nano emin ipsam voluptatem quia voluptas
                sit aspernatur {" "}
              </p>
              <div className="flex mt-[10px] opacity-75 ">
                <p className="flex items-center gap-x-[6px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-white inline-block"></span>{" "}
                  2 July 2023
                </p>
                <p className="flex items-center gap-x-[6px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-white inline-block"></span>{" "}
                  0 Comments
                </p>
              </div>
              <hr className="opacity-30 mt-[10px] mb-[12px]" />
              <p className="text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text">
                Read More{" "}
                <img className="inline-block" src={rightArrow} alt="" />
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Blog;