type BrandLogoProps = {
  className?: string;
  alt?: string;
};

export default function BrandLogo({
  className = "h-11 w-auto",
  alt = "Gamefic",
}: BrandLogoProps) {
  return <img src={`${import.meta.env.BASE_URL}gamefic-logo.png`} alt={alt} className={className} />;
}
