
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <main>
          
      {/* Bio & Portrait Section */}
      <AnimatedSection className="py-section px-margin max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Portrait Placeholder */}
          <div
            className="md:col-span-5 h-[600px] bg-surface-strong border border-hairline relative flex items-center justify-center overflow-hidden"
          >
            <img
              alt="A high-contrast black and white architectural portrait of a professional architect. The subject is framed against a stark, minimalist concrete wall with sharp geometric shadows cast by strong directional lighting. The mood is serious, competent, and modern, aligning with a paper-white and charcoal aesthetic."
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-90"
              data-alt="A high-contrast black and white architectural portrait of a professional architect. The subject is framed against a stark, minimalist concrete wall with sharp geometric shadows cast by strong directional lighting. The mood is serious, competent, and modern, aligning with a paper-white and charcoal aesthetic."
              src="profile.webp"
            />
            <div
              className="absolute bottom-4 left-4 bg-canvas px-4 py-2 border border-hairline"
            >
              <span className="font-mono-spec text-mono-spec uppercase text-primary"
                >PORTRAIT PHOTO</span
              >
            </div>
          </div>
          {/* Biography & Metrics */}
          <div className="md:col-span-7 flex flex-col justify-between md:pl-lg">
            <div className="space-y-xl">
              <h1
                className="font-display-xl text-display-xl font-light text-primary tracking-tight"
              >
                Synthesizing structural logic with raw spatial emotion.
              </h1>
              <div
                className="space-y-sm font-body-md text-body-md font-light text-body max-w-2xl"
              >
                <p>
                  I am an architectural designer focused on the intersection of
                  brutalist massing and hyper-functional spatial planning. My
                  work strips away decorative elements to reveal the inherent
                  beauty of raw materials—concrete, steel, and light.
                </p>
                <p>
                  Grounded in technical rigor, every project begins as a
                  structural exercise before evolving into an experiential
                  envelope. I believe architecture should assert its presence
                  quietly, providing a stark, honest backdrop to human activity
                  rather than competing with it.
                </p>
              </div>
            </div>
            {/* Technical Spec Rail */}
            <div
              className="mt-section bg-surface-soft border-t border-b border-hairline py-md px-margin w-full"
            >
              <h3
                className="font-mono-spec text-mono-spec text-muted mb-md uppercase tracking-widest"
              >
                PROFILE METRICS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <div className="flex flex-col gap-xs">
                  <span className="font-mono-spec text-mono-spec text-muted"
                    >LOCATION</span
                  >
                  <span
                    className="font-mono-spec text-mono-spec text-primary uppercase"
                    >Manila, PH</span
                  >
                </div>
                <div className="flex flex-col gap-xs">
                  <span className="font-mono-spec text-mono-spec text-muted"
                    >EDUCATION</span
                  >
                  <span
                    className="font-mono-spec text-mono-spec text-primary uppercase"
                    >B.S. Architecture, FEU</span
                  >
                </div>
                <div className="flex flex-col gap-xs">
                  <span className="font-mono-spec text-mono-spec text-muted"
                    >DISCIPLINES</span
                  >
                  <span
                    className="font-mono-spec text-mono-spec text-primary uppercase"
                    >Structural Brutalism<br />Urban Spatial Design</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* Full Bleed Anchor Image */}
      <AnimatedSection
        className="w-full h-[716px] border-t border-hairline overflow-hidden relative"
      >
        <img
          alt="A sweeping architectural 3D render of a massive, raw concrete brutalist structure. The geometry is sharp, monolithic, and imposing, set under a stark, overcast white sky. The lighting is diffuse but creates deep, high-contrast shadows within the architectural recesses. The aesthetic is extremely minimalist, focusing on texture, scale, and paper-white and charcoal tones."
          className="w-full h-full object-cover filter grayscale contrast-125"
          data-alt="A sweeping architectural 3D render of a massive, raw concrete brutalist structure. The geometry is sharp, monolithic, and imposing, set under a stark, overcast white sky. The lighting is diffuse but creates deep, high-contrast shadows within the architectural recesses. The aesthetic is extremely minimalist, focusing on texture, scale, and paper-white and charcoal tones."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRc_tF_9yys-1DX3NiuDSewIL6tblC22XzrXkhycQqNwTWEi5k7PFfm3IEWAvNRlQzm9emEwdbE2_3AD76FsOJIuaxJpKFxyYQBbuUxP6YjT-Sdo89A6zTBNssXmgSLLLrHXlMngnu6_X1oC0Aqh-P-T2xCpb2gElXPXzgOmkNrpditTzqxhoEgEvDlQpmhWBxtrD5BDZFhQ4uJvBUSbWy4UWGt5MmgoEiTwaUm3tPyyFJ1YmXl8wE3yoMy_qIrTqYCMa2qz9DlD14"
        />
      </AnimatedSection>
    

    </main>
  );
}
