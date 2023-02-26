CREATE TABLE "public.users" (
	"id" serial NOT NULL,
	"creation_date" DATE,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.words" (
	"word" VARCHAR(255) NOT NULL,
	"user_id" integer NOT NULL
) WITH (
  OIDS=FALSE
);


ALTER TABLE "public.words" ADD CONSTRAINT "words_fk0" FOREIGN KEY ("user_id") REFERENCES "public.users"("id");


