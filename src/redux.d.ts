import type { RootState, AppDispatch } from "@/app";

declare module "react-redux" {
  type DefaultRootState = RootState;
  export function useDispatch(): AppDispatch;
  export function useSelector<TState = DefaultRootState, TSelected = unknown>(
    selector: (state: TState) => TSelected
  ): TSelected;
}
