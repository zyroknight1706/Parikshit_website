const posts = [
  {
    id: 1,
    title: 'Attitude Determination and Control Subsystem',
    href: '/subsystems/ADCS',
    description:
      'The Attitude Determination and Controls subsystem or ADCS is at the heart of the satellite\'s mission, overseeing crucial aspects, from orbit design to spacecraft orientation. We are responsible for:',
    category: { title: 'Orbital Physics and Controls' },
  },
  {
    id: 2,
    title: 'Communications and Ground Stations Subsystem',
    href: '/subsystems/COMMS',
    description:
      'The Communications and Ground Station Subsystem or COMMS is responsible for the team to establish a communication link between the Ground Station and the Satellite. The subsystem deals with making RF modules, building antennae, data processing and tracking satellites from PAGOS. The main motto is to design the system in such a way that there always exists a strong link with minimal interference.',
    category: { title: 'RF Electronics, Electromagnetics and Communications' },
  },
  {
    id: 3,
    title: 'Electronics and Power Subsystem',
    href: '/subsystems/EPS',
    description:
      'The Electronics and Power Subsystem or EPS is responsible for the generation, distribution and regulation of power on the satellite. In addition to this, we also design all onboard circuitry and PCBs inhouse.',
    category: { title: 'Electronics' },
  },
  {
    id: 4,
    title: 'Onboard Data Handling Subsystem',
    href: '/subsystems/ODHS',
    description:
      'The On-Board Data Handling Subsystem (ODHS) is a critical component of satellite systems, designed to ensure the seamless and orderly functioning of all satellite parts. It plays a vital role in managing the flow of data, maintaining communications, and ensuring the satellite operates smoothly throughout its mission.',
    category: { title: 'Firmware, operating system and embedded system' },
  },
  {
    id: 5,
    title: 'Payload Subsystem',
    href: '/subsystems/PAYLOAD',
    description:
      'Our satellite mission features two innovative Payloads: a thermal imaging camera and an electrodynamic tether, each designed to push the boundaries of space technology.',
    category: { title: 'Image Processing, AI, and Plasma Physics' },
  },
  {
    id: 6,
    title: 'Structures, Thermals and Mechanisms Subsystem',
    href: '/subsystems/STMS',
    description:
      'The mechanical subsystem in Parikshit consists of three segments: Structures, Thermals and Mechanisms. The broad function of this subsystem is to design the body of the satellite and mount all components on it, shielding them well from vibration and excessive temperatures. It manages control of the internal thermal environment at all times and designs mechanisms crucial to the working of components.',
    category: { title: 'Mechanical' },
  },
  {
    id: 7,
    title: 'Administration Subsystem',
    href: '/subsystems/Admin',
    description:
      'At the heart of our organization\'s efficiency lies the Operations and Administration Subsystem. This integral part of our team ensures that all aspects of our digital presence run smoothly, with a focus on the following key areas:',
    category: { title: 'Project Management' },
  },
];

export default function Recruitments() {
  return (
    <div id="recruitments" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* LIVE RECRUITMENTS container */}
        {/*<div className="bg-indigo-600 rounded-lg shadow-lg p-8 text-white max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-4">LIVE RECRUITMENTS</h3>*/}

          {/* Center-aligned recruitment message 
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg leading-7 font-medium text-center mb-4">
              We are Recruiting!!! Apply Now to be a part of our team
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfO_q-lPqBKL3tSuFeKCV07usOd0RuVGW7sQLgZX1I3WvNnug/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300 text-center"
            >
              Apply Now
            </a>
          </div>
        </div>*/}

        {/* Center-align heading and paragraph 
        <div className="text-center mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
            Recruitment Challenges
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Learn about all our subsystems, and then click to know more about the subsystem that
            you're interested in and their Recruitment Challenge.
          </p>
        </div>*/}

        {/* Urgency notice 
        <div className="text-center mt-16">
          <span className="text-indigo-600 text-2xl">Hurry Up! </span>
          <br />
          <br />
          <strong className="text-indigo-600 text-xl">
            The last submission for the recruitment challenge will be accepted on 11
            <sup>th</sup> September 11:59 pm
          </strong>
          <br />
          <br />
        </div>*/}

        {/* Grid layout for posts with background video */}
        <div className="relative mx-auto mt-10 max-w-7xl pt-10 sm:mt-16 sm:pt-16 border-t-2 border-indigo-600">

          {/* Overlay content */}
          <div className="relative grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between bg-black bg-opacity-70 p-6 rounded-lg"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category.title}
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-black leading-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white rounded-lg p-2">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-white font-extrabold">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
