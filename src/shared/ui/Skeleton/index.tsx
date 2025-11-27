import { cn } from "@/shared/utils";
import styles from "./styles.module.css";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  circle?: boolean;
  isLoading?: boolean;
  count?: number;
}

const Skeleton = ({
  width = "100%",
  height = "1rem",
  className,
  circle = false,
  isLoading = true,
  count = 1,
}: SkeletonProps) => {
  if (!isLoading) {
    return null;
  }

  const skeletonItems = Array.from({ length: count }).map((_, index) => (
    <div
      key={index}
      className={cn(styles.skeleton, circle && styles.circle, className)}
      style={{ width, height }}
    />
  ));

  return <>{skeletonItems}</>;
};
export default Skeleton;
