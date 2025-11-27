import styles from "./styles.module.css";
import { noImageIcon } from "@/shared/assets";
import { imageSrcGenerator } from "@/shared/lib";
import { cn } from "@/shared/utils";

interface FilterChipProps {
  label: string;
  image?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const FilterChip = ({ label, image, isActive, onClick }: FilterChipProps) => {
  return (
    <button
      type="button"
      className={cn(styles.chip, isActive && styles.active)}
      onClick={onClick}
    >
      {image && (
        <img
          alt={label}
          src={imageSrcGenerator(image)}
          width={20}
          height={20}
          onError={e => {
            if (e.target instanceof HTMLImageElement) {
              e.target.src = noImageIcon;
            }
          }}
        />
      )}
      <span>{label}</span>
    </button>
  );
};

export default FilterChip;
