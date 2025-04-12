ALTER TABLE projects ADD COLUMN fk_author INT NOT NULL;
ALTER TABLE projects ADD FOREIGN KEY (fk_author) REFERENCES authors(idAuthor);

ALTER TABLE projects
ADD CONSTRAINT fk_projects_author
FOREIGN KEY (fk_author)
REFERENCES authors(idAuthor);
