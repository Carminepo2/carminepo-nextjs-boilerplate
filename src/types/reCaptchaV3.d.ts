export interface ReCaptchaInstance {
  ready: (cb: () => any) => void
  execute: (
    clientKey: string,
    options: ReCaptchaExecuteOptions
  ) => Promise<string>
  render: (id: string, options: ReCaptchaRenderOptions) => any
}

interface ReCaptchaExecuteOptions {
  action: string
}

interface ReCaptchaRenderOptions {
  sitekey: string
  size: 'invisible'
}
