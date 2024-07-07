import Footer from "./Footer";
import { Icon } from "@iconify/react/dist/iconify.js";
import Nav from "./Nav";

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className=" mt-16 flex w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-between max-w-[68rem] w-full mx-auto lg:px-0 px-5  flex-1">
          <div className="w-full">
            <div className="border border-appsecondary flex justify-center items-center rounded-full py-2.5 mb-3 px-2 max-w-[11rem]">
              <h3>Get in touch</h3>
            </div>
            <h1 className="font-extrabold text-4xl text-[#2dcbab]">
              Let's connect
            </h1>
            <p className="text-base font-medium mt-2 max-w-[22rem]">
              Reach out to us directly! Whether you have questions or just want
              to say hello, we here to chat. I can't wait to hear from you!
            </p>
            {/* social icons */}
            <div className="flex gap-4 mt-7">
              <a className="font-semibold" href="">
                <Icon
                  icon="cib:instagram"
                  className="text-xl text-appBlack hover:text-[#34a08a] hover:transition-all"
                />
              </a>
              <a className="font-semibold" href="">
                <Icon
                  icon="cib:linkedin"
                  className="text-xl text-appBlack hover:text-[#34a08a] hover:transition-all"
                />
              </a>
              <a className="font-semibold" href="">
                <Icon
                  icon="uil:facebook"
                  className="text-xl text-appBlack hover:text-[#34a08a] hover:transition-all"
                />
              </a>
              <a className="font-semibold" href="">
                <Icon
                  icon="ri:twitter-x-line"
                  className="text-xl text-appBlack hover:text-[#34a08a] hover:transition-all"
                />
              </a>
            </div>
          </div>

          <div className="lg:mt-0 mt-5 w-full">
            <form action="">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="border border-appsecondary lg:max-w-[18rem] py-3 px-2 rounded-md w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    name="clientName"
                    className="w-full outline-none bg-transparent text-[#9d9da0] placeholder:text-[#9d9da0]"
                  />
                </div>
                <div className="border border-appsecondary text-apptextAlt  lg:max-w-[18rem] py-3 px-2 rounded-md w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    name="clientEmail"
                    className="w-full outline-none bg-transparent text-[#9d9da0] placeholder:text-#9d9da0"
                  />
                </div>
              </div>
              <div className="border border-appsecondary text-apptextAlt  py-3 px-2 rounded-md w-full mt-4">
                <input
                  type="phone"
                  placeholder="Your phone no."
                  name="clientNo"
                  className="w-full outline-none bg-transparent bg-appPrimary placeholder:text-appPrimary"
                />
              </div>
              <div className="border border-appsecondary  py-3 px-2 rounded-md w-full mt-4 h-[11rem] ">
                <textarea
                  className="bg-transparent outline-none w-full h-full placeholder:text-appPrimary text-appPrimary"
                  placeholder="Message"
                  name="clientMsg"
                ></textarea>
              </div>
              <div>
                <button className="bg-[#2dcbab] text-white text-sm text-apptextAlt  py-4 px-2 rounded-lg w-full mt-4">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
