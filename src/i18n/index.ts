import { en } from './en';
import { de } from './de';

export type Language = 'en' | 'de';

export const dictionaries = {
  en,
  de,
};

export function getDictionary(lang: Language) {
  return dictionaries[lang] ?? dictionaries.en;
}
