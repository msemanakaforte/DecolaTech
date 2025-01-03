USE DB_RH
GO

-- 1. Removendo uma área que tenha um cargo cadastrado
DELETE FROM TB_AREAS WHERE ID = 2

-- 2. Removendo uma área que NÃO tenha um cargo cadastrado
DELETE FROM TB_AREAS WHERE ID = 1

-- 3. Removendo todas as áreas que não possuem um cargo associado
-- (isso inclui as áreas repetidas)
DELETE FROM TB_AREAS WHERE ID NOT IN (SELECT ID_AREA FROM TB_CARGOS)
