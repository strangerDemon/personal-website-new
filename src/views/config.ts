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
        },
        {
          name: 'loading1',
          path: 'loading1',
          legend: 'heartLoading.gif',
          date: '',
          description: 'loading for heart'
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

