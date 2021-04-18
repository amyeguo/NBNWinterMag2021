let tl = gsap.timeline();

tl.from(".article-hed", { opacity: 0, duration: 2 }, 0.5);
tl.from(".article-dek", { opacity: 0, duration: 2 }, "<1");
tl.from(".article-byline", { opacity: 0, duration: 2 }, "<1");
