# Geometric Music Theory Visualizer

## Overview

This project aims to create an interactive web application for exploring and learning music theory concepts through the lens of geometry. It leverages various geometric models, with a primary focus on Dmitri Tymoczko's work, to visualize harmony, voice leading, scales, and musical patterns. The goal is to provide intuitive, dynamic tools that go beyond static diagrams, making complex theoretical ideas more accessible and engaging.

## Core Concepts & Geometric Connections

Understanding the underlying geometric frameworks is key to this project:

### 1. Tymoczko's Geometry (Primary Focus)

Grounded in modern mathematics (topology, orbifolds, geometry) applied specifically to music theory. Key elements to visualize include:

*   **Pitch Space:** Linear representation of pitches.
*   **Pitch-Class Space:** Circular representation (the basis for the Circle of Fifths, modes).
*   **Chord Spaces:** Complex and visually rich multi-dimensional spaces:
    *   **2 Notes (Dyads):** Möbius strips.
    *   **3 Notes (Triads):** Triangular prisms / Tori.
    *   **4 Notes (Tetrachords):** Tesseracts / Hypercubes / related structures.
    *   Visualizing voice leading as continuous paths within these spaces is central.
*   **Symmetry:** Understanding transposition and inversion as geometric operations (rotations, reflections) within these spaces.
*   **Evenness/Near Evenness:** Visualizing how evenly chords/scales distribute pitches, often represented by their proximity to the center or boundaries of chord spaces.
*   **Lattices:** Discrete graphs (nodes and edges) showing voice-leading connections between chords or scales (e.g., diatonic third/fourth lattices, scale lattices).

### 2. Pythagorean Geometry

Focuses on ratios and proportions, primarily relating string lengths/frequencies to consonant intervals:

*   **Key Ratios:** Octave (2:1), Fifth (3:2), Fourth (4:3).
*   **Visualizations:**
    *   Interactive Monochord diagrams.
    *   Geometric constructions illustrating these ratios.
    *   Connections between these ratios and acoustic consonance ideas discussed in Tymoczko's work.

### 3. Da Vinci's Geometry (More Speculative)

Explores proportions like the Golden Ratio (phi) found in nature and art. Applications to music are often interpretive:

*   **Potential Areas:** Musical form proportions, frequency relationships (less direct), instrument design.
*   **Note:** Direct applications to harmony and counterpoint geometry are less established than Tymoczko's or Pythagorean approaches. Treat as exploratory.

### 4. Sacred Geometry (Also More Speculative)

Involves symbolic patterns like the Flower of Life, Metatron's Cube, and Platonic solids. Connections to music are often metaphorical or cosmological:

*   **Potential Areas:** Mapping notes/scales to geometric forms, exploring "Music of the Spheres" concepts.
*   **Note:** This is further from mainstream geometric music theory. Treat as exploratory.

**Recommendation:** The robust framework from **Tymoczko's geometry** serves as the core of this project, directly addressing harmony and counterpoint. **Pythagorean concepts** are layered in where relevant (intervals, consonance). **Da Vinci and Sacred Geometry** can be potential advanced/exploratory modules, clearly labeled as more interpretive.

## Features: Creative Ways to Learn

This application aims to provide the following interactive tools:

### Interactive Geometric Spaces

*   **Dynamic Circle of Fifths:**
    *   Click notes to highlight intervals, related keys, parallel/relative keys.
    *   Animate chord progressions (e.g., ii-V-I) as movements.
    *   Visualize modes as rotations of the diatonic pattern.
*   **Chord Space Explorer (Tymoczko):**
    *   **2-Note (Möbius Strip):** Plot dyads, draw/animate voice leading paths, visualize interval types as distinct paths, show boundary reflections and wraps.
    *   **3-Note (Prism/Torus - 3D):** Plot triads (styled by type), show common voice leadings as paths, highlight the diatonic "chain", allow user rotation and exploration.
    *   **4-Note (Tesseract/Lattices):** Visualize via projections or simplified lattice diagrams, focusing on core relationships (e.g., Dom7 <-> Dim7).
*   **Scale Lattice Navigator:**
    *   Interactive lattice diagrams (e.g., diatonic, chromatic).
    *   Click nodes (scales) to hear them and see connections (voice leadings, transformations).
    *   Visualize modulations as paths on the lattice.

### Voice Leading Visualizer

*   Input two chords -> visualize minimal voice leading paths in the relevant Chord Space (using Manim animations).
*   Geometrically illustrate decomposition into parallel/contrary motion.
*   Visualize decomposition into scalar and chromatic transposition.

### Pattern Finder & Animator

*   Analyze MIDI/notation input to plot harmonic/melodic movement onto geometric spaces (Circle of Fifths, Chord Spaces).
*   Use Manim to animate these points/paths synchronized with music playback.
*   Highlight recurring geometric patterns (sequences, characteristic progressions).

### Generative Playground

*   Draw paths in geometric spaces -> generate corresponding musical voice leadings.
*   Define start/end chords -> explore and compare different minimal voice leading paths visually and aurally.

### Pythagorean Explorer

*   **Interactive Monochord:** Divide a virtual string by ratios (2:1, 3:2, 4:3) and hear the resulting intervals.
*   **Visual Tuning Comparisons:** Illustrate the Pythagorean comma by stacking pure fifths vs. equal temperament on a circular diagram.

## Technology Stack

*   **Frontend (UI & Interactive Visualizations):**
    *   **Framework:** React, Vue, or Svelte (for dynamic UIs).
    *   **2D Visualization:** `p5.js` (creative coding, simple geometry), Konva/Fabric.js (canvas objects), or SVG (D3.js).
    *   **3D Visualization:** `Three.js` or `Babylon.js` (WebGL for Chord Spaces).
    *   **Music Playback:** Web Audio API, potentially using `Tone.js` library for simplification.
    *   **State Management:** Redux, Zustand, Vuex, Pinia (as needed).
*   **Backend (Logic, Data, Manim Animation):**
    *   **Language:** Python (required for Manim and `music21`).
    *   **Framework:** Flask or Django.
    *   **Animation Engine:** `Manim` (run server-side).
        *   *Workflow:* Frontend request -> Backend API -> Generate Manim script -> Execute Manim -> Serve video output -> Frontend displays video.
    *   **Music Theory Logic:** `music21` (Python library for analysis, transformation, etc.).
    *   **API:** Flask-RESTful, Django REST Framework, or FastAPI.
    *   **(Optional) Task Queue:** Celery with Redis/RabbitMQ for handling long Manim renders asynchronously.
*   **Alternative Manim Approach (Experimental):**
    *   WebAssembly (WASM) with `Pyodide` to potentially run simpler Manim scenes directly in the browser. This is complex, may have performance/compatibility limitations. Server-side rendering is the primary approach.

## Development Plan / Roadmap

### Phase 1: Core Concepts & 2D

*   [ ] Implement interactive Circle of Fifths.
*   [ ] Implement interactive 2D Möbius strip for dyads.
*   [ ] Basic Web Audio playback for notes/intervals.
*   [ ] Setup server-side Manim rendering for simple 2-note voice leadings.
*   [ ] Introduce Pythagorean ratio visualizations (Monochord).

### Phase 2: 3D Chord Spaces & Basic Analysis

*   [ ] Implement interactive 3D visualization for the 3-note chord space (prism/torus).
*   [ ] Plot triads, show diatonic chain in 3D space.
*   [ ] Manim animations for basic 3-note voice leadings.
*   [ ] Add simple analysis: plot short musical inputs onto 2D/3D spaces.

### Phase 3: Lattices & Advanced Concepts

*   [ ] Visualize discrete voice-leading lattices (e.g., diatonic thirds, scales).
*   [ ] Implement interactive scale lattice navigation.
*   [ ] Integrate visualization of scalar/chromatic transposition decomposition.
*   [ ] Explore 4-note spaces (Tesseract visualization/lattices).

### Phase 4: Esoteric Geometry & Refinement

*   [ ] (Optional) Add modules exploring Da Vinci/Sacred Geometry, clearly marked as interpretive.
*   [ ] Refine UI/UX across all modules.
*   [ ] Performance optimize Manim rendering (e.g., caching, async queues).
*   [ ] Add more musical examples and presets.
*   [ ] Consider gamification elements (puzzles, challenges).

## Installation

*(Instructions on how to set up the project locally would go here - e.g., clone repo, install dependencies, run servers)*

```bash
# Example placeholder
git clone <repository-url>
cd geometric-music-theory-visualizer
# Follow specific setup instructions for frontend and backend...




Excellent! You're off to a great start. Your `ng new` output confirms you are using Angular's latest default, which is **standalone components, directives, and pipes**. This means `AppModule` might be very minimal or even non-existent (replaced by bootstrapping a standalone `AppComponent`), and services are often `providedIn: 'root'` or configured in `app.config.ts`. Components are not declared in `NgModule.declarations` arrays. Feature modules will primarily be for routing and logical grouping.

Let's get this blueprint and set of schematics ready for "JamWithSam" (your Geometric Music Theory Visualizer)!

**Important Notes on Standalone Components:**

*   The commands below will generate components. Since your project is configured for standalone, these components will be standalone by default.
*   When generating a feature module with routing (`ng g m features/my-feature --routing --route=my-feature --module=app`), it correctly sets up lazy loading for the routes defined within `my-feature-routing.module.ts`.
*   The `--module` flag when generating a component (e.g., `ng g c features/my-feature/my-comp --module=my-feature`) mainly affects the file path generation and ensures the component is created within that feature's folder structure. It doesn't add it to an `NgModule`'s `declarations` anymore in a fully standalone setup.

---

## Phase 0: Initial Setup (You've done `ng new`)

**Install Core Dependencies:**
Navigate into your project directory (`cd jamwithsam`) if you haven't already.

```bash
npm install tonal tone gsap three d3
npm install -D @types/three @types/d3
# Optional: A UI component library (Angular Material example)
# npm install @angular/material @angular/cdk
# If you choose a UI lib, follow its specific setup instructions.
```

---

## Phase 1: Core & Shared Structure Generation

**1. Core Services & Models:**
(We'll still use a `CoreModule` for logical grouping, but services will be `providedIn: 'root'`)

```bash
# No CoreModule strictly needed for services if providedIn: 'root', but for organization:
ng generate module core --flat
# The --flat means core.module.ts is in app/, not app/core/
# If app.module.ts doesn't exist due to full standalone app component, then just organize folders.

# Services (will be providedIn: 'root' by default)
ng generate service core/services/music-theory --skip-tests
ng generate service core/services/audio --skip-tests
ng generate service core/services/geometry-mapper --skip-tests
ng generate service core/services/animation-coordinator --skip-tests # (Re-named from 'animation' for clarity)
ng generate service core/services/state-manager --skip-tests # Simple state service if not using NgRx initially

# Interfaces/Models (create these files manually or use `ng g interface`)
# mkdir -p src/app/core/models
# (Manually create files like music.models.ts, geometry.models.ts in src/app/core/models/)
ng generate interface core/models/music-constructs --type=model
ng generate interface core/models/geometry-constructs --type=model
```

**2. Shared Components, Pipes, Directives:**
(Shared components will be standalone. The `SharedModule` can be used to group and re-export them for convenience if you prefer, or you can import them directly where needed.)

```bash
ng generate module shared --routing=false
# Components (will be standalone)
ng generate component shared/components/note-selector --skip-tests # --module=shared if you want to group under shared module logic, otherwise standalone implies direct import
ng generate component shared/components/chord-input --skip-tests
ng generate component shared/components/play-button --skip-tests
ng generate component shared/components/parameter-slider --skip-tests
ng generate component shared/components/info-panel --skip-tests
ng generate component shared/components/visualization-container --skip-tests # Wrapper for 2D/3D canvases
ng generate component shared/components/loading-spinner --skip-tests

# Pipes (will be standalone)
ng generate pipe shared/pipes/roman-numeral --skip-tests
ng generate pipe shared/pipes/pitch-class-to-name --skip-tests

# Directives (will be standalone)
ng generate directive shared/directives/draggable --skip-tests
ng generate directive shared/directives/audio-on-hover --skip-tests
```

---

## Phase 2: Feature Modules Generation

For each feature module, we'll create the module with its own routing file. Components within these feature modules will also be standalone.

**1. Tymoczko Spaces Module**

```bash
ng generate module features/tymoczko-spaces --routing --route=tymoczko --module=app
# If app.module.ts is minimal/gone, --module=app will try to add to app.routes.ts directly or AppConfig.

ng generate component features/tymoczko-spaces/components/dynamic-circle-of-fifths --skip-tests
ng generate component features/tymoczko-spaces/components/mobius-strip-dyad-viewer --skip-tests
ng generate component features/tymoczko-spaces/components/triad-prism-torus-viewer --skip-tests
ng generate component features/tymoczko-spaces/components/tetrachord-tesseract-viewer --skip-tests
ng generate component features/tymoczko-spaces/components/scale-lattice-navigator --skip-tests
ng generate component features/tymoczko-spaces/tymoczko-dashboard --skip-tests # A landing/selector page for this module
```

**2. Voice Leading Module**

```bash
ng generate module features/voice-leading --routing --route=voice-leading --module=app

ng generate component features/voice-leading/components/voice-leading-visualizer-tool --skip-tests
ng generate component features/voice-leading/components/path-comparison-view --skip-tests
ng generate component features/voice-leading/components/decomposition-analyzer --skip-tests # Scalar/Chromatic Transposition
```

**3. Pattern Finder & Animator Module**

```bash
ng generate module features/pattern-finder --routing --route=pattern-finder --module=app

ng generate component features/pattern-finder/components/midi-analyzer-input --skip-tests # For file upload or live input
ng generate component features/pattern-finder/components/harmonic-path-plotter --skip-tests # Plots to existing geometric spaces
ng generate component features/pattern-finder/components/pattern-animation-player --skip-tests
```

**4. Generative Playground Module**

```bash
ng generate module features/generative-playground --routing --route=playground --module=app

ng generate component features/generative-playground/components/geometric-path-drawer --skip-tests
ng generate component features/generative-playground/components/music-generation-engine --skip-tests # The logic component
ng generate component features/generative-playground/components/parameterized-generation-controls --skip-tests
```

**5. Pythagorean Explorer Module**

```bash
ng generate module features/pythagorean-explorer --routing --route=pythagorean --module=app

ng generate component features/pythagorean-explorer/components/interactive-monochord --skip-tests
ng generate component features/pythagorean-explorer/components/tuning-system-comparator --skip-tests # e.g., Pythagorean vs ET
ng generate component features/pythagorean-explorer/components/harmonic-series-visualizer --skip-tests
```

**6. Esoteric Geometry Module (Optional, Advanced)**

```bash
ng generate module features/esoteric-geometry --routing --route=esoteric --module=app

ng generate component features/esoteric-geometry/components/da-vinci-golden-ratio-mapper --skip-tests
ng generate component features/esoteric-geometry/components/sacred-symbol-sonifier --skip-tests # Flower of Life, Metatron's Cube
ng generate component features/esoteric-geometry/components/platonic-solids-harmonizer --skip-tests
```

---

## Phase 3: Blueprint Prompts for Each Module & Key Service/Component

*(This is the detailed description you can save and refer to. Imagine this as your project bible.)*

### Core Structure

#### `core/services/music-theory.service.ts`
*   **Purpose:** Central hub for all music theoretical calculations. Wraps `Tonal.js` and adds custom logic.
*   **Core Logic:**
    *   Note manipulation (enharmonics, MIDI <-> name, frequency).
    *   Interval calculation (quality, size, inversion).
    *   Chord identification, generation, properties (notes, root, quality, inversions).
    *   Scale identification, generation, properties (notes, modes, interval patterns).
    *   Key signature information, related keys.
    *   Progression analysis (detecting common patterns, roman numeral analysis if needed).
    *   Voice leading primitive calculations (e.g., finding nearest tones).
*   **Creative Flourishes:**
    *   Functions to determine "harmonic brightness/darkness" based on mode/chord quality.
    *   Methods to calculate "harmonic distance" between chords/keys in various theoretical frameworks.
    *   Support for microtonal systems or custom tuning definitions in the future.

#### `core/services/audio.service.ts`
*   **Purpose:** Manages all audio playback using `Tone.js`. Provides a clean API for other components.
*   **Core Logic:**
    *   Initialize `Tone.js` context.
    *   Play single notes, chords, scales with specified instrument/timbre, duration, velocity.
    *   Sequence playback with precise timing (e.g., for animating progressions).
    *   Methods to load/select different synthesizers or samples (e.g., sine, square, piano).
    *   Master volume control, basic effects (reverb, delay).
    *   (Optional) MIDI input handling via `Tone.js` to feed into visualizers.
*   **Creative Flourishes:**
    *   Timbre morphing capabilities (e.g., crossfading synth parameters).
    *   Integration with visualization parameters (e.g., chord evenness affects filter cutoff).
    *   Spatial audio effects for 3D visualizations (panning based on geometric position).
    *   Ability to "record" generative sequences as MIDI or audio snippets.

#### `core/services/geometry-mapper.service.ts`
*   **Purpose:** **THE BRAIN.** Translates musical constructs into geometric coordinates/parameters and vice-versa. This encapsulates Tymoczko's math and other geometric mappings.
*   **Core Logic (Tymoczko):**
    *   Pitch to linear coordinate.
    *   Pitch Class to angular coordinate (Circle of Fifths/Chromatic Circle).
    *   Dyads to Möbius strip coordinates (e.g., u,v parameters and logic for edge wrapping/reflection).
    *   Triads to 3D coordinates (Triangular Prism/Torus). Define functions for common chord types (Maj, Min, Dim, Aug, Sus) and their standard positions.
    *   Voice leading paths as geometric trajectories between chord coordinates.
    *   Evenness calculation mapped to a visual property (e.g., distance from center, color intensity).
    *   Tetrachords to projected 4D coordinates or simplified lattice node positions.
*   **Core Logic (Pythagorean):**
    *   Ratio to string division point on monochord.
    *   Stacking fifths for Pythagorean tuning visualizations.
*   **Core Logic (Esoteric - if implemented):**
    *   Mapping notes/scales to vertices of Platonic solids or points on sacred geometry patterns.
*   **Creative Flourishes:**
    *   Functions to define "regions" within geometric spaces (e.g., "diatonic zone" in the triad prism).
    *   Parametric equations for more complex or "expressive" voice leading paths beyond simple straight lines.
    *   "Deformation" functions for geometric spaces based on musical tension or user parameters.

#### `core/services/animation-coordinator.service.ts`
*   **Purpose:** Manages and synchronizes complex animations using `GSAP`. Ensures smooth transitions and potentially choreographs animations across different visual components.
*   **Core Logic:**
    *   Provides utility functions for common GSAP animations (fade, move, scale, color change).
    *   Manages GSAP timelines for sequences.
    *   Interface for components to register elements for animation and trigger animations.
    *   Synchronization with `AudioService` for audio-visual animations.
*   **Creative Flourishes:**
    *   "Physics-lite" animation behaviors (e.g., spring, ease-out-bounce).
    *   Pre-defined animation "styles" or "moods" users can select.
    *   A central timeline scrubber that could control both audio and visual animations.

#### `core/services/state-manager.service.ts`
*   **Purpose:** Simple reactive state management using RxJS `BehaviorSubject`s for global state shared across modules (e.g., current selected chord, active visualization mode, global tempo). Use this before reaching for NgRx if complexity doesn't demand it.
*   **Core Logic:**
    *   `BehaviorSubject` for selected notes, chords, scales, current key, active visualization.
    *   Methods to update these subjects and Observables for components to subscribe to changes.
    *   Could manage user preferences (e.g., color themes, default synth).
*   **Creative Flourishes:**
    *   Undo/Redo stack for certain state changes (e.g., generative steps).
    *   Snapshotting and restoring application state.

#### `shared/components/visualization-container.component.ts`
*   **Purpose:** A wrapper component that standardizes the setup for 2D (SVG/Canvas via D3/Konva) or 3D (WebGL via Three.js) canvases.
*   **Logic:**
    *   Accepts dimensions, type (2D/3D).
    *   Handles canvas creation, resizing.
    *   Provides a clean `ElementRef` for the actual rendering library to attach to.
    *   May include basic camera/scene setup helpers for Three.js.
*   **Creative Flourishes:**
    *   Themed borders or backgrounds that react to the content within.
    *   A "fullscreen" mode toggle.

---

### Feature Modules Blueprint

*(For each component, think about: Inputs, Outputs, Services Used, User Interactions, Core Visual Task)*

#### 1. Tymoczko Spaces Module (`features/tymoczko-spaces/`)

*   **`TymoczkoDashboardComponent`:** A central hub to select and launch different Tymoczko visualizations. Perhaps a visually appealing menu with brief descriptions.
*   **`DynamicCircleOfFifthsComponent`:**
    *   **Logic:** Uses `GeometryMapperService` to plot notes. `MusicTheoryService` for key relationships, modes. `AudioService` for playback. `AnimationCoordinatorService` for smooth transitions.
    *   **Interaction:** Click notes to highlight/play. Select key to show diatonic scale. Buttons to show relative/parallel minor/major. Animate ii-V-I or other progressions. Rotate for modes.
    *   **Visuals:** D3.js or SVG. Color-coding for different functions/modes.
    *   **Creative:** "Historical tunings" overlay. "Modulation pathway tracer" (draw a line from C to Eb, it shows common chords). Aura/glow effects for selected/active elements.
*   **`MobiusStripDyadViewerComponent`:**
    *   **Logic:** `GeometryMapperService` for mapping dyads to Möbius surface (projected 2D or a 3D mesh). `MusicTheoryService` for interval types. `AudioService`. `AnimationCoordinatorService`.
    *   **Interaction:** Input two notes (e.g., via `NoteSelectorComponent`). Plot the dyad. Drag points to show voice leading. Visualize different interval classes as distinct regions or paths. Click to play.
    *   **Visuals:** Three.js for a true 3D Möbius strip, or a clever 2D D3.js/Canvas representation showing wrapping. Points, lines.
    *   **Creative:** Texture the Möbius strip based on interval consonance/dissonance. Animate "ants" crawling along voice-leading paths. "Unfold" the Möbius strip to show its double-cover.
*   **`TriadPrismTorusViewerComponent` (3D):**
    *   **Logic:** `GeometryMapperService` to map triads to 3D prism/torus coordinates. `MusicTheoryService` for chord types (Maj, min, aug, dim, sus). `AudioService`. `AnimationCoordinatorService`.
    *   **Interaction:** Input triads (e.g., via `ChordInputComponent`). Plot them. Style points/shapes by chord type. Draw voice leading paths. Highlight diatonic "chains" or common progressions. Allow user to rotate/zoom the 3D space.
    *   **Visuals:** Three.js. Use distinct geometries/colors for chord types. Lines for voice leading.
    *   **Creative:** "Gravity" wells for consonant chords. Make paths "glow" based on efficiency. User-defined "constellations" of favorite chords. Visualize the "OPR" (Octave, Perfect Fifth, Major Third) lattice embedded within.
*   **`TetrachordTesseractViewerComponent` (3D/Projection):**
    *   **Logic:** `GeometryMapperService` for projecting 4-note chords (tetrachords) from a Tesseract/hypercube or related 4D structures down to 3D/2D. `MusicTheoryService` for common tetrachords (Dom7, Min7, Maj7, Dim7, HDim7).
    *   **Interaction:** Select tetrachord types. Visualize them as nodes in a projected space or as a lattice. Show common voice leadings (e.g., Dom7 <-> Dim7 as a close connection).
    *   **Visuals:** Three.js for 3D projections or simplified lattice diagrams using D3.js/SVG.
    *   **Creative:** Animate rotation through the 4th dimension to see the projection change. Use "depth cues" (fog, transparency) to imply higher dimensions. "Slice" the tesseract to reveal different 3D structures.
*   **`ScaleLatticeNavigatorComponent`:**
    *   **Logic:** `GeometryMapperService` for node positions (scales) and edge connections (voice leadings, transformations). `MusicTheoryService` for scale properties and generating connections.
    *   **Interaction:** Click nodes (scales) to hear, see properties. Highlight connected scales. Animate modulation paths. Filter by scale type (diatonic, pentatonic, hexatonic).
    *   **Visuals:** D3.js force-directed graph or static SVG lattice. Nodes styled by scale properties.
    *   **Creative:** "Harmonic gravity" pulling related scales closer. Show "energy flow" along modulation paths. Allow users to build their own custom scale lattices.

#### 2. Voice Leading Module (`features/voice-leading/`)

*   **`VoiceLeadingVisualizerToolComponent`:**
    *   **Logic:** Takes two chords (from `ChordInputComponent`). Uses `MusicTheoryService` to find potential voice leadings. `GeometryMapperService` to get coordinates in the relevant Chord Space (Möbius, Prism, Tesseract projection). `AnimationCoordinatorService` to animate the path.
    *   **Interaction:** User inputs start/end chords. Select visualization space. See minimal paths animated. Option to see multiple valid paths.
    *   **Visuals:** Integrates with the individual viewer components (Möbius, Prism, etc.) or has its own simplified display.
    *   **Creative:** "Optimal path" highlighting (shortest, smoothest). Gamified: "Find the most efficient voice leading." Show a "ghost" of the original chord positions as one animates to the next.
*   **`DecompositionAnalyzerComponent`:**
    *   **Logic:** Takes a voice leading. `MusicTheoryService` to decompose it into parallel/oblique/contrary motion components, and into scalar/chromatic transpositions (Tymoczko's concepts).
    *   **Interaction:** Input a voice leading (or select one from the visualizer). See a breakdown of its components visually and textually.
    *   **Visuals:** Diagrams, color-coding notes by their motion type.
    *   **Creative:** Animate each decomposed part separately then reassemble. Compare different voice leadings for the same chord change by their decomposition profiles.

#### 3. Pattern Finder & Animator Module (`features/pattern-finder/`)

*   **`MidiAnalyzerInputComponent`:**
    *   **Logic:** Handles MIDI file upload (using `FileReader`, parsing with a library like `Teoria.js`, `music21j` (if available and simple), or a basic MIDI parser) or potentially `navigator.requestMIDIAccess()` for live input. Extracts notes, chords, timings.
    *   **Interaction:** File drop zone or input button. Real-time MIDI device selector.
    *   **Creative:** Auto-detect key and basic formal sections.
*   **`HarmonicPathPlotterComponent`:**
    *   **Logic:** Takes musical data (from MIDI analyzer or user input). Uses `MusicTheoryService` to identify chords/melodic fragments. `GeometryMapperService` to map them to chosen geometric space (Circle, Prism, etc.).
    *   **Interaction:** Choose data source. Select geometric space. See the music "plotted" as points/paths.
    *   **Visuals:** Reuses/embeds relevant viewers from TymoczkoSpaces.
    *   **Creative:** "Heatmap" mode showing frequently visited areas of the geometric space. "Trace" mode that leaves decaying trails.
*   **`PatternAnimationPlayerComponent`:**
    *   **Logic:** Synchronizes audio playback (`AudioService`) of the input music with animation (`AnimationCoordinatorService`) of its path on the geometric plotter.
    *   **Interaction:** Play/pause/scrub. Highlight recurring geometric shapes/motifs in the path.
    *   **Creative:** Allow users to "loop" a recognized pattern. Morph the animation style based on musical dynamics or density.

#### 4. Generative Playground Module (`features/generative-playground/`)

*   **`GeometricPathDrawerComponent`:**
    *   **Logic:** Allows users to draw freehand or create structured paths directly onto a 2D or 3D geometric space (Möbius, Prism, etc.).
    *   **Interaction:** Drawing tools (pen, line, shapes). Select target space.
    *   **Visuals:** Integrated with relevant viewers. Path appears as user draws.
    *   **Creative:** "Snap to grid" for harmonically meaningful points. Bezier curve tools for smooth paths. Use pressure sensitivity if available.
*   **`MusicGenerationEngineComponent`:**
    *   **Logic:** Takes a geometric path from `GeometricPathDrawerComponent`. Uses `GeometryMapperService` (in reverse) to translate geometric points/segments back into musical notes/chords. `MusicTheoryService` to harmonize or refine the raw output. `AudioService` to play.
    *   **Interaction:** "Generate" button. Parameters to control density, rhythm, instrumentation of generated music.
    *   **Creative:** "Evolutionary" generation where user-drawn paths are mutated to create variations. Probabilistic mapping from geometry to music for less predictable results. Allow different "interpretation styles" for how a path is turned into music.
*   **`ParameterizedGenerationControlsComponent`:**
    *   **Logic:** Provides UI controls (sliders, dropdowns) for the parameters used by `MusicGenerationEngineComponent`.
    *   **Interaction:** User adjusts controls to influence the generated music.
    *   **Creative:** "Randomize parameters" button for serendipitous discovery. Save/load parameter presets.

#### 5. Pythagorean Explorer Module (`features/pythagorean-explorer/`)

*   **`InteractiveMonochordComponent`:**
    *   **Logic:** `GeometryMapperService` to map ratios to string divisions. `AudioService` to play resulting pitches (simple sine waves are fine).
    *   **Interaction:** User clicks to divide virtual string by 2:1, 3:2, 4:3, etc. Hear interval. See visual division.
    *   **Visuals:** D3.js or SVG for the string. Lines showing divisions.
    *   **Creative:** Show vibrating string animation. Allow stacking ratios. Historical context popups for each ratio.
*   **`TuningSystemComparatorComponent`:**
    *   **Logic:** `MusicTheoryService` to calculate frequencies for scales in Pythagorean tuning, Just Intonation, Equal Temperament. `GeometryMapperService` to plot these on a comparative circular diagram or linear frequency spectrum.
    *   **Interaction:** Select scales/tunings to compare. See visual discrepancies (e.g., Pythagorean comma). Hear A/B comparisons.
    *   **Visuals:** D3.js or SVG. Clearly label discrepancies.
    *   **Creative:** "Beat frequency" simulator when two slightly detuned notes are played. Morph between tuning systems.
*   **`HarmonicSeriesVisualizerComponent`:**
    *   **Logic:** `MusicTheoryService` to calculate harmonic series for a fundamental. `AudioService` to play harmonics.
    *   **Visuals:** D3.js or Canvas to show frequency spectrum, or a visual metaphor (e.g., vertically stacked glowing orbs).
    *   **Creative:** Interactive: user clicks a harmonic to isolate it. Connect this to timbre exploration.

#### 6. Esoteric Geometry Module (`features/esoteric-geometry/`) (Interpretive & Exploratory)

*   **`DaVinciGoldenRatioMapperComponent`:**
    *   **Logic:** Explores mapping Phi (Golden Ratio) to musical form, rhythm, or (more speculatively) pitch relationships.
    *   **Interaction:** Input musical segment. See if proportions align with Phi. Generate simple rhythms/forms based on Phi.
    *   **Creative:** "Phi-optimized" form generator. Visualize recursive golden rectangles/spirals with musical events at key points.
*   **`SacredSymbolSonifierComponent`:**
    *   **Logic:** Map notes/scales to vertices/intersections of sacred geometric patterns (Flower of Life, Metatron's Cube). Generate sequences by tracing paths on these symbols.
    *   **Interaction:** User selects a symbol. Assigns notes. Traces a path or runs an algorithm. Hear result.
    *   **Creative:** Audio-reactive animations of the sacred symbols themselves. Algorithmic "growth" of musical patterns based on the geometry.
*   **`PlatonicSolidsHarmonizerComponent`:**
    *   **Logic:** Assign notes/chords to vertices/faces/edges of Platonic solids. Explore rotations/symmetries as musical transformations.
    *   **Interaction:** Select a solid. Map musical elements. Rotate/transform the solid and hear corresponding musical change.
    *   **Creative:** 3D visualization (Three.js) of the solid morphing or its faces lighting up with music. "Music of the Spheres" type generative compositions.

---

This blueprint should give you a very solid foundation and a wealth of ideas to draw from as you build "JamWithSam." Remember to start with the core services and one or two simple visualizers (like the Circle of Fifths) to get momentum. Good luck, this sounds like an amazing project!