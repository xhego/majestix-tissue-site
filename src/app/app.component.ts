import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

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
  readonly plyOptions: PlyOption[] = [
    {
      name: '1 Ply',
      headline: 'Reliable value for high-traffic washrooms',
      description:
        'A practical tissue solution designed for schools, public facilities, transport hubs and commercial washrooms that require dependable stock movement.',
      bestFor: 'Bulk operations',
      finish: 'Lightweight, cost-efficient rolls',
      image: 'assets/images/ply-1-photo.jpg'
    },
    {
      name: '2 Ply',
      headline: 'Balanced softness and strength for everyday comfort',
      description:
        'Our most versatile range for offices, retail stores, clinics and hospitality spaces that need a premium feel without compromising volume supply.',
      bestFor: 'Corporate and retail',
      finish: 'Soft-touch comfort with durable layering',
      image: 'assets/images/ply-2-photo.jpg'
    },
    {
      name: '3 Ply',
      headline: 'Luxury performance for premium guest experiences',
      description:
        'Crafted for executive suites, boutique accommodation and discerning clients who want exceptional softness, absorbency and presentation.',
      bestFor: 'Hospitality and executive spaces',
      finish: 'Ultra-soft, thick and refined',
      image: 'assets/images/ply-3-photo.jpg'
    }
  ];

  readonly highlights = [
    { value: '1-3', label: 'Ply range' },
    { value: 'Bulk', label: 'Supply ready' },
    { value: 'B2B', label: 'Buyer focused' }
  ];

  readonly capabilities = [
    {
      icon: 'local_shipping',
      title: 'Wholesale-ready output',
      description: 'Supply planning built for distributors, resellers and commercial procurement teams.'
    },
    {
      icon: 'verified',
      title: 'Quality-focused production',
      description: 'Consistent ply options for value-driven operations, everyday use and premium settings.'
    },
    {
      icon: 'palette',
      title: 'Elegant presentation',
      description: 'A peach-and-black identity that feels clean, soft and ready for modern shelves.'
    }
  ];

  activeIndex = 0;

  get activePly(): PlyOption {
    return this.plyOptions[this.activeIndex];
  }

  setSlide(index: number): void {
    this.activeIndex = index;
  }
}
