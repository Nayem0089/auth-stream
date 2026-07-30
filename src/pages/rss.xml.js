import rss from '@astrojs/rss';
import { posts } from '../data/blog';

export function GET(context) {
  return rss({
    title: 'STREAM AUTH Journal',
    description: 'Practical notes for builders protecting software.',
    site: context.site,
    items: posts.map((post) => ({ title: post.title, description: post.description, pubDate: new Date(post.date), link: `/blog/${post.slug}` }))
  });
}
