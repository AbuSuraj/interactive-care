 
import logo from "../../assets/images/logo.png"; 
import github from "../../assets/images/github.svg";
import linkedIn from "../../assets/images/linkedIn.svg"
const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-100  -mb-8">
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <div className="flex items-center justify-center flex-col px-8">
          <div className="flex items-center justify-center md:justify-start">
            <img src={logo} className="w-7 h-7 rounded-full" alt="Logo" />
            <h5 className="ml-2 text-2xl font-black tracking-wider">DigitalDynamo</h5>
          </div>
          <div className="mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row">
            <a href="#" className="border-b-2 border-transparent hover:text-gray-300 hover:border-gray-300 pb-1 transition duration-300 mt-2 mx-4">Home</a>
            <a href="#" className="border-b-2 border-transparent hover:text-gray-300 hover:border-gray-300 pb-1 transition duration-300 mt-2 mx-4">About</a>
            <a href="#" className="border-b-2 border-transparent hover:text-gray-300 hover:border-gray-300 pb-1 transition duration-300 mt-2 mx-4">Contact Us</a>
            <a href="#" className="border-b-2 border-transparent hover:text-gray-300 hover:border-gray-300 pb-1 transition duration-300 mt-2 mx-4">Blog</a>
            <a href="#" className="border-b-2 border-transparent hover:text-gray-300 hover:border-gray-300 pb-1 transition duration-300 mt-2 mx-4">Reviews</a>
          </div>
          <div className="mt-10 flex items-center">
            <a href="https://facebook.com" className="cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4">
              
               
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
            </a>
            <a href="https://twitter.com" className="cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
            </a>
            <a href="https://youtube.com" className="cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg> 
            </a>
            <a href="https://github.com/AbuSuraj" className="cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4">
                <img src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/abu-bokor-suraj/" className="cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4">
                <img src={linkedIn} alt="github" />
            </a>
          </div>
          <p className="text-center mt-10 font-medium tracking-wide text-sm text-gray-600">
            &copy; Copyright 2020, Treact Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
