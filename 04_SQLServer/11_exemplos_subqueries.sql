USE DB_RH
GO

SELECT * FROM TB_AREAS
SELECT * FROM TB_CARGOS

-- 1. Listar todas as áreas que possuem um cargo correspondente cadastrado
SELECT * FROM TB_AREAS WHERE ID IN(SELECT ID_AREA FROM TB_CARGOS)

-- 2. Listar todas as areas que não possuem um cargo correspondente cadastrado
SELECT * FROM TB_AREAS WHERE ID NOT IN (SELECT ID_AREA FROM TB_CARGOS)

-- 3. Buscar todos os cargos cujo Id esteja no intervalo entre 3 e 5
SELECT * FROM TB_CARGOS WHERE ID BETWEEN 3 AND 5
SELECT * FROM TB_CARGOS WHERE ID = 3 OR ID = 4 OR ID = 5
SELECT * FROM TB_CARGOS WHERE ID IN (3, 4, 5)

-- 4. Listar todos os candidatos que ainda não se inscreveram em nenhuma vaga
SELECT * FROM TB_CANDIDATOS WHERE CPF NOT IN (SELECT CPF FROM TB_INSCRICOES)