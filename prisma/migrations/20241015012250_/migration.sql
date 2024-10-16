-- CreateTable
CREATE TABLE "backflow_post" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "backflow_post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "backflow_company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "licenseNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "backflow_company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "backflow_post_name_idx" ON "backflow_post"("name");

-- CreateIndex
CREATE UNIQUE INDEX "backflow_company_email_key" ON "backflow_company"("email");

-- CreateIndex
CREATE UNIQUE INDEX "backflow_company_licenseNumber_key" ON "backflow_company"("licenseNumber");
