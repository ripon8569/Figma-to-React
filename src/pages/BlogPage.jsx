import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Blog from "../components/Blog/Blog";
import Card from "../components/Blog/Card";
import searchImg from "../images/iocn/search-icon-transparent-images-vector-16.png";

function BlogPage() {
  return (
    <>
      <div className=" bg-black">
        <Header />
        <div className=" pt-[80px] pr-[135px] pb-[120px] pl-[136px] border-y-[1px] border-solid border-gray-300">
          <div className=" gap-x-[48px]">
            <div className="w-full h-[58px] flex justify-between items-center gap-y-[934px]">
              <h1 className=" text-white text-5xl flex justify-start items-center  gap-x-[48px]">
                Blog
              </h1>
              <img
                className="w-[40px] h-[40px] fill-white"
                src={searchImg}
                alt="search img"
              />
            </div>
            <Blog />
            <div
              className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center gap-5 gap-y-5 ">
              <Card />
              <Card />
              <Card />

              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
