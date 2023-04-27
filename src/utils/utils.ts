import { CrewTypeObject } from '@/types/utils';

export function trimStr(str: string, limit: number): string {
  if (str.length <= limit) return str;
  return `${str.slice(0, limit)}...`;
}

export const crewType: Readonly<CrewTypeObject> = {
  'starring': 'В главной роли:',
  'creators': 'Создатели:',
};
