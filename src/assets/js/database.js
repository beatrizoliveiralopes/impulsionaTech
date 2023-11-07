const database = {
    areas: [
        {
            imagem: 'https://source.unsplash.com/mKhPLJ5JQI4',
            titulo: 'Front-end',
            area: 'Desenvolvimento de software', 
            descricao: 'É a área da programação que se dedica a criar a parte visual e interativa de um site, aplicativo ou software. É o que o usuário vê e usa quando acessa uma plataforma digital.',
        },
        {
            imagem: 'https://source.unsplash.com/64YrPKiguAE',
            titulo: 'Back-end',
            area: 'Desenvolvimento de software', 
            descricao: 'É a área que faz a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio e validações.',
        },
        {
            imagem: 'https://source.unsplash.com/YXC9PuBblTA',
            titulo: 'Full-stack',
            area: 'Desenvolvimento de software', 
            descricao: 'É a área que engloba tanto a parte da interação do usuário em um site ou aplicativo (front-end) quanto a parte de armazenamento e processamento de informações no servidor (back-end).',
        },
        {
            imagem: '',
            titulo: 'DevOps',
            area: 'Infrestrurtara e Cloud Computing', 
            descricao: 'É a área responsável por aplicar um conjunto de práticas e processos que visam acelerar e automatizar aspectos dos processos de desenvolvimento, testes e lançamento de softwares.',
        },
        {
            imagem: '',
            titulo: 'Ánalise de dados',
            area: 'Ciência de dados', 
            descricao: 'É a área que transforma números e informações em insights para a tomada de decisão, utilizando de técnicas estatísticas e lógicas',
        },
        {
            imagem: 'https://source.unsplash.com/ydArxOA1uSM',
            titulo: 'Segurança da Informação',
            area: '', 
            descricao: 'É a área da informática que tem a missão de proteger todas as informações e dados que circulam na rede.',
        }
    ],
    cursos: [
        {
            imagem: 'https://source.unsplash.com/H424WdcQN4Y',
            titulo: 'Curso de Introdução à Tecnologia - Rocketseat',
            nivel: 'Inciante',
            cargaHoraria: '5h',
            comCertificado: true,
            link: 'https://www.rocketseat.com.br/discover'
        },
        {
            imagem: 'https://i.postimg.cc/XY8Mz62H/Java-Script.png',
            titulo: 'Minicurso: Javascript do Zero - Cubos Academy',
            nivel: 'Inciante',
            cargaHoraria: '40h',
            comCertificado: false,
            link: 'https://cubos.academy/lp/minicurso-javascript-do-zero'
        },
        {
            imagem: 'https://i.postimg.cc/K8dT9KWD/seguran-a-informacao.jpg',
            titulo: 'Curso de Segurança da Informação - Curso em vídeo',
            nivel: 'Inciante',
            cargaHoraria: '20h',
            comCertificado: true,
            link: 'https://www.cursoemvideo.com/curso/seguranca-da-informacao-modulo-01-20-horas/'
        },
        {
            imagem: 'https://source.unsplash.com/o1SKqmgSDbg',
            titulo: 'Minicurso: Design UX/UI - Cubos Academy',
            nivel: 'Inciante',
            cargaHoraria: '5h',
            comCertificado: false,
            link: 'https://cubos.academy/lp/minicurso-javascript-do-zero'
        },
        {
            imagem: 'https://i.postimg.cc/k5grrYzn/git.png',
            titulo: 'Curso de Git e GitHub - Curso em vídeo',
            nivel: 'Inciante',
            cargaHoraria: '20h',
            comCertificado: true,
            link: 'https://www.cursoemvideo.com/curso/curso-de-git-e-github/'
        },
        {
            imagem: 'https://i.postimg.cc/nzxDJyps/pinguim-linux.png',
            titulo: 'Curso de Linux - Curso em vídeo',
            nivel: 'Inciante',
            cargaHoraria: '40h',
            comCertificado: true,
            link: 'https://www.cursoemvideo.com/curso/linux/'
        },
        {
            imagem: 'https://i.postimg.cc/s26k39C5/algoritmo.png',
            titulo: 'Curso de Algoritmo - Curso em vídeo',
            nivel: 'Inciante',
            cargaHoraria: '40h',
            comCertificado: true,
            link: 'https://www.cursoemvideo.com/curso/curso-de-algoritmo/'
        },
        {
            imagem: 'https://i.postimg.cc/02XDwXd3/sistema-html-para-o-conceito-de-sites.jpg',
            titulo: 'Curso de HTML5 - Curso em vídeo',
            nivel: 'Inciante',
            cargaHoraria: '40h',
            comCertificado: true,
            link: 'https://www.cursoemvideo.com/curso/html5/'
        },
        {
            imagem: 'https://i.postimg.cc/RZ3fQ1g0/curso-online.png',
            titulo: 'Curso de Java Básico - Curso em vídeo',
            nivel: 'Inciante',
            cargaHoraria: '40h',
            comCertificado: true,
            link: 'https://www.cursoemvideo.com/curso/java-basico/'
        },
        {
            imagem: 'https://source.unsplash.com/ZGvS7H9nYbk',
            titulo: 'Curso de Redes de Computadores - Curso em vídeo',
            nivel: 'Inciante',
            cargaHoraria: '20h',
            comCertificado: true,
            link: 'https://www.cursoemvideo.com/curso/redes-de-computadores/'
        },
    ],
    vagas: [
        {
            imagem: 'https://media.licdn.com/dms/image/C4D0BAQEV1_DDHQ2EzA/company-logo_200_200/0/1630539592351/reinvent_consultoria_rh_logo?e=1707350400&v=beta&t=PjEB6a85wrSmd0ccxv6eSVfZDBR_HNrBvJWnVTuqWkM',
            titulo: 'Desenvolvedor Back End',
            nivel: 'Sênior',
            salario: 'Até R$ 1.000,00',
            local: 'São Caetano do Sul - SP',
            link: 'https://www.catho.com.br/vagas/desenvolvedor-back-end-senior/24217802/?origem_apply=busca-de-vagas&entrada_apply=direto'
        },
        {
            imagem: '',
            titulo: 'Desenvolvedor Web',
            nivel: 'Pleno',
            salario: 'Até R$ 1.000,00',
            local: 'São Paulo - SP',
            link: 'https://www.catho.com.br/vagas/desenvolvedor-web-pleno/24703845/?origem_apply=vagas-similares&entrada_apply=direto'
        },
        {
            imagem: 'https://media.licdn.com/dms/image/D4D0BAQEj8P-2NRbONQ/company-logo_200_200/0/1680772822917/exadel_logo?e=1707350400&v=beta&t=SWseZHIHkird1Fbmz252gnpJmklMYi0VOuM_ZkMwDBM',
            titulo: 'JAVA Developer',
            nivel: 'Pleno-sênior',
            salario: 'A Combinar',
            local: 'Remoto',
            link: 'https://www.linkedin.com/jobs/view/3744176074/?alternateChannel=search&refId=BgKOtg50cIzD0fmY6M56zA%3D%3D&trackingId=o13BMhxrjB4tDnsP%2BOqv%2BQ%3D%3D'
        },
        {
            imagem: 'https://www.accenture.com/content/dam/accenture/final/images/icons/symbol/Acc_Logo_Black_Purple_RGB.png',
            titulo: 'Analista de Dados',
            nivel: 'Pleno',
            salario: 'A Combinar',
            local: 'Nova Lima - MG',
            link: 'https://www.accenture.com/br-pt/careers/jobdetails?id=11664552_pt-br&title=Analista%20de%20Dados%20Pleno'
        },
        {
            imagem: '',
            titulo: 'Full Stack Java',
            nivel: '',
            salario: 'A combinar',
            local: 'Indaiatuba - SP',
            link: 'https://johndeere.eightfold.ai/careers?query=Desenvolvedora%20ou%20Desenvolvedor%20Full%20Stack%20Java%20-%20Indaiatuba/SP'
        },
        {
            imagem: 'https://media.licdn.com/dms/image/D4D0BAQFt5tcPI7H9zw/company-logo_200_200/0/1688397293111/kantaribopemedia_logo?e=1707350400&v=beta&t=bMFsUD9PfwbIip0r1EhRVEo5qwtRo05UP8WmTMTyih0',
            titulo: 'Analista de Qualidade (PCD)',
            nivel: 'Júnior',
            salario: 'A combinar',
            local: 'São Paulo - SP (Híbrido)',
            link: 'https://www.linkedin.com/jobs/view/3743034857'
        },
        {
            imagem: 'https://media.licdn.com/dms/image/D4D0BAQFt5tcPI7H9zw/company-logo_200_200/0/1688397293111/kantaribopemedia_logo?e=1707350400&v=beta&t=bMFsUD9PfwbIip0r1EhRVEo5qwtRo05UP8WmTMTyih0',
            titulo: 'Desenvolvedor(a) QA',
            nivel: 'Júnior',
            salario: 'A combinar',
            local: 'Remoto',
            link: 'https://www.linkedin.com/jobs/view/3754306156'
        },
        {
            imagem: 'https://media.licdn.com/dms/image/C4D0BAQHOj0F1x9n5ZA/company-logo_200_200/0/1630575000528/marketdata_logo?e=1707350400&v=beta&t=oSLnsbS7_jyo0HqrtqGkuVB1aotnas0H75yqYipCO-U',
            titulo: 'Desenvolvedor Java',
            nivel: 'Júnior',
            salario: 'A combinar',
            local: 'São Paulo (Híbrido)',
            link: 'https://www.linkedin.com/jobs/view/3755296696'
        },
        {
            imagem: 'https://media.licdn.com/dms/image/C560BAQEuKn8UkpNeyQ/company-logo_200_200/0/1631360396230?e=1707350400&v=beta&t=HPiXzkeVCZ0kEJrNgTIijHGrOW7nJLqjuy-cfUaFL1s',
            titulo: 'React/React Native Front-end Developer',
            nivel: 'Júnior',
            salario: 'A combinar',
            local: 'Porto Alegre - RS',
            link: 'https://www.linkedin.com/jobs/view/3590303234'
        },
        {
            imagem: 'https://media.licdn.com/dms/image/D4D0BAQFyKq6LhcbtRg/company-logo_200_200/0/1683248272396/ab_tech_sp_logo?e=1707350400&v=beta&t=nAXUeq3hEZcc44E4HJGUnxsK7lVIws7HT2h3VNThX8k',
            titulo: 'Desenvolvedor Python',
            nivel: 'Pleno-sênior',
            salario: 'A combinar',
            local: 'Remoto',
            link: 'https://www.linkedin.com/jobs/view/3757287656'
        },
    ],
    membros: [
        {
            nome: 'Beatriz',
            descricao: 'É Analista de Sistemas pelo IFTM - Campus Paracatu.Atualmente é servidora público federal atuando na área de Infraestrutura de Redes e Servidores.',
            github: 'https://github.com/beatrizoliveiralopes',
            linkedin: 'https://br.linkedin.com/in/beatriz-oliveira-lopes-0930b562',
            foto: '../assets/imgs/beatriz.jpg' 
        },
        {
            
        }
    ],
    feedbacks: [
        {
            nome: 'João de Deus',
            email: 'joao@gmail.com',
            telefone: '84999551234',
            site: '',
            mensagem: 'Site muito bom!'
        }
    ],
}

const imgPadraoAreas = 'https://i.postimg.cc/d1MCRNtb/img-tecnology-areas-null.jpg';
const imgPadraoCurso = 'https://i.postimg.cc/RZ3fQ1g0/curso-online.png';
const imgPadraoVargas = 'https://i.postimg.cc/TPw8S5Ck/img-company-null.png';
