export interface DomainTo {
  fqdn: string;
  nsset: NSSetTo;
  keyset: KeySetTo;
  owner: ContactTo;
  sponsoring_registrar: string;
  administrative_contacts: ContactTo[];
  expires_at: string;
  events: EventsTo;
  state_flags: StateFlagsTo;
}

interface DnsItemTo {
  name: string;
  ip_address: string;
}

export interface ContactTo {
  handle: string;
  organization: string;
  name: string;
  publish: {
    organization: boolean;
    name: boolean;
  };
}

export interface EventsTo {
  registered: EventTo;
  transferred: EventTo | null;
  updated: EventTo | null;
  unregistered: EventTo | null;
}

export interface KeySetTo {
  handle: string;
  registrar: string;
  dns_keys: string[];
}

export interface NSSetTo {
  handle: string;
  registrar: string;
  dns: DnsItemTo[];
}

interface EventTo {
  timestamp: string;
  registrar_handle: string;
}

interface StateFlagTo {
  name: string;
  active: boolean;
  description: string;
}

export interface StateFlagsTo {
  flags: StateFlagTo[];
  groups: string[][];
}
