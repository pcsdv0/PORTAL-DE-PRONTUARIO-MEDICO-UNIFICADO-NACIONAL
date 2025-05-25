# 🏥 Portal de Prontuário Médico Unificado Nacional

## 📌 Descrição do Projeto

O **Portal de Prontuário Médico Unificado Nacional** foi desenvolvido com o objetivo de solucionar um dos maiores desafios da saúde pública e privada no Brasil: a fragmentação dos dados clínicos dos pacientes. Esta plataforma web permite que diferentes instituições de saúde acessem e compartilhem informações de forma segura, centralizada e eficiente.

### 🧭 Finalidade

- **Interoperabilidade**: Integra registros médicos entre hospitais, clínicas e laboratórios, eliminando redundância e facilitando o compartilhamento de dados em tempo real.
- **Continuidade do Cuidado**: Médicos de diferentes especialidades e regiões podem visualizar o histórico completo do paciente — incluindo exames, diagnósticos e prescrições — com um único login.
- **Segurança e Conformidade**: Implementa autenticação JWT, cookies `httpOnly`, backups automáticos com `mysqldump` via `cron`, e atende à LGPD.
- **Eficiência Operacional**: Reduz o tempo de cadastro, evita erros de transcrição e agiliza a triagem e os atendimentos.
- **Acessibilidade**: Interface leve e compatível com qualquer navegador moderno, funcionando sobre HTTP(S) na porta 3000.


## 🚀 Tecnologias Utilizadas

- **Linguagem**: JavaScript (ES6+)
- **Backend**: Node.js (v14+) com Express.js
- **Banco de Dados**: MySQL
- **Template Engine**: Handlebars (`express-handlebars`)
- **Autenticação**: JSON Web Tokens (JWT)
- **Gerenciamento de Ambiente**: `dotenv`
- **Gerenciador de Processos**: PM2, nodemon ou systemd
- **Versionamento de Código**: Git e GitHub
- **Sistema Operacional Alvo**: Ubuntu Server 20.04 LTS ou superior


## 📄 Funcionalidades

- Autenticação de usuários com controle de acesso por perfil.
- Operações de **CRUD** completas para Pacientes e Prontuários.
- API RESTful para consumo externo de dados (JSON).
- Painel administrativo protegido por middleware.
- Interface web utilizando Handlebars e arquivos estáticos.


## 📁 Estrutura do Projeto


📦 Portal de Prontuário Médico Unificado Nacional
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── views/
│       └── layouts/
│
├── database/
│   └── portal\ prontuario.sql
│
├── .gitignore
└── README.md



## 🖥️ Requisitos de Infraestrutura

- **Sistema Operacional**: Ubuntu Server 20.04 LTS ou superior
- **Memória RAM**: Mínimo de 2 GB
- **Armazenamento**: Mínimo de 10 GB livres
- **Usuário**: root ou com privilégios sudo
- **Rede**: Acesso SSH habilitado

### ⚙️ Configurações Necessárias

- Node.js escutando na porta **3000**
- MySQL Server instalado e ativo
- Variáveis de ambiente definidas via `.env`
- Gerenciador de processos: PM2, systemd ou nodemon
- Backup automático configurado via `cron` com `mysqldump`


## 📦 Instalação e Setup

# 1. Atualize o sistema e instale dependências
sudo apt update && sudo apt install -y nodejs npm mysql-server git

# 2. Clone o repositório e entre na pasta
git clone https://github.com/pcsdv0/PORTAL-DE-PRONTUARIO-MEDICO-UNIFICADO-NACIONAL.git
cd PORTAL-DE-PRONTUARIO-MEDICO-UNIFICADO-NACIONAL/backend

# 3. Instale as dependências do Node.js
npm install

# 4. Inicie o servidor
npm start


## 🙋‍♂️ Equipe e Contribuições

Projeto desenvolvido por estudantes do 3º Período de Sistemas de Informação — Noite
Contribuições e sugestões são bem-vindas! 💡

