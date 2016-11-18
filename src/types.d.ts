declare module "preact-compat" {
  const lib: any;
  export default lib;
}

declare module "google-map-react" {
  const lib: any;
  export default lib;
}

interface FluxStandardAction<PayloadType> {
  type: string;
  payload: PayloadType;
  error?: boolean;
  meta?: any;
}
