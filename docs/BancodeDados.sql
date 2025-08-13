CREATE DATABASE IF NOT EXISTS Trabalho-Def;
USE Trabalho-Def;

-- Tabela de registro (cadastro de usuários)
CREATE TABLE contas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(100) NOT NULL,
    nome_usuario VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,  -- De preferência, armazenar hash da senha
    telefone VARCHAR(20)
);

-- Tabela de login (tentativas de login)
CREATE TABLE logar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conta_id INT NOT NULL,
    data_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (conta_id) REFERENCES contas(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Tabela de perfil (conectada com a tabela contas)
CREATE TABLE perfil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conta_id INT NOT NULL UNIQUE,  -- Um perfil por conta
    nome_completo VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),

    FOREIGN KEY (conta_id) REFERENCES contas(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
