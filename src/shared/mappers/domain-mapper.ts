import { DomainTo } from "@/shared/tos/domain-to";
import { DomainVM } from "@/shared/models/domain-vm";

export class DomainMapper {
  static fromToToModel(to: DomainTo): DomainVM {
    return {
      ...to,
      expires_at: new Date(to.expires_at),
      events: {
        registered: {
          ...to.events.registered,
          timestamp: new Date(to.events.registered.timestamp),
        },
        updated: to.events.updated
          ? {
              ...to.events.updated,
              timestamp: new Date(to.events.updated.timestamp),
            }
          : null,
        transferred: to.events.transferred
          ? {
              ...to.events.transferred,
              timestamp: new Date(to.events.transferred.timestamp),
            }
          : null,
        unregistered: to.events.unregistered
          ? {
              ...to.events.unregistered,
              timestamp: new Date(to.events.unregistered.timestamp),
            }
          : null,
      },
    };
  }
}
