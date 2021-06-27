import { Photo } from '../interfaces/photo.interface';
export const photos: Photo[] = [
  {
    id: 1,
    albumId: 1,
    title: 'Moj tytul',
    url: 'https://bi.im-g.pl/im/e3/12/14/z21048035IBG.jpg',
    likes: 0,
    unlikes: 0,
  },
  {
    id: 2,
    albumId: 2,
    title: 'Moj tytul 2',
    url: 'https://bi.im-g.pl/im/e3/12/14/z21048035IBG.jpg',
    likes: 0,
    unlikes: 0,
  },
  {
    id: 3,
    albumId: 3,
    title: 'Moj tytul 3',
    url: 'https://bi.im-g.pl/im/e3/12/14/z21048035IBG.jpg',
    likes: 0,
    unlikes: 0,
  },
];

export function getPhotos(): Photo[] {
  return photos.map((photo: Photo) => {
    return {
      ...photo,
    };
  });
}
