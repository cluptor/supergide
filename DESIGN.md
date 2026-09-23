---
name: Autonomous Kinetic Precision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c5'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e928f'
  outline-variant: '#444846'
  surface-tint: '#c6c7c5'
  primary: '#ffffff'
  on-primary: '#2f3130'
  primary-container: '#e2e3e1'
  on-primary-container: '#636563'
  inverse-primary: '#5d5f5d'
  secondary: '#c7c6c6'
  on-secondary: '#303031'
  secondary-container: '#464747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#303030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e3e1'
  primary-fixed-dim: '#c6c7c5'
  on-primary-fixed: '#1a1c1b'
  on-primary-fixed-variant: '#454746'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 4.5rem
    fontWeight: '400'
    lineHeight: 4.75rem
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 2.5rem
    fontWeight: '400'
    lineHeight: 2.75rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 2.75rem
    fontWeight: '400'
    lineHeight: 3rem
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 1.75rem
    fontWeight: '400'
    lineHeight: 2.125rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: 1.875rem
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  mono-technical:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  mono-micro:
    fontFamily: JetBrains Mono
    fontSize: 0.625rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.14em
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an exacting, monochrome technical aesthetic tailored for autonomous B2B enterprise intelligence. Rejecting standard AI tropes—such as soft luminous gradient spheres, saturated violet illumination, and conversational mascot iconography—the interface operates as a high-precision scientific instrument.

The design philosophy synthesizes Swiss International Typographic Style with engineering schematics and laboratory diagnostics:
- **Tone & Mood:** Quietly authoritative, mathematical, hyper-focused, and deliberate. It inspires absolute confidence in mission-critical infrastructure where latency, determinism, and data provenance are paramount.
- **Visual Vocabulary:** Hairline crosshairs (`+`), indexing micro-coordinates (`LOC: 34.02 / 09`), halftone procedural dot densities, and precise structural bounding boxes.
- **Graphic Technique:** Halftone dither transitions replace raster drop shadows to communicate density, probability distributions, and spatial fields.

## Colors

The palette is strictly achromatic, relying entirely on luminance contrast and tonal calibration rather than chromatic saturation:

- **Deep Field Foundations:**
  - Root Canvas: `#0B0B0B` (absorptive deep base)
  - Surface Panel / Shell: `#0D0D0D`
  - Elevated Container / Hover Tier: `#141414`
- **Structural Lines & Grids:**
  - Hairline Borders: `#222222` (default separation rule)
  - Focused / Active Stroke: `#292929`
  - High-Emphasis Structural Division: `#383838`
- **Typographic Tiers:**
  - Primary / Executable: `#F2F2F0` (unbleached stark white, high legibility without harsh eye-strain)
  - Muted / Supporting Meta: `#8A8A8A` (neutralized mid-tone)
  - Micro-data / Coordinate De-emphasis: `#5A5A58`
- **Accents:**
  - Punctual Highlight: `#FFFFFF` (reserved solely for active cursor states, critical state changes, and pinpoint optical intersections).

## Typography

Typographic scale is structured through strict dual-type pairing:

1. **Editorial Neo-Grotesk (`Hanken Grotesk`):**
   - Utilized for large-scale narrative architecture, primary titles, system propositions, and linear reading blocks.
   - Characterized by tight tracking (`-0.03em` to `-0.04em`) on display sizes to evoke Swiss editorial layouts.
   - Font weights are kept lean (regular 400 and medium 500) to maintain crisp, optical clarity against near-black backgrounds.

2. **Monospaced Utility (`JetBrains Mono`):**
   - Drives system telemetry, coordinate references, terminal output, input labels, badge markers, and sequential step notation (`01 / SG-STEP`).
   - Micro-labels (`mono-micro`) utilize uppercase transforms paired with an extreme tracking scale (`0.14em`) to establish clear hierarchy for operational headers.

## Layout & Spacing

The structural layout enforces a rigorous, exposed-grid cadence where architectural framework borders remain visible:

- **Grid Framework:**
  - Desktop: 12-column grid container capped at 1280px or edge-to-edge full width with `margin-lg` lateral gutters.
  - Tablet: 6-column fluid structure with `margin` (2rem) lateral spacing.
  - Mobile: 2-column or 4-column framework with `margin-sm` (1rem) lateral spacing.
- **Structural Hairlines:**
  - Section partitions rely on explicit `1px solid #222222` borders that span full grid dimensions, anchored at intersections by coordinate nodes (`+`).
- **Vertical Rhythm:**
  - Large section transitions use predictable multiples of `space-xl` (e.g., 5rem to 7.5rem) to preserve breathable negative space.
  - Internal card layouts employ tight, dense configurations (`space-sm` to `space-md`) to echo technical hardware instrumentation.

## Elevation & Depth

In keeping with the monochrome technical mandate, this design system omits conventional diffused drop shadows and blur-based glassmorphism:

- **1-Pixel Hairline Containment:**
  Surfaces achieve boundary definition strictly through 1px strokes in `#222222` or `#292929`.
- **Tonal Stepping:**
  Depth is conveyed by shifting surface shades:
  - Base: `#0B0B0B`
  - Container / Grid Module: `#0D0D0D`
  - Layered Sub-module / Terminal Card: `#141414`
  - Interactive / Hover Highlight: `#1A1A1A`
- **Halftone Point-Density Fields:**
  Focal emphasis, depth separation, and dynamic states (e.g., node activity, latency models, execution vectors) are visualized via variable-aperture halftone dot grids (1px to 3px dots rendered in opacity gradients of `#F2F2F0`), replacing raster ambient lighting with graphic precision.
- **Hairline Crosshair Anchors:**
  All floating cards or stacked panels feature micro-registration marks (`+`) positioned at cardinal corners to register visual anchoring on the canvas.

## Shapes

The shape system is strictly sharp (`roundedness: 0`), enforcing mathematical discipline:

- **Zero Radius:** All functional containers, inputs, interactive buttons, modal envelopes, and data displays feature crisp, 90-degree corners (`0px`).
- **Exceptions:**
  - Single-pixel circular coordinate points within schematics.
  - Pill-shaped status indicator dots (`w-1.5 h-1.5 rounded-full`) indicating live agent execution or network status.
- **Structural Integrity:** The unrounded silhouette gives interactive elements the presence of physical industrial panels, architectural blueprints, and scientific computing apparatus.

## Components

### Buttons & Interactive Triggers
- **Primary Execution Button:** Solid `#F2F2F0` background with `#0B0B0B` text. Sharp corners (`0px`), height 40px, padding `0 1.25rem`. Label rendered in `Hanken Grotesk` Medium (`0.875rem`). Hover state shifts background to `#FFFFFF` with an immediate, non-eased color transition.
- **Secondary / Ghost Button:** Transparent background with `1px solid #222222` and `#F2F2F0` text. Hover state shifts border to `#8A8A8A` and background to `#141414`.
- **Terminal Micro-Action:** Text-only button set in `JetBrains Mono` (`0.625rem`), uppercase with trailing arrow (`->`). Hover activates underline rule with `#FFFFFF`.

### Technical Badges & Index Chips
- **Coordinate Tags:** Outlined with `1px solid #222222`, dark base `#0D0D0D`, font `JetBrains Mono` (`0.625rem`), tracking-widest. Preceded by index prefixes (`[ 01 ]`, `SYS // READY`, `STATUS: IDLE`).
- **Live Status Marker:** Features a 6px static or pulsing dot (`#FFFFFF` or `#8A8A8A`) flanked by monospace diagnostic status text.

### Form Inputs & Text Fields
- **Input Architecture:** Sharp-cornered box with `1px solid #222222`, interior `#0B0B0B`, text `#F2F2F0`, font `Hanken Grotesk` (`0.9375rem`). Focus state transitions the border to `#8A8A8A` with no outer glow.
- **Label Structure:** Floating above or inset as a micro-header in `JetBrains Mono` (`0.625rem`, `#8A8A8A`, uppercase), accompanied by optional field indices (`F_01`).

### Selection Controls (Checkboxes & Radios)
- **Checkbox:** 14px × 14px sharp square with `1px solid #383838`. Checked state fills interior with `#F2F2F0` and displays a centered, unrounded `#0B0B0B` micro-pixel mark.
- **Radio Module:** 14px × 14px sharp outer square. Active state embeds a 6px solid `#F2F2F0` inner square.

### Content Cards & Telemetry Modules
- **Modular Cell Card:** Bounded by `1px solid #222222`, surface `#0D0D0D`. Includes explicit corner coordinate markers (`+` at top-left and bottom-right in `#5A5A58`).
- **Schematic Diagrams:** Intent-to-execution pipeline panels connected via hairline directional rules, displaying workflow step identifiers (`NODE_01 -> AGENT_DISPATCH -> VALIDATION`) alongside interactive step logs.

### Data Tables & Lists
- **Tabular Rows:** Horizontal 1px border dividers in `#222222`. No zebra striping; hovering a row highlights its background to `#141414` while converting leading row index markers to `#FFFFFF`.