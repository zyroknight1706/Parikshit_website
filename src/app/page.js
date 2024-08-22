import Hero from "@/components/Hero"
import Summary from "@/components/Summary";
import Cubesat from "@/components/Cubesat"
import Recruitment from "@/components/Recruitment";
import header from './../../public/header.jpg'
import RoomImg from './../../public/RoomImg.jpg'

const HeroData = {
  bgImg: header,
  readHREF: "#recruitments",
  whiteBg: false,
  mainTitle: "Extending thoughts into space...",
  quote: '"Parikshit is your \'Pariksha\'! Learn well, question deeply. Don\'t take anything for granted. Success will be yours. God Bless, Happy Creating and testing!"',
  addAuth: true,
}

const Quote = () => {
  return (
    <i>But...</i>
  )
}

const UpperDesc = () => {
  return (
    <p className="mt-6 text-xl leading-8 text-stone-200 font-black">
      An interdisciplinary undergraduate student satellite team founded in 2013 at Manipal Institute of Technology, India.<br />
      Developing a <span className='text-indigo-600'>2U-Class Nanosatellite</span> for launch in an Indian Space Research Organisation (ISRO) vehicle. <br />
      We design and develop all subsystems in-house, namely:
    </p>
  )
}

const LowerDesc = () => {
  return (
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    <div className="lg:pr-4">
      <div className="max-w-xl text-xl leading-7 text-stone-200 lg:max-w-lg">
        <ol role="list" className=" text-stone-200 text-3xl">
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-gray-100">ADCS</strong>
            </span>
          </li>
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-gray-100">ODHS</strong>
            </span>
          </li>
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-gray-100">COMMS</strong>
            </span>
          </li>
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-gray-100">PAYLOAD</strong>
            </span>
          </li>
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-gray-100">EPS</strong>
            </span>
          </li>
          <li className="flex gap-x-3">
            <span>
              <strong className="font-semibold text-gray-100">STMS</strong>
            </span>
          </li>
        </ol>
        <p className="mt-8 font-black">
          <span className='bg-indigo-600 p-0.5 bg-clip-border'>We have a Thermal Imaging payload with high accuracy, built-in deorbiting mechanism as an experimental payload, designed for a Polar Low Earth Orbit.</span> <br />
          <br />
          <span className='text-indigo-600'>Mission:</span> Pushing boundaries of student-led space projects and fostering space engineering expertise in India.
        </p>
      </div>
    </div>
  </div>
  )
}

const SummaryData = {
  quote: Quote,
  upperDesc: UpperDesc,
  sideImg: RoomImg,
  lowerDesc: LowerDesc,
}

export default function App() {
  return (
    <>
    <Hero Data={ HeroData } />
    <Summary Data={ SummaryData } />
    <Cubesat />
    <Recruitment />
    </>
  );
}
