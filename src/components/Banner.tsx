// src/components/Banner.tsx
import classNames from "classnames"; // necessary package
import { BannerProps } from "@/types/banner"; // BannerProps type for props validation
import SchweppesImage from "@/assets/svg/schweppes.svg"; // Schweppes image

const Banner: React.FC<BannerProps> = ({ className }) => {
  return (
    <img
      className={classNames(
        "max-w-[280px] mx-auto pt-4 relative z-10",
        className // Additional classes from props
      )}
      src={SchweppesImage}
      alt="Schweppes"
    />
  );
};

export default Banner;
