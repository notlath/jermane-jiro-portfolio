import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main>
      <AnimatedSection className="px-margin md:px-margin py-section flex flex-col justify-center min-h-[716px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 lg:col-span-9 flex flex-col items-start gap-lg">
            <h1 className="font-display-xl text-display-xl text-primary max-w-4xl">
              I am an architecture student at Far Eastern University, exploring
              the intersection of structural brutalism and modern spatial
              design.
            </h1>
            <a
              className="bg-ink text-on-primary font-button text-button uppercase tracking-[1px] py-[16px] px-[32px] rounded-none hover:bg-surface-dark transition-colors inline-block mt-md"
              href="resume-page.html"
            >
              VIEW RESUME
            </a>
          </div>
        </div>
      </AnimatedSection>
      {/* Project Grid */}
      <AnimatedSection className="px-margin pb-section flex flex-col gap-section">
        {/* Project 1: Sikodiwa */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 lg:col-span-9 bg-surface-soft relative aspect-[16/9] overflow-hidden group border border-hairline">
            <img
              alt="Project render"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="A highly detailed architectural 3D render of a modern level II hospital facade. The design features stark, raw concrete brutalist elements contrasted with expansive pristine glass curtain walls. Set against a paper-white minimalist background with sharp high-key lighting, casting crisp, geometric shadows. The aesthetic is extremely technical, conveying authority and premium architectural visualization."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0l5fo3XkIjn43msY8fTD69cQ_6aPV3S241UnMpvOIs-MxGGLWmoKugCv6SYw3h7IKSPl2yrgQdL7CpQPLB4UPnVTRGAjK-R6R2lSpWXB8SXdsMwSIJsf4Zln4wSf3TYKyg1Fq73zlnSvT5NBQIJ1Hg2S3eJtD9yXDXplNIALAK547PvavxuuoLLzdStCQOo4LqDx7h5RjY7aKC7o2g7woKCPutHD0-EmKO262TkeC7MUVATbA_gTR_A-COUAsZCk6Oca6-CCSwHfl"
            />
          </div>
          <div className="md:col-span-4 lg:col-span-3 bg-surface-soft p-lg border border-hairline flex flex-col justify-between">
            <div>
              <h2 className="font-display-md text-display-md text-primary mb-md">
                Sikodiwa: Level II Hospital
              </h2>
              <div className="font-body-md text-body-md text-body mb-lg space-y-2">
                <p>
                  • Designed a proposed Level II Hospital in Taytay, Rizal,
                  integrating biophilic design strategies like natural light
                  corridors and open circulation to enhance conceptual patient
                  healing environments.
                </p>
                <p>
                  • Produced precise site plans and multi-level floor plans in
                  AutoCAD, applying code-compliant spatial organization across
                  clinical, support, and public zones.
                </p>
                <p>
                  • Built detailed 3D architectural models in SketchUp and
                  generated photorealistic renders in D5 Render, delivering
                  presentation-ready visualizations for academic critique
                  panels.
                </p>
              </div>
            </div>
            <div className="font-mono-spec text-mono-spec text-primary flex flex-col gap-sm border-t border-hairline pt-md mt-auto">
              <div className="flex justify-between">
                <span className="text-muted">Type:</span>
                <span className="">Architectural Design 7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Tools:</span>
                <span className="text-right">AutoCAD, SketchUp, D5 Render</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Role:</span>
                <span className="">Design Lead</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Year:</span>
                <span className="">2023</span>
              </div>
            </div>
          </div>
        </article>
        {/* Project 2: Neo-classical Domestic Airport */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 lg:col-span-3 bg-surface-soft p-lg border border-hairline flex flex-col justify-between order-2 md:order-1">
            <div>
              <h2 className="font-display-md text-display-md text-primary mb-md">
                Neo-classical Domestic Airport
              </h2>
              <div className="font-body-md text-body-md text-body mb-lg space-y-2">
                <p>
                  • Designed a Neo-classical domestic airport terminal in
                  Tuguegarao, synthesizing efficient spatial planning for
                  passenger circulation with classical architectural principles,
                  including symmetrical massing, colonnaded facades, and
                  ornamental detailing.
                </p>
                <p>
                  • Produced a complete construction document set in AutoCAD,
                  including floor plans, elevations, and building sections,
                  demonstrating technical drafting proficiency at large scale
                  public facility typology.
                </p>
              </div>
            </div>
            <div className="font-mono-spec text-mono-spec text-primary flex flex-col gap-sm border-t border-hairline pt-md mt-auto">
              <div className="flex justify-between">
                <span className="text-muted">Type:</span>
                <span className="">Architectural Design 8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Tools:</span>
                <span className="text-right">AutoCAD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Scale:</span>
                <span className="">Large</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Year:</span>
                <span className="">2024</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 lg:col-span-9 bg-surface-soft relative aspect-[16/9] overflow-hidden group border border-hairline order-1 md:order-2">
            <img
              alt="Project render"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="A sweeping, wide-angle 3D visualization of an expansive airport terminal interior. The structure merges rigid neo-classical columns and symmetry with modern exposed steel trusses. Rendered in a strict palette of stark whites, charcoal grays, and deep blacks. Lighting is directional and dramatic, creating a technical drafting atmosphere reminiscent of premium architectural monographs."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1b_QI50T88BqELb6EXHLLC1VZLqw_3NYTQpMDRv0ZL97k7MeWWYGKlL8uq6XEkYEHCGSSqYIyBSa9s9Wacx3Ipmq4knpF3ZbTXX1FgaNKlKJ5evxPOa79IwV254uSAsnB5ZAn-v9feR4YEgwGn5_2LtjBEmtPX16H4UL3WVWyE_jgKQruZe-_VBkj0xzvg_ybFG4XwPBcQZBiW88q-Guh-jtAnDKex_W5QeTlCogkf3k2YRBM5NLeX5-N6iCFkdPT-8KrahqNF3H6"
            />
          </div>
        </article>
        {/* Project 3: Two-Storey Residential House */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 lg:col-span-3 bg-surface-soft p-lg border border-hairline flex flex-col justify-between order-2 md:order-1">
            <div>
              <h2 className="font-display-md text-display-md text-primary mb-md">
                Two-Storey Residential House
              </h2>
              <div className="font-body-md text-body-md text-body mb-lg space-y-2">
                <p>
                  • Modeled a complete two-storey residential structure in
                  Autodesk Revit using BIM workflows, applying parametric design
                  tools to coordinate architectural documentation across floor
                  plans, sections, and elevations.
                </p>
                <p>
                  • Drafted supplementary floor plans in AutoCAD to complement
                  and validate BIM model geometry, ensuring consistency between
                  design intent and technical drawings.
                </p>
                <p>
                  • Generated photorealistic architectural renders directly from
                  the Revit model, streamlining the
                  documentation-to-visualization pipeline and demonstrating
                  proficiency in BIM-integrated presentation.
                </p>
              </div>
            </div>
            <div className="font-mono-spec text-mono-spec text-primary flex flex-col gap-sm border-t border-hairline pt-md mt-auto">
              <div className="flex justify-between">
                <span className="text-muted">Type:</span>
                <span className="">Computer Aided Design 2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Tools:</span>
                <span className="text-right">AutoCAD, Revit</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 lg:col-span-9 bg-surface-soft relative aspect-[16/9] overflow-hidden group border border-hairline order-1 md:order-2">
            <img
              alt="Project Render"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1b_QI50T88BqELb6EXHLLC1VZLqw_3NYTQpMDRv0ZL97k7MeWWYGKlL8uq6XEkYEHCGSSqYIyBSa9s9Wacx3Ipmq4knpF3ZbTXX1FgaNKlKJ5evxPOa79IwV254uSAsnB5ZAn-v9feR4YEgwGn5_2LtjBEmtPX16H4UL3WVWyE_jgKQruZe-_VBkj0xzvg_ybFG4XwPBcQZBiW88q-Guh-jtAnDKex_W5QeTlCogkf3k2YRBM5NLeX5-N6iCFkdPT-8KrahqNF3H6"
              data-alt="An architectural render of a modern two-storey residential house."
            />
          </div>
        </article>
      </AnimatedSection>
      {/* Footer */}
    </main>
  );
}
