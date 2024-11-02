// src/components/Avatar.tsx
import classNames from "classnames"; // necessary package
import { AvatarProps } from "@/types/avatar"; // AvatarProps type for props validation
import Profile from "@/assets/images/profile.png"; // Default profile image

const Avatar: React.FC<AvatarProps> = ({ url, className }) => {
  return (
    <div className="relative w-fit">
      <div
        className={classNames(
          "w-20 h-20 border-4 border-white rounded-full overflow-hidden",
          className // Additional classes from props
        )}
      >
        <img
          className="w-full h-full object-cover"
          src={url || Profile} // Use provided URL or default profile image
          alt="Profile image" // Alt text for accessibility
        />
      </div>
    </div>
  );
};

export default Avatar;
