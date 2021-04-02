CREATE ROLE admin_kino_critic WITH LOGIN;
CREATE ROLE manager_kino_critic WITH LOGIN;
CREATE ROLE user_kino_critic WITH LOGIN;
CREATE ROLE visitor_kino_critic WITH LOGIN;

GRANT INSERT, SELECT ON kinos TO manager_kino_critic;
GRANT USAGE, SELECT ON kinos_id_seq TO manager_kino_critic;

GRANT INSERT, SELECT ON users_kinos TO admin_kino_critic;
GRANT SELECT, USAGE ON users_kinos_id_seq TO admin_kino_critic;
GRANT INSERT, SELECT ON phones TO admin_kino_critic;
GRANT USAGE, SELECT ON phones_id_seq TO admin_kino_critic;

GRANT SELECT ON kinos TO visitor_kino_critic;
GRANT SELECT, INSERT ON users_kinos TO visitor_kino_critic;
GRANT SELECT, USAGE ON users_kinos_id_seq TO visitor_kino_critic;

GRANT SELECT ON comments TO visitor_kino_critic;

GRANT SELECT, UPDATE ON users_kinos TO user_kino_critic;
GRANT SELECT, UPDATE ON users_has_kinos TO user_kino_critic;
GRANT SELECT, UPDATE ON kinos TO user_kino_critic;
GRANT SELECT, UPDATE ON phones TO user_kino_critic;
GRANT SELECT, UPDATE ON kinos TO user_kino_critic;
GRANT SELECT, INSERT ON comments TO user_kino_critic;
GRANT USAGE, SELECT ON users_has_kinos_id_seq TO user_kino_critic;
GRANT SELECT, INSERT, UPDATE ON users_has_kinos TO user_kino_critic;

GRANT flouheforst TO user_kino_critic;


\password admin_kino_critic
\password manager_kino_critic
\password user_kino_critic
\password visitor_kino_critic
