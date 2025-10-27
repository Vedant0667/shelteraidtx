"use client";

import { MotionDiv, fadeInUp } from "./Motion";

const testimonials = [
  {
    quote: "Thank you Shelter Aid TX. We appreciate your kindness",
    author: "Ravain Owens",
    organization: "Journey to Dream",
    role: "Director",
    videoUrl: "https://vimeo.com/961584844/1bc1d3e8dd",
  },
  {
    quote: "We are thankful for the donation and for all of your help",
    author: "Our Daily Bread Team",
    organization: "Monsignor King Outreach Center",
    role: "Community Services",
    videoUrl: "https://vimeo.com/1030946527/7062cd25fc",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from the shelters and organizations we work with across Dallas-Fort Worth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <MotionDiv
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.15 }}
              className="border-l-4 border-[var(--color-primary)] pl-6 py-2"
            >
              <div className="mb-4 rounded-lg overflow-hidden">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${testimonial.videoUrl.split('/')[3].split('?')[0]}?h=${testimonial.videoUrl.split('/')[4]}&title=0&byline=0&portrait=0`}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <p className="text-base text-slate-700 leading-relaxed mb-3 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-slate-600">{testimonial.role}</p>
                <p className="text-sm text-[var(--color-primary)] font-semibold mt-1">
                  {testimonial.organization}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
