/**
 * Storyblok API
 */

import { StoryblokResponse } from '@/types/storyblok';
import { ISbResult } from '@storyblok/react';
import { getStoryblokApi } from '@storyblok/react';

export async function getAllArticles(locale: string): Promise<ISbResult> {
  const storyblokApi = getStoryblokApi();

  try {
    const res = storyblokApi.get('cdn/stories', {
      starts_with: 'articles',
      version: 'published', // or 'published'
      cv: Date.now(),
      language: locale,
    });

    return res;
  } catch (error: any) {
    console.error(error);
    return error;
  }
}

export async function getPage(slug: string, locale: string): Promise<ISbResult> {
  const storyblokApi = getStoryblokApi();

  try {
    const res = storyblokApi.get(`cdn/stories/pages/${slug}`, {
      version: 'published', // or 'published'
      cv: Date.now(),
      language: locale,
    });

    return res;
  } catch (error: any) {
    console.error(error);
    return error;
  }
}
