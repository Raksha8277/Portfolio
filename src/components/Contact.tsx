function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-10">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact 
        </h1>

        <p className="mb-4">
          <span className="font-semibold text-gray-700">Email:</span><br />
          <a
            href="mailto:nbraksha@email.com"
            className="text-blue-500 hover:underline"
          >
            nbraksha@email.com
          </a>
        </p>

        <p className="mb-4">
          <span className="font-semibold text-gray-700">Contact:</span><br />
          <a
            href="tel:+8277747794"
            className="text-blue-500 hover:underline"
          >
            +91 8277747794
          </a>
        </p>

        <p className="mb-4">
          <span className="font-semibold text-gray-700">LinkedIn:</span><br />
          <a
            href="https://www.linkedin.com/in/raksha-naik20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/YOUR-LINKEDIN-USERNAME
          </a>
        </p>

        <p className="mb-4">
          <span className="font-semibold text-gray-700">GitHub:</span><br />
          <a
            href="https://github.com/Raksha8277"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            github.com/Raksha8277
          </a>
        </p>

      </div>

    </section>
  )
}

export default Contact