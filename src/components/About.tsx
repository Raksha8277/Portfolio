import profile from "../assets/profile.jpg"
import resume from "../assets/Raksha-Resume.pdf"

function About() {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-10"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
          <img
            src={profile}
            alt="Raksha"
            className="
              w-80 
              h-80 
              rounded-full 
              object-cover 
              border-4 
              border-cyan-400
              shadow-[0_0_40px_rgba(34,211,238,0.6)]
            "
          />
        </div>


        <div>

          <h1 className="text-blue-500 text-4xl font-bold mb-4">
            Raksha
          </h1>

          <h1 className="text-blue-500 text-2xl font-bold mb-4">
            Software Engineer
          </h1>

          <p className="text-gray-800 mb-6 leading-relaxed">
            Hello, I am a passionate Software Engineer specializing in building
            modern, responsive, and scalable web applications using React,
            TypeScript, and Tailwind CSS. I enjoy solving real-world problems
            and creating clean, efficient user interfaces.
          </p>


          <div className="space-y-3 text-lg">

            <p>
              <span className="text-cyan-800 font-semibold">
                Name:
              </span>{" "}
              <span className="text-gray-700 font-medium">
                Raksha
              </span>
            </p>

            <p>
              <span className="text-cyan-800 font-semibold">
                Location:
              </span>{" "}
              <span className="text-gray-700 font-medium">
                Udupi, Karnataka
              </span>
            </p>

            <p>
              <span className="text-cyan-800 font-semibold">
                Email:
              </span>{" "}
              <span className="text-gray-700 font-medium">
                raksha@email.com
              </span>
            </p>

            <p>
              <span className="text-cyan-800 font-semibold">
                Role:
              </span>{" "}
              <span className="text-gray-800 font-medium">
                Software Engineer
              </span>
            </p>

          </div>

          <a
            href={resume}
            download="Raksha-Resume.pdf"
            className="
              inline-block
              mt-8
              bg-cyan-500
              hover:bg-cyan-600
              px-6
              py-3
              rounded-lg
              font-semibold
              transition
              shadow-lg
            "
          >
            Download CV
          </a>

        </div>

      </div>
    </section>
  )
}

export default About