export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  imageAfterParagraph?: Record<number, string>;
  imageMaxWidth?: Record<number, string>;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  abstract?: string;
  abstractImage?: string;
  excerpt: string;
  sections: ArticleSection[];
}

import { northeastWater } from './articles/northeast-water';
import { northwestClimate } from './articles/northwest-climate';
import { northwestNearshoring } from './articles/northwest-nearshoring';
import { northwestAgriculture } from './articles/northwest-agriculture';
import { centralCorruption } from './articles/central-corruption';
import { westCoastalAgriculture } from './articles/west-coastal-agriculture';
import { westCriminalFragmentation } from './articles/west-criminal-fragmentation';
import { southwestChiapas } from './articles/southwest-chiapas';
import { southeastTourism } from './articles/southeast-tourism';
import { southeastYucatan } from './articles/southeast-yucatan';
import { southeastMigration } from './articles/southeast-migration';
import { southeastCartelStability } from './articles/southeast-cartel-stability';
import { northCentralFuelTheft } from './articles/north-central-fuel-theft';
import { northCentralNearshoringBoom } from './articles/north-central-nearshoring-boom';

const articlesByRegion: Record<string, Article[]> = {
  northeast: [northeastWater],
  northwest: [northwestClimate, northwestNearshoring, northwestAgriculture],
  central: [centralCorruption],
  west: [westCoastalAgriculture, westCriminalFragmentation],
  southwest: [southwestChiapas],
  southeast: [southeastTourism, southeastYucatan, southeastMigration, southeastCartelStability],
  'north-central': [northCentralFuelTheft, northCentralNearshoringBoom],
};

export function getArticlesByRegion(slug: string): Article[] {
  return articlesByRegion[slug] ?? [];
}

export function getArticle(regionSlug: string, articleId: string): Article | undefined {
  return articlesByRegion[regionSlug]?.find((art) => art.id === articleId);
}
