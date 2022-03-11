const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        STATIC_URL: isProd ? process.env.STATIC_URL : ''
    },
    assetPrefix: isProd ? process.env.STATIC_URL : '',
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true
    },
    async rewrites() {
        console.log(222222222)
        return [
            {
                source: '/api/v1.0/:path*',
                destination:
                    'https://cms-test-1ggl4mj3cb10129c-1253913402.ap-shanghai.service.tcloudbase.com/api/v1.0/:path*'
            }
        ];
    }
};
