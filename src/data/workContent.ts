import type { CollectionEntry } from 'astro:content';

export type WorkPost = CollectionEntry<'work'>;

/** Posts whose full write-up is unlocked on the experience pages (Full/TLDR toggle).
    Keep in sync with `published` in each post's frontmatter, which controls /blogs. */
export const FULL_POSTS = new Set(['neurotech-eeg', 'resume-editing-agent']);

const TLDR_PREFIX = '[TLDR]';
const SANITIZED_TLDR_PREFIX = 'tldr';

function getWorkPostFileStem(post: WorkPost) {
  return post.id.split('/').at(-1) ?? post.id;
}

export function isTldrWorkPost(post: WorkPost) {
  const stem = getWorkPostFileStem(post);

  return stem.startsWith(TLDR_PREFIX) || stem.startsWith(SANITIZED_TLDR_PREFIX);
}

export function getWorkPostSlug(post: WorkPost) {
  const stem = getWorkPostFileStem(post);

  if (stem.startsWith(TLDR_PREFIX)) {
    return stem.slice(TLDR_PREFIX.length);
  }

  if (stem.startsWith(SANITIZED_TLDR_PREFIX)) {
    return stem.slice(SANITIZED_TLDR_PREFIX.length);
  }

  return stem;
}

export function groupWorkPosts(workPosts: WorkPost[]) {
  const posts: WorkPost[] = [];
  const tldrBySlug = new Map<string, WorkPost>();

  for (const post of workPosts) {
    const slug = getWorkPostSlug(post);

    if (isTldrWorkPost(post)) {
      tldrBySlug.set(slug, post);
    } else {
      posts.push(post);
    }
  }

  return { posts, tldrBySlug };
}
