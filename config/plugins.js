module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'contato@juliannunes.com.br',
          defaultReplyTo: 'contato@juliannunes.com.br',
        },
      },
    },
  });