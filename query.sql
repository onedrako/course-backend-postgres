CREATE TABLE tasks (
  id serial PRIMARY KEY,
  title VARCHAR (255) NOT NULL,
  completed boolean DEFAULT false
);

SELECT * FROM tasks;

INSERT INTO public.tasks (title, completed) VALUES ('Learn SQL', false);
INSERT INTO public.tasks (title, completed) VALUES ('Completar el curso', false);
INSERT INTO public.tasks (title, completed) VALUES ('Tarea 1', false);

INSERT INTO public.users(email, password, created_at) VALUES('user@mail.com','user1233', NOW());
