export default function Stats() {
  return (
    <section className="section">

      <div className="bg-zinc-900 rounded-3xl p-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">
              70+
            </h3>

            <p className="mt-3 text-gray-400">
              Events Managed
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">
              5+
            </h3>

            <p className="mt-3 text-gray-400">
              Cities Served
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">
              3+
            </h3>

            <p className="mt-3 text-gray-400">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">
              100%
            </h3>

            <p className="mt-3 text-gray-400">
              Client Satisfaction
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}