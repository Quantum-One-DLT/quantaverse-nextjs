import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth({

async callback(req, res) {
    try {
      await auth0.handleCallback(req, res)
    } catch (error) {
      res.redirect('/')
    }
  }

});
