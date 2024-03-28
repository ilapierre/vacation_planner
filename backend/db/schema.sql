CREATE TABLE IF NOT EXISTS annotators (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS vacations (
  annotator_id INTEGER,
  start DATE,
  end DATE,
  FOREIGN KEY (annotator_id) REFERENCES annotators(id)
);

-- Annotators
INSERT INTO annotators (id, name) VALUES (1, 'Audrey Guardiola');
INSERT INTO annotators (id, name) VALUES (2, 'Anna-Lynn Aguero');
INSERT INTO annotators (id, name) VALUES (3, 'Audrey Agtarap');
INSERT INTO annotators (id, name) VALUES (4, 'Christopher Boxer');
INSERT INTO annotators (id, name) VALUES (5, 'Elizaveta Kovalenko');
INSERT INTO annotators (id, name) VALUES (6, 'Iana Picicur');
INSERT INTO annotators (id, name) VALUES (7, 'Keiko Suda');
INSERT INTO annotators (id, name) VALUES (8, 'Maureen Cant');
INSERT INTO annotators (id, name) VALUES (9, 'Audrey Agtarap');
INSERT INTO annotators (id, name) VALUES (10, 'Melody Manuputty');
INSERT INTO annotators (id, name) VALUES (11, 'Monica Meza-Girard');
INSERT INTO annotators (id, name) VALUES (12, 'Nahla Ismail');
INSERT INTO annotators (id, name) VALUES (13, 'Oliver Wang');
INSERT INTO annotators (id, name) VALUES (14, 'Rosanne Evers');
INSERT INTO annotators (id, name) VALUES (15, 'Sebastian Schneider');
INSERT INTO annotators (id, name) VALUES (16, 'Shinnel Ferary');
INSERT INTO annotators (id, name) VALUES (17, 'Suranjana Baruah');
INSERT INTO annotators (id, name) VALUES (18, 'Tamy Sakr');
INSERT INTO annotators (id, name) VALUES (19, 'Thomas Pappas');
INSERT INTO annotators (id, name) VALUES (20, 'Tania Lye');
INSERT INTO annotators (id, name) VALUES (21, 'Whitney Alger');
