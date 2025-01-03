USE DB_RH
GO

-- 1. Buscando as informa��es: AREA, CARGO e SALARIO.
--	  Usaremos duas tabelas, com seus nomes completos (N�O FA�A ISSO EM CASA)
SELECT
	TB_AREAS.DESCRICAO AS AREA, -- A DESCRI��O EST� SENDO APELIDADA COMO "AREA"
	TB_CARGOS.DESCRICAO AS CARGO,
	TB_CARGOS.SALARIO AS SALARIO
FROM
	TB_AREAS, TB_CARGOS
WHERE 
	TB_AREAS.ID = TB_CARGOS.ID_AREA
GO


-- 2. O mesmo exemplo anterior, usando ALIASES para as tabelas
SELECT
	A.DESCRICAO AS AREA,
	C.DESCRICAO AS CARGO,
	C.SALARIO AS SALARIO
FROM
	TB_AREAS A, TB_CARGOS C
--WHERE 
--	A.ID = C.ID_AREA
GO


-- 3. Uso de JOINS
--- a. JOIN ou INNER JOIN
SELECT
	A.DESCRICAO AS AREA,
	C.DESCRICAO AS CARGO,
	C.SALARIO AS SALARIO
FROM
	TB_AREAS A INNER JOIN TB_CARGOS C
ON 
	A.ID = C.ID_AREA


-- Outro exemplo: Candidatos e suas inscri��es
-- Mostrar o CPF e o nome do candidato, al�m da data de inscri��o:
--- CPF      CANDIDATO       DATA INSCRI��O
SELECT
	CD.CPF AS CPF, 
	CD.NOME AS CANDIDATO, 
	IC.DATA_INSCRICAO AS [DATA INSCRI��O]
FROM 
	TB_CANDIDATOS CD INNER JOIN TB_INSCRICOES IC
ON
	CD.CPF = IC.CPF
GO


-- Buscando todos os candidatos e as datas de inscri��o, mesmo os candidatos
-- que n�o fizeram inscri��o (neste caso, devemos priorizar a tabela TB_CANDIDATOS:
-- se esta tabela estiver do lado esquerdo, usamos LEFT JOIN)
SELECT
	CD.CPF AS CPF, 
	CD.NOME AS CANDIDATO, 
	IC.DATA_INSCRICAO AS [DATA INSCRI��O]
FROM 
	TB_CANDIDATOS CD LEFT JOIN TB_INSCRICOES IC
ON
	CD.CPF = IC.CPF
GO


-- De forma an�loga, podemos usar RIGHT JOIN, priorizando a tabela da direita.
-- Neste caso, a ordem das tabelas � relevante.
SELECT
	CD.CPF AS CPF, 
	CD.NOME AS CANDIDATO, 
	IC.DATA_INSCRICAO AS [DATA INSCRI��O]
FROM 
	TB_CANDIDATOS CD RIGHT JOIN TB_INSCRICOES IC
ON
	CD.CPF = IC.CPF
GO

-- Aplicando JOINS entre tr�s tabelas
SELECT
	C.ID_AREA AS AREA,
	C.DESCRICAO AS CARGO,
	I.DATA_INSCRICAO AS [DATA INSCRI��O],
	CD.NOME AS CANDIDATO,
	CD.TELEFONE
FROM
	TB_CARGOS C INNER JOIN TB_INSCRICOES I 
		ON C.ID = I.ID_CARGO
	INNER JOIN TB_CANDIDATOS CD 
		ON I.CPF = CD.CPF

-- Quando trabalhamos com mais de 1 JOIN, o segundo � relacionado com o resultado do anterior
-- TB_CANDIDATOS se relaciona com I.ID_CARGO


-- Aplicando JOINS entre QUATRO tabelas
SELECT
	A.DESCRICAO AS AREA,
	C.DESCRICAO AS CARGO,
	I.DATA_INSCRICAO AS [DATA INSCRI��O],
	CD.NOME AS CANDIDATO,
	CD.TELEFONE
FROM
	TB_AREAS A FULL JOIN TB_CARGOS C
		ON A.ID = C.ID_AREA
	FULL JOIN TB_INSCRICOES I 
		ON C.ID = I.ID_CARGO
	FULL JOIN TB_CANDIDATOS CD 
		ON I.CPF = CD.CPF
GO

-- JOINS todas as tabelas
SELECT
	A.DESCRICAO AS AREA,
	C.DESCRICAO AS CARGO,
	CONVERT(VARCHAR(10), I.DATA_INSCRICAO, 103) AS [DATA INSCRI��O],
	CD.NOME AS CANDIDATO,
	CD.TELEFONE
FROM
	TB_AREAS A INNER JOIN TB_CARGOS C
		ON A.ID = C.ID_AREA
	INNER JOIN TB_INSCRICOES I 
		ON C.ID = I.ID_CARGO
	INNER JOIN TB_CANDIDATOS CD 
		ON I.CPF = CD.CPF
GO