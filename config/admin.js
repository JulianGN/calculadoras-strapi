module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c026f049d226e6ca600c72d207dee42d'),
  },
});
