/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'pizza' | 'drink' | 'beer' | 'whisky' | 'portion';
  tags?: string[];
  isFeatured?: boolean;
}

export interface AtmosphereCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EventRoom {
  id: string;
  title: string;
  capacity: string;
  screens: string[];
  sound: string;
  features: string[];
  description: string;
  tag: string;
  bgImage: string;
}

export type GalleryTag = 'all' | 'unidade' | 'gastronomia' | 'experiencia' | 'eventos';

export interface GalleryItem {
  id: string;
  category: GalleryTag;
  title: string;
  description: string;
  image: string;
}
