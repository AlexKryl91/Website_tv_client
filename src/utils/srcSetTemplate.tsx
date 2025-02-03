function srcSetTemplate(
  filename: string,
  ext: 'jpg' | 'jpeg' | 'png' | 'avif' | 'webp'
) {
  return `img/${filename}.${ext} 1x,
  img/${filename}_2x.${ext} 2x, 
  img/${filename}_3x.${ext} 3x`;
}

export default srcSetTemplate;
