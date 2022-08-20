const gulp = require("gulp");
const shell = require("gulp-shell");
const workbox = require("workbox-build");

gulp.task("hugo-build", shell.task(["hugo --minify"])); // this can change depending on which static generator you are using.

gulp.task("generate-service-worker", () => {
  return workbox.generateSW({
    cacheId: "ben9583-pwa-cache",
    globDirectory: "./public", // the directory where static file is stored
    swDest: "./public/sw.js", // destination of sw.js file
    globPatterns: ["**/*"], // glob patterns to match files to cache
    navigateFallback: "/404.html", // fallback file
    runtimeCaching: [
      {
        urlPattern: /(\.(?:html|js))|(\/)?$/,
        handler: "NetworkFirst",
        options: {
          cacheName: "html-js",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 31 * 24 * 60 * 60 // 1 month
          }
        }
      },
      {
        urlPattern: /\.(?:css)?$/,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "css",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 31 * 24 * 60 * 60 // 1 month
          }
        }
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)?$/,
        handler: "CacheFirst",
        options: {
          cacheName: "images",
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 7 * 24 * 60 * 60, // one week
          }
        }
      },
      {
        urlPattern: /\.(?:mp3|mp4)?$/,
        handler: "CacheFirst",
        options: {
          cacheName: "media",
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 7 * 24 * 60 * 60, // one week
          }
        }
      },
      {
        urlPattern: /\.(eot|ttf|woff)?$/,
        handler: "CacheFirst",
        options: {
          cacheName: "fonts",
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 31 * 24 * 60 * 60, // one month
          }
        }
      },
      {
        urlPattern: /\.(?:json|xml)?$/,
        handler: "NetworkOnly",
        options: {
          cacheName: "json-xml",
        }
      },
      {
        urlPattern: () => true,
        handler: "NetworkFirst",
        options: {
          cacheName: "fallback-probably-html",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 31 * 24 * 60 * 60 // 1 month
          }
        }
      }
    ],
  });
});

gulp.task("build", gulp.series("hugo-build", "generate-service-worker"));
