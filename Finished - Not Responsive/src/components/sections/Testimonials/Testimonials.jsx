import { testimonials } from "../../../utils/constants";
import Testimonial from "./Testimonial";

function Testimonials() {
  return (
    <section className="m-auto py-24 max-w-[90rem]">
      <h2 className="px-24 pb-16 font-bold text-[3.5rem]/[4rem] text-primary-500 tracking-tight">
        Listen to what our{" "}
        <span className="underline underline-offset-2 decoration-8 decoration-accent-500">
          satisfied
        </span>
        <br className="block" />
        clients have to say
      </h2>

      <div className="relative">
        {/* testimonial row 1 */}
        <div className="top-0 left-0 z-10 absolute bg-gradient-to-r from-white to-transparent w-64 h-full" />
        <div className="top-0 right-0 z-10 absolute bg-gradient-to-l from-white to-transparent w-64 h-full" />

        <div className="bg-white mb-6 whitespace-nowrap overflow-hidden">
          <div className="inline-block whitespace-nowrap animate-translate-x-reverse">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
          <div className="inline-block whitespace-nowrap animate-translate-x-reverse">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
        </div>

        <div className="bg-white whitespace-nowrap overflow-hidden">
          <div className="inline-block whitespace-nowrap animate-translate-x-reverse-slowed">
            {testimonials.slice(4).map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
          <div className="inline-block whitespace-nowrap animate-translate-x-reverse-slowed">
            {testimonials.slice(4).map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
