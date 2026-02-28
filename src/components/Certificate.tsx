import NPTEL from "../assets/NPTEL.pdf"
import Coursera from "../assets/Coursera.pdf"
import Springboard from "../assets/Springboard.pdf"

function Certificates() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
        My Certificates
      </h1>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-10">

        <div className="relative border-l-4 border-blue-500 pl-8 space-y-10">

          <div className="relative">

            <div className="absolute -left-[38px] top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>

            <h2 className="text-xl font-bold text-blue-600">
              Google Data Analytics
            </h2>

            <p className="text-gray-700">
              Platform: Coursera
            </p>

            <p className="text-gray-600">
              Year: 2023
            </p>

            <p className="text-gray-500">
              Learned data analysis, visualization, SQL, and data-driven decision making.
            </p>

            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
              <a
                href={Coursera}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                view Certificate
              </a>
          </button>

          </div>


          <div className="relative">

            <div className="absolute -left-[38px] top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>

            <h2 className="text-xl font-bold text-blue-600">
              Programming Fundamentals Using Python
            </h2>

            <p className="text-gray-700">
              Platform: Infosys Springboard
            </p>

            <p className="text-gray-600">
              Year: 2025
            </p>

            <p className="text-gray-500">
              Learned Python programming, logic building, and problem solving.
            </p>

            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
              <a
                href={Springboard}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                view Certificate
              </a>
          </button>

          </div>


          <div className="relative">

            <div className="absolute -left-[38px] top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>

            <h2 className="text-xl font-bold text-blue-600">
              Introduction to Machine Learning
            </h2>

            <p className="text-gray-700">
              Platform: NPTEL
            </p>

            <p className="text-gray-600">
              Year: 2025
            </p>

            <p className="text-gray-500">
              Learned ML concepts like supervised learning, regression, and classification.
            </p>

            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
              <a
                href={NPTEL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                view Certificate
              </a>
          </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Certificates