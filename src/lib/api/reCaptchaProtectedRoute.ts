import UserStatusCode from '@customTypes/UserStatusCode'
import HttpStatusCode from '@customTypes/HttpStatusCode'
import { NextApiRequest, NextApiResponse } from 'next'

const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'

async function verifyReCaptchaToken(token: string) {
  const SECRET_KEY = process.env.RECAPTCHA_SECRET!

  const response = await fetch(RECAPTCHA_VERIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${SECRET_KEY}&response=${token}`,
  })
  const data = await response.json()
  console.log(data)
  return data.score >= 0.5
}

const reCaptchaProtectedRoute = (
  handler: (req: NextApiRequest, res: NextApiResponse) => void
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const reCaptchaToken = req.body?.reCaptchaToken

    if (!reCaptchaToken) {
      res
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ success: false, message: UserStatusCode.ReCaptchaMissingToken })
      return
    }

    const isBot = !(await verifyReCaptchaToken(reCaptchaToken))
    if (isBot) {
      res
        .status(HttpStatusCode.FORBIDDEN)
        .json({ success: false, message: UserStatusCode.ReCaptchaCheckFailed })
      return
    }

    handler(req, res)
  }
}

export default reCaptchaProtectedRoute
