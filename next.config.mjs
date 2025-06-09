/** @type {import('next').NextConfig} */
const nextConfig = {
    // Removed: output: 'export' - Vercel handles this natively
    
    // Security headers
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'geolocation=(), microphone=(), camera=()'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains'
                    }
                ]
            }
        ];
    },
    
    // Optimization settings
    compress: true,
    poweredByHeader: false,
    
    typescript: {
        ignoreBuildErrors: true,
    },
    
    // Enable image optimization (Vercel handles this)
    images: {
        domains: [], // Add any external image domains if needed
        formats: ['image/webp', 'image/avif'],
    },
};

export default nextConfig;