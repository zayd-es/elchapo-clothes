module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security', // هادي خاص تبقى هي الأولى
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'], // هادي كتعني أي واحد يقدر ياخد السلعة
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];