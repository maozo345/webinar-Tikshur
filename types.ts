import React from 'react';

export interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface AudienceItem {
  text: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  DETAILS = 'details',
  AUDIENCE = 'audience',
  AI_DEMO = 'ai-demo',
  CONTACT = 'contact',
}