export interface DomainVM {
  fqdn: string;
  nsset: NSSetVM;
  keyset: KeySetVM;
  owner: ContactVM;
  sponsoring_registrar: string;
  administrative_contacts: ContactVM[];
  expires_at: Date;
  events: EventsVM;
  state_flags: StateFlagsVM;
}

interface DnsItemVM {
  name: string;
  ip_address: string;
}

export interface ContactVM {
  handle: string;
  organization: string;
  name: string;
  publish: {
    organization: boolean;
    name: boolean;
  };
}

export interface EventsVM {
  registered: EventVM;
  transferred: EventVM | null;
  updated: EventVM | null;
  unregistered: EventVM | null;
}

export interface KeySetVM {
  handle: string;
  registrar: string;
  dns_keys: string[];
}

export interface NSSetVM {
  handle: string;
  registrar: string;
  dns: DnsItemVM[];
}

interface EventVM {
  timestamp: Date;
  registrar_handle: string;
}

export interface StateFlagVM {
  name: string;
  active: boolean;
  description: string;
}

export interface StateFlagsVM {
  flags: StateFlagVM[];
  groups: string[][];
}
