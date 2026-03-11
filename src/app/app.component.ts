import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { interval } from 'rxjs';

type PlyOption = {
  name: string;
  headline: string;
  description: string;
  bestFor: string;
  finish: string;
  image: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly destroyRef = inject(DestroyRef);

  readonly plyOptions: PlyOption[] = [
    {
      name: '1 Ply',
      headline: 'Reliable value for high-traffic washrooms',
      description:
        'A practical tissue solution designed for schools, public facilities, transport hubs and commercial washrooms that require dependable stock movement.',
      bestFor: 'Bulk operations',
      finish: 'Lightweight, cost-efficient rolls',
      image: 'assets/images/ply-1.svg'
    },
    {
      name: '2 Ply',
      headline: 'Balanced softness and strength for everyday comfort',
      description:
        'Our most versatile range for offices, retail stores, clinics and hospitality spaces that need a premium feel without compromising volume supply.',
      bestFor: 'Corporate and retail',
      finish: 'Soft-touch comfort with durable layering',
      image: 'assets/images/ply-2.svg'
    },
    {
      name: '3 Ply',
      headline: 'Luxury performance for premium guest experiences',
      description:
        'Crafted for executive suites, boutique accommodation and discerning clients who want exceptional softness, absorbency and presentation.',
      bestFor: 'Hospitality and executive spaces',
      finish: 'Ultra-soft, thick and refined',
      image: 'assets/images/ply-3.svg'
    }
  ];

  readonly highlights = [
    'Professional tissue manufacturing',
    'Consistent supply capacity',
    'Retail and wholesale ready'
  ];

  readonly capabilities = [
    'Custom supply volumes for business buyers',
    'Quality-focused production standards',
    'Elegant presentation for modern brands'
  ];

  activeIndex = 0;

  constructor() {
    interval(5000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.nextSlide());
  }

  get activePly(): PlyOption {
    return this.plyOptions[this.activeIndex];
  }

  setSlide(index: number): void {
    this.activeIndex = index;
  }

  nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.plyOptions.length;
  }
}
