CREATE TABLE "Users" (
  "id" SERIAL PRIMARY KEY,
  "login" varchar,
  "password" varchar,
  "age" varchar,
  "fio" varchar,
  "address" varchar,
  "typeUser" int,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Phones" (
  "id" SERIAL PRIMARY KEY,
  "createdAt" date,
  "updatedAt" date,
  "number" varchar,
  "format" varchar,
  "numberFormat" varchar,
  "id_user" int
);

CREATE TABLE "Refresh_Sessions" (
  "id" SERIAL PRIMARY KEY,
  "refreshtoken" uuid,
  "user_agent" varchar,
  "fingerprint" varchar,
  "ip" varchar,
  "expiresin" varchar,
  "id_user" int,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Kinos" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar,
  "review" varchar,
  "photo" varchar,
  "rating" varchar,
  "views" varchar,
  "year" varchar,
  "city" varchar,
  "genre" varchar,
  "slogan" varchar,
  "director" varchar,
  "scenario" varchar,
  "producer" varchar,
  "operator" varchar,
  "composer" varchar,
  "painter" varchar,
  "mounting" varchar,
  "budget" varchar,
  "feesus" varchar,
  "feesworld" varchar,
  "watchers" varchar,
  "premiererf" varchar,
  "premiereworld" varchar,
  "releaserf" varchar,
  "releasedvd" varchar,
  "age" varchar,
  "reitingmpaa" varchar,
  "time" varchar,
  "id_user" int,
  "estimate" float,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Comments" (
  "id" SERIAL PRIMARY KEY,
  "createdAt" date,
  "updatedAt" date,
  "text" varchar,
  "id_kino" int,
  "id_user" int
);

CREATE TABLE "User_hasKinos" (
  "id" SERIAL,
  "id_user" int,
  "id_kino" int,
  "type_kino" int,
  "createdAt" date,
  "updatedAt" date,
  PRIMARY KEY ("id", "id_user", "id_kino")
);

ALTER TABLE "User_hasKinos" ADD FOREIGN KEY ("id_user") REFERENCES "Users" ("id");

ALTER TABLE "User_hasKinos" ADD FOREIGN KEY ("id_user") REFERENCES "Kinos" ("id");

ALTER TABLE "Refresh_Sessions" ADD FOREIGN KEY ("id_user") REFERENCES "Users" ("id");

ALTER TABLE "Phones" ADD FOREIGN KEY ("id_user") REFERENCES "Users" ("id");

ALTER TABLE "Comments" ADD FOREIGN KEY ("id_kino") REFERENCES "Kinos" ("id");

