import { App } from 'vue'
import Portal from './components/portal'
import PortalTarget from './components/portal-target'
import {
  provideWormhole,
  useWormhole,
  wormholeSymbol,
} from './composables/wormhole'
import { Wormhole as TWormhole } from './types'
import { createWormhole, wormhole as defaultWormhole } from './wormhole'
export { mountPortalTarget } from './utils/mountPortalTarget'
export interface PluginOptions {
  portalName?: string
  portalTargetName?: string
  MountingPortalName?: string
  wormhole?: TWormhole
}

export function install(app: App, options: PluginOptions = {}) {
  app.component(options.portalName || 'Portal', Portal)
  app.component(options.portalTargetName || 'PortalTarget', PortalTarget)

  const wormhole = options.wormhole ?? defaultWormhole
  app.provide(wormholeSymbol, wormhole)
}

// alternative name for named import
export const plugin = install
export const Wormhole = defaultWormhole

export {
  Portal,
  PortalTarget,
  useWormhole,
  provideWormhole,
  TWormhole,
  createWormhole,
}
