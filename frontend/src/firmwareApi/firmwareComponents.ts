/**
 * Generated by @openapi-codegen
 *
 * @version 1.0
 */
import * as reactQuery from "@tanstack/react-query";
import { useFirmwareContext, FirmwareContext } from "./firmwareContext";
import type * as Fetcher from "./firmwareFetcher";
import { firmwareFetch } from "./firmwareFetcher";
import type * as Schemas from "./firmwareSchemas";
import type { ClientErrorStatus, ServerErrorStatus } from "./firmwareUtils";

export type FirmwareControllerGetFirmwaresError = Fetcher.ErrorWrapper<{
  status: ClientErrorStatus | ServerErrorStatus;
  payload: Schemas.Firmware[];
}>;

export type FirmwareControllerGetFirmwaresVariables =
  FirmwareContext["fetcherOptions"];

export const fetchFirmwareControllerGetFirmwares = (
  variables: FirmwareControllerGetFirmwaresVariables,
  signal?: AbortSignal,
) =>
  firmwareFetch<
    undefined,
    FirmwareControllerGetFirmwaresError,
    undefined,
    {},
    {},
    {}
  >({ url: "/firmwares", method: "get", ...variables, signal });

export const useFirmwareControllerGetFirmwares = <TData = undefined>(
  variables: FirmwareControllerGetFirmwaresVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      undefined,
      FirmwareControllerGetFirmwaresError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    useFirmwareContext(options);
  return reactQuery.useQuery<
    undefined,
    FirmwareControllerGetFirmwaresError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/firmwares",
      operationId: "firmwareControllerGetFirmwares",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchFirmwareControllerGetFirmwares(
        { ...fetcherOptions, ...variables },
        signal,
      ),
    ...options,
    ...queryOptions,
  });
};

export type FirmwareControllerBuildAllError = Fetcher.ErrorWrapper<undefined>;

export type FirmwareControllerBuildAllVariables = {
  body: Schemas.BuildFirmwareDTO;
} & FirmwareContext["fetcherOptions"];

/**
 * Build a specific configuration of the firmware
 */
export const fetchFirmwareControllerBuildAll = (
  variables: FirmwareControllerBuildAllVariables,
  signal?: AbortSignal,
) =>
  firmwareFetch<
    Schemas.BuildResponse,
    FirmwareControllerBuildAllError,
    Schemas.BuildFirmwareDTO,
    {},
    {},
    {}
  >({ url: "/firmwares/build", method: "post", ...variables, signal });

/**
 * Build a specific configuration of the firmware
 */
export const useFirmwareControllerBuildAll = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Schemas.BuildResponse,
      FirmwareControllerBuildAllError,
      FirmwareControllerBuildAllVariables
    >,
    "mutationFn"
  >,
) => {
  const { fetcherOptions } = useFirmwareContext();
  return reactQuery.useMutation<
    Schemas.BuildResponse,
    FirmwareControllerBuildAllError,
    FirmwareControllerBuildAllVariables
  >({
    mutationFn: (variables: FirmwareControllerBuildAllVariables) =>
      fetchFirmwareControllerBuildAll({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type FirmwareControllerBuildStatusPathParams = {
  id: string;
};

export type FirmwareControllerBuildStatusError =
  Fetcher.ErrorWrapper<undefined>;

export type FirmwareControllerBuildStatusVariables = {
  pathParams: FirmwareControllerBuildStatusPathParams;
} & FirmwareContext["fetcherOptions"];

export const fetchFirmwareControllerBuildStatus = (
  variables: FirmwareControllerBuildStatusVariables,
  signal?: AbortSignal,
) =>
  firmwareFetch<
    undefined,
    FirmwareControllerBuildStatusError,
    undefined,
    {},
    {},
    FirmwareControllerBuildStatusPathParams
  >({
    url: "/firmwares/build-status/{id}",
    method: "get",
    ...variables,
    signal,
  });

export const useFirmwareControllerBuildStatus = <TData = undefined>(
  variables: FirmwareControllerBuildStatusVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      undefined,
      FirmwareControllerBuildStatusError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    useFirmwareContext(options);
  return reactQuery.useQuery<
    undefined,
    FirmwareControllerBuildStatusError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/firmwares/build-status/{id}",
      operationId: "firmwareControllerBuildStatus",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchFirmwareControllerBuildStatus(
        { ...fetcherOptions, ...variables },
        signal,
      ),
    ...options,
    ...queryOptions,
  });
};

export type FirmwareControllerGetBoardsTypesError =
  Fetcher.ErrorWrapper<undefined>;

export type FirmwareControllerGetBoardsTypesResponse = Schemas.BoardTypeBoard[];

export type FirmwareControllerGetBoardsTypesVariables =
  FirmwareContext["fetcherOptions"];

export const fetchFirmwareControllerGetBoardsTypes = (
  variables: FirmwareControllerGetBoardsTypesVariables,
  signal?: AbortSignal,
) =>
  firmwareFetch<
    FirmwareControllerGetBoardsTypesResponse,
    FirmwareControllerGetBoardsTypesError,
    undefined,
    {},
    {},
    {}
  >({ url: "/firmwares/boards", method: "get", ...variables, signal });

export const useFirmwareControllerGetBoardsTypes = <
  TData = FirmwareControllerGetBoardsTypesResponse,
>(
  variables: FirmwareControllerGetBoardsTypesVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      FirmwareControllerGetBoardsTypesResponse,
      FirmwareControllerGetBoardsTypesError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    useFirmwareContext(options);
  return reactQuery.useQuery<
    FirmwareControllerGetBoardsTypesResponse,
    FirmwareControllerGetBoardsTypesError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/firmwares/boards",
      operationId: "firmwareControllerGetBoardsTypes",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchFirmwareControllerGetBoardsTypes(
        { ...fetcherOptions, ...variables },
        signal,
      ),
    ...options,
    ...queryOptions,
  });
};

export type FirmwareControllerGetVersionsError =
  Fetcher.ErrorWrapper<undefined>;

export type FirmwareControllerGetVersionsResponse = Schemas.ReleaseDTO[];

export type FirmwareControllerGetVersionsVariables =
  FirmwareContext["fetcherOptions"];

export const fetchFirmwareControllerGetVersions = (
  variables: FirmwareControllerGetVersionsVariables,
  signal?: AbortSignal,
) =>
  firmwareFetch<
    FirmwareControllerGetVersionsResponse,
    FirmwareControllerGetVersionsError,
    undefined,
    {},
    {},
    {}
  >({ url: "/firmwares/versions", method: "get", ...variables, signal });

export const useFirmwareControllerGetVersions = <
  TData = FirmwareControllerGetVersionsResponse,
>(
  variables: FirmwareControllerGetVersionsVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      FirmwareControllerGetVersionsResponse,
      FirmwareControllerGetVersionsError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    useFirmwareContext(options);
  return reactQuery.useQuery<
    FirmwareControllerGetVersionsResponse,
    FirmwareControllerGetVersionsError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/firmwares/versions",
      operationId: "firmwareControllerGetVersions",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchFirmwareControllerGetVersions(
        { ...fetcherOptions, ...variables },
        signal,
      ),
    ...options,
    ...queryOptions,
  });
};

export type FirmwareControllerGetIMUSTypesError =
  Fetcher.ErrorWrapper<undefined>;

export type FirmwareControllerGetIMUSTypesResponse = Schemas.Imudto[];

export type FirmwareControllerGetIMUSTypesVariables =
  FirmwareContext["fetcherOptions"];

export const fetchFirmwareControllerGetIMUSTypes = (
  variables: FirmwareControllerGetIMUSTypesVariables,
  signal?: AbortSignal,
) =>
  firmwareFetch<
    FirmwareControllerGetIMUSTypesResponse,
    FirmwareControllerGetIMUSTypesError,
    undefined,
    {},
    {},
    {}
  >({ url: "/firmwares/imus", method: "get", ...variables, signal });

export const useFirmwareControllerGetIMUSTypes = <
  TData = FirmwareControllerGetIMUSTypesResponse,
>(
  variables: FirmwareControllerGetIMUSTypesVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      FirmwareControllerGetIMUSTypesResponse,
      FirmwareControllerGetIMUSTypesError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    useFirmwareContext(options);
  return reactQuery.useQuery<
    FirmwareControllerGetIMUSTypesResponse,
    FirmwareControllerGetIMUSTypesError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/firmwares/imus",
      operationId: "firmwareControllerGetIMUSTypes",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchFirmwareControllerGetIMUSTypes(
        { ...fetcherOptions, ...variables },
        signal,
      ),
    ...options,
    ...queryOptions,
  });
};

export type FirmwareControllerGetBatteriesTypesError =
  Fetcher.ErrorWrapper<undefined>;

export type FirmwareControllerGetBatteriesTypesResponse = string[];

export type FirmwareControllerGetBatteriesTypesVariables =
  FirmwareContext["fetcherOptions"];

export const fetchFirmwareControllerGetBatteriesTypes = (
  variables: FirmwareControllerGetBatteriesTypesVariables,
  signal?: AbortSignal,
) =>
  firmwareFetch<
    FirmwareControllerGetBatteriesTypesResponse,
    FirmwareControllerGetBatteriesTypesError,
    undefined,
    {},
    {},
    {}
  >({ url: "/firmwares/batteries", method: "get", ...variables, signal });

export const useFirmwareControllerGetBatteriesTypes = <
  TData = FirmwareControllerGetBatteriesTypesResponse,
>(
  variables: FirmwareControllerGetBatteriesTypesVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      FirmwareControllerGetBatteriesTypesResponse,
      FirmwareControllerGetBatteriesTypesError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    useFirmwareContext(options);
  return reactQuery.useQuery<
    FirmwareControllerGetBatteriesTypesResponse,
    FirmwareControllerGetBatteriesTypesError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/firmwares/batteries",
      operationId: "firmwareControllerGetBatteriesTypes",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchFirmwareControllerGetBatteriesTypes(
        { ...fetcherOptions, ...variables },
        signal,
      ),
    ...options,
    ...queryOptions,
  });
};

export type FirmwareControllerGetDefaultConfigPathParams = {
  board: string;
};

export type FirmwareControllerGetDefaultConfigError =
  Fetcher.ErrorWrapper<undefined>;

export type FirmwareControllerGetDefaultConfigVariables = {
  pathParams: FirmwareControllerGetDefaultConfigPathParams;
} & FirmwareContext["fetcherOptions"];

export const fetchFirmwareControllerGetDefaultConfig = (
  variables: FirmwareControllerGetDefaultConfigVariables,
  signal?: AbortSignal,
) =>
  firmwareFetch<
    Schemas.BuildFirmwareDTO,
    FirmwareControllerGetDefaultConfigError,
    undefined,
    {},
    {},
    FirmwareControllerGetDefaultConfigPathParams
  >({
    url: "/firmwares/default-config/{board}",
    method: "get",
    ...variables,
    signal,
  });

export const useFirmwareControllerGetDefaultConfig = <
  TData = Schemas.BuildFirmwareDTO,
>(
  variables: FirmwareControllerGetDefaultConfigVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      Schemas.BuildFirmwareDTO,
      FirmwareControllerGetDefaultConfigError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    useFirmwareContext(options);
  return reactQuery.useQuery<
    Schemas.BuildFirmwareDTO,
    FirmwareControllerGetDefaultConfigError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/firmwares/default-config/{board}",
      operationId: "firmwareControllerGetDefaultConfig",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchFirmwareControllerGetDefaultConfig(
        { ...fetcherOptions, ...variables },
        signal,
      ),
    ...options,
    ...queryOptions,
  });
};

export type FirmwareControllerGetFirmwarePathParams = {
  id: string;
};

export type FirmwareControllerGetFirmwareError = Fetcher.ErrorWrapper<{
  status: Exclude<ClientErrorStatus | ServerErrorStatus, 404>;
  payload: Schemas.Firmware;
}>;

export type FirmwareControllerGetFirmwareVariables = {
  pathParams: FirmwareControllerGetFirmwarePathParams;
} & FirmwareContext["fetcherOptions"];

export const fetchFirmwareControllerGetFirmware = (
  variables: FirmwareControllerGetFirmwareVariables,
  signal?: AbortSignal,
) =>
  firmwareFetch<
    undefined,
    FirmwareControllerGetFirmwareError,
    undefined,
    {},
    {},
    FirmwareControllerGetFirmwarePathParams
  >({ url: "/firmwares/{id}", method: "get", ...variables, signal });

export const useFirmwareControllerGetFirmware = <TData = undefined>(
  variables: FirmwareControllerGetFirmwareVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      undefined,
      FirmwareControllerGetFirmwareError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } =
    useFirmwareContext(options);
  return reactQuery.useQuery<
    undefined,
    FirmwareControllerGetFirmwareError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/firmwares/{id}",
      operationId: "firmwareControllerGetFirmware",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchFirmwareControllerGetFirmware(
        { ...fetcherOptions, ...variables },
        signal,
      ),
    ...options,
    ...queryOptions,
  });
};

export type QueryOperation =
  | {
      path: "/firmwares";
      operationId: "firmwareControllerGetFirmwares";
      variables: FirmwareControllerGetFirmwaresVariables;
    }
  | {
      path: "/firmwares/build-status/{id}";
      operationId: "firmwareControllerBuildStatus";
      variables: FirmwareControllerBuildStatusVariables;
    }
  | {
      path: "/firmwares/boards";
      operationId: "firmwareControllerGetBoardsTypes";
      variables: FirmwareControllerGetBoardsTypesVariables;
    }
  | {
      path: "/firmwares/versions";
      operationId: "firmwareControllerGetVersions";
      variables: FirmwareControllerGetVersionsVariables;
    }
  | {
      path: "/firmwares/imus";
      operationId: "firmwareControllerGetIMUSTypes";
      variables: FirmwareControllerGetIMUSTypesVariables;
    }
  | {
      path: "/firmwares/batteries";
      operationId: "firmwareControllerGetBatteriesTypes";
      variables: FirmwareControllerGetBatteriesTypesVariables;
    }
  | {
      path: "/firmwares/default-config/{board}";
      operationId: "firmwareControllerGetDefaultConfig";
      variables: FirmwareControllerGetDefaultConfigVariables;
    }
  | {
      path: "/firmwares/{id}";
      operationId: "firmwareControllerGetFirmware";
      variables: FirmwareControllerGetFirmwareVariables;
    };