CREATE TABLE IF NOT EXISTS annotators (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS vacations (
  annotator_id INTEGER,
  start DATE,
  end DATE,
  description VARCHAR(250),
  FOREIGN KEY (annotator_id) REFERENCES annotators(id)
);

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

INSERT INTO vacations (annotator_id, start, end, description) VALUES
(1, '2024-11-26', '2024-12-04', 'A culinary exploration in Naples, Italy, tasting authentic Neapolitan pizza and local wines.'),
(1, '2025-01-15', '2025-01-22', NULL),
(2, '2024-08-28', '2024-09-06', 'A relaxing beach vacation in Maui, Hawaii, enjoying the sunsets and surf lessons.'),
(4, '2024-12-29', '2025-01-08', 'A road trip along the Great Ocean Road in Australia, enjoying the coastal views and unique wildlife.'),
(4, '2025-02-10', '2025-02-17', NULL),
(4, '2025-03-20', '2025-03-27', 'A ski vacation in Zermatt, Switzerland, with stunning views of the Matterhorn.'),
(5, '2024-07-23', '2024-07-31', NULL),
(6, '2024-04-15', '2024-04-22', 'A wildlife safari in the Serengeti, Tanzania, witnessing the Great Migration.'),
(6, '2024-12-05', '2024-12-12', 'A relaxing beach vacation in Maui, Hawaii, enjoying the sunsets and surf lessons.'),
(8, '2024-06-12', '2024-06-19', 'A romantic getaway to Paris, France, with visits to the Louvre and Eiffel Tower.'),
(9, '2024-07-05', '2024-07-15', 'A ski vacation in Zermatt, Switzerland, with stunning views of the Matterhorn.'),
(9, '2025-05-09', '2025-05-16', NULL),
(11, '2024-09-01', '2024-09-08', 'An adventurous journey to Patagonia, Argentina, for hiking and exploring glaciers.'),
(12, '2024-10-07', '2024-10-14', 'A spiritual retreat in Rishikesh, India, practicing yoga and meditation by the Ganges.'),
(12, '2025-07-18', '2025-07-25', 'An adventurous journey to Patagonia, Argentina, for hiking and exploring glaciers.'),
(13, '2024-11-15', '2024-11-22', NULL),
(14, '2024-12-05', '2024-12-12', 'A relaxing beach vacation in Maui, Hawaii, enjoying the sunsets and surf lessons.'),
(14, '2025-03-10', '2025-03-17', 'A wildlife safari in the Serengeti, Tanzania, witnessing the Great Migration.'),
(16, '2025-02-17', '2025-02-24', NULL),
(16, '2025-04-04', '2025-04-11', 'A romantic getaway to Paris, France, with visits to the Louvre and Eiffel Tower.'),
(17, '2025-03-10', '2025-03-17', 'A wildlife safari in the Serengeti, Tanzania, witnessing the Great Migration.'),
(19, '2025-05-09', '2025-05-16', NULL),
(19, '2024-08-03', '2024-08-10', 'A cultural trip to Kyoto, Japan, to experience traditional tea ceremonies and visit ancient temples.'),
(20, '2025-06-13', '2025-06-20', 'A cultural trip to Kyoto, Japan, to experience traditional tea ceremonies and visit ancient temples.');
