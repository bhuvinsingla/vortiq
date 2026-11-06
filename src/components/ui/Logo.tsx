import Image from "next/image";

type LogoProps = {
  className?: string;
  markOnly?: boolean;
  priority?: boolean;
};

export default function Logo({
  className = "h-11",
  markOnly = false,
  priority = false,
}: LogoProps) {
  const src = markOnly ? "/vortiq-mark.png" : "/vortiq-logo.png";
  const widthClass = markOnly
    ? "w-auto"
    : "w-auto max-w-[14rem] sm:max-w-[17rem]";

  return (
    <Image
      src={src}
      alt="Vortiq"
      width={markOnly ? 120 : 280}
      height={markOnly ? 120 : 80}
      priority={priority}
      className={`${className} ${widthClass} object-contain object-left`}
    />
  );
}
