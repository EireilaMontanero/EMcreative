export const getAssetPath = (path: string) => {
    const isProd = process.env.NODE_ENV === 'production';
    // Remove leading slash if present to avoid double slashes if we were concatenating,
    // but here we want to prefix.
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return cleanPath;
};
