import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

    init({
      el: '#waline',
      serverURL: 'https://com.dragonjay.top',
      emoji: [
        'https://unpkg.com/@waline/emojis@1.1.0/alus',
        'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
        'https://unpkg.com/@waline/emojis@1.1.0/bmoji',
        'https://unpkg.com/@waline/emojis@1.1.0/qq',
        'https://unpkg.com/@waline/emojis@1.1.0/tieba',
        'https://unpkg.com/@waline/emojis@1.1.0/tw-emoji',
        'https://unpkg.com/@waline/emojis@1.1.0/weibo',
        'https://cdn.jsdelivr.net/npm/sticker-heo@2022.7.5/Sticker-100/',
      ],
      reaction: true,
    });