import { DatabaseSettings } from '@/infra/repository'

export class EnvAdapter {
  static readonly server = {
    stage: process.env.NODE_ENV ?? 'development',
    name: process.env.SERVICE_NAME ?? 'webhookService'
  }

  static readonly http = {
    listenPort: Number(process.env.PORT ?? 3001)
  }

  static readonly databaseSettings: DatabaseSettings = {
    authentication: {
      type: process.env.DATABASE_TYPE ?? 'mysql',
      host: process.env.DATABASE_HOST ?? 'localhost',
      port: 3306,
      username: process.env.DATABASE_USERNAME ?? 'root',
      password: process.env.DATABASE_PASSWORD ?? 'asdasd',
      database: process.env.DATABASE_DATABASE ?? 'webhook'
    }
  }

  static readonly staffProxies = process.env.STAFF_PROXIES ? process.env.STAFF_PROXIES.split(' ') : ['::1']

  static readonly logService = process.env.LOG_SERVICE ?? 'http://localhost:3000'
}
