export interface DomainTo {
  fqdn: string;
  nsset: {
    handle: string;
    registrar: string;
    dns: DnsItemTo[];
  };
  keyset: {
    handle: string;
    registrar: string;
    dns_keys: string[];
  };
  owner: {
    handle: string;
    organization: string;
    name: string;
    publish: {
      organization: boolean;
      name: boolean;
    };
  };
  sponsoring_registrar: string;
  administrative_contacts: AdministrativeContactTo[];
  expires_at: string;
  events: {
    registered: EventTo;
    transferred: EventTo;
    updated: EventTo;
    unregistered: boolean | null;
  };
  state_flags: {
    flags: StateFlagTo[];
    groups: string[][];
  };
}

interface DnsItemTo {
  name: string;
  ip_address: string;
}

interface AdministrativeContactTo {
  handle: string;
  organization: string;
  name: string;
  publish: {
    organization: boolean;
    name: boolean;
  };
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
