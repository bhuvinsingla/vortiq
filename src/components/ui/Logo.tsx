type LogoProps = {
  className?: string;
  markOnly?: boolean;
};

export default function Logo({ className = "h-11", markOnly = false }: LogoProps) {
  const src = markOnly ? "/vortiq-mark.png" : "/vortiq-logo.png";
  const widthClass = markOnly ? "w-auto" : "w-auto max-w-[14rem] sm:max-w-[17rem]";

  return (
    <img
      src={src}
      alt="Vortiq"
      className={`${className} ${widthClass} object-contain object-left`}
      decoding="async"
    />
  );
}
