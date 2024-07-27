// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/aboutus`
  | `/auth/onboarding`
  | `/auth/profile`
  | `/auth/sso`
  | `/faq`
  | `/home`
  | `/malpun`
  | `/malpun/claimticket`
  | `/malpun/viewticket`
  | `/state`
  | `/state/selectstate`
  | `/state/selectstate/:id`

export type Params = {
  '/state/selectstate/:id': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
