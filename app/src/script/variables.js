var types = [
    {
        name: 'Margherita',
        description: {
            body: "Tomate, mozzarella, basilic, huile d'olive",
            show: false
        },
        price: 8
    },
    {
        name: 'Reine',
        description: {
            body: "Mozzarella, champignons, jambon, olives, huile d'olive",
            show: false
        },
        price: 10
    },
    {
        name: 'Quattro stagioni',
        description: {
            body: "Tomate, mozzarella, champignons, artichaut, poivrons, basilic, huile d'olive",
            show: false
        },
        price: 12
    },
    {
        name: 'Sicilienne',
        description: {
            body: "Tomate, mozzarella, basilic, anchois, câpres, champignon",
            show: false
        },
        price: 11
    }
];

var pates = [
    {
        name: 'Classique',
        price: 0
    },
    {
        name: 'Extra fine',
        price: 2
    },
    {
        name: 'Epaisse',
        price: 3
    }
];

var extras = [
    {
        name: 'Olives',
        price: 1
    },
    {
        name: 'Anchois',
        price: 4
    }
,    {
        name: 'Chèvre',
        price: 3
    },
    {
        name: 'Piment',
        price: 1
    }
];

var choices ={
    parts: 0,
    typeName: null,
    pateName: null,
    extraName: { 'Olives': false, 'Anchois': false, 'Chèvre': false, 'Piment': false}
};

var events = [
    {
        type: 'work_experience',
        title: 'Graphiste & développeuse web',
        date: {
            format: 'MMMM yyyy',
            start: '20140401T00:00:00',/* 01/04/2014 - 31/08/14 */
            end: '20140815T00:00:00'
        },
        structure: 'Square IT Services, SSII',
        location: 'Asnières-sur-Seine',
        description: 'Refonte graphique et création de la vidéo de la gamme de produit SOFT, intégration du design, refonte du site web de la société',
        tags: ['Technologie', 'Marketing', 'Créativité']
    },
    {
        type: 'work_experience',
        title: 'Ingénieur études et développement',
        date: {
            format: 'MMMM yyyy',
            start: '20150401T00:00:00',
            end: ''
        },
        structure: 'Smile, Open Source Solutions, SSII',
        location: 'Asnières-sur-Seine',
        description: 'Développement front-end du site EuroQuity pour BPI France',
        tags: ['Technologie', 'Créativité', 'Communication']
    },
    {
        type: 'work_experience',
        title: 'Chef de projet web',
        date: {
            format: 'MMMM yyyy',
            start: '20130601T00:00:00',/* Juin à Août 2013 */
            end: '20130831T00:00:00'
        },
        structure: 'Axience, Laboratoire pharmaceutique ',
        location: 'Pantin',
        description: 'Création d’un site internet de présentation des produits intégrant un espace administration, un espace vétérinaire et un espace public, intégration du design du site',
        tags: ['Marketing', 'Communication']
    },
    {
        type: 'formation',
        title: 'BAC Scientifique, Spécialité Maths',
        date: {
            format: 'MMMM yyyy',
            start: '',
            end: '20090701T00:00:00'
        },
        structure: 'Lycée de Juilly',
        location: 'Paris',
        tags: ['Technologie']
    },
    {
        type: 'work_experience',
        title: 'Conception et design',
        date: {
            format: 'MMMM yyyy',
            start: '20120601T00:00:00',/* Juin à Août 2012 */
            end: '20120831T00:00:00'
        },
        structure: 'Absolutlabs',
        location: 'Paris',
        description: 'Réalisation et design d’applications mobiles, création du site internet de promotion d’une application',
        tags: ['Technologie', 'Marketing', 'Créativité']
    },
    {
        type: 'formation',
        title: 'SI, Section internationale',
        date: {
            format: 'MMMM yyyy',
            start: '',
            end: '20150901T00:00:00'
        },
        structure: 'ECE Paris, École d’ingénieurs',
        location: 'Paris',
        tags: ['Technologie']
    },
    {
        type: 'formation',
        title: 'Infographie',
        date: {
            format: 'MMMM yyyy',
            start: '20140901T00:00:00',
            end: '20141231T00:00:00'
        },
        structure: 'Ecole de Technologie Supérieure',
        location: 'Montréal',
        tags: ['Technologie', 'Créativité']
    },
    {
        type: 'formation',
        title: 'Formation graphisme et web',
        date: {
            format: 'MMMM yyyy',
            start: '20131001T00:00:00',
            end: '20140401T00:00:00'
        },
        structure: 'Conservatoire National des Arts et Métiers',
        location: 'Paris',
        tags: ['Technologie', 'Marketing', 'Créativité']
    },
    {
        type: 'project',
        title: 'Projet de 4ème année',
        date: {
            format: 'MMMM yyyy',
            start: '20130801T00:00:00',
            end: '20140430T00:00:00'
        },
        location: 'Paris',
        description: 'Développement, ergonomie et design d’un site web responsive en html, css, javascript et php'
    },
    {
        type: 'formation',
        title: 'Informatique, électronique, management',
        date: {
            format: 'MMMM yyyy',
            start: '20110901T00:00:00',
            end: '20111231T00:00:00'
        },
        structure: 'Concordia University',
        location: 'Montréal',
        tags: ['Technologie']
    },
    {
        type: 'project',
        title: 'Projet de fin d’études',
        date: {
            format: 'MMMM yyyy',
            start: '20140801T00:00:00',
            end: '20150131T00:00:00'
        },
        location: 'Paris',
        description: 'Développement, ergonomie et design d’un réseau social privé de partage de bons plans entre étudiants',
        tags: ['Technologie', 'Marketing', 'Créativité', 'Communication']
    },
    {
        type: 'project',
        title: 'Nuit de l’informatique',
        date: {
            format: 'MMMM yyyy',
            start: '20131206T00:00:00',
            end: ''
        },
        location: 'Paris',
        description: 'Design d’un site Y-commerce, participation à la Nuit De l’Informatique',
        tags: ['Technologie', 'Marketing', 'Créativité', 'Communication']
    },
    {
        type: 'association',
        title: 'Responsable communication & webmaster',
        date: {
            format: 'MMMM yyyy',
            start: '20130301T00:00:00',
            end: '20140330T00:00:00'
        },
        structure: 'Bureau Des Élèves de l’ECE Paris',
        tags: ['Technologie', 'Marketing', 'Créativité', 'Communication']
    },
    {
        type: 'association',
        title: 'Responsable communication',
        date: {
            format: 'MMMM yyyy',
            start: '20120301T00:00:00',
            end: '20130330T00:00:00'
        },
        structure: 'iTeam, Association de promotion du logiciel libre',
        tags: ['Marketing', 'Créativité', 'Communication']
    },
    {
        type: 'association',
        title: 'Membre communication',
        date: {
            format: 'MMMM yyyy',
            start: '20090901T00:00:00',
            end: '20110630T00:00:00'
        },
        structure: 'Gala ECE 2010, Association événementielle',
        tags: ['Marketing', 'Créativité', 'Communication']
    }
];