import path from 'node:path'
import { fileURLToPath} from 'node:url'
import ip from 'ip'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  port: {
    main: 4000,
    micro: 3000
  },
  host: ip.address(),
  __dirname
}
