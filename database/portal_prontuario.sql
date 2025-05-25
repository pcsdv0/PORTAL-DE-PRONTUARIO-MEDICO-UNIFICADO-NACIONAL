-- remove o banco de dados se existir e cria um novo com charset utf8mb4 e collation utf8mb4_unicode_ci
-- drop database if exists portal_prontuario;
create database portal_prontuario
  default character set = utf8mb4
  collate = utf8mb4_unicode_ci;
use portal_prontuario;

-- tabela de estados
drop table if exists estados;
create table estados (
  id int auto_increment primary key,
  nome varchar(100) not null,
  sigla char(2) not null,
  data_cadastro timestamp default current_timestamp
) engine=innodb
  default charset = utf8mb4
  collate = utf8mb4_unicode_ci;

-- tabela de cidades
drop table if exists cidades;
create table cidades (
  id int auto_increment primary key,
  nome varchar(100) not null,
  estado_id int not null,
  data_cadastro timestamp default current_timestamp,
  foreign key (estado_id) references estados(id) on delete cascade
) engine=innodb
  default charset = utf8mb4
  collate = utf8mb4_unicode_ci;

-- tabela de hospitais
drop table if exists hospitais;
create table hospitais (
  id int auto_increment primary key,
  nome varchar(150) not null,
  endereco varchar(255),
  cidade_id int not null,
  data_cadastro timestamp default current_timestamp,
  foreign key (cidade_id) references cidades(id) on delete cascade
) engine=innodb
  default charset = utf8mb4
  collate = utf8mb4_unicode_ci;

-- tabela de usuários
drop table if exists usuarios;
create table usuarios (
  id int auto_increment primary key,
  nome_usuario varchar(50) not null,
  senha varchar(255) not null,
  funcao enum('médico', 'enfermeiro', 'atendente', 'administrador') not null,
  data_cadastro timestamp default current_timestamp
) engine=innodb
  default charset = utf8mb4
  collate = utf8mb4_unicode_ci;

-- tabela de pacientes
drop table if exists pacientes;
create table pacientes (
  id int auto_increment primary key,
  nome varchar(100) not null,
  data_nascimento date not null,
  endereco varchar(255),
  telefone varchar(20),
  cpf varchar(14) not null unique,
  data_cadastro timestamp default current_timestamp
) engine=innodb
  default charset = utf8mb4
  collate = utf8mb4_unicode_ci;

-- tabela de prontuários médicos
drop table if exists prontuarios;
create table prontuarios (
  id int auto_increment primary key,
  paciente_id int not null,
  descricao text not null,
  data date not null,
  data_cadastro timestamp default current_timestamp,
  foreign key (paciente_id) references pacientes(id) on delete cascade
) engine=innodb
  default charset = utf8mb4
  collate = utf8mb4_unicode_ci;

-- tabela de internações
drop table if exists internacoes;
create table internacoes (
  id int auto_increment primary key,
  paciente_id int not null,
  hospital_id int not null,
  data_entrada date not null,
  data_saida date,
  motivo varchar(255),
  data_cadastro timestamp default current_timestamp,
  foreign key (paciente_id) references pacientes(id) on delete cascade,
  foreign key (hospital_id) references hospitais(id) on delete cascade
) engine=innodb
  default charset = utf8mb4
  collate = utf8mb4_unicode_ci;

-- tabela de exames e resultados
drop table if exists exames;
create table exames (
  id int auto_increment primary key,
  paciente_id int not null,
  tipo varchar(100) not null,
  data date not null,
  resultado text,
  data_cadastro timestamp default current_timestamp,
  foreign key (paciente_id) references pacientes(id) on delete cascade
) engine=innodb
  default charset = utf8mb4
  collate = utf8mb4_unicode_ci;

-- tabela de prescrições
drop table if exists prescricoes;
create table prescricoes (
  id int auto_increment primary key,
  paciente_id int not null,
  medicamento varchar(100) not null,
  dosagem varchar(50),
  frequencia varchar(50),
  data date not null,
  data_cadastro timestamp default current_timestamp,
  foreign key (paciente_id) references pacientes(id) on delete cascade
) engine=innodb
  default charset = utf8mb4
  collate = utf8mb4_unicode_ci;

-- tabela de históricos clínicos
drop table if exists historicos;
create table historicos (
  id int auto_increment primary key,
  paciente_id int not null,
  descricao text not null,
  data date not null,
  data_cadastro timestamp default current_timestamp,
  foreign key (paciente_id) references pacientes(id) on delete cascade
) engine=innodb
  default charset = utf8mb4
  collate = utf8mb4_unicode_ci;
    
-- tabela de farmácias
drop table if exists farmacias;
create table farmacias (
  id int auto_increment primary key,
  nome varchar(150) not null,
  endereco varchar(255) not null,
  cidade_id int not null,
  telefone varchar(20),
  horario_funcionamento varchar(100),
  data_cadastro timestamp default current_timestamp,
  foreign key (cidade_id) references cidades(id) on delete cascade
) engine=innodb
  default charset = utf8mb4
  collate = utf8mb4_unicode_ci;

-- tabela de consultas
drop table if exists consultas;
create table consultas (
  id int auto_increment primary key,
  paciente_id int not null,
  usuario_id int not null,
  data_consulta date not null,
  hora_consulta time not null,
  status enum('agendada', 'realizada', 'cancelada') default 'agendada',
  observacoes text,
  data_cadastro timestamp default current_timestamp,
  foreign key (paciente_id) references pacientes(id) on delete cascade,
  foreign key (usuario_id) references usuarios(id) on delete cascade
) engine=innodb
  default charset = utf8mb4
  collate = utf8mb4_unicode_ci;
  
  

