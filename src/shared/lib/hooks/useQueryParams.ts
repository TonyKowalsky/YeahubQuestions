import { useSearchParams } from "react-router-dom";
import { useCallback, useMemo } from "react";

interface DefaultRequestParams {
  page?: number | string;
  limit?: number | string;
}

export const useQueryParams = <T extends DefaultRequestParams>() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo((): T => {
    const obj: Record<string, string | string[]> = {};

    for (const [key, value] of searchParams.entries()) {
      if (obj[key]) {
        obj[key] = Array.isArray(obj[key])
          ? [...obj[key], value]
          : [obj[key], value];
      } else {
        obj[key] = value;
      }
    }
    if (!obj.page) obj.page = "1";
    if (!obj.limit) obj.limit = "10";

    return obj as unknown as T;
  }, [searchParams]);

  const updateParams = useCallback(
    (newParams: Partial<T>) => {
      const updated = new URLSearchParams(searchParams);

      const paramsToSet = {
        page: params.page,
        limit: params.limit,
        ...newParams,
      };

      for (const [key, value] of Object.entries(paramsToSet)) {
        if (
          value === undefined ||
          value === null ||
          value === "" ||
          (Array.isArray(value) && value.length === 0)
        ) {
          updated.delete(key);
        } else if (Array.isArray(value)) {
          updated.delete(key);
          value.forEach(v => updated.append(key, String(v)));
        } else {
          updated.set(key, String(value));
        }
      }

      setSearchParams(updated);
    },
    [searchParams, setSearchParams, params]
  );

  const resetParams = useCallback(
    (keys?: (keyof T)[]) => {
      const updated = new URLSearchParams(searchParams);

      if (keys) {
        keys.forEach(key => updated.delete(key as string));
      } else {
        Object.keys(params).forEach(key => updated.delete(key));
      }
      setSearchParams(updated);
    },
    [searchParams, params, setSearchParams]
  );

  return {
    params,
    updateParams,
    resetParams,
  } as const;
};
