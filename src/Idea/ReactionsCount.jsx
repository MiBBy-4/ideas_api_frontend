const ONE_HUNDRED_PERCENT = 100;

export function likesCount(reactions) {
  return reactions.reduce((count, reaction) => {
    if (reaction.liked) {
      count += 1;
    }
    return count;
  }, 0);
}

export function dislikesCount(reactions) {
  return reactions.reduce((count, reaction) => {
    if (!reaction.liked) {
      count += 1;
    }
    return count;
  }, 0);
}

export function avgLikes(reactions, views) {
  const likes = likesCount(reactions);
  if (views === 0) {
    return 0;
  }
  return ((likes / views) * ONE_HUNDRED_PERCENT);
}

export function avgDislikes(reactions, views) {
  const dislikes = dislikesCount(reactions);
  if (views === 0) {
    return 0;
  }
  return ((dislikes / views) * ONE_HUNDRED_PERCENT);
}
