import logo from "./logo.svg";
import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import deved from "./images/dev-ed-wave.png";
import design from "./images/design.png";
import code from "./images/code.png";
import consulting from "./images/consulting.png";
import web1 from './images/web1.png'
import web2 from './images/web2.png'
import web3 from './images/web3.png'
import web4 from './images/web4.png'
import web5 from './images/web5.png'
import web6 from './images/web6.png'




function App() {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Developed by</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-10"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Anand Iyer
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Consultant, Entreprenuer and Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto mx-w-xl">
              Get in touch to supercharge your digital strategy
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>

          <div className="relative mx-auto bg-gradient-to-t from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <img src={deved} className="" />
          </div>
        </section>
        <section>
          <div className="mx-auto mx-w-5xl">
            <h3 className="text-3xl py-1 text-center p-10 m-5">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 ">
              Experienced Digital Marketer with a demonstrated history of
              working in the top Health and Nutrition, Consumer Products &
              Services and Biotechnology industry. Skilled in Marketing
              Automation, web and social media platforms, search engine
              optimization, pay per click and project management. Strong
              marketing professional with a Master of Engineering (M.Eng.)
              focused in Computer Software Engineering from the University of
              Auckland.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800">
              Looking for a React developer? I'm an experienced React developer
              and can help you with your project from start to finish. I have a
              strong focus on quality and will work with you to make sure your
              project is completed on time and within budget. Contact me today
              for a free consultation!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I specialize in web development, so I know how to create
              beautiful, responsive user interfaces that look great on any
              device. My years of experience have taught me the best practices
              for building high-quality software, so you can be confident that
              your project is in good hands.
            </p>
            <p className="text-2xl py-2 leading-8 text-gray-800">
              Contact me today for a free consultation!
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <img src={design} className="w-100 h-100 mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Website Design Services
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Wireframming</p>
            </div>
          

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <img src={code} className="w-100 h-100 mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Website Development Services
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Wireframming</p>
            </div>
          

          
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <img src={consulting} className="w-100 h-100 mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Web Application/Web Development Consulting Services
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Wireframming</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Experienced Digital Marketer with a demonstrated history of
              working in the top Health and Nutrition, Consumer Products &
              Services and Biotechnology industry. Skilled in Marketing
              Automation, web and social media platforms, search engine
              optimization, pay per click and project management. Strong
              marketing professional with a Master of Engineering (M.Eng.)
              focused in Computer Software Engineering from the University of
              Auckland.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800">
              Looking for a React developer? I'm an experienced React developer
              and can help you with your project from start to finish. I have a
              strong focus on quality and will work with you to make sure your
              project is completed on time and within budget. Contact me today
              for a free consultation!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I specialize in web development, so I know how to create
              beautiful, responsive user interfaces that look great on any
              device. My years of experience have taught me the best practices
              for building high-quality software, so you can be confident that
              your project is in good hands.
            </p>
            <p className="text-2xl py-2 leading-8 text-gray-800">
              Contact me today for a free consultation!
            </p>
          </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 rounded-lg object-cover ">
            <img src={web1} />

          </div>
          <div className="basis-1/3 flex-1 rounded-lg object-cover ">
            <img src={web2} />

          </div>
          <div className="basis-1/3 flex-1 rounded-lg object-cover ">
            <img src={web3} />

          </div>
          <div className="basis-1/3 flex-1 rounded-lg object-cover ">
            <img src={web4} />

          </div>
          <div className="basis-1/3 flex-1 rounded-lg object-cover ">
            <img src={web5} />

          </div>
          <div className="basis-1/3 flex-1 rounded-lg object-cover ">
            <img src={web6} />

          </div>


        </div>


        </section>
      </main>
    </div>
  );
}

export default App;
