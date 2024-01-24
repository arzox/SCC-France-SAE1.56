// Ce dictionnaire contient les informations sur les branches de l'entreprise scc
const textDictionnary = {
    vietnam: "Cette branche bien que moins developpé propose des services de securisation de données et du stockage de données",
    france: "Elle est actuellement supportaire des JO de Paris 2024. SCC France est le fournisseur de nombreuses grandes entreprises françaises tel que THALES, RICHARDSON, STELLANTIS",
    finances: "Outre la gestion monétaire, cette branche investi dans des entreprises informatique innovantes comme Nimble permettant d'aquérir de l'argent et des contrats",
    specialistcomputercentres: "Abrévié SCC, elle est une ESN (Entreprise de Service Numérique), comme son nom l'indique son activité se dirige vers tous types de services en lien" +
        " avec le numérique. C’est aussi ce qu’on appelle une société non financière, cela signifie qu’elle propose des biens et services marchands." + "<br>" +
        "En tant que grossiste, SCC achète en gros des stocks de matériel pour proposer ses services en masse à d'autres entreprises clientes.",
    jamesrigbyceo: "James Rigby est le PDG de SCC, il a fondé l'entreprise en 1975. Il est aussi le fondateur de la fondation Rigby Group qui est une société diversifié. " + "<br>" +
        "Les domaines d'activité comprennent la technologie de l'information, l'aviation, l'immobilier, l'hôtellerie, le sport et les loisirs. Cette société possède SCC, " +
        "source principale de revenus de la fondation.",
    marketing: "Afin d'attirer de nombreux clients les services et produits de SCC sont diversifiés. Couplé à leurs innovations technologiques, SCC est un acteur majeur du marché." +
        "SCC établit des partenariats stratégiques avec des fournisseurs technologiques majeurs. Ces partenariats sont souvent mis en avant comme pour les JO de Paris 2024 mis en avant sur le site de SCC.",
    services: "Leurs services sont la vente de services informatiques offrant une gamme complète de solutions, y compris le conseil en informatique, la fourniture de matériel, des services d'infrastructure, de cloud computing, de gestion, et de sécurité informatique.",
    operations: "SCC a de nombreuses opérations, telles que le SOC (Security Operations Center), qui est un dispositif technologique et humain destiné à couvrir un plan d'action permanent global pour un ou plusieurs systèmes d'information (SI).",
    royaumeunis: "C'est la branche principale de SCC, elle est la plus développé et la plus ancienne. Elle est aussi la plus importante en terme de revenus. ",
    roumanie: "SCC Services Roumanie est leader de l'industrie IT à Iași depuis 2006 et offre des services informatiques complets pour les environnements de travail hybrides, avec plus de 1100 experts en IT.",
}

    document.addEventListener("DOMContentLoaded", function() {
    let organnigram = document.getElementById("organigramme");
    let organnigramTextHolder = document.getElementById("organigramme_text");

    let paragraph = organnigramTextHolder.getElementsByTagName('p')[0];
    let title = organnigramTextHolder.getElementsByTagName('h2')[0];

    organnigram.addEventListener('click', function(e) {
        if (e.target.tagName.startsWith("H")) {
            let innerText = e.target.innerText.toLowerCase().replaceAll(" ", "").replaceAll("\n", "").replaceAll("é", "e");
            paragraph.innerHTML = textDictionnary[innerText];
            title.style.background = window.getComputedStyle(e.target).backgroundColor;
            title.innerHTML = e.target.innerText
        }
    }, false);

    title.innerHTML = "Organigramme";
    paragraph.innerHTML = "Cliquez sur une cellule pour voir ses informations";
});

