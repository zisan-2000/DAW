import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const locales = ['en', 'ar', 'es', 'fr']

for (const locale of locales) {
  const messagesPath = path.join(root, 'messages', `${locale}.json`)
  const homepagePath = path.join(root, 'messages', '_homepage', `${locale}.json`)

  const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf8'))
  const homepage = JSON.parse(fs.readFileSync(homepagePath, 'utf8'))

  messages.homepage = homepage

  // Keep short mobile strings; sync long announcement for announcementBar consumers if needed
  messages.announcementBar = {
    ...messages.announcementBar,
    text: homepage.announcement.text,
    ctaLabel: homepage.announcement.ctaLabel,
  }

  fs.writeFileSync(messagesPath, `${JSON.stringify(messages, null, 2)}\n`, 'utf8')
  console.log(`Merged homepage into messages/${locale}.json`)
}

console.log('Done')
