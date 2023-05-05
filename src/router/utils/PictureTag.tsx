interface Props {
  imageSmall: string;
  imageBig: string;
  alt: string;
  className: string;
}

const PictureTag = ({ imageSmall, imageBig, alt, className }: Props) => {
  return (
    <picture className={className}>
      <source media="(min-width:1250px)" srcSet={imageSmall} />
      <img src={imageBig} alt={alt} />
    </picture>
  );
};

export default PictureTag;
