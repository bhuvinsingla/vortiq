type LogoProps = {
  className?: string;
  markOnly?: boolean;
};

export default function Logo({ className = "h-8", markOnly = false }: LogoProps) {
  const src = markOnly ? "/vortiq-mark.png" : "/vortiq-logo.png";
  const widthClass = markOnly ? "w-auto" : "w-auto max-w-[9.5rem] sm:max-w-[11rem]";

  return (
    <img
      src={src}
      alt="Vortiq"
      className={`${className} ${widthClass} object-contain object-left`}
      decoding="async"
    />
  );
}
