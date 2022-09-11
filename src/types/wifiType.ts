import { wifi } from "@prisma/client";

export type wifiData = Omit <wifi,'id' | 'userId' | 'createdAt'>;