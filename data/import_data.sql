-- SQLBook: Code
-- DML : Data Manipulation Language

BEGIN;

INSERT INTO noun (label)
VALUES
    ('un cheval'),
    ('la mairie de Neuilly-sur-Seine'),
    ('une huître'),
    ('Julie Andrieu'),
    ('Jacky et sa Subaru Impreza'),
    ('la gendarmerie hollandaise'),
    ('un chauve'),
    ('Simon'),
    ('2 chatons');

INSERT INTO adjective (label)
VALUES
    ('bien cuit'),
    ('blond'),
    ('guilleret'),
    ('ankylosé'),
    ('blafard'),
    ('rasé de près'),
    ('amputé d''un doigt');

INSERT INTO complement (label)
VALUES
    ('un seau en plastique'),
    ('la consommation de café'),
    ('Yann'),
    ('3 roues de voiture'),
    ('2 mains gauches'),
    ('un skieur débutant'),
    ('la Mer Noire');

INSERT INTO verb (label)
VALUES
    ('consulte'),
    ('franchit'),
    ('cuisine'),
    ('remet en question'),
    ('s''immole pour protester contre'),
    ('enduit de confiture'),
    ('instaure'),
    ('déguste');

INSERT INTO cadex (sentence,noun_id,verb_id,adjective_id,complement_id)
SELECT noun.label || ' ' || adjective.label || ' ' || verb.label || ' ' || complement.label,
	noun.id,verb.id,adjective.id,complement.id
FROM noun,adjective,verb,complement;

COMMIT;