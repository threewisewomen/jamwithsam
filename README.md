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