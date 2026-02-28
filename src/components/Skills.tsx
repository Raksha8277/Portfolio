function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-10">

      <div className="max-w-5xl w-full">

      
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
          My Skills
        </h1>

        <div className="grid md:grid-cols-2 gap-16">

         
          <div className="bg-white shadow-lg rounded-xl p-8">

            <h2 className="text-2xl font-semibold text-blue-500 mb-8">
              Coding Skills
            </h2>

            <div className="relative border-l-4 border-blue-500 pl-6 space-y-8">

             
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">Python</h3>
                <p className="text-gray-600">Backend development and data processing</p>
              </div>

             
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">SQL</h3>
                <p className="text-gray-600">Database management and queries</p>
              </div>

             
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">HTML</h3>
                <p className="text-gray-600">Structure and layout of web pages</p>
              </div>

             
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">CSS</h3>
                <p className="text-gray-600">Responsive and modern UI design</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">JavaScript</h3>
                <p className="text-gray-600">Dynamic web development and interactivity</p>
              </div>

            </div>

          </div>


          <div className="bg-white shadow-lg rounded-xl p-8">

            <h2 className="text-2xl font-semibold text-blue-500 mb-8">
              Tools & Frameworks
            </h2>
          
            <div className="relative border-l-4 border-blue-500 pl-6 space-y-8">
             
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">React</h3>
                <p className="text-gray-600">Component-based UI development</p>
              </div>

              
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">TypeScript</h3>
                <p className="text-gray-600">Typed JavaScript for better development experience</p>
              </div>

             
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">Tailwind CSS</h3>
                <p className="text-gray-600">Utility-first CSS framework</p>
              </div>

              
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">Visual Studio Code</h3>
                <p className="text-gray-600">Popular code editor for development</p>
              </div>

              
              <div className="relative">
                <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">GitHub</h3>
                <p className="text-gray-600">Version control and collaboration platform</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;