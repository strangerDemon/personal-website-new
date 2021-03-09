import { DemoTypeGroup } from '@/types/demoInfo';

export function list(): DemoTypeGroup[] {
  return [
    {
      type: 'CANVAS',
      list: []
    },
    {
      type: 'ANIMATION',
      list: [
        {
          name: 'balloon',
          path: 'balloon',
          legend: 'balloon.gif',
          date: '',
          description: 'a lot balloon,try to click'
        }
      ]
    },
    {
      type: 'THREE3D',
      list: []
    },
    {
      type: 'OTHER',
      list: []
    }
  ];
}

