import { Router } from "express";

import { deleteMembershipsHandler, getMembershipsByIdHandler, getMembershipsHandler, postMembershipsHandler, putMembershipsHandler } from "../Handlers/Memberships/membershipsHandler.js";


export const membershipsRouter = Router()

membershipsRouter.get('/', getMembershipsHandler)
membershipsRouter.get('/:id',getMembershipsByIdHandler)
membershipsRouter.post('/', postMembershipsHandler)
membershipsRouter.put('/:id', putMembershipsHandler)
membershipsRouter.delete('/:id', deleteMembershipsHandler)