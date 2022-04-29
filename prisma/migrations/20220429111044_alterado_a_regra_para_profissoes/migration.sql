-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profissional" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "telefone" TEXT,
    "email" TEXT NOT NULL,
    "situacao" BOOLEAN DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "tipoProfissionalId" INTEGER,
    CONSTRAINT "Profissional_tipoProfissionalId_fkey" FOREIGN KEY ("tipoProfissionalId") REFERENCES "TipoProfissional" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Profissional" ("createdAt", "email", "id", "nome", "situacao", "telefone", "tipoProfissionalId", "updatedAt") SELECT "createdAt", "email", "id", "nome", "situacao", "telefone", "tipoProfissionalId", "updatedAt" FROM "Profissional";
DROP TABLE "Profissional";
ALTER TABLE "new_Profissional" RENAME TO "Profissional";
CREATE UNIQUE INDEX "Profissional_email_key" ON "Profissional"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
