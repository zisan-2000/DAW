import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const locales = ['en', 'ar', 'es', 'fr']

for (const locale of locales) {
  const messagesPath = path.join(root, 'messages', `${locale}.json`)
  const productsPath = path.join(root, 'messages', '_products', `${locale}.json`)

  if (!fs.existsSync(productsPath)) {
    console.warn(`Skip ${locale}: missing ${productsPath}`)
    continue
  }

  const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf8'))
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'))
  messages.products = products
  fs.writeFileSync(messagesPath, `${JSON.stringify(messages, null, 2)}\n`, 'utf8')
  console.log(`Merged products into messages/${locale}.json`)
}

console.log('Done')
