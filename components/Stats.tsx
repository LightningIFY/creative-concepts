import FadeIn from "./FadeIn";

export default function Stats() {
  return (
    <section className="section">

      <FadeIn>

        <div className="card p-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-[#c65d7b]">
                70+
              </h3>
              <p>Events Managed</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#c65d7b]">
                8+
              </h3>
              <p>Cities Served</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#c65d7b]">
                3+
              </h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#c65d7b]">
                100%
              </h3>
              <p>Client Satisfaction</p>
            </div>

          </div>

        </div>

      </FadeIn>

    </section>
  );
}