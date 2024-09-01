const path = require("path");
const withPWA = require("next-pwa")({
  dest: "public"
});

const config = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(mp3)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]"
      }
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ecency.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "ecency.com",
        port: ""
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/:author/rss",
        destination: "/api/:author/posts/rss"
      }
    ];
  }
};

/** @type {import('next').NextConfig} */
const nextWithPWA = withPWA(config);
module.exports = process.env.NODE_ENV === "production" ? nextWithPWA : config;
