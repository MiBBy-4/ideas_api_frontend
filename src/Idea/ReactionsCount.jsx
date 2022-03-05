const ONE_HUNDRED_PERCENT = 100;

export function likesCount(reactions) {
  let count = 0;
  reactions.map((reaction) => {
    if (reaction.liked) {
      count += 1;
    }
  });
  return count;
}

export function dislikesCount(reactions) {
  let count = 0;
  reactions.map((reaction) => {
    if (!reaction.liked) {
      count += 1;
    }
  });
  return count;
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
