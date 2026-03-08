import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const thoughts = await getCollection('thoughts');
    return rss({
        // `<title>` field in output xml
        title: 'DesignWard Posts',
        // `<description>` field in output xml
        description: 'Posts from the DesignWard digital garden.',
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#site
        site: context.site,
        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        items: thoughts.sort((a, b) => b.data.lastEdited - a.data.lastEdited).map((post) => ({
            title: post.data.title,
            pubDate: post.data.lastEdited,
            description: post.data.tagline,
            // Compute RSS link from post `id`
            // This example assumes all posts are rendered as `/blog/[id]` routes
            link: `/garden/${post.id}/`,
        })),
        // (optional) inject custom xml
        customData: `<language>en-us</language>`,
        stylesheet: '/rss/pretty-feed-v3.xsl',
    });
}