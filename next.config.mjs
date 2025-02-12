import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
  images: {
    unoptimized: true, // Required if you're using Next.js Image component
  },
  trailingSlash: true, // Ensures proper routing on GitHub Pages
}
 
const withMDX = createMDX({
  options: {
   
  },
})
 
// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)