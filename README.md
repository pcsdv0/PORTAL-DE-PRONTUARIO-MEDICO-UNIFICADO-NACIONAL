# 🏥 Portal de Prontuário Médico Unificado Nacional

## 🚩 Descrição do Projeto

O **Portal de Prontuário Médico Unificado Nacional** foi idealizado para resolver um dos maiores desafios do setor de saúde: a fragmentação e a inacessibilidade de informações médicas de pacientes entre diferentes instituições e profissionais. 


### Para que Serve

- **Interoperabilidade**: concentra dados clínicos, administrativas e de histórico de pacientes em uma única plataforma, permitindo que hospitais, clínicas e laboratórios compartilhem e consultem informações em tempo real, sem retrabalho ou duplicação de registros.  

- **Continuidade do Cuidado**: médicos de diferentes especialidades e localidades conseguem acompanhar toda a trajetória clínica do paciente — exames, diagnósticos, prescrições e internações — com um único login.  

- **Segurança e Conformidade**: utiliza autenticação JWT, cookies `httpOnly` e boas práticas de backup (mysqldump via cron), garantindo a privacidade dos dados e a conformidade com normas de segurança e LGPD.  

- **Eficiência Operacional**: reduz o tempo de cadastro e localização de informações, minimiza erros de transcrição e agiliza processos como triagem, consulta de exames e emissão de relatórios.  

- **Acessibilidade**: interface web leve baseada em Handlebars, que funciona em qualquer navegador moderno e requer apenas conexão HTTP(S) na porta 3000.  


## 🚀 Tecnologias

- **Linguagem**: JavaScript (ES6+)
- **Backend**: Node.js (v14+) + Express.js  
- **Banco de Dados**: MySQL  
- **Template Engine**: Handlebars (`express-handlebars`)  
- **Autenticação**: JSON Web Tokens (JWT)  
- **Gerenciamento de Ambiente**: `dotenv`  
- **Process Manager**: PM2 / nodemon / systemd  
- **Versionamento**: Git / GitHub  
- **SO alvo**: Ubuntu Server 20.04 LTS ou superior


## 📄 Visão Geral

Este portal unificado atende aos requisitos de:

1. **Cadastro, login e logout** de usuários (com roles).  
2. **CRUD** em duas entidades principais: Pacientes e Prontuários.  
3. **API RESTful** para integração externa (JSON).  
4. **Painel administrativo** protegido por middleware de autenticação.  
5. **Interface web** leve com Handlebars e assets estáticos.


## 📁 Estrutura do Projeto


/Portal de Prontuário Médico Unificado Nacional
├── backend/
│   ├── controllers/      
│   ├── middlewares/     
│   ├── models/           
│   ├── routes/           
|   |── .env
|   |── package.json
|   |── package-locjk.json
│   └── server.js         
│
├── frontend/
│   ├── public/          
│   └── views/            
│       └── layouts/     
│
├── database/
│   └── portal_prontuario.sql       
│             
└── README.md            


## 🖥️ Requisitos de Infraestrutura

- **Distribuição**: Ubuntu Server 20.04 LTS ou superior  
- **RAM**: ≥ 2 GB  
- **Armazenamento**: ≥ 10 GB livres  
- **Usuário**: root ou sudo habilitado  
- **Rede**: SSH ativo  

### Configurações Obrigatórias

- Node.js escutando na porta **3000**  
- MySQL Server instalado e configurado  
- Variáveis de ambiente via **dotenv**  
- Process Manager (PM2, systemd ou nodemon)  
- Backup automático com **mysqldump** via **cron**


## ⚙️ Instalação e Setup

1. **Atualize o sistema e instale dependências**  
   
   sudo apt update && sudo apt install -y nodejs npm mysql-server git

2. **Clone e entre na pasta**

  git clone url-do-repositorio
  cd projeto
  
3. **Instale dependências Node e rode**

  npm install
  npm start



