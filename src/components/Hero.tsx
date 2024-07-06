import heroImg from "../assets/heroImg.png";
import img1 from "../assets/image 1.png";
import img2 from "../assets/image 2.png";
import img3 from "../assets/image 3.png";
import img4 from "../assets/image 4.png";

const Hero = () => {
  return (
    <div className="bg-appBlack lg:px-[6rem] px-8 mx-auto lg:pt-16 text-white flex lg:flex-row flex-col justify-between gap-6">
      <div>
        <h1 className="text-4xl scroll-mx-6 py-8 lg:text-5xl tracking-wide font-PPHatton w-full">
          Immerse yourself in crystal-clear sound and comfort
        </h1>
        <button className="py-3.5 bg-[#0066D9] rounded-md w-full text-sm max-w-[8rem] my-3">
          Buy Now
        </button>
        <div className="mt-6">
          <div className="flex gap-3 items-center my-3">
            <h3 className="border border-b w-full max-w-[4rem]"></h3>
            <h3 className="font-medium">Related Product</h3>
            <h3 className="border border-b w-full max-w-[20rem]"></h3>
            <h3 className="border border-b w-full max-w-[10rem] absolute right-2"></h3>
          </div>
          <div className="flex items-center space-x-3 w-full max-w-[6rem]">
            <img
              src={img1}
              alt=""
              className="border border-[#56555589] rounded-md"
            />
            <img
              src={img2}
              alt=""
              className="border border-[#56555589] rounded-md"
            />
            <img
              src={img3}
              alt=""
              className="border border-[#56555589] rounded-md"
            />
            <img
              src={img4}
              alt=""
              className="border border-[#56555589] rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl">
        <img src={heroImg} alt="" className="relative top-[-6rem]" />
        <img
          src={heroImg}
          alt=""
          className="hidden lg:block mirror-image relative top-[-15rem] max-w-[10rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
