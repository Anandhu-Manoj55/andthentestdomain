import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/india",
        destination: "/destinations/india/",
        permanent: true,
      },
      {
        source: "/india/",
        destination: "/destinations/india/",
        permanent: true,
      },
      {
        source: "/bhutan",
        destination: "/destinations/bhutan/",
        permanent: true,
      },
      {
        source: "/bhutan/",
        destination: "/destinations/bhutan/",
        permanent: true,
      },
      {
        source: "/nepal",
        destination: "/destinations/nepal/",
        permanent: true,
      },
      {
        source: "/nepal/",
        destination: "/destinations/nepal/",
        permanent: true,
      },
      {
        source: "/sri-lanka",
        destination: "/destinations/sri-lanka/",
        permanent: true,
      },
      {
        source: "/sri-lanka/",
        destination: "/destinations/sri-lanka/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

