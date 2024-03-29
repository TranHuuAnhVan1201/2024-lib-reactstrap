import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "Dashboards": "Dashboards",
          "Widget": "Widget",
          "General": "General",
          "Page layout":"Page layout",
          "Ui Kits":"Ui Kits",
          "Components":"Components",
          "Bonus Ui":"Bonus Ui",
          "Icons":"Icons",
          "Buttons":"Buttons",
          "Forms":"Forms",
          "Forms & Tables":"Forms & Tables",
          "Tables":"Tables",
          "Charts":"Charts",
          "Apps":"Apps",
          "Application":"Application",
          "Project":"Project",
          "File manager":"File manager",
          "Ecommerce":"Ecommerce",
          "Email":"Email",
          "Chat":"Chat",
          "Users":"Users",
          "Bookmarks":"Bookmarks",
          "Contacts":"Contacts",
          "Tasks":"Tasks",
          "Calendar":"Calendar",
          "Social App":"Social App",
          "To-Do":"To-Do",
          "Search Result":"Search Result",
          "Pages":"Pages",
          "Miscellaneous":"Miscellaneous",
          "Sample page":"Sample page",
          "Other":"Other",
          "Gallery":"Gallery",
          "Blog":"Blog",
          "Faq":"Faq",
          "Job Search":"Job Search",
          "Learning":"Learning",
          "Maps":"Maps",
          "Editors":"Editors",
          "Knowledgebase":"Knowledgebase",
          "Support Ticket":"Support Ticket"
        },
      },
      cn: {
        translations: {
          "Dashboards": "仪表板",
          "Widget": "小部件",
          "General": "一般的",
          "Page layout":"页面布局",
          "Ui Kits":"用户界面套件",
          "Components":"成分",
          "Bonus Ui":"奖金用户界面",
          "Icons":"奖金用户界面",
          "Buttons":"纽扣",
          "Forms":"形式",
          "Forms & Tables":"表格和表格",
          "Tables":"表格",
          "Charts":"图表",
          "Apps":"应用",
          "Application":"应用",
          "Project":"项目",
          "File manager":"文件管理器",
          "Ecommerce":"电子商务",
          "Email":"电子邮件",
          "Chat":"聊天",
          "Users":"用户",
          "Bookmarks":"书签",
          "Contacts":"联系人",
          "Tasks":"任务",
          "Calendar":"日历",
          "Social App":"社交应用",
          "To-Do":"去做",
          "Search Result":"搜索结果",
          "Pages":"页面",
          "Miscellaneous":"各种各样的",
          "Sample page":"样本页",
          "Other":"其他",
          "Gallery":"画廊",
          "Blog":"博客",
          "Faq":"常问问题",
          "Job Search":"求职",
          "Learning":"学习",
          "Maps":"地图",
          "Editors":"编辑",
          "Knowledgebase":"知识库",
          "Support Ticket":"支持票"
          },
      },
      ae: {
        translations: {
            "Dashboards": "لوحات القيادة",
            "Widget": "القطعة",
            "General": "عام",
            "Page layout":"تخطيط الصفحة",
            "Ui Kits":"مجموعات واجهة المستخدم",
            "Components":"عناصر",
            "Bonus Ui":"مكافأة واجهة المستخدم",
            "Icons":"الأيقونات",
            "Buttons":"أزرار",
            "Forms":"نماذج",
            "Forms & Tables":"النماذج والجداول",
            "Tables":"الجداول",
            "Charts":"الرسوم البيانية",
            "Apps":"تطبيقات",
            "Application":"طلب",
            "Project":"مشروع",
            "File manager":"مدير الملفات manager",
            "Ecommerce":"التجارة الإلكترونية",
            "Email":"بريد إلكتروني",
            "Chat":"محادثة",
            "Users":"المستخدمون",
            "Bookmarks":"إشارات مرجعية",
            "Contacts":"جهات الاتصال",
            "Tasks":"مهام",
            "Calendar":"تقويم",
            "Social App":"التطبيق الاجتماعي",
            "To-Do":"لكى يفعل",
            "Search Result":"نتيجة البحث",
            "Pages":"الصفحات",
            "Miscellaneous":"متنوع",
            "Sample page":"نموذج الصفحة",
            "Other":"آخر",
            "Gallery":"صالة عرض",
            "Blog":"مدونة",
            "Faq":"التعليمات",
            "Job Search":"البحث عن الوظائف",
            "Learning":"تعلُّم",
            "Maps":"خرائط",
            "Editors":"المحررين",
            "Knowledgebase":"قاعدة المعرفة",
            "Support Ticket":"بطاقة الدعم"
        },
      },
      du: {
        translations: {
            "Dashboards": "Dashboards",
            "Widget": "widget",
            "General": "Algemeen",
            "Page layout":"Pagina layout",
            "Ui Kits":"Ui-kits",
            "Components":"Componenten",
            "Bonus Ui":"Bonus-UI",
            "Icons":"Pictogrammen",
            "Buttons":"Toetsen",
            "Forms":"Formulieren",
            "Forms & Tables":"Formulieren en tabellen",
            "Tables":"Tafels",
            "Charts":"Grafieken",
            "Apps":"Apps",
            "Application":"Sollicitatie",
            "Project":"projecteren",
            "File manager":"Bestandsbeheer",
            "Ecommerce":"E-commerce",
            "Email":"E-mail",
            "Chat":"Chatten",
            "Users":"Gebruikers",
            "Bookmarks":"Bladwijzers",
            "Contacts":"Contacten",
            "Tasks":"Taken",
            "Calendar":"Kalender",
            "Social App":"Sociale app",
            "To-Do":"Te doen",
            "Search Result":"Zoekresultaat",
            "Pages":"Pagina's",
            "Miscellaneous":"Gemengd",
            "Sample page":"Voorbeeld pagina",
            "Other":"Ander",
            "Gallery":"Galerij",
            "Blog":"bloggen",
            "Faq":"FAQ",
            "Job Search":"Zoek naar werk",
            "Learning":"Aan het leren",
            "Maps":"Kaarten",
            "Editors":"Editors",
            "Knowledgebase":"Kennis basis",
            "Support Ticket":"Ondersteuningsticket"
        },
      },
      es: {
        translations: {
            "Dashboards": "Tableros",
            "Widget": "Widget",
            "General": "General",
            "Page layout":"Diseño de página",
            "Ui Kits":"Kits de interfaz de usuario",
            "Components":"Componentes",
            "Bonus Ui":"interfaz de usuario adicional",
            "Icons":"Iconos",
            "Buttons":"Botones",
            "Forms":"formularios",
            "Forms & Tables":"Formularios y tablas",
            "Tables":"Mesas",
            "Charts":"Gráficos",
            "Apps":"aplicaciones",
            "Application":"Solicitud",
            "Project":"Proyecto",
            "File manager":"Administrador de archivos",
            "Ecommerce":"Comercio electrónico",
            "Email":"Correo electrónico",
            "Chat":"Charlar",
            "Users":"Usuarios",
            "Bookmarks":"Marcadores",
            "Contacts":"Contactos",
            "Tasks":"Tareas",
            "Calendar":"Calendario",
            "Social App":"Aplicación social",
            "To-Do":"Hacer",
            "Search Result":"Resultado de búsqueda",
            "Pages":"Paginas",
            "Miscellaneous":"Misceláneas",
            "Sample page":"Página de Ejemplo",
            "Other":"Otro",
            "Gallery":"Galería",
            "Blog":"Blog",
            "Faq":"Preguntas más frecuentes",
            "Job Search":"Búsqueda de trabajo",
            "Learning":"Aprendiendo",
            "Maps":"mapas",
            "Editors":"Editores",
            "Knowledgebase":"Base de conocimientos",
            "Support Ticket":"Ticket de soporte"
        },
      },
      fr: {
        translations: {
            "Dashboards": "Tableaux de bord",
            "Widget": "Widget",
            "General": "Général",
            "Page layout":"Mise en page",
            "Ui Kits":"Kits d'interface utilisateur",
            "Components":"Composants",
            "Bonus Ui":"Interface utilisateur bonus",
            "Icons":"Icônes",
            "Buttons":"Boutons",
            "Forms":"Formes",
            "Forms & Tables":"Formulaires et tableaux",
            "Tables":"les tables",
            "Charts":"Graphiques",
            "Apps":"applications",
            "Application":"Application",
            "Project":"Projet",
            "File manager":"Gestionnaire de fichiers",
            "Ecommerce":"Commerce électronique",
            "Email":"E-mail",
            "Chat":"Discuter",
            "Users":"Utilisateurs",
            "Bookmarks":"Signets",
            "Contacts":"Contacts",
            "Tasks":"Tâches",
            "Calendar":"Calendrier",
            "Social App":"Application sociale",
            "To-Do":"Faire",
            "Search Result":"Résultat de la recherche",
            "Pages":"pages",
            "Miscellaneous":"Divers",
            "Sample page":"Page d'exemple",
            "Other":"Autre",
            "Gallery":"Galerie",
            "Blog":"Blog",
            "Faq":"FAQ",
            "Job Search":"Recherche d'emploi",
            "Learning":"Apprentissage",
            "Maps":"Plans",
            "Editors":"Éditeurs",
            "Knowledgebase":"Base de connaissances",
            "Support Ticket":"Billet d'assistance"
        },
      },
      pt: {
        translations: {
            "Dashboards": "Painéis",
            "Widget": "Ferramenta",
            "General": "Em geral",
            "Page layout":"Layout da página",
            "Ui Kits":"Kits de IU",
            "Components":"Components",
            "Bonus Ui":"Interface de usuário de bônus",
            "Icons":"Ícones",
            "Buttons":"Botões",
            "Forms":"Formulários",
            "Forms & Tables":"Formulários e Tabelas",
            "Tables":"Tabelas",
            "Charts":"Gráficos",
            "Apps":"aplicativos",
            "Application":"Aplicativo",
            "Project":"Projeto",
            "File manager":"Gerenciador de arquivos",
            "Ecommerce":"Comércio eletrônico",
            "Email":"E-mail",
            "Chat":"Bater papo",
            "Users":"Usuários",
            "Bookmarks":"Favoritos",
            "Contacts":"Contatos",
            "Tasks":"Tarefas",
            "Calendar":"Calendário",
            "Social App":"aplicativo social",
            "To-Do":"Pendência",
            "Search Result":"Resultado da pesquisa",
            "Pages":"Páginas",
            "Miscellaneous":"Diversos",
            "Sample page":"Página de exemplo",
            "Other":"Outro",
            "Gallery":"Galeria",
            "Blog":"blog",
            "Faq":"Perguntas frequentes",
            "Job Search":"Procura de emprego",
            "Learning":"Aprendizado",
            "Maps":"Mapas",
            "Editors":"Editores",
            "Knowledgebase":"Base de conhecimento",
            "Support Ticket":"Ticket de suporte"
        },
      },
    },
    fallbackLng: "en",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
