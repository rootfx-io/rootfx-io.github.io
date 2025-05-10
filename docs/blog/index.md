# Blog

<script setup>
import { data } from 'vitepress';
const posts = Object.entries(import.meta.glob('./*.md', { eager: true }))
  .map(([path, module]) => ({
    title: module.frontmatter?.title || path.split('/').pop().replace('.md', ''),
    link: path.replace('./', '/blog/').replace('.md', '')
  }));
</script>

<ul>
  <li v-for="post in posts">
    <a :href="post.link">{{ post.title }}</a>
  </li>
</ul>

