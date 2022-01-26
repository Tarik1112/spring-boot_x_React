CREATE DATABASE dbinfo_133;
USE dbinfo_133;

SELECT * FROM user_entity;

INSERT INTO user_entity(id,confirm_password, password, username, email, role) VALUES(1112,"admin", "admin", "admin", "admin@webinfo.com", 0);
UPDATE user_entity SET password = 1234 WHERE id LIKE "b7f98b29-d8ec-436d-9a1e-84b01192370c";