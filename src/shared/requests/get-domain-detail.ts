import axios from "axios";
import { DomainTo } from "@/shared/models/domain-to";

export const getDomainDetail = () =>
  axios.get<DomainTo>(
    "https://domain-registry.sherstneva.cz/data/domain-detail.json"
  );
