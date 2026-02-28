function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6">

  
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
        My Projects
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

 
        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">

          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Life Insurance Premium Prediction
          </h2>
          

          <p className="text-gray-600 mb-4">
            A machine learning project that predicts life insurance premiums 
            based on customer details such as age, health condition, income, 
            and lifestyle. This helps insurance companies estimate accurate premiums.
          </p>

          <div className="mb-4">
            <span className="text-sm font-semibold text-blue-500">
              Technologies:
            </span>
            <p className="text-gray-600">
              Python, Machine Learning, Pandas, NumPy, Scikit-learn
            </p>
          </div>

          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
            <a
            href="https://github.com/Raksha8277/Life-Insurance-Premium-Prediction"
            target="_blank"
            rel="noopener noreferrer"
          >
            view project
          </a>
          </button>

        </div>


        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">

          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Brain Tumor Detection and Segmentation
          </h2>

          <p className="text-gray-600 mb-4">
            A deep learning project that detects and segments brain tumors 
            from MRI images using CNN for detection and U-Net++ for precise 
            tumor segmentation.
          </p>

          <div className="mb-4">
            <span className="text-sm font-semibold text-blue-500">
              Technologies:
            </span>
            <p className="text-gray-600">
              Python, CNN, U-Net++, Deep Learning, TensorFlow, OpenCV
            </p>
          </div>

          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
            <a
            href="https://github.com/Raksha8277/Brain-Tumor-detection-and-Segmentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            view project
          </a>
          </button>

        </div>

      </div>

    </section>
  )
}

export default Projects