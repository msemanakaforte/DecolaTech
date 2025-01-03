USE DB_RH
GO

-- INSERINDO REGISTROS NA TABELA TB_AREAS
-- NÃO PODE INSERIR EM MAIS DE UMA TABELA DE UMA VEZ SÓ

INSERT INTO TB_AREAS (DESCRICAO) VALUES ('Administração')
GO

-- Inserindo vários registros
INSERT INTO TB_AREAS (DESCRICAO) VALUES
('Marketing'), 
('Financeiro'), 
('Recursos Humanos'), 
('Suporte Técnico')
GO
