
import AnimatedSection from "@/components/AnimatedSection";

export default function Resume() {
  return (
    <main className="max-w-[1440px] mx-auto px-margin py-section">
          
      {/* Resume Header */}
      <header
        className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-hairline pb-md mb-section gap-4"
      >
        <div>
          <h1 className="font-display-xl text-display-xl text-ink">RESUME</h1>
          <p className="font-mono-spec text-mono-spec text-muted mt-2">
            (+63) 917 999 0827 • jermanejiro.jabson@gmail.com •
            linkedin.com/in/jermanejiro/
          </p>
        </div>
        <a
          className="font-mono-spec text-mono-spec text-ink hover:text-signature-drafting transition-colors border border-hairline px-sm py-xs whitespace-nowrap"
          href="/resume.pdf" download="Jermane_Jiro_Jabson_Resume.pdf"
          >DOWNLOAD PDF</a
        >
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-margin">
        {/* Main Content Area */}
        <div className="md:col-span-8 space-y-section">
          {/* Summary Section */}
          <AnimatedSection>
            <h2
              className="font-title-lg text-title-lg text-ink mb-lg border-b border-hairline pb-xs"
            >
              SUMMARY
            </h2>
            <p className="font-body-md text-body-md text-ink">
              Architecture student at Far Eastern University with demonstrated
              proficiency in schematic design, design development, and
              BIM-integrated documentation using AutoCAD, Revit, and SketchUp.
              Experienced in producing site plans, construction drawings, 3D
              models, and photorealistic renders across hospital, residential,
              and airport typologies. Active member of the United Architects of
              the Philippines Student Auxiliary. Seeking an internship to
              contribute technical drafting, site analysis, and spatial planning
              skills to a professional architectural design team.
            </p>
          </AnimatedSection>
          {/* Education Section */}
          <AnimatedSection>
            <h2
              className="font-title-lg text-title-lg text-ink mb-lg border-b border-hairline pb-xs"
            >
              EDUCATION
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-lg">
              <div
                className="md:col-span-1 font-mono-spec text-mono-spec text-muted"
              >
                August 2022 — Present
              </div>
              <div className="md:col-span-3">
                <h3 className="font-title-md text-title-md text-ink">
                  Far Eastern University
                </h3>
                <p className="font-body-md text-body-md text-ink mb-xs gap-2">
                  B.S in Architecture •
                  <span className="text-muted">Manila City, Metro Manila</span>
                </p>
                <div className="bg-surface-soft p-sm inline-block">
                  <span className="font-mono-spec text-mono-spec text-ink"
                    >Current GWA: [Insert Grade]</span
                  >
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-lg">
              <div
                className="md:col-span-1 font-mono-spec text-mono-spec text-muted"
              >
                June 2016 — June 2022
              </div>
              <div className="md:col-span-3">
                <h3 className="font-title-md text-title-md text-ink">
                  Pasig City Science High School
                </h3>
                <p className="font-body-md text-body-md text-ink mb-xs">
                  <span className="text-muted">Pasig City, Metro Manila</span>
                </p>
                <div className="bg-surface-soft p-sm inline-block">
                  <span className="font-mono-spec text-mono-spec text-ink"
                    >GWA: 93.5</span
                  >
                </div>
              </div>
            </div>
          </AnimatedSection>
          {/* Projects Section */}
          <AnimatedSection>
            <h2
              className="font-title-lg text-title-lg text-ink mb-lg border-b border-hairline pb-xs"
            >
              PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-lg">
              <div
                className="md:col-span-1 font-mono-spec text-mono-spec text-muted"
              >
                AutoCAD, SketchUp, D5 Render
              </div>
              <div className="md:col-span-3">
                <h3 className="font-title-md text-title-md text-ink">
                  Sikodiwa: Level II Hospital | Architectural Design 7
                </h3>
                <ul
                  className="list-none space-y-xs font-body-md text-body-md text-body mt-2"
                >
                  <li>
                    — Designed a proposed Level II Hospital in Taytay, Rizal,
                    integrating biophilic design strategies like natural light
                    corridors and open circulation to enhance conceptual patient
                    healing environments.
                  </li>
                  <li>
                    — Produced precise site plans and multi-level floor plans in
                    AutoCAD, applying code-compliant spatial organization across
                    clinical, support, and public zones.
                  </li>
                  <li>
                    — Built detailed 3D architectural models in SketchUp and
                    generated photorealistic renders in D5 Render, delivering
                    presentation-ready visualizations for academic critique
                    panels.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-lg">
              <div
                className="md:col-span-1 font-mono-spec text-mono-spec text-muted"
              >
                AutoCAD, Revit
              </div>
              <div className="md:col-span-3">
                <h3 className="font-title-md text-title-md text-ink">
                  Two-Storey Residential House | Computer Aided Design 2
                </h3>
                <ul
                  className="list-none space-y-xs font-body-md text-body-md text-body mt-2"
                >
                  <li>
                    — Modeled a complete two-storey residential structure in
                    Autodesk Revit using BIM workflows, applying parametric
                    design tools to coordinate architectural documentation
                    across floor plans, sections, and elevations.
                  </li>
                  <li>
                    — Drafted supplementary floor plans in AutoCAD to complement
                    and validate BIM model geometry, ensuring consistency
                    between design intent and technical drawings.
                  </li>
                  <li>
                    — Generated photorealistic architectural renders directly
                    from the Revit model, streamlining the
                    documentation-to-visualization pipeline and demonstrating
                    proficiency in BIM-integrated presentation.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-section">
              <div
                className="md:col-span-1 font-mono-spec text-mono-spec text-muted"
              >
                AutoCAD
              </div>
              <div className="md:col-span-3">
                <h3 className="font-title-md text-title-md text-ink">
                  Neo-classical Domestic Airport | Architectural Design 8
                </h3>
                <ul
                  className="list-none space-y-xs font-body-md text-body-md text-body mt-2"
                >
                  <li>
                    — Designed a Neo-classical domestic airport terminal in
                    Tuguegarao, synthesizing efficient spatial planning for
                    passenger circulation with classical architectural
                    principles, including symmetrical massing, colonnaded
                    facades, and ornamental detailing.
                  </li>
                  <li>
                    — Produced a complete construction document set in AutoCAD,
                    including floor plans, elevations, and building sections,
                    demonstrating technical drafting proficiency at large scale
                    public facility typology.
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
          {/* Organizations Section */}
          <AnimatedSection>
            <h2
              className="font-title-lg text-title-lg text-ink mb-lg border-b border-hairline pb-xs"
            >
              ORGANIZATIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-lg">
              <div
                className="md:col-span-1 font-mono-spec text-mono-spec text-muted"
              >
                July 2023 — Present
              </div>
              <div className="md:col-span-3">
                <h3 className="font-title-md text-title-md text-ink">
                  United Architects of the Philippines Student Auxillary - FEU
                </h3>
              </div>
            </div>
          </AnimatedSection>
        </div>
        {/* Sidebar / Technical Rail */}
        <div className="md:col-span-4">
          <div
            className="bg-surface-soft p-margin sticky top-[100px] border border-hairline"
          >
            <h2
              className="font-mono-spec text-mono-spec text-muted mb-lg uppercase tracking-widest border-b border-hairline pb-xs"
            >
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-sm">
              <div className="flex flex-col border-b border-hairline pb-xs">
                <span className="font-title-md text-title-md text-ink mb-2"
                  >Architectural Software</span
                >
                <span className="font-body-md text-body-md text-muted"
                  >AutoCAD, Revit (BIM), SketchUp, D5 Render.</span
                >
              </div>
              <div className="flex flex-col border-b border-hairline pb-xs">
                <span className="font-title-md text-title-md text-ink mb-2"
                  >Design &amp; Visualization</span
                >
                <span className="font-body-md text-body-md text-muted"
                  >3D Modeling, Photorealistic Rendering, BIM Implementation,
                  Architectural Walkthroughs.</span
                >
              </div>
              <div className="flex flex-col border-b border-hairline pb-xs">
                <span className="font-title-md text-title-md text-ink mb-2"
                  >Core Competencies</span
                >
                <span className="font-body-md text-body-md text-muted"
                  >Schematic Design, Design Development, Site Analysis, Space
                  Planning, Technical Drafting, Construction Documents,
                  Architectural Interiors, Urban Planning</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    

    </main>
  );
}
