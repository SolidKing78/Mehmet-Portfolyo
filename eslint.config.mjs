import nextConfig from "eslint-config-next";

const config = [{ ignores: ["github/**"] }, ...nextConfig];

export default config;
