import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";


const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
            }
        ],
    },
    // transpilePackages: ['@myriaddreamin/typst.ts'],
    webpack: function (config, {isServer, dev}) {
        config.module.rules.push({
            test: /\.wasm$/,
            type: 'webassembly/async',
        });
        config.experiments = {asyncWebAssembly: true, layers: true}

        // In prod mode and in the server bundle (the place where this "chunks" bug
        // appears), use the client static directory for the same .wasm bundle
        config.output.webassemblyModuleFilename =
            isServer && !dev ? "../static/wasm/[id].wasm" : "static/wasm/[id].wasm";

        // Ensure the filename for the .wasm bundle is the same on both the client
        // and the server (as in any other mode the ID's won't match)
        config.optimization.moduleIds = "named";


        return config
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
