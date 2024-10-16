"server-only";

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { companySchema } from "@/schemas/companySchema";

export const companyRouter = createTRPCRouter({
  create: publicProcedure
    .input(companySchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.company.create({
        data: {
          name: input.name,
          email: input.email,
          phone: input.phone,
          addressLine1: input.addressLine1,
          addressLine2: input.addressLine2 || "",
          city: input.city,
          state: input.state,
          zip: input.zip,
          licenseNumber: input.licenseNumber,
        },
      });
    }),
});
