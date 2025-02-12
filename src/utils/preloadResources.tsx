import { preload } from 'react-dom';

export function preloadImages(args: string[]) {
  args.forEach((href) => {
    const ext = href.match(/[0-9a-z]*$/gi);

    if (ext) {
      let type;

      switch (ext[0]) {
        case 'jpg':
          type = 'image/jpeg';
          break;
        case 'svg':
          type = 'image/svg+xml';
          break;
        default:
          type = `image/${ext[0]}`;
      }

      preload(href, {
        as: 'image',
        type: type,
        fetchPriority: 'high',
      });
    }
  });
}
