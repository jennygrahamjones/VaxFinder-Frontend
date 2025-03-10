import { locationHandlers } from "./location/handlers";
import { organizationHandlers } from "./organizations/handlers";
import { securityHandlers } from "./security/handlers";
import { vaccineAvailabilityHandlers } from "./vaccineAvailability/handlers";
import { vaccineLocationHandlers } from "./vaccineLocations/handlers";

export const handlers = [
  ...locationHandlers,
  ...organizationHandlers,
  ...securityHandlers,
  ...vaccineAvailabilityHandlers,
  ...vaccineLocationHandlers,
];
