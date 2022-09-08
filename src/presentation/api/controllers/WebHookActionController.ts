import { Controller } from '@/presentation/api/protocols'
import { HttpResponse } from '@/presentation/api/helpers'
import { ActionWebHookInteractor } from '@/domain/usecases'
import { WebHookAction, WebHookInstitutionId } from '@/domain/valueObjects'
import { WebhookQueryRepository } from '@/infra/repository/WebhookQueryRepository'

export class WebHookActionController implements Controller {
  async handle (request: any): Promise<HttpResponse> {
    const institutionId = new WebHookInstitutionId(request.institutionId)
    const action = new WebHookAction(request.action)

    const webHookQueryRepo = new WebhookQueryRepository()
    const actionWebHookInteractor = new ActionWebHookInteractor(
      webHookQueryRepo
    )

    const response = await actionWebHookInteractor.execute(institutionId, action)

    return HttpResponse.ok({ ...response })
  }
}