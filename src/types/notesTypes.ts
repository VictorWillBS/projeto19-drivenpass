import { notes } from "@prisma/client";

export type noteData = Omit<notes,'id'>