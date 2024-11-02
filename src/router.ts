// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/aboutus`
  | `/auth/onboarding`
  | `/auth/sso`
  | `/d/y/l/a/n`
  | `/faq`
  | `/home`
  | `/malpun`
  | `/malpun/buyticket`
  | `/malpun/claimticket`
  | `/malpun/myticket`
  | `/malpun/viewticket`
  | `/memories`
  | `/memories/gallery/:event`
  | `/memories/maxmories`
  | `/profile`
  | `/state`
  | `/state/selectstate/:id`

export type Params = {
  '/memories/gallery/:event': { event: string }
  '/state/selectstate/:id': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
