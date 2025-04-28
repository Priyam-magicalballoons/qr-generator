-- CreateTable
CREATE TABLE "Shortener" (
    "id" UUID NOT NULL,
    "longUrl" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,

    CONSTRAINT "Shortener_pkey" PRIMARY KEY ("id")
);
