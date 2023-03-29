-- DDL

-- les instructions effectuées dans une transaction (entre BEGIN et COMMIT) sont exécutées,
-- une erreur éventuelle va annuler tout changement effectué auparavant dans une transaction
BEGIN;

DROP TABLE IF EXISTS noun;

CREATE TABLE noun(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" text NOT NULL UNIQUE
);

CREATE TABLE verb(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" text NOT NULL UNIQUE
);

CREATE TABLE adjective(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" text NOT NULL UNIQUE
);

CREATE TABLE complement(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" text NOT NULL UNIQUE
);

CREATE TABLE cadex(
    "id" int,
    "sentence" text NOT NULL UNIQUE,
    "noun_id" int NOT NULL REFERENCES noun(id),
    "verb_id" int NOT NULL REFERENCES verb(id),
    "adjective_id" int NOT NULL REFERENCES adjective(id),
    "complement_id" int NOT NULL REFERENCES complement(id),
);

CREATE TABLE correction(
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "sentence" text NOT NULL UNIQUE,
    "score" int NOT NULL DEFAULT 0,
    "cadex_id" int NOT NULL REFERENCES cadex(id)
);


COMMIT;
