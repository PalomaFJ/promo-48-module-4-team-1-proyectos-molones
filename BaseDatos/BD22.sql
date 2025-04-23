use defaultdb;

INSERT INTO authors (autor, job, photo)
VALUES ('Patri', 'Desarrolladora web', 'https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg' ),
('Paloma', 'Desarrolladora web','https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg'),
('Irma', 'Desarrolladora web', 'https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg'),
('Laura', 'Desarrolladora web', 'https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg');

INSERT INTO projects (name, slogan, repo, demo, technologies, description, image, fk_author)
VALUES (
  'Arte Interactivo',
  'Preservando el arte a través de la tecnología',
  'https://github.com/Patrigar10?tab=repositories',
  'https://github.com/Patrigar10?tab=repositories',
  'HTML, CSS, React, Node.js, Express, MySQL',
  'Una plataforma donde los usuarios pueden explorar movimientos artísticos a lo largo de la historia.',
  'https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg',
  '1'
),
(
  'Música Viva',
  'Fusionando música y tecnología',
  'https://github.com/PalomaFJ',
  'https://github.com/PalomaFJ',
  'HTML, CSS, React, Node.js, Express, MySQL',
  'Una plataforma donde los artistas pueden subir sus canciones, recibir comentarios de sus seguidores y generar estadísticas sobre el rendimiento de sus canciones.',
  'https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg',
  '2'
),
(
  'Espacios Virtuales',
  'Construyendo ideas en el mundo digital',
  'https://github.com/IrmaPineiro',
  'https://github.com/IrmaPineiro',
  'HTML, CSS, React, Node.js, Express, MySQL',
  'Una plataforma para diseñar planos arquitectónicos en 3D y recorrerlos en realidad aumentada.',
  'https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg',
  '3'
),
(
  'Lau Chef',
  'Recetas sabrosas, soluciones digitales',
  'https://github.com/LauM25',
  'https://github.com/LauM25',
  'HTML, CSS, React, Node.js, Express, MySQL',
  'Un sitio web para compartir recetas, donde los usuarios pueden encontrar y publicar recetas, añadir ingredientes, y valorar platos.',
  'https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg',
  '4'
);

SELECT authors.autor, authors.job, authors.photo, projects.name, projects.demo, projects.description, projects.slogan, projects.technologies , projects.image, projects.repo, projects.fk_author
FROM authors
INNER JOIN projects ON authors.idAuthor = projects.fk_author ;


