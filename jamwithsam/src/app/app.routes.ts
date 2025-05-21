// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Optional: If you want a PageNotFoundComponent for wildcard routes
// import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component'; // You'd need to create this

export const routes: Routes = [
  // --- Feature Module Routes (Lazy Loaded) ---
  {
    path: 'tymoczko', // Corresponds to your --route=tymoczko attempt
    loadChildren: () => import('./features/tymoczko-spaces/tymoczko-spaces.module').then(m => m.TymoczkoSpacesModule)
  },
  {
    path: 'voice-leading',
    loadChildren: () => import('./features/voice-leading/voice-leading.module').then(m => m.VoiceLeadingModule)
  },
  {
    path: 'pattern-finder',
    loadChildren: () => import('./features/pattern-finder/pattern-finder.module').then(m => m.PatternFinderModule)
  },
  {
    path: 'playground', // Corresponds to your --route=playground attempt
    loadChildren: () => import('./features/generative-playground/generative-playground.module').then(m => m.GenerativePlaygroundModule)
  },
  {
    path: 'pythagorean', // Corresponds to your --route=pythagorean attempt
    loadChildren: () => import('./features/pythagorean-explorer/pythagorean-explorer.module').then(m => m.PythagoreanExplorerModule)
  },
  {
    path: 'esoteric', // Corresponds to your --route=esoteric attempt
    loadChildren: () => import('./features/esoteric-geometry/esoteric-geometry.module').then(m => m.EsotericGeometryModule)
  },


];