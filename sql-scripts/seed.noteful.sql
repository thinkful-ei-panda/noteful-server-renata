BEGIN;

INSERT INTO folders (id, folder_name)
VALUES
    (1, 'Fish tricks'),
    (2, 'Dont go bacon my heart'),
    (3, 'Wait, what?')
;

INSERT INTO notes (note_name, content, folder_id)
VALUES
    ('This is awesome', 'Inset content here', 1),
    ('This is not awesome', 'Inset content here', 2),
    ('This is perfect', 'Inset content here', 3),
    ('This is weird', 'Inset content here', 2),
    ('This is ...', 'Inset content here', 1),
    ('This is not cool', 'Inset content here', 2)
;

COMMIT;