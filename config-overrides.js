const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function override(config, env) {
    if (process.env.ANALYZE) {
        config.plugins.push(
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                reportFilename: 'build/bundle-report.html',
                openAnalyzer: false,
                generateStatsFile: true,
                statsFilename: 'build/bundle-stats.json',
            })
        );
    }
    return config;
};
