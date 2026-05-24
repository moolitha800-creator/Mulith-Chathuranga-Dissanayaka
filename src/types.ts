/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VesakEvent {
  id: string;
  titleSi: string;
  titleEn: string;
  descriptionSi: string;
  descriptionEn: string;
  datesSi: string;
  datesEn: string;
  timeSi: string;
  timeEn: string;
  iconName: string;
  badgeSi?: string;
  badgeEn?: string;
  longDescriptionSi: string;
  longDescriptionEn: string;
}

export interface CardTemplate {
  id: string;
  nameSi: string;
  nameEn: string;
  bgGradient: string;
  textColor: string;
  accentColor: string;
}

export interface LitLamp {
  id: string;
  x: number; // percentage width
  y: number; // percentage height
  timestamp: number;
}
