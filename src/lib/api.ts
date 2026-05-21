export async function getBlogPosts() {
  const url = 'https://script.google.com/macros/s/AKfycbyFLCINv1Wg5Aes-xj7Kp1QJ2fPpCKEa61DXA4zMg3BE4Aq3xVkC48Fxh4xNmtHUTMV/exec';
  const response = await fetch(url, { redirect: 'follow' });
  const posts = await response.json();
  
  return posts.map((post: any) => ({
    ...post,
    content: sanitizeFrontmatter(post.content)
  }));
}

function sanitizeFrontmatter(content: string) {
  const lines = content.split('\n');
  const sanitizedLines = lines.map(line => {
    const match = line.match(/^([^:]+):\s+(.+)$/);
    if (match) {
      const [_, key, value] = match;
      // Skip if already quoted
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        return line;
      }
      return `${key}: "${value.replace(/"/g, '\\"')}"`;
    }
    return line;
  });
  return sanitizedLines.join('\n');
}
