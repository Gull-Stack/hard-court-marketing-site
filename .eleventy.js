module.exports = function(eleventyConfig) {
  // Copy images and logos
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("*.png");
  
  // Create sitemap collection
  eleventyConfig.addCollection("sitemap", function(collectionApi) {
    return collectionApi.getAll().filter(function(item) {
      // Only include pages with URLs
      return item.url && !item.data.draft;
    }).sort(function(a, b) {
      return a.url.localeCompare(b.url);
    });
  });

  // Set directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};