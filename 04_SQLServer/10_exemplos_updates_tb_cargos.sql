USE DB_RH
GO

-- 1. Alterar a descrição da área cujo ID seja igual a 2
UPDATE TB_AREAS SET DESCRICAO =	'Marketing Digital' WHERE ID = 2
GO

-- 2. Reajustar os salários da tabela TB_CARGOS EM 10%
SELECT * FROM TB_CARGOS
UPDATE TB_CARGOS SET SALARIO = SALARIO * 1.1