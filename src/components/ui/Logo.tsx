import Image from "next/image";

type LogoProps = {
  className?: string;
  markOnly?: boolean;
  priority?: boolean;
};

export default function Logo({
  className = "h-10",
  markOnly = false,
  priority = false,
}: LogoProps) {
  const src = markOnly ? "/vortiq-mark.png" : "/vortiq-logo.png";
  const widthClass = markOnly
    ? "w-auto"
    : "w-auto max-w-[17rem] sm:max-w-[21rem]";

  return (
    <Image
      src={src}
      alt="Vortiq"
      width={markOnly ? 120 : 886}
      height={markOnly ? 120 : 331}
      priority={priority}
      className={`${className} ${widthClass} object-contain object-left`}
    />
  );
}
